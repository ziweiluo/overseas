import { useEffect, useRef, useState } from 'react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  qrCodeSrc: string;
  description?: string;
}

function QRCodeModal({ isOpen, onClose, title, qrCodeSrc, description }: QRCodeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qr-modal-header">
          <h3 className="qr-modal-title">{title}</h3>
          <button className="qr-modal-close" onClick={onClose} aria-label="关闭">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="qr-modal-content">
          <div className="qr-code-container">
            <img src={qrCodeSrc} alt={`${title}二维码`} className="qr-code-image" />
          </div>
          {description && (
            <p className="qr-modal-description">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function FloatingButtons() {
  const [showBlueWhaleQR, setShowBlueWhaleQR] = useState(false);
  const [showCustomerServiceQR, setShowCustomerServiceQR] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileButtonsExpanded, setIsMobileButtonsExpanded] = useState(false);
  const floatingButtonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const updateMobileView = () => {
      const isMobile = mediaQuery.matches;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsMobileButtonsExpanded(false);
      }
    };

    updateMobileView();
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMobileView);
      return () => mediaQuery.removeEventListener('change', updateMobileView);
    }
    mediaQuery.addListener(updateMobileView);
    return () => mediaQuery.removeListener(updateMobileView);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileButtonClick = (action: () => void) => {
    if (isMobileView && !isMobileButtonsExpanded) {
      setIsMobileButtonsExpanded(true);
      return;
    }
    action();
  };

  useEffect(() => {
    if (!isMobileView || !isMobileButtonsExpanded) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (floatingButtonsRef.current && !floatingButtonsRef.current.contains(target)) {
        setIsMobileButtonsExpanded(false);
      }
    };

    const handleScrollOrDrag = () => {
      setIsMobileButtonsExpanded(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('scroll', handleScrollOrDrag, { passive: true });
    window.addEventListener('touchmove', handleScrollOrDrag, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', handleScrollOrDrag);
      window.removeEventListener('touchmove', handleScrollOrDrag);
    };
  }, [isMobileView, isMobileButtonsExpanded]);

  return (
    <>
      <div className="floating-buttons" ref={floatingButtonsRef}>
        <button 
          className={`floating-btn floating-btn-primary ${isMobileButtonsExpanded ? 'is-mobile-expanded' : ''}`}
          onClick={() => handleMobileButtonClick(() => setShowBlueWhaleQR(true))}
          aria-label="查看平台体验二维码"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <path d="m5 5 2 2" />
            <path d="m5 17 2-2" />
            <path d="m14 5 2 2" />
            <path d="m16 17 2 2" />
          </svg>
          <span>平台体验</span>
        </button>

        <button 
          className={`floating-btn floating-btn-secondary ${isMobileButtonsExpanded ? 'is-mobile-expanded' : ''}`}
          onClick={() => handleMobileButtonClick(() => setShowCustomerServiceQR(true))}
          aria-label="查看专属客服二维码"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8" />
            <path d="M8 13h5" />
          </svg>
          <span>专属客服</span>
        </button>

        <button 
          className={`floating-btn floating-btn-top ${isMobileButtonsExpanded ? 'is-mobile-expanded' : ''}`}
          onClick={() => handleMobileButtonClick(scrollToTop)}
          aria-label="回到顶部"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6" />
          </svg>
          <span>回到顶部</span>
        </button>
      </div>

      <QRCodeModal
        isOpen={showBlueWhaleQR}
        onClose={() => setShowBlueWhaleQR(false)}
        title="蓝鳛二维码"
        qrCodeSrc="/logo/lanxi.jpg"
        description="扫描二维码了解更多蓝鳛服务"
      />

      <QRCodeModal
        isOpen={showCustomerServiceQR}
        onClose={() => setShowCustomerServiceQR(false)}
        title="客服二维码"
        qrCodeSrc="/logo/liujun.jpg"
        description="扫描二维码联系专属客服"
      />
    </>
  );
}