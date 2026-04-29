import {
  overseasWarehouseHighlights,
  overseasWarehousePlatforms,
} from '../../data/landingPageData';

const platformLogoSources: Record<(typeof overseasWarehousePlatforms)[number], { src: string; alt: string; className: string }> = {
  Wayfair: { src: '/logo/wayfair-logo.svg', alt: 'Wayfair', className: 'warehouse-platform-logo-wayfair' },
  Amazon: { src: '/logo/amazon.svg', alt: 'Amazon', className: 'warehouse-platform-logo-amazon' },
  eBay: { src: '/logo/ebay.svg', alt: 'eBay', className: 'warehouse-platform-logo-ebay' },
  Shopify: { src: '/logo/shopify-wordmark-light.svg', alt: 'Shopify', className: 'warehouse-platform-logo-shopify' },
  Walmart: { src: '/logo/walmart-supercentre-logo.svg', alt: 'Walmart', className: 'warehouse-platform-logo-walmart' },
  Wish: { src: '/logo/wish-wordmark-1.svg', alt: 'Wish', className: 'warehouse-platform-logo-wish' },
  DHgate: { src: '/logo/Dhgate Logo.svg', alt: 'DHgate', className: 'warehouse-platform-logo-dhgate' },
  Shopee: { src: '/logo/shopee.svg', alt: 'Shopee', className: 'warehouse-platform-logo-shopee' },
};

const warehouseFlowCards = [
  {
    image: '/fuwuliucheng(1).png',
    titleCn: '头程揽收',
    titleEn: 'First-Mile Collection',
    description: '上门取货，快速响应',
  },
  {
    image: '/fuwuliucheng(2).png',
    titleCn: '国内装箱',
    titleEn: 'Domestic Consolidation',
    description: '货物集散，优化装箱',
  },
  {
    image: '/fuwuliucheng(3).png',
    titleCn: '国际海运',
    titleEn: 'International Ocean Freight',
    description: '干线运输，海运大卡',
  },
  {
    image: '/fuwuliucheng(4).png',
    titleCn: '清关代理',
    titleEn: 'Customs Brokerage',
    description: '专业化代办，合规通关',
  },
  {
    image: '/fuwuliucheng(5).png',
    titleCn: '提柜送仓',
    titleEn: 'Container Drayage',
    description: '港口提柜，专车送达',
  },
  {
    image: '/fuwuliucheng(6).png',
    titleCn: '仓储配送',
    titleEn: 'Warehousing & Distribution',
    description: '精细仓储，快速分发',
  },
] as const;

export function OverseasWarehouseSection() {
  return (
    <section className="section-shell overseas-warehouse-shell scroll-section" id="cross-border-service" data-scroll-section>
      <div className="container">
        <div className="section-heading overseas-warehouse-heading">
          <span className="eyebrow">跨境电商服务</span>
          <h2>海盟海外仓</h2>
          <p>仓在海外，服务在身边。</p>
        </div>

        <article className="warehouse-panel overseas-warehouse-panel">
          <div className="warehouse-platforms-layout">
            <div className="warehouse-copy-block">
              <div className="warehouse-copy-visuals" aria-hidden="true">
                <figure className="warehouse-copy-photo warehouse-copy-photo-1">
                  <img src="/haiwaicang1.png" alt="" loading="lazy" />
                </figure>
                <figure className="warehouse-copy-photo warehouse-copy-photo-2">
                  <img src="/haiwaicang2.png" alt="" loading="lazy" />
                </figure>
              </div>

              <div className="warehouse-copy-content">
                <div className="warehouse-copy-line" key={overseasWarehouseHighlights.bullets[0]}>
                  <span className="warehouse-copy-number">6</span>
                  <span className="warehouse-copy-unit">个国家</span>
                  <span className="warehouse-copy-detail">美国、加拿大、墨西哥、英国、德国、荷兰</span>
                </div>

                <div className="warehouse-copy-line" key={overseasWarehouseHighlights.bullets[1]}>
                  <div className="warehouse-copy-stats">
                    <span className="warehouse-copy-number">12</span>
                    <span className="warehouse-copy-unit">座城市</span>
                    <span className="warehouse-copy-separator">/</span>
                    <span className="warehouse-copy-number">20</span>
                    <span className="warehouse-copy-unit">个仓库</span>
                  </div>
                  <span className="warehouse-copy-detail">累计 <span className="warehouse-copy-number-inline">180000 m2</span> 仓储面积</span>
                </div>
              </div>
            </div>

            <div className="warehouse-platforms-divider" aria-hidden="true">
              <span className="warehouse-platforms-divider-line" />
            </div>

            <div className="warehouse-platforms-block">
              <div className="warehouse-subtitle-caption">合作平台覆盖</div>

              <div className="warehouse-platform-hex-grid">
                {overseasWarehousePlatforms.map((platform) => {
                  const logo = platformLogoSources[platform];

                  return (
                    <article className="warehouse-platform-hex" key={platform}>
                      <div className="warehouse-platform-hex-inner">
                        <img
                          className={`warehouse-platform-logo-svg ${logo.className}`}
                          src={logo.src}
                          alt={logo.alt}
                          loading="lazy"
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="warehouse-flow-block">
            <div className="section-title-row warehouse-subtitle-row">
              <h2>我们的服务流程</h2>
            </div>

            <div className="warehouse-flow-track">
              {warehouseFlowCards.map((card, index) => (
                <div className="warehouse-flow-card" key={card.titleCn}>
                  <div className="warehouse-flow-visual">
                    <span className="warehouse-flow-badge">{index + 1}</span>
                    <img
                      className="warehouse-flow-image"
                      src={card.image}
                      alt={card.titleCn}
                      loading="lazy"
                    />
                  </div>
                  <div className="warehouse-flow-card-body">
                    <div className="warehouse-flow-card-title-row">
                      <span className="warehouse-flow-card-index">{index + 1}</span>
                      <div className="warehouse-flow-card-title-copy">
                        <h3>{card.titleCn}</h3>
                        <p className="warehouse-flow-card-title-en">{card.titleEn}</p>
                      </div>
                    </div>
                    <p className="warehouse-flow-card-description">{card.description}</p>
                  </div>
                  {index < warehouseFlowCards.length - 1 ? <div className="warehouse-flow-card-arrow" aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
