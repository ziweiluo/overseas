import { FormEvent, JSX, useEffect, useRef, useState } from 'react';
import { SuccessModal } from '../ui/SuccessModal';

type DemandOption = {
  label: string;
  icon: JSX.Element;
};

const demandOptions: DemandOption[] = [
  {
    label: '多式联运',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16h13" />
        <path d="M16 16h3l2-3v-3h-5" />
        <path d="M5 16V7h11v9" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="17.5" cy="17.5" r="1.5" />
        <path d="M8 10h5" />
      </svg>
    ),
  },
  {
    label: '海外仓',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 4l9 6.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M9 20v-5h6v5" />
        <path d="M8 12h.01" />
        <path d="M16 12h.01" />
      </svg>
    ),
  },
  {
    label: '全链路',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.3 10.8 15.6 7.2" />
        <path d="M8.3 13.2 15.6 16.8" />
      </svg>
    ),
  },
  {
    label: '跨境电商',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a12.5 12.5 0 0 1 0 16" />
        <path d="M12 4a12.5 12.5 0 0 0 0 16" />
      </svg>
    ),
  },
];

const demandTypeCodeMap: Record<string, number> = {
  多式联运: 1,
  海外仓: 2,
  全链路: 3,
  跨境电商: 4,
};

// 留资接口配置（后续只改这两个变量）
const LEAD_API_BASE_URL = '';
const LEAD_API_PREFIX = '/hm/system';
const GLOBAL_PHONE_REGEX = /^\+?[0-9()\-.\s]{6,25}$/;

