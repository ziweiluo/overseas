import { useEffect, useState } from 'react';

function WarehouseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 9.5 12 5l8 4.5v9a1 1 0 0 1-1 1h-4.5v-5h-5v5H5a1 1 0 0 1-1-1v-9.5Zm2 .95V18h3.5v-5h9v5H22V10.45L12 6 6 10.45Z" fill="currentColor"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="currentColor"/>
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 7h10l2 2v8H4V7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 7v2h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 12h7M7 15h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {/* 包裹盒子 - 白色线性风格 */}
      <rect x="18" y="20" width="28" height="24" rx="2" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 中间分隔线 */}
      <line x1="18" y1="32" x2="46" y2="32" stroke="#fff" strokeWidth="2.5" />
      
      {/* 双向传输箭头 */}
      <path d="M24 26h10m-3-2.5 3 2.5-3 2.5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 38H30m3 2.5-3-2.5 3-2.5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* 装饰点 */}
      <circle cx="22" cy="24" r="1.5" fill="#fff" />
      <circle cx="42" cy="40" r="1.5" fill="#fff" />
    </svg>
  );
}

function DispatchIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {/* 仓库主体 - 白色线性风格 */}
      <rect x="16" y="28" width="32" height="20" rx="1" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 仓库屋顶 */}
      <path d="M14 28l18-12 18 12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* 仓库门 */}
      <rect x="22" y="34" width="6" height="14" fill="none" stroke="#fff" strokeWidth="2.5" rx="0.5" />
      <rect x="36" y="34" width="6" height="14" fill="none" stroke="#fff" strokeWidth="2.5" rx="0.5" />
      
      {/* 装饰线 */}
      <line x1="20" y1="38" x2="44" y2="38" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
      
      {/* 顶部标识 */}
      <circle cx="32" cy="20" r="2" fill="#fff" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {/* 卡车车厢 - 白色线性风格 */}
      <rect x="12" y="28" width="24" height="14" rx="1" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 驾驶室 */}
      <rect x="36" y="30" width="12" height="12" rx="1" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 车窗 */}
      <rect x="38" y="32" width="8" height="6" rx="0.5" fill="none" stroke="#fff" strokeWidth="2" />
      
      {/* 车轮 */}
      <circle cx="20" cy="46" r="4" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="20" cy="46" r="2" fill="#fff" />
      <circle cx="44" cy="46" r="4" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="44" cy="46" r="2" fill="#fff" />
      
      {/* 装饰线 */}
      <line x1="16" y1="32" x2="28" y2="32" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
      <line x1="16" y1="36" x2="24" y2="36" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {/* 包裹 - 白色线性风格 */}
      <rect x="20" y="24" width="24" height="18" rx="2" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 退货标签 */}
      <rect x="24" y="28" width="16" height="5" fill="none" stroke="#fff" strokeWidth="2" rx="1" />
      <line x1="26" y1="30.5" x2="38" y2="30.5" stroke="#fff" strokeWidth="1" />
      
      {/* 返回箭头 */}
      <path d="M36 46c0-3-1.5-5-5-5H22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 41l-4 3 4 3" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* 装饰 */}
      <circle cx="40" cy="28" r="1.5" fill="#fff" />
      <line x1="24" y1="36" x2="40" y2="36" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

function PickupIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {/* 货车主体 - 白色线性风格 */}
      <rect x="14" y="28" width="20" height="12" rx="1" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 货车后厢 */}
      <rect x="34" y="30" width="14" height="10" rx="1" fill="none" stroke="#fff" strokeWidth="3" />
      
      {/* 车轮 */}
      <circle cx="22" cy="44" r="4" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="22" cy="44" r="2" fill="#fff" />
      <circle cx="42" cy="44" r="4" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="42" cy="44" r="2" fill="#fff" />
      
      {/* 货物 */}
      <rect x="17" y="31" width="12" height="6" fill="none" stroke="#fff" strokeWidth="2" rx="0.5" />
      <rect x="37" y="33" width="8" height="4" fill="none" stroke="#fff" strokeWidth="2" rx="0.5" />
      
      {/* 提货箭头 */}
      <path d="M26 20l3 3-3 3" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* 装饰线 */}
      <line x1="19" y1="34" x2="25" y2="34" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}



function AmazonLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 603 182" aria-hidden="true" focusable="false">
      <path d="M374.006 142.184c-35 25.797-85.729 39.561-129.406 39.561-61.242 0-116.376-22.651-158.087-60.325-3.278-2.962-.341-7 3.591-4.693 45.015 26.191 100.673 41.947 158.166 41.947 38.775 0 81.43-8.022 120.65-24.67 5.925-2.516 10.88 3.88 5.086 8.18" style={{ fill: '#f90' }} />
      <path d="M388.557 125.536c-4.457-5.715-29.573-2.7-40.846-1.363-3.434.42-3.959-2.57-.865-4.719 20.003-14.078 52.827-10.015 56.654-5.296 3.828 4.745-.996 37.648-19.793 53.352-2.884 2.411-5.637 1.127-4.352-2.072 4.22-10.539 13.685-34.16 9.202-39.902" style={{ fill: '#f90' }} />
      <path d="M348.497 20.066V6.381c0-2.071 1.573-3.46 3.461-3.46h61.269c1.966 0 3.54 1.415 3.54 3.46V18.1c-.027 1.966-1.679 4.535-4.615 8.599l-31.749 45.329c11.798-.289 24.25 1.468 34.947 7.498 2.412 1.363 3.068 3.356 3.251 5.322V99.45c0 1.992-2.202 4.325-4.509 3.12-18.85-9.884-43.887-10.96-64.73.104-2.123 1.154-4.351-1.153-4.351-3.146V85.661c0-2.229.026-6.03 2.254-9.412L384.047 23.5h-32.01c-1.967 0-3.54-1.39-3.54-3.434M124.999 105.454h-18.64c-1.783-.13-3.199-1.468-3.33-3.172V6.617c0-1.914 1.6-3.435 3.592-3.435h17.382c1.809.079 3.25 1.468 3.382 3.199v12.505h.34c4.536-12.086 13.056-17.722 24.54-17.722 11.666 0 18.954 5.636 24.198 17.722 4.509-12.086 14.76-17.722 25.744-17.722 7.813 0 16.36 3.224 21.577 10.46 5.899 8.049 4.693 19.741 4.693 29.992l-.026 60.378c0 1.913-1.6 3.46-3.592 3.46h-18.614c-1.862-.13-3.356-1.625-3.356-3.46V51.29c0-4.037.367-14.104-.524-17.932-1.39-6.423-5.558-8.232-10.959-8.232-4.51 0-9.228 3.015-11.142 7.839s-1.73 12.898-1.73 18.325v50.704c0 1.913-1.6 3.46-3.592 3.46h-18.614c-1.888-.13-3.356-1.625-3.356-3.46l-.026-50.704c0-10.67 1.757-26.374-11.483-26.374-13.397 0-12.872 15.31-12.872 26.374v50.704c0 1.913-1.6 3.46-3.592 3.46M469.514 1.164c27.66 0 42.629 23.752 42.629 53.954 0 29.18-16.543 52.329-42.629 52.329-27.16 0-41.947-23.753-41.947-53.352 0-29.782 14.97-52.931 41.947-52.931m.158 19.531c-13.738 0-14.603 18.719-14.603 30.386 0 11.692-.184 36.65 14.445 36.65 14.446 0 15.128-20.134 15.128-32.403 0-8.075-.341-17.723-2.78-25.378-2.097-6.66-6.265-9.255-12.19-9.255M548.008 105.454h-18.562c-1.861-.13-3.356-1.625-3.356-3.46l-.026-95.692c.157-1.756 1.704-3.12 3.592-3.12h17.277c1.625.079 2.962 1.18 3.33 2.674v14.63h.34c5.217-13.083 12.532-19.322 25.404-19.322 8.363 0 16.517 3.015 21.76 11.273 4.877 7.655 4.877 20.528 4.877 29.782v60.22c-.21 1.678-1.757 3.015-3.592 3.015h-18.693c-1.704-.13-3.12-1.39-3.303-3.015V50.478c0-10.461 1.206-25.772-11.667-25.772-4.535 0-8.704 3.042-10.775 7.656-2.621 5.846-2.962 11.666-2.962 18.116v51.516c-.026 1.913-1.652 3.46-3.644 3.46" />
      <use xlinkHref="#a" transform="translate(244.367)" />
      <path id="a" d="M55.288 59.758v-4.037c-13.475 0-27.71 2.884-27.71 18.771 0 8.049 4.168 13.502 11.325 13.502 5.243 0 9.936-3.225 12.898-8.468 3.67-6.45 3.487-12.506 3.487-19.768m18.798 45.434c-1.232 1.101-3.015 1.18-4.405.446-6.187-5.139-7.288-7.524-10.696-12.427-10.225 10.434-17.46 13.554-30.726 13.554-15.678 0-27.895-9.674-27.895-29.048 0-15.127 8.206-25.43 19.872-30.464 10.12-4.457 24.25-5.244 35.052-6.476v-2.412c0-4.43.341-9.674-2.254-13.501-2.281-3.435-6.633-4.85-10.46-4.85-7.106 0-13.45 3.644-14.997 11.194-.315 1.678-1.547 3.33-3.225 3.408l-18.09-1.94c-1.52-.34-3.198-1.573-2.778-3.906C7.652 6.853 27.446.246 45.169.246c9.07 0 20.92 2.412 28.078 9.28 9.07 8.469 8.206 19.768 8.206 32.064v29.048c0 8.73 3.618 12.558 7.026 17.277 1.206 1.678 1.468 3.697-.053 4.955-3.801 3.172-10.565 9.071-14.288 12.375z" />
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg viewBox="0 0 1851.6 449.4" aria-hidden="true" focusable="false">
      <path d="M154.6 177.7v-18.3c-6.1-.9-12.2-1.3-18.4-1.3C61.1 158.1 0 219.2 0 294.4c0 44.5 21.7 86.1 58.2 111.6-.6-.7-1.3-1.4-1.9-2.1-21.5-24.1-33.9-55.9-33.9-90.7-.3-73.7 58.6-134 132.2-135.5z" fill="#111111" />
      <path d="M157.9 375.9c33.5 0 61.4-27.2 62.7-60.4l.1-296.2 53.8.1-.1-.7c-1.2-6.2-1.7-12.5-1.7-18.8h-74l-.2 296.7c-1.2 34.3-30 61.1-64.3 59.9-9.3-.3-18.5-2.8-26.7-7.1 11.2 15.7 29.6 26.5 50.4 26.5zM375.6 120.7V103c-19.9 0-39.4-5.8-56.1-16.7 14.4 16.5 33.9 29.6 56.1 34.4z" fill="#111111" />
      <path d="M319.5 86.3c-16.3-18.7-25.3-42.7-25.3-67.5h-20.3c5.1 28.2 22.4 52.4 45.6 67.5zM136.3 231.6c-34.3 0-62.8 28.5-62.8 62.8 0 23.9 14.1 44.7 33.9 55.1-20.2-27.7-14.1-66.4 13.5-86.6 15.9-11.6 36.5-15 55.3-9v-75.6c-6.1-.9-12.2-1.3-18.4-1.3-1.1 0-2.1.1-3.2.1l-.5.1v57.1c-5.8-2-11.8-2.8-17.8-2.7z" fill="#111111" />
      <path d="m375.6 119.5-.4-.1-.2 57c-36.9 0-72.9-11.7-102.9-33.3l-.1 151.3c.1 74.9-60.5 135.6-135.3 135.7h-.4c-29 0-56-8.6-78.1-24.2 25.7 27.7 61.8 43.5 99.7 43.5 75.1 0 136.3-61.1 136.3-136.3V162.7c30 21.6 66 33.2 103 33.1v-74c-7.3 0-14.5-.8-21.6-2.3z" fill="#111111" />
      <path d="M272.6 294.4V143.9c30 21.6 66 33.2 103 33.1v-57.5c-21.8-4.7-41.5-16.3-56.1-33.2-23.7-15.4-40-39.8-45.2-67.5h-54.2l-.1 296.7c-1.2 34.3-30 61.1-64.3 59.9-19.2-.7-37.1-10.2-48.3-25.9-30.4-15.9-42.2-53.5-26.3-84 10.7-20.5 32-33.4 55.1-33.4 6.2 0 12.4 1 18.4 2.9v-58c-73.6 1.8-133 62.2-133 136.3 0 34.5 13.1 67.6 36.6 92.8 22.9 16.1 50.1 24.7 78.1 24.7 75.1-.1 136.3-61.3 136.3-136.4zM470.4 119.7h231.4l-21.2 66.2h-60v244.7h-74.8V185.9l-75.2.1-.2-66.3zM1080.7 119.7h236.7l-21.2 66.2H1231v244.7h-75V185.9l-75.2.1-.1-66.3zM715.9 218.6H790v212h-73.7zM819.5 118.9h74.1v144.8l73.4-72h88.4l-92.9 90 104 148.9h-81.6l-69.4-103.2-22 21.3v81.9h-74.1l.1-311.7zM1604.5 118.9h74.1v144.8l73.4-72h88.4l-92.9 90 104 148.9h-81.6l-69.4-103.2-22 21.3v81.9h-74.1l.1-311.7z" fill="#111111" />
      <circle cx="752.9" cy="157.1" r="37.3" fill="#111111" transform="rotate(-67.5 752.916 157.054)" />
      <path d="M1307.9 303.7c0-66.2 51-121.3 117-126.5-3.3-.2-7.8-.4-11.1-.4-70.1 0-126.9 56.9-126.9 126.9 0 70.1 56.8 126.8 126.9 126.9 3.3 0 7.8-.2 11.1-.4-66-5.2-116.9-60.3-117-126.5z" fill="#111111" />
      <path d="M1453.7 176.8c-3.4 0-7.9.2-11.2.4 69.8 5.5 122 66.6 116.5 136.4-4.9 62.2-54.3 111.6-116.5 116.5 3.3.3 7.8.4 11.2.4 70.1 0 126.9-56.9 126.9-126.9s-56.8-126.8-126.9-126.8z" fill="#111111" />
      <path d="M1433.7 176.8c-70.1 0-126.9 56.8-126.9 126.9s56.8 126.9 126.9 126.9 126.9-56.8 126.9-126.9c0-70.1-56.9-126.9-126.9-126.9zm0 188.6c-34.1 0-61.7-27.6-61.7-61.7s27.6-61.7 61.7-61.7 61.7 27.6 61.7 61.7-27.6 61.7-61.7 61.7z" fill="#111111" />
    </svg>
  );
}

