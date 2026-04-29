export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="返回顶部">
          <img className="brand-logo" src="/logo/haimeng_logo.png" alt="海盟控股集团" />
          <span className="brand-copy">
            <span className="brand-mark">海盟控股集团</span>
            <span className="brand-subtitle">全球供应链与跨境物流综合服务商</span>
          </span>
        </a>
        <nav className="header-nav" aria-label="主导航">
          <a href="#top">海盟产品介绍</a>
          <a href="#core-products">核心产品</a>
          <a href="#multi-transport">多式联运产品</a>
          <a href="#cross-border-services">跨境电商服务</a>
          <a href="#full-chain-solution">全链路产品</a>
          <a href="#contact">联系我们</a>
        </nav>
      </div>
    </header>
  );
}