export function SolutionsSection() {
  return (
    <section className="section-shell section-muted multi-transport-shell scroll-section" id="solutions" data-scroll-section>
      <div className="container multi-transport-container">
        <div className="section-heading multi-transport-heading">
          <span className="eyebrow">多式联运产品</span>
          <h2>海河联运与海铁联运方案</h2>
          <p>通过双通道路径与站点网络协同，实现更稳定、更高效的出运组织。</p>
        </div>

        <div className="card-grid two-up multi-transport-mode-grid">
          <article className="info-card multi-transport-mode-card multi-transport-mode-card-heyun">
            <div className="multi-transport-mode-copy">
              <h3>海河联运</h3>
              <p>综合成本较直拖降低 30%，无额外费用，以箱代仓。</p>
              <ul>
                <li>多站点高效组合</li>
                <li>短驳与箱源优先</li>
                <li>适配大宗与制造业客户</li>
              </ul>
            </div>
            <div className="multi-transport-mode-stat">30%</div>
          </article>

          <article className="info-card multi-transport-mode-card multi-transport-mode-card-tielu">
            <div className="multi-transport-mode-copy">
              <h3>海铁联运</h3>
              <p>综合成本较直拖降低 20%，保箱保仓。</p>
              <ul>
                <li>港口与铁路联动</li>
                <li>干线稳定，时效可控</li>
                <li>适合长距离干线运输</li>
              </ul>
            </div>
            <div className="multi-transport-mode-stat">20%</div>
          </article>
        </div>

        <div className="card-grid two-up multi-transport-route-grid">
          <article className="multi-transport-route-card">
            <div className="multi-transport-route-header">
              <div>
                <span className="multi-transport-route-tag multi-transport-route-tag-orange">
                  <span className="multi-transport-route-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path d="M12 2.75a5.25 5.25 0 0 0-5.25 5.25c0 3.64 5.25 11.25 5.25 11.25s5.25-7.61 5.25-11.25A5.25 5.25 0 0 0 12 2.75Zm0 7.4a2.15 2.15 0 1 1 0-4.3 2.15 2.15 0 0 1 0 4.3Z" />
                    </svg>
                  </span>
                  站点分布
                </span>
                <h3>上海渠道分布</h3>
              </div>
              <p>多路径设计覆盖浙北区域，打造高匹配度出运网络。</p>
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
                  <tr><td>海宁港</td><td>杭州、嘉兴、绍兴</td><td>外港 ETD-5 / 洋山 ETD-6</td></tr>
                  <tr><td>湖州港</td><td>湖州、临平、余杭</td><td>外港 ETD-5 / 洋山 ETD-6</td></tr>
                  <tr><td>安吉港</td><td>安吉、长兴、临安、富阳、临平、余杭</td><td>外港 ETD-5 / 洋山 ETD-6</td></tr>
                  <tr><td>独山港</td><td>杭嘉湖沿线进洋山港</td><td>外港 ETD-5 / 洋山 ETD-6</td></tr>
                  <tr><td>杭州北站</td><td>临平、萧山、余杭、下沙</td><td>ETD-4</td></tr>
                  <tr><td>诸暨东站</td><td>诸暨</td><td>ETD-4</td></tr>
                  <tr><td>嘉兴东站</td><td>嘉兴</td><td>ETD-4</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="multi-transport-route-card">
            <div className="multi-transport-route-header">
              <div>
                <span className="multi-transport-route-tag multi-transport-route-tag-orange">
                  <span className="multi-transport-route-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path d="M12 2.75a5.25 5.25 0 0 0-5.25 5.25c0 3.64 5.25 11.25 5.25 11.25s5.25-7.61 5.25-11.25A5.25 5.25 0 0 0 12 2.75Zm0 7.4a2.15 2.15 0 1 1 0-4.3 2.15 2.15 0 0 1 0 4.3Z" />
                    </svg>
                  </span>
                  站点分布
                </span>
                <h3>宁波渠道分布</h3>
              </div>
              <p>港务“一企一策”加持，协同降本增效，箱源与短驳更稳定。</p>
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
                  <tr><td>下沙港</td><td>临平、萧山、余杭、临安、海宁许村</td><td>ETD-6</td></tr>
                  <tr><td>东洲港</td><td>富阳、桐庐、建德、临安</td><td>ETD-6</td></tr>
                  <tr><td>乍浦港</td><td>杭嘉湖</td><td>ETD-5</td></tr>
                  <tr><td>德清港</td><td>德清、湖州、安吉、临平</td><td>ETD-6</td></tr>
                  <tr><td>诸暨店口港</td><td>诸暨、萧山南部</td><td>ETD-6</td></tr>
                  <tr><td>萧山南站</td><td>萧山</td><td>ETD-4</td></tr>
                  <tr><td>杭州北站</td><td>临平、萧山、余杭、临安、海宁许村</td><td>ETD-4</td></tr>
                  <tr><td>诸暨东站</td><td>诸暨</td><td>ETD-4</td></tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
