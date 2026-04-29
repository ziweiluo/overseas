import { useEffect, useMemo, useRef, useState } from 'react';

const brochureSlides = [
  '/欧洲专线物流海报_4K.jpg',
  '/美国专线物流海报_4K.png',
  '/加拿大澳新专线物流海报_4K.jpg',
  '/沙特日本专线物流海报_4K.jpg',
];

export function NetworkOverviewSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const slideCount = brochureSlides.length;

  const goToSlide = (index: number) => {
    const nextIndex = (index + slideCount) % slideCount;
    setActiveSlide(nextIndex);
  };

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [slideCount]);

  const visibleSlides = useMemo(() => {
    return (isMobile ? [0] : [-1, 0, 1]).map((offset) => {
      const index = (activeSlide + offset + slideCount) % slideCount;
      return {
        index,
        src: brochureSlides[index],
        positionClass:
          offset === 0 ? 'is-center' : offset < 0 ? 'is-prev' : 'is-next',
      };
    });
  }, [activeSlide, isMobile, slideCount]);

  return (
    <section className="section-shell network-overview-shell scroll-section" id="cross-border-network" data-scroll-section>
      <div className="container">
        <div className="section-heading network-overview-heading">
          <span className="eyebrow">跨境电商服务</span>
          <h2>六洲智联</h2>
          <p>美澳新欧日加沙全链路跨境护航</p>
        </div>

        <div className="network-brochure-carousel">
          <div
            ref={carouselRef}
            className={`network-brochure-track ${isMobile ? 'network-brochure-track-mobile' : 'network-brochure-track-three-up'}`}
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStartX === null) return;
              const endX = event.changedTouches[0]?.clientX ?? touchStartX;
              const delta = endX - touchStartX;
              if (Math.abs(delta) > 40) {
                goToSlide(activeSlide + (delta < 0 ? 1 : -1));
              }
              setTouchStartX(null);
            }}
          >
            {visibleSlides.map((slide) => (
              <article
                className={`network-brochure-slide ${slide.positionClass}`}
                key={`${slide.index}-${slide.src}`}
                onClick={() => goToSlide(slide.index)}
              >
                <img src={slide.src} alt={`跨境电商宣传册 ${slide.index + 1}`} />
              </article>
            ))}
          </div>

          <button type="button" className="network-carousel-arrow network-carousel-arrow-left" onClick={() => goToSlide(activeSlide - 1)} aria-label="上一张宣传册">
            ‹
          </button>
          <button type="button" className="network-carousel-arrow network-carousel-arrow-right" onClick={() => goToSlide(activeSlide + 1)} aria-label="下一张宣传册">
            ›
          </button>

          <div className="network-carousel-dots" role="tablist" aria-label="宣传册轮播切换">
            {brochureSlides.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`network-carousel-dot${index === activeSlide ? ' is-active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`切换到第 ${index + 1} 张宣传册`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
