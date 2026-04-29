const socialItems = [
  {
    title: '蓝鳛小程序',
    image: '/logo/lanxi.jpg',
    alt: '蓝鳛小程序二维码',
  },
  {
    title: '客服微信',
    image: '/logo/liujun.jpg',
    alt: '客服微信二维码',
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-showcase">
        <div className="footer-social-block">
          <h3>关注我们</h3>
          <div className="footer-qr-grid">
            {socialItems.map((item) => (
              <figure className="footer-qr-card" key={item.title}>
                <div className="footer-qr-image-wrap">
                  <img src={item.image} alt={item.alt} className="footer-qr-image" />
                </div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="footer-contact-block">
          <h3>联系我们</h3>
          <div className="footer-contact-grid">
            <div className="footer-contact-item">
              <span>联系邮箱</span>
              <a href="mailto:liujunl@sea-win.com.cn">liujunl@sea-win.com.cn</a>
            </div>
            <div className="footer-contact-item">
              <span>联系电话</span>
              <a href="tel:19884999979">19884999979</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <p>©2026 海盟控股集团有限公司 版权所有</p>
        <div className="footer-bottom-links">
          <span>浙ICP备示例号</span>
          <span>隐私政策</span>
        </div>
      </div>
    </footer>
  );
}