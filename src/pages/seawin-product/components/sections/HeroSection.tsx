import { heroStats } from '../../data/landingPageData';

export function HeroSection() {
  const handleConsult = () => {
    const uin = '3005237473';
    const consultUrl = `https://wpa.qq.com/msgrd?v=3&uin=${uin}&site=qq&menu=yes`;
    window.open(consultUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero-banner section-shell">
      <div className="hero-bleed hero-bleed-compact hero-bleed-expanded">
        <div className="hero-bleed-image-wrap hero-enter hero-enter-bg">
          <img className="hero-bleed-image" src="/blue2.png" alt="海盟控股集团全球供应链视觉图" />
          <div className="hero-bleed-overlay" />
        </div>

        <div className="container hero-bleed-content hero-bleed-content-compact hero-bleed-content-expanded">
          <div className="hero-copy-box hero-copy-box-centered hero-enter hero-enter-title">
            <div className="hero-brand-row">
              <img className="hero-brand-logo" src="/logo/haimeng_logo.png" alt="海盟控股集团 logo" />
              <h1>
                海盟控股集团
                <span className="hero-subtitle-line">全程供应链物流数智赋能平台</span>
              </h1>
            </div>
            <p className="hero-slogan">为中国制造出海、品牌出海、中企海外登陆提供端到端解决方案</p>
            <div className="hero-actions hero-actions-centered hero-enter hero-enter-actions">
              <a className="btn btn-primary hero-action-btn hero-action-btn-small" href="#contact">获取定制方案</a>
              <button className="btn btn-secondary hero-action-btn hero-action-btn-small" type="button" onClick={handleConsult}>
                预约专家咨询
              </button>
            </div>
          </div>

          <div className="hero-stats-grid hero-enter hero-enter-fade">
            {heroStats.map((item, index) => (
              <article className={`hero-stat-card hero-enter hero-enter-stat hero-enter-delay-${index + 1}`} key={item.label}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
