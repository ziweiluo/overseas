import { useEffect } from 'react';

import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { CTASection } from '../components/sections/CTASection';
import { CasesSection } from '../components/sections/CasesSection';
import { CoreProductsSection } from '../components/sections/CoreProductsSection';
import { HeroSection } from '../components/sections/HeroSection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { NetworkOverviewSection } from '../components/sections/NetworkOverviewSection';
import { OverseasWarehouseSection } from '../components/sections/OverseasWarehouseSection';
import { SectionContactPrompt } from '../components/sections/SectionContactPrompt';
import { SolutionsSection } from '../components/sections/SolutionsSection';
import { FloatingButtons } from '../components/ui/FloatingButtons';

export function LandingPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const embeddedFlag = (searchParams.get('embedded') || '').toLowerCase();
  const noNavbarFlag = (searchParams.get('nonavbar') || '').toLowerCase();
  const shouldHideChrome =
    ['1', 'true', 'yes'].includes(embeddedFlag) ||
    ['1', 'true', 'yes'].includes(noNavbarFlag);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-section]'));

    if (!sections.length) return;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const translateY = (progress - 0.5) * 20;
        section.style.setProperty('--section-parallax-y', `${translateY.toFixed(2)}px`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -30% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));
    updateParallax();

    const handleScroll = () => updateParallax();
    const handleResize = () => updateParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {shouldHideChrome ? null : <Header />}
      <main id="top">
        <HeroSection />
        <div id="core-products">
          <CoreProductsSection />
        </div>
        <SectionContactPrompt label="免费匹配适合产品" />
        <div id="multi-transport">
          <SolutionsSection />
        </div>
        <SectionContactPrompt label="获取定制解决方案" />
        <div className="mobile-hidden-section" id="cross-border-services">
          <NetworkOverviewSection />
        </div>
        <div className="mobile-hidden-section">
          <SectionContactPrompt label="咨询目的国线路时效" />
        </div>
        <OverseasWarehouseSection />
        <SectionContactPrompt label="咨询海外仓报价" />
        <MetricsSection />
        <SectionContactPrompt label="预约物流链路诊断" />
        <CasesSection />
        <CTASection />
      </main>
      {shouldHideChrome ? null : <Footer />}
      <FloatingButtons />
    </>
  );
}
