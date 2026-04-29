type SectionContactPromptProps = {
  label?: string;
};

export function SectionContactPrompt({ label = '立即联系我们，获取专属方案' }: SectionContactPromptProps) {
  const handleConsult = () => {
    const uin = '3005237473';
    const consultUrl = `https://wpa.qq.com/msgrd?v=3&uin=${uin}&site=qq&menu=yes`;
    window.open(consultUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="section-contact-prompt" aria-label="联系我们引导">
      <button className="section-contact-prompt-btn" type="button" onClick={handleConsult}>
        <span>{label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