function TemuLogo() {
  return (
    <img src="/temu-logo.svg" alt="Temu" />
  );
}

type Warehouse = {
  name: string;
  region: 'us' | 'ca' | 'eu';
  country: string;
  location: string;
  platform?: string;
  scenario: string;
  area: string;
  orders: string;
  summary: string;
  tone: string;
};

const navItems = [
  { label: '服务介绍', href: '#intro' },
  { label: '全球仓库', href: '#warehouses' },
  { label: '服务能力', href: '#services' },
  { label: '核心优势', href: '#advantages' },
  { label: '关于我们', href: '#about' },
];

const warehouses: Warehouse[] = [
  {
    name: '美西加州 1 号仓',
    region: 'us',
    country: '美国',
    location: 'Fontana',
    platform: 'Amazon、Tiktok、Temu',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '50000 平方米',
    orders: '20000',
    summary: '海盟美西海外仓，占地面积 5 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 60 分钟车程，覆盖全美大约 25% 以上的订单。',
    tone: 'blue',
  },
  {
    name: '美东新泽西 1 号仓',
    region: 'us',
    country: '美国',
    location: 'Burlington',
    platform: 'Amazon、Tiktok、Temu',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '40000 平方米',
    orders: '20000',
    summary: '海盟美东新泽西海外仓，占地面积 4 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 60 分钟车程，覆盖全美大约 25% 以上的订单。',
    tone: 'navy',
  },
  {
    name: '美东萨凡纳仓',
    region: 'us',
    country: '美国',
    location: 'Savannah',
    platform: 'Amazon、Tiktok、Temu',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '20000 平方米',
    orders: '10000',
    summary: '海盟美东萨凡纳海外仓，占地面积 2 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 60 分钟车程，覆盖全美大约 25% 以上的订单。',
    tone: 'cyan',
  },
  {
    name: '美中亚特兰大仓',
    region: 'us',
    country: '美国',
    location: 'Lithia Springs',
    platform: 'Amazon、Tiktok、Temu',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '30000 平方米',
    orders: '10000',
    summary: '海盟美东亚特兰大海外仓，占地面积 3 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 60 分钟车程，覆盖全美大约 25% 以上的订单。',
    tone: 'indigo',
  },
  {
    name: '美南德州仓',
    region: 'us',
    country: '美国',
    location: 'Missouri City',
    platform: 'Amazon、Tiktok、Temu',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '30000 平方米',
    orders: '10000',
    summary: '海盟美南德州海外仓，占地面积 3 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 60 分钟车程，覆盖全美大约 25% 以上的订单。',
    tone: 'slate',
  },
  {
    name: '加东多伦多仓',
    region: 'ca',
    country: '加拿大',
    location: 'Aurora',
    platform: '无',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '20000 平方米',
    orders: '10000',
    summary: '海盟加拿大多伦多海外仓，占地面积 2 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 40 分钟车程，覆盖加拿大大约 70% 以上的订单。',
    tone: 'violet',
  },
  {
    name: '加西温哥华 1 号仓',
    region: 'ca',
    country: '加拿大',
    location: 'Vancouver',
    platform: '无',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '10000 平方米',
    orders: '10000',
    summary: '海盟美西海外仓，占地面积 1 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 40 分钟车程，覆盖全美大约 30% 以上的订单。',
    tone: 'gold',
  },
  {
    name: '英国仓',
    region: 'eu',
    country: '英国',
    location: 'NORTHAMPTON',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '20000 平方米',
    orders: '10000',
    summary: '海盟英国海外仓，占地面积 2 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 40 分钟车程。',
    tone: 'emerald',
  },
  {
    name: '法国仓',
    region: 'eu',
    country: '法国',
    location: 'ARTENAY',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '20000 平方米',
    orders: '10000',
    summary: '海盟法国海外仓，占地面积 2 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 60 分钟车程。',
    tone: 'red',
  },
  {
    name: '德国仓',
    region: 'eu',
    country: '德国',
    location: 'Euskirchen',
    scenario: '一件代发、FBA 中转、提拆派',
    area: '20000 平方米',
    orders: '10000',
    summary: '海盟德国海外仓，占地面积 2 万平米，提供一件代发、FBA 中转和提拆派等服务，距离港口约 50 分钟车程。',
    tone: 'slate',
  },
];