export function CTASection() {
  const [selectedDemand, setSelectedDemand] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const companyNameInputRef = useRef<HTMLInputElement | null>(null);
  const contactInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const focusCompanyNameInput = () => {
      if (window.location.hash !== '#contact') return;

      window.setTimeout(() => {
        companyNameInputRef.current?.focus();
      }, 250);
    };

    focusCompanyNameInput();
    window.addEventListener('hashchange', focusCompanyNameInput);

    return () => {
      window.removeEventListener('hashchange', focusCompanyNameInput);
    };
  }, []);

  const isValidGlobalPhone = (value: string) => {
    const trimmed = value.trim();
    const digitCount = (trimmed.match(/\d/g) || []).length;
    return GLOBAL_PHONE_REGEX.test(trimmed) && digitCount >= 6;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    // 验证公司名称
    if (!companyName.trim()) {
      setCompanyNameError('*请输入公司名称');
      companyNameInputRef.current?.focus();
      return;
    }

    // 验证联系方式（支持手机/座机/国际号码）
    if (!isValidGlobalPhone(contact)) {
      setContactError('*请输入有效的联系方式');
      contactInputRef.current?.focus();
      return;
    }

    // 清除所有错误
    setCompanyNameError('');
    setContactError('');
    setSubmitError('');

    const endpoint =
      (import.meta.env.VITE_SEAWIN_LEAD_API_URL as string | undefined) ||
      `${LEAD_API_BASE_URL}${LEAD_API_PREFIX}/foreign/tCustomerLead/savePublic`;
    const demandType = selectedDemand ? demandTypeCodeMap[selectedDemand] : undefined;
    const payload = {
      companyName: companyName.trim(),
      customerName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      contact: contact.trim(),
      contactPhone: contact.trim(),
      demandType: selectedDemand,
      demandTypeCode: demandType,
      customerType: 1,
      leadCategory: 1,
      leadStatus: 1,
      leadPlatform: 1,
      leadPermission: '全员',
      sourceCodeList: [11, 21],
      sourcePage: 'seawin_product',
      embedded: ['1', 'true', 'yes'].includes(new URLSearchParams(window.location.search).get('embedded')?.toLowerCase() || ''),
    };

    if (!demandType) {
      setSubmitError('*请选择需求类型');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: payload.customerName,
          contactPerson: payload.contactPerson,
          contactPhone: payload.contactPhone,
          demandType: demandType,
          customerType: payload.customerType,
          leadCategory: payload.leadCategory,
          leadPermission: payload.leadPermission,
          leadStatus: payload.leadStatus,
          leadPlatform: payload.leadPlatform,
          sourceCodeList: payload.sourceCodeList,
          extraJson: JSON.stringify({
            sourcePage: payload.sourcePage,
            demandTypeText: selectedDemand,
            embedded: payload.embedded,
          }),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const responseData = await response.json().catch(() => null) as
        | { success?: boolean; code?: number; msg?: string; message?: string }
        | null;
      const passed =
        !responseData ||
        responseData.success === true ||
        responseData.code === 0 ||
        responseData.code === 200;

      if (!passed) {
        throw new Error(responseData?.msg || responseData?.message || '提交失败');
      }

      setShowSuccessModal(true);
      setCompanyName('');
      setContactPerson('');
      setContact('');
      setSelectedDemand(null);
    } catch (error) {
      console.error('提交留资失败:', error);
      setSubmitError('*提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="section-shell cta-shell" id="contact">
        <div className="container">
          <div className="cta-panel cta-panel-redesign">
            <div className="cta-visual-column">
              <div className="cta-consult-tag" aria-label="立即咨询提示">
                <span className="cta-consult-tag-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h5" />
                  </svg>
                </span>
                <span className="cta-consult-tag-text">立即咨询</span>
              </div>
              <h2>
                <span>定制你的</span>
                <span>全球供应链方案</span>
              </h2>
              <p>创造全程供应链物流新价值</p>
            </div>

            <form className="cta-form cta-form-redesign" onSubmit={handleSubmit}>
              <label>
                <span>公司名称</span>
                <input
                  ref={companyNameInputRef}
                  type="text"
                  placeholder="请输入公司名称"
                  value={companyName}
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                    if (companyNameError) {
                      setCompanyNameError('');
                    }
                    if (submitError) {
                      setSubmitError('');
                    }
                  }}
                  aria-invalid={companyNameError ? 'true' : 'false'}
                />
              </label>
              {companyNameError ? <p className="cta-form-error">{companyNameError}</p> : null}

              <div className="cta-demand-group">
                <span className="cta-demand-label">需求类型</span>
                <div className="cta-demand-grid">
                  {demandOptions.map((item) => {
                    const isSelected = selectedDemand === item.label;

                    return (
                      <button
                        className={`cta-demand-card ${isSelected ? 'is-selected' : ''}`}
                        key={item.label}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedDemand(isSelected ? null : item.label);
                          if (submitError) {
                            setSubmitError('');
                          }
                        }}
                      >
                        <span className="cta-demand-icon" aria-hidden="true">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="cta-contact-row">
                <label>
                  <span>联系人</span>
                  <input
                    type="text"
                    placeholder="请输入联系人"
                    value={contactPerson}
                    onChange={(event) => {
                      setContactPerson(event.target.value);
                      if (submitError) {
                        setSubmitError('');
                      }
                    }}
                  />
                </label>

                <label>
                  <span>联系方式</span>
                  <input
                    ref={contactInputRef}
                    type="text"
                    placeholder="请输入手机或座机号码"
                    inputMode="numeric"
                    value={contact}
                    onChange={(event) => {
                      setContact(event.target.value);
                      if (contactError) {
                        setContactError('');
                      }
                      if (submitError) {
                        setSubmitError('');
                      }
                    }}
                    aria-invalid={contactError ? 'true' : 'false'}
                  />
                </label>
              </div>
              {contactError ? <p className="cta-form-error">{contactError}</p> : null}
              {submitError ? <p className="cta-form-error">{submitError}</p> : null}

              <button className="btn btn-primary cta-submit-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? '提交中...' : '立即咨询专家'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="提交成功"
        message="已收到您的信息，稍后会有专属客服与您联系。"
      />
    </>
  );
}
