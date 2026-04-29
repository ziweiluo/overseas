import { useState } from 'react';

import { coreServices } from '../../data/landingPageData';

const productCardMap: Record<string, { band: string; accent: string; href: string }> = {
  多式联运产品: {
    band: '产品出运与路径协同',
    accent: 'sky',
    href: '#solutions',
  },
  跨境电商服务: {
    band: '通关 / 结算 / 物流协同',
    accent: 'aqua',
    href: '#cross-border-network',
  },
  全链路产品: {
    band: '端到端全球供应链',
    accent: 'violet',
    href: '#full-chain-solution',
  },
};

export function CoreProductsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-shell core-products-shell scroll-section" id="core-services" data-scroll-section>
      <div className="core-products-map" aria-hidden="true" />
      <div className="core-products-overlay" aria-hidden="true" />
      <div className="container core-products-content">
        <div className="section-title-row">
          <h2>核心产品服务</h2>
        </div>
        <div className="card-grid three-up core-product-grid core-product-accordion">
          {coreServices.map((service, index) => {
            const productMeta = productCardMap[service.title];
            const isActive = activeIndex === index;

            return (
              <article
                className={`feature-card core-product-card core-product-card-${productMeta?.accent ?? 'sky'}${isActive ? ' is-active' : ''}`}
                key={service.title}
                tabIndex={0}
                aria-expanded={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="core-product-band">
                  <span>{productMeta?.band}</span>
                  <a className="core-product-band-link" href={productMeta?.href ?? '#core-services'} aria-label={`查看更多详情：${service.title}`}>
                    <span>查看更多详情</span>
                    <span className="core-product-band-arrow" aria-hidden="true">›</span>
                  </a>
                </div>
                <div className="core-product-title-row">
                  <h3>{service.title}</h3>
                </div>
                <p className="core-product-subtitle">{service.subtitle}</p>
                <div className="core-product-reveal">
                  <ul>
                    {service.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