const advantages = [
  { title: 'FBM服务', description: '打通库存分配与订单处理堵点，配置店铺专属物流方案。', icon: 'precision_manufacturing' },
  { title: '安全合规保障', description: '24 小时监控与标准化流程，保障货物在海外稳定周转。', icon: 'verified_user' },
  { title: '中英文双语客服', description: '7×24 小时响应，跨时区协作更顺畅，沟通更直接。', icon: 'support_agent' },
];

const services = [
  {
    title: '一件代发',
    position: '跨境电商无库存履约',
    description: '多平台实时同步，24 小时智能分拣出库，一件直发终端客户，帮助商家以更低库存压力实现稳健履约。',
    features: [
      '全平台订单实时同步',
      '智能分拣出库',
      '一件直发终端客户',
      '降低库存压力风险'
    ],
    icon: TransferIcon,
  },
  {
    title: 'FBA 中转',
    position: '亚马逊 FBA 仓配灵活补货',
    description: '支持打单换标与分仓调拨，灵活衔接头程和尾程链路，降低断货风险，提升旺季补货稳定性。',
    features: [
      '支持打单换标服务',
      '灵活分仓调拨管理',
      '头程尾程无缝衔接',
      '降低断货风险'
    ],
    icon: DispatchIcon,
  },
  {
    title: '卡车配送',
    position: '跨境大货干线运输',
    description: '覆盖整柜与散货运输场景，干线时效更可控、运价更优，适配大件货物批量跨境流转。',
    features: [
      '整柜散货全覆盖',
      '干线时效可控',
      '运价优势明显',
      '大件货物专线'
    ],
    icon: TruckIcon,
  },
  {
    title: '退货接收处理',
    position: '跨境退货库存闭环处理',
    description: '提供签收、质检、翻新及销毁处理，建立退货商品闭环管理流程，尽可能减少退货带来的库存损耗。',
    features: [
      '退货签收质检',
      '商品翻新处理',
      '闭环管理流程',
      '减少库存损耗'
    ],
    icon: ReturnIcon,
  },
  {
    title: '第三方自提',
    position: '跨境仓储灵活提货',
    description: '支持第三方商户与货代上门自提，结合货物代管与按需出库能力，满足多渠道发货调度需求。',
    features: [
      '第三方上门自提',
      '货物代管服务',
      '按需灵活出库',
      '多渠道发货调度'
    ],
    icon: PickupIcon,
  },
];

