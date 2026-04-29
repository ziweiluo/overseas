import { multiTransportRoutes, multiTransportSections } from '../../data/landingPageData';

export function MultiTransportSection() {
  return (
    <section className="section-shell section-muted multi-transport-shell" id="solutions">
      <div className="container multi-transport-container">
        <div className="section-heading multi-transport-heading">
          <span className="eyebrow">多式联运产品</span>
          <h2>海河联运与海铁联运方案</h2>
          <p>通过双通道路径与站点网络协同，实现更稳定、更高效的出运组织。</p>
        </div>

        <div className="card-grid two-up multi-transport-mode-grid">
          {multiTransportSections.map((item) => (
            <article className="info-card multi-transport-mode-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="card-grid two-up multi-transport-route-grid">
          {[multiTransportRoutes.shanghai, multiTransportRoutes.ningbo].map((route) => (
            <article className="multi-transport-route-card" key={route.label}>
              <div className="multi-transport-route-header">
                <div>
                  <span className="multi-transport-route-tag">站点分布</span>
                  <h3>{route.label}</h3>
                </div>
                <p>{route.summary}</p>
              </div>

              <div className="multi-transport-table-wrap">
                <table className="multi-transport-table">
                  <thead>
                    <tr>
                      <th>站点</th>
                      <th>优势区域</th>
                      <th>装箱时间（参考）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {route.stations.map((station) => (
                      <tr key={`${route.label}-${station.name}`}>
                        <td>{station.name}</td>
                        <td>{station.region}</td>
                        <td>{station.etd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
