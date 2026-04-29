import type { ArticleSection, CaseItem, ServiceCard, StatItem, UseCaseItem } from '../types/landingPage';

export const heroStats: StatItem[] = [
  { value: '20+', label: '年国际物流经验' },
  { value: '180+', label: '国家地区覆盖' },
  { value: '300+', label: '多式联运客户' },
  { value: '20,000+', label: 'TEU年箱量' },
];

export const coreServices: ServiceCard[] = [
  {
    title: '多式联运产品',
    subtitle: '海陆空铁无缝衔接，综合成本降低20%-30%',
    highlights: [
      '海河/海铁联运，无预提落箱、超重费等额外费用',
      '以箱代仓，保箱保仓',
      '覆盖浙北、浙中、苏北，与宁波舟山港、上海港无缝对接',
    ],
    accent: 'blue',
  },
  {
    title: '跨境电商服务',
    subtitle: '一站式通关 + 结算 + 物流 + 海外仓',
    highlights: [
      '9610 / 9710 / 9810 阳光化申报',
      '跨境结算与供应链金融',
      '海外仓配一体化，覆盖美欧日等市场',
    ],
    accent: 'cyan',
  },
  {
    title: '全链路产品',
    subtitle: '端到端深度整合，覆盖新兴市场与成熟通道',
    highlights: [
      '墨西哥“7天清”、欧美海外仓一站式、欧洲 VAT 递延',
      '中泰 / 中越 / 中马全链路',
      '中企出海生产制造基地全球化战略布局',
    ],
    accent: 'navy',
  },
];

export const multiTransportSections: ArticleSection[] = [
  {
    title: '海河联运',
    description: '综合成本较直拖降低 30%，无额外费用，以箱代仓。',
    bullets: ['多站点高效组合', '短驳与箱源优先', '适配大宗与制造业客户'],
  },
  {
    title: '海铁联运',
    description: '综合成本较直拖降低 20%，保箱保仓。',
    bullets: ['港口与铁路联动', '干线稳定，时效可控', '适合长距离干线运输'],
  },
];

export const multiTransportRoutes = {
  shanghai: {
    label: '上海渠道分布',
    summary: '多路径设计覆盖浙北区域，打造高匹配度出运网络。',
    stations: [
      { name: '海宁港', region: '杭州、嘉兴、绍兴', etd: '外港 ETD-5 / 洋山 ETD-6' },
      { name: '湖州港', region: '湖州、临平、余杭', etd: '外港 ETD-5 / 洋山 ETD-6' },
      { name: '安吉港', region: '安吉、长兴、临安、富阳、临平、余杭', etd: '外港 ETD-5 / 洋山 ETD-6' },
      { name: '独山港', region: '杭嘉湖沿线进洋山港', etd: '外港 ETD-5 / 洋山 ETD-6' },
      { name: '杭州北站', region: '临平、萧山、余杭、下沙', etd: 'ETD-4' },
      { name: '诸暨东站', region: '诸暨', etd: 'ETD-4' },
      { name: '嘉兴东站', region: '嘉兴', etd: 'ETD-4' },
    ],
  },
  ningbo: {
    label: '宁波渠道分布',
    summary: '港务“一企一策”加持，协同降本增效，箱源与短驳更稳定。',
    stations: [
      { name: '下沙港', region: '临平、萧山、余杭、临安、海宁许村', etd: 'ETD-6' },
      { name: '东洲港', region: '富阳、桐庐、建德、临安', etd: 'ETD-6' },
      { name: '乍浦港', region: '杭嘉湖', etd: 'ETD-5' },
      { name: '德清港', region: '德清、湖州、安吉、临平', etd: 'ETD-6' },
      { name: '诸暨店口港', region: '诸暨、萧山南部', etd: 'ETD-6' },
      { name: '萧山南站', region: '萧山', etd: 'ETD-4' },
      { name: '杭州北站', region: '临平、萧山、余杭、临安、海宁许村', etd: 'ETD-4' },
      { name: '诸暨东站', region: '诸暨', etd: 'ETD-4' },
    ],
  },
} as const;

export const overseasWarehouseHighlights: ArticleSection = {
  title: '海盟海外仓',
  description: '仓在海外，服务在身边。',
  bullets: [
    '6 个国家（美国、加拿大、墨西哥、英国、德国、荷兰）',
    '12 座城市 20 个仓库，累计 180000 m2 仓储面积',
  ],
};

export const overseasWarehousePlatforms = [
  'Wayfair',
  'Amazon',
  'eBay',
  'Shopify',
  'Walmart',
  'Wish',
  'DHgate',
  'Shopee',
] as const;

export const overseasWarehouseFlow = [
  '头程揽收',
  '国内装箱',
  '国际海运',
  '清关代理',
  '提柜送仓',
  '仓储配送',
] as const;

export const useCases: UseCaseItem[] = [
  { title: '跨境电商卖家', products: '海外仓一件代发 + 欧洲 VAT 递延 + 墨西哥 7 天清', value: '提升绩效，降低资金占压' },
  { title: '制造企业出海', products: '中泰 / 中越 / 中马全链路 + 多式联运 + 海外仓备货', value: '设备安全出口，工厂供应稳定' },
  { title: '传统贸易商', products: '海河 / 海铁联运 + 门到门全链路', value: '降本 20%-30%，全程可视' },
];

export const cases: CaseItem[] = [
  { title: '圣奥科技（墨西哥）', summary: '门到门 25 天交付，0 滞港费。', result: '带动 20+ 头部企业选择海盟。' },
  { title: '万向集团（泰国）', summary: '旧设备产线出口，零卡顿零损耗。', result: '实现建厂设备高确定性交付。' },
  { title: '某新能源上市企业（越南）', summary: '快船 + 包机组合运力。', result: '精密设备按时交付，零损耗。' },
];

export const ctaCards: string[] = [
  '立即咨询专家',
  '免费获取全链路产品手册',
];