function App() {
  const [activeNav, setActiveNav] = useState('intro');
  const [region, setRegion] = useState<'all' | 'us' | 'ca' | 'eu'>('all');
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 },
    );

    const targets = ['intro', 'advantages'];
    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredWarehouses = warehouses.filter((item) => region === 'all' || item.region === region);

  return (
    <div className="app-shell">
      <header className="topnav">
        <div className="brand">
          <img src="/海盟logo.png" alt="海盟 logo" className="brand-logo" />
          <span>海盟海外仓</span>
        </div>
        <nav className="topnav-links">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeNav === id;

            return (
              <a
                key={item.label}
                className={isActive ? 'active' : ''}
                href={item.href}
                onClick={() => setActiveNav(id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="topnav-actions">
          <button className="btn btn-primary">立即入驻</button>
          <button className="btn btn-secondary">联系我们</button>
        </div>
      </header>

      <main>
        <section className={`hero hero-reference ${visibleSections.intro ? 'is-visible' : ''}`} id="intro">
          <div className="hero-reference-inner">
            <div className="hero-reference-copy">
              <h1>
                <span className="hero-brand-highlight">海盟海外仓</span>
              </h1>
              <p className="hero-reference-desc">
                海盟海外仓，布局全球 5 国 10 城，坐拥 10 大仓库、120000㎡仓储面积，服务网络辐射美、加、英、德、法核心市场。我们以一件代发、FBA 中转、卡车配送、退货处理、第三方自提等多元服务为基石，更创新推出 FBA 转型 FBM 专项服务，依托大卖实战经验，深度优化库存分配与订单流转，定制 Amazon 等店铺物流设置，帮您实现“降本提速”双目标，为每一笔订单的存储与发货筑牢保障。
              </p>

              <div className="hero-reference-actions">
                <button className="btn btn-primary">立即咨询方案</button>
                <a className="btn btn-ghost" href="#warehouses">查看全球仓图</a>
              </div>
            </div>

            <div className="hero-reference-metrics">
              <div className="hero-metrics-card">
                <div className="metric-item">
                  <strong>5+</strong>
                  <span>覆盖国家</span>
                </div>
                <div className="metric-item">
                  <strong>10+</strong>
                  <span>核心城市</span>
                </div>
                <div className="metric-item">
                  <strong>10+</strong>
                  <span>专业仓储</span>
                </div>
                <div className="metric-item">
                  <strong>12w+</strong>
                  <span>平米容量</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="warehouses">
          <div className="section-head split-head">
            <div>
              <h2>全球布局</h2>
              <p>全球核心枢纽，极速触达全球消费者</p>
            </div>
            <div className="filter-pills filter-pills-only">
              <button className={region === 'us' ? 'pill pill-active' : 'pill'} onClick={() => setRegion('us')}>
                🇺🇸 美国地区
              </button>
              <button className={region === 'ca' ? 'pill pill-active' : 'pill'} onClick={() => setRegion('ca')}>
                🇨🇦 加拿大地区
              </button>
              <button className={region === 'eu' ? 'pill pill-active' : 'pill'} onClick={() => setRegion('eu')}>
                🇪🇺 欧洲地区
              </button>
            </div>
          </div>

          <div className="warehouse-stack">
            {filteredWarehouses.map((warehouse) => (
              <article className="warehouse-row-card" key={warehouse.name}>
                <div className={`warehouse-image warehouse-tone-${warehouse.tone}`}>
                  <div className="status-badge">
                    <span className="status-badge-icon"><LocationIcon /></span>
                    {warehouse.location}
                  </div>
                </div>
                <div className="warehouse-body warehouse-body-detailed">
                  <div className="warehouse-topline">
                    <h3>{warehouse.name}</h3>
                    <span className="warehouse-country">{warehouse.country}</span>
                  </div>

                  <div className="warehouse-inline-row">
                    <div className="warehouse-chip-row compact">
                      <span className="warehouse-platform-label">认证平台</span>
                      <div className="warehouse-platform-logos">
                        {warehouse.platform?.includes('Amazon') ? (
                          <span className="platform-logo amazon-logo" aria-label="Amazon">
                            <AmazonLogo />
                          </span>
                        ) : null}
                        {warehouse.platform?.includes('Tiktok') ? (
                          <span className="platform-logo tiktok-logo" aria-label="TikTok">
                            <TikTokLogo />
                          </span>
                        ) : null}
                        {warehouse.platform?.includes('Temu') ? (
                          <span className="platform-logo temu-logo" aria-label="Temu">
                            <TemuLogo />
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="warehouse-chip-row compact">
                      <span>业务场景</span>
                      <div className="warehouse-scenario-tags">
                        <span className="scenario-tag"><span className="scenario-tag-icon"><DispatchIcon /></span>提拆派</span>
                        <span className="scenario-tag"><span className="scenario-tag-icon"><TransferIcon /></span>一件代发</span>
                        <span className="scenario-tag"><span className="scenario-tag-icon"><OrdersIcon /></span>FBA转运</span>
                      </div>
                    </div>
                  </div>

                  <div className="warehouse-meta warehouse-meta-detailed">
                    <div>
                      <span className="warehouse-meta-label">
                        <span className="inline-icon"><WarehouseIcon /></span>
                        <span className="warehouse-meta-text">仓库面积</span>
                      </span>
                      <strong>{warehouse.area}</strong>
                    </div>
                    <div>
                      <span className="warehouse-meta-label">
                        <span className="inline-icon"><OrdersIcon /></span>
                        <span className="warehouse-meta-text">可操作订单数量</span>
                      </span>
                      <strong>{warehouse.orders}</strong>
                    </div>
                  </div>

                  <p className="warehouse-summary">{warehouse.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="services-head">
            <h2>海外仓服务能力</h2>
            <p>全链路为您定制跨境物流闭环解决方案</p>
          </div>

          <div className="services-grid">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="service-card service-card-animated" style={{ ['--delay' as string]: `${index * 0.12}s` }} key={item.title}>
                  <div className="service-icon-badge">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <div className="service-position">{item.position}</div>
                  <ul className="service-features">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className={`section section-white reveal-section ${visibleSections.advantages ? 'is-visible' : ''}`} id="advantages">
          <div className="advantages-grid">
            <div className="advantages-copy">
              <h2 className={`falling-title ${visibleSections.advantages ? 'is-visible' : ''}`}>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0s' }}>不</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.06s' }}>仅</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.12s' }}>仅</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.18s' }}>是</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.24s' }}>仓</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.30s' }}>储</span>
                <br />
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.42s' }}>更</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.48s' }}>是</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.54s' }}>您</span>
                <span className="drop-word blue-word" style={{ ['--delay' as string]: '0.60s' }}>的</span>
                <span className="drop-word hero-brand-highlight" style={{ ['--delay' as string]: '0.72s' }}>增</span>
                <span className="drop-word hero-brand-highlight" style={{ ['--delay' as string]: '0.78s' }}>长</span>
                <span className="drop-word hero-brand-highlight" style={{ ['--delay' as string]: '0.84s' }}>引</span>
                <span className="drop-word hero-brand-highlight" style={{ ['--delay' as string]: '0.90s' }}>擎</span>
              </h2>
              <p className="fba-fbm-intro">
                海盟海外仓提供 FBA 转型 FBM 服务，对于客户的库存分配、订单分配以及 Amazon 等店铺的物流设置提供来自大卖的增值服务，让您的订单拥有更低的成本以及更快的配送速度，为您的存储发货保驾护航。
              </p>
              <div className="adv-list">
                <div className="adv-item">
                  <div className="adv-icon adv-icon-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h4>FBM服务</h4>
                    <p>打通库存分配与订单处理堵点，专业配置店铺物流，实现 FBM 业务无缝衔接。</p>
                  </div>
                </div>
                <div className="adv-item">
                  <div className="adv-icon adv-icon-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>安全合规保障</h4>
                    <p>24 小时监控与标准化流程，保障货物在海外稳定周转。</p>
                  </div>
                </div>
                <div className="adv-item">
                  <div className="adv-icon adv-icon-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>中英文双语客服</h4>
                    <p>7×24 小时响应，跨时区协作更顺畅，沟通更直接。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="advantages-visual">
              <div className="visual-card visual-card-top" />
              <div className="visual-card visual-card-bottom" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <div className="footer-branding">
          <div className="footer-title">关注我们</div>
          <div className="footer-qr-row">
            <div className="footer-qr-item">
              <div className="footer-qr-box"></div>
              <div className="footer-qr-label">公众号</div>
            </div>
            <div className="footer-qr-item">
              <div className="footer-qr-box"></div>
              <div className="footer-qr-label">小程序</div>
            </div>
            <div className="footer-qr-item">
              <div className="footer-qr-box"></div>
              <div className="footer-qr-label">APP</div>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-title">联系我们</div>
          <div className="footer-contact-grid">
            <div className="footer-contact-col">
              <div><span>商务合作</span><strong>13******</strong></div>
              <div><span>客服电话</span><strong>13******</strong></div>
            </div>
            <div className="footer-contact-col">
              <div><span>官方邮箱</span><strong>haimeng@*****</strong></div>
              <div><span>地址</span><strong>浙江省杭州市萧山区金城路148号华瑞汇金中心A座21楼</strong></div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
