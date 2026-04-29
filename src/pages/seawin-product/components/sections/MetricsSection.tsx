import { useEffect, useRef, useState, useCallback } from 'react';

const caseImages = [
  '/quanlianlu/export (1)/墨西哥7天清_4K.jpg',
  '/quanlianlu/export (1)/欧美海外仓配_4K.jpg',
  '/quanlianlu/export (1)/美国门点一口价_4K.jpg',
  '/quanlianlu/export (1)/欧洲易递延_4K.jpg',
  '/quanlianlu/export (1)/中泰全链路产品_4K.jpg',
  '/quanlianlu/export (1)/中马全链路产品.jpg',
  '/quanlianlu/export (1)/中越全链路产品.jpg',
] as const;

const visibleCount = 3;
const autoplayDelay = 3000;
const transitionDuration = 700;
const loopImages = [...caseImages, ...caseImages.slice(0, visibleCount)];

// 检测是否为移动设备
const isMobile = () => {
  return window.innerWidth <= 768;
};

export function MetricsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const slideCount = caseImages.length;
  const trackRef = useRef<HTMLDivElement | null>(null);
  
  // 触摸相关状态
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // 计算偏移量：移动端按100%计算，桌面端按33.333%计算
  const carouselOffset = isMobileView 
    ? activeIndex * 100 
    : activeIndex * (100 / visibleCount);

  // 检测屏幕尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(isMobile());
    };
    
    handleResize(); // 初始检测
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 自动播放
  useEffect(() => {
    if (isDragging) return; // 拖拽时暂停自动播放
    
    const timer = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [isDragging]);

  // 无限循环重置
  useEffect(() => {
    if (activeIndex !== slideCount) return;

    const resetTimer = window.setTimeout(() => {
      setIsTransitioning(false);
      setActiveIndex(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsTransitioning(true));
      });
    }, transitionDuration);

    return () => window.clearTimeout(resetTimer);
  }, [activeIndex, slideCount]);

  // 触摸事件处理
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobileView) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  }, [isMobileView]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isMobileView) return;
    setTouchEnd(e.targetTouches[0].clientX);
  }, [isMobileView]);

  const handleTouchEnd = useCallback(() => {
    if (!isMobileView || !touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // 向左滑动，显示下一张
      setActiveIndex((current) => (current + 1) % slideCount);
    } else if (isRightSwipe) {
      // 向右滑动，显示上一张
      setActiveIndex((current) => (current - 1 + slideCount) % slideCount);
    }
    
    setIsDragging(false);
  }, [isMobileView, touchStart, touchEnd, slideCount]);

  return (
    <section className="section-shell section-muted scroll-section" id="full-chain-solution" data-scroll-section>
      <div className="container">
        <div className="section-heading overseas-warehouse-heading">
          <span className="eyebrow">全链路产品</span>
          <h2>物流供应链解决方案</h2>
          <p>门对门，找海盟</p>
        </div>

        <div className="quanlianlu-carousel" aria-label="全链路产品案例轮播">
          <div className="quanlianlu-carousel-viewport">
            <div
              ref={trackRef}
              className="quanlianlu-carousel-track"
              style={{
                transform: `translateX(-${carouselOffset}%)`,
                transition: isTransitioning ? `transform ${transitionDuration}ms cubic-bezier(0.22, 1, 0.36, 1)` : 'none',
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {(isMobileView ? caseImages : loopImages).map((src, index) => (
                <figure className="quanlianlu-slide" key={`${src}-${index}`}>
                  <img src={src} alt={`全链路产品案例 ${((index % slideCount) || slideCount)}`} loading={index === 0 ? 'eager' : 'lazy'} />
                </figure>
              ))}
            </div>
          </div>
          
          {/* 移动端显示指示器 */}
          {isMobileView && (
            <div className="quanlianlu-dots">
              {caseImages.map((_, index) => (
                <button
                  key={index}
                  className={`quanlianlu-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`跳转到第 ${index + 1} 张图片`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
