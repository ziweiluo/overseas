type SectionContactPromptProps = {
  label?: string;
};

export function SectionContactPrompt({ label = '立即联系我们，获取专属方案' }: SectionContactPromptProps) {
  return (
    <div className="section-contact-prompt" aria-label="联系我们引导">
      <a className="section-contact-prompt-btn" href="#contact">
        <span>{label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
