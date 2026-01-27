export type ScheduleEntry = {
  time?: string;
  content: string;
  icon?: string;
  href?: string;
  address?: string;
  priceLink?: string;
  priceLabel?: string;
};

export type ScheduleBlock = {
  label: string;
  entries: ScheduleEntry[];
};

export type TransitSegment = {
  line: string;
  from: string;
  to: string;
  note?: string;
};

export type TransitPlan = {
  title: string;
  segments: TransitSegment[];
  links?: { label: string; href: string }[];
};

export type DayPlan = {
  id: string;
  dateLabel: string;
  weekday: string;
  title: string;
  highlight: string;
  icon: string;
  weather: {
    icon: string;
    summary: string;
    high: number;
    low: number;
  };
  blocks: ScheduleBlock[];
  lodging?: string;
  lodgingAddress?: string;
  lodgingHref?: string;
  notes?: string[];
  noteLinks?: { label: string; href: string }[];
  transit?: TransitPlan;
};

export const itinerary: DayPlan[] = [
  {
    id: "2026-02-12",
    dateLabel: "2026/2/12",
    weekday: "四",
    title: "Day 1・抵達東京",
    highlight: "清晨出發，下午抵達東京灣東方飯店",
    icon: "✈️",
    weather: {
      icon: "🌤️",
      summary: "晴時多雲",
      high: 12,
      low: 4,
    },
    lodging: "東京灣東方飯店",
    lodgingAddress: "〒279-0013 千葉縣浦安市日之出 2-6-1",
    lodgingHref: "https://maps.google.com/?q=Tokyo+Bay+Oriental+Hotel",
    blocks: [
      {
        label: "早",
        entries: [
          {
            time: "05:00",
            content: "機場接送（家裡 → 桃園 T2）",
            icon: "🚐",
          },
          {
            time: "08:50",
            content: "EVA Air BR198 桃園 T2 起飛，飛行 3h05m",
            icon: "🛫",
          },
        ],
      },
      {
        label: "午",
        entries: [
          {
            time: "12:55",
            content: "抵達成田 (T1)，入境後領行李",
            icon: "🛬",
          },
          {
            time: "15:20",
            content: "利木津巴士前往飯店（車程約 1 小時）",
            icon: "🚌",
          },
        ],
      },
      {
        label: "晚",
        entries: [
          {
            time: "晚餐",
            content: "牛舌焼き仙台 邊見 MONA新浦安店4F",
            icon: "👅",
            address: "千葉縣浦安市入船 1-5-1 MONA 新浦安 4F",
            href: "https://maps.google.com/?q=%E7%89%9B%E8%88%8C%E7%84%BC%E3%81%8D%E4%BB%99%E5%8F%B0+%E9%82%8A%E8%A6%8B+MONA%E6%96%B0%E6%B5%A6%E5%AE%89%E5%BA%97",
          },
          { content: "逛 UNIQLO、MUJI、GU", icon: "🛍️" },
        ],
      },
    ],
    notes: [
      "Atre 購物中心：Uniqlo、和幸、星巴克、貢茶、横浜kuriko 鯛魚燒、Beard Papa 泡芙、日本橋屋等。",
      "AEON 購物中心：MOS 漢堡、Mister Donuts、Ikinari 牛排、丸龜製麵、Daiso 大創。",
      "MONA：無印良品（B 館）、GU（A 館 3F）、麥當勞（1F）、客美多咖啡（B 館 2F）。",
    ],
    noteLinks: [
      {
        label: "AEON & 新浦安購物指南",
        href: "https://moomoosis.com/2024/11/08/aeon-shinurayasu/#google_vignette",
      },
      {
        label: "新浦安站周邊攻略",
        href: "https://tokyo.letsgojp.com/archives/586590/",
      },
      {
        label: "新浦安早餐推薦",
        href: "https://tokyobaychiba.com/eat-breakfast-at-shin-urayasu-tokyo-disney-resort/",
      },
    ],
    transit: {
      title: "成田機場 → 東京灣東方飯店",
      segments: [
        {
          line: "利木津巴士 4 號（成田機場 T1）",
          from: "第1航廈 13 號乘車口",
          to: "東京灣東方飯店",
          note: "15:20 發車，車程約 60 分鐘",
        },
        {
          line: "利木津巴士（新浦安方向）",
          from: "成田機場各航廈",
          to: "Shin-Urayasu（新浦安站）",
          note: "於新浦安站下車後步行 5 分鐘到飯店",
        },
      ],
      links: [
        {
          label: "利木津巴士官方時刻表",
          href: "https://www.limousinebus.co.jp/en/bus_services/narita/",
        },
      ],
    },
  },
  {
    id: "2026-02-13",
    dateLabel: "2026/2/13",
    weekday: "五",
    title: "Day 2・迪士尼",
    highlight: "整天在東京迪士尼，晚上可逛飯店附近商場",
    icon: "🎢",
    weather: {
      icon: "☁️",
      summary: "多雲",
      high: 10,
      low: 3,
    },
    lodging: "東京灣東方飯店",
    lodgingAddress: "〒279-0013 千葉縣浦安市日之出 2-6-1",
    lodgingHref: "https://maps.google.com/?q=Tokyo+Bay+Oriental+Hotel",
    blocks: [
      {
        label: "早",
        entries: [
          {
            time: "早餐",
            content: "客美多咖啡 MONA 新浦安店",
            icon: "☕",
          },
          {
            time: "地址",
            content: "千葉縣浦安市入船 1-5-1 MONA 新浦安 1F",
            icon: "📍",
            href: "https://maps.google.com/?q=%E5%8D%83%E8%91%89%E7%9C%8C%E6%B5%A6%E5%AE%89%E5%B8%82%E5%85%A5%E8%88%B91-5-1",
            address: "千葉縣浦安市入船 1-5-1 MONA 新浦安 1F",
          },
          { time: "交通", content: "飯店接駁車前往迪士尼", icon: "🚎" },
          {
            time: "樂園",
            content: "東京迪士尼樂園 / 海洋整日行程",
            icon: "🏰",
          },
        ],
      },
      {
        label: "晚",
        entries: [{ content: "閉園後可去飯店附近商場吃晚餐", icon: "🍱" }],
      },
    ],
    transit: {
      title: "飯店 ↔ 迪士尼",
      segments: [
        {
          line: "飯店免費接駁",
          from: "飯店 1 樓接駁站",
          to: "東京迪士尼樂園 / 海洋",
          note: "首班 07:00，每 20-30 分一班",
        },
        {
          line: "迪士尼度假區線 (Resort Line)",
          from: "舞濱站",
          to: "海洋 / 樂園",
          note: "樂園之間互通，約 5 分鐘",
        },
      ],
    },
  },
  {
    id: "2026-02-14",
    dateLabel: "2026/2/14",
    weekday: "六",
    title: "Day 3・城市散步日",
    highlight: "飯店移動日，午餐叙叙苑燒肉，銀座逛街，澀谷sky夜景",
    icon: "🌸",
    weather: {
      icon: "🌦️",
      summary: "短暫陣雨",
      high: 9,
      low: 2,
    },
    lodging: "三井花園飯店銀座五丁目",
    lodgingAddress: "東京都中央區銀座 5-13-15",
    lodgingHref: "https://maps.google.com/?q=Mitsui+Garden+Hotel+Ginza+Gochome",
    blocks: [
      {
        label: "早",
        entries: [
          { time: "早餐", content: "飯店早餐，整理行李準備移動", icon: "🥐" },
          { time: "09:30", content: "包車前往銀座周邊", icon: "🚐" },
        ],
      },
      {
        label: "午",
        entries: [
          {
            time: "12:00",
            content: "叙叙苑 有乐町Mullion店（已預約） - 商業午餐 ¥3,200 起",
            icon: "🍖",
            priceLink: "/menu/jojoen",
            priceLabel: "查看價錢",
          },
          {
            time: "地址",
            content: "東京都千代田区有楽町2-5-1 有楽町マリオン 15F",
            icon: "📍",
            href: "https://maps.google.com/?q=有楽町マリオン",
            address: "東京都千代田区有楽町2-5-1 有楽町マリオン 15F",
          },
          {
            time: "逛街",
            content: "銀座 3COINS、F1 店、HARBS、UNIQLO、MUJI 水果大福",
            icon: "🛍️",
          },
        ],
      },
      {
        label: "晚",
        entries: [
          {
            time: "晚餐",
            content: "炊火焼き リリー 渋谷店",
            icon: "🔥",
            address: "東京都渋谷区渋谷 1-13-5 大協渋谷ビル 1F",
            href: "https://maps.google.com/?q=炊火焼き+リリー+渋谷店",
          },
          {
            content: "澀谷SHIBUYA SKY展望台 欣賞夜景",
            icon: "🌃",
            address: "東京都渋谷区渋谷 2-24-12",
            href: "https://maps.google.com/?q=SHIBUYA+SKY",
          },
        ],
      },
    ],
    transit: {
      title: "進市區建議路線",
      segments: [
        {
          line: "包車",
          from: "東京灣東方飯店",
          to: "銀座飯店周邊",
          note: "09:30 出發",
        },
      ],
    },
  },
  {
    id: "2026-02-15",
    dateLabel: "2026/2/15",
    weekday: "日",
    title: "Day 4・慢遊東京",
    highlight: "中午銀座壽喜燒聚餐，下午自由散步或購物",
    icon: "☁️",
    weather: {
      icon: "🌤️",
      summary: "晴朗",
      high: 11,
      low: 1,
    },
    lodging: "三井花園飯店銀座五丁目",
    lodgingAddress: "東京都中央區銀座 5-13-15",
    lodgingHref: "https://maps.google.com/?q=Mitsui+Garden+Hotel+Ginza+Gochome",
    blocks: [
      {
        label: "早",
        entries: [
          {
            time: "早上",
            content: "銀座周邊逛街行程",
            icon: "🛍️",
          },
        ],
      },
      {
        label: "午餐",
        entries: [
          {
            time: "11:30",
            content: "人形町今半 銀座店壽喜燒（4 人）",
            icon: "🍲",
            priceLink: "/menu/imahan",
            priceLabel: "預算 ¥11,314/人",
          },
          {
            time: "地址",
            content: "東京都中央區銀座 6-8-7 交詢ビル 5F（Google Maps）",
            icon: "📍",
            href: "https://maps.google.com/?q=6-8-7+Ginza%2C+Chuo+City%2C+Tokyo+104-0061",
            address: "東京都中央區銀座 6-8-7 交詢ビル 5F",
          },
          {
            time: "套餐",
            content: "2 份午間特上壽喜燒套餐 + 2 份團體特上壽喜燒套餐",
            icon: "🍱",
          },
          {
            time: "付款",
            content: "TableCheck Pay 已綁信用卡（尾數 3502），用餐後自動扣款",
            icon: "💳",
          },
          {
            time: "備註",
            content: "用途填家族聚餐，座位指定 Mitsui Garden Ginza-Gochome",
            icon: "📝",
          },
        ],
      },
      {
        label: "下午",
        entries: [
          {
            time: "14:30",
            content: "雷門 (Kaminarimon) & 仲見世通 - 必拍巨大紅燈籠、逛商店街",
            icon: "🏮",
          },
          {
            time: "15:00",
            content: "淺草寺 (Senso-ji) - 參拜觀音、求籤、購買御守",
            icon: "⛩️",
          },
          {
            time: "15:30",
            content: "甜點 1：淺草花月堂 (Asakusa Kagetsudo) - 外酥內軟巨大菠蘿麵包",
            icon: "🥐",
          },
          {
            time: "16:00",
            content: "甜點 2：淺草そらつき - 網紅名店，必吃草莓銅鑼燒/大福",
            icon: "🍓",
          },
          {
            time: "16:30",
            content: "甜點 3：雷一茶 (Kaminari Issa) - 濃郁抹茶冰淇淋/抹茶啤酒",
            icon: "🍵",
          },
        ],
      },
      {
        label: "晚",
        entries: [
          {
            time: "18:30",
            content: "晚餐-鰻魚飯(浅草うな鐵 浅草駅前本店) 已預約",
            icon: "🍱",
            address: "東京都台東区花川戸 1-2-11",
            href: "https://maps.google.com/?q=%E6%B5%85%E8%8D%89%E3%81%86%E3%81%AA%E9%90%B5+%E6%B5%85%E8%8D%89%E9%A7%85%E5%89%8D%E6%9C%AC%E5%BA%97",
          },
          {
            content: "晴空塔夜景？逛藥妝",
            icon: "🌃",
          },
        ],
      },
      },
],
  },
{
  id: "2026-02-16",
    dateLabel: "2026/2/16",
      weekday: "一",
        title: "Day 5・東京車站採買 + 除夕蟹宴",
          highlight: "白天到東京車站與藥妝店採買，晚上 18:00 かに道樂聚餐",
            icon: "🎊",
              weather: {
    icon: "🌧️",
      summary: "小雨",
        high: 8,
          low: 2,
    },
  lodging: "三井花園飯店銀座五丁目",
    lodgingAddress: "東京都中央區銀座 5-13-15",
      lodgingHref: "https://maps.google.com/?q=Mitsui+Garden+Hotel+Ginza+Gochome",
        blocks: [
          {
            label: "早",
            entries: [
              { content: "早午餐 - 築地市場", icon: "🍣" },
              {
                content: "前往東京車站逛逛，挑選伴手禮",
                icon: "🎁",
              },
              {
                time: "地址",
                content: "東京都千代田區丸之內 1-9-1（東京車站）",
                icon: "📍",
                href: "https://maps.google.com/?q=1-9-1+Marunouchi+Chiyoda+City+Tokyo",
                address: "東京都千代田區丸之內 1-9-1",
              },
            ],
          },
          {
            label: "午",
            entries: [{ content: "藥妝行程，集中購買各自清單", icon: "💊" }],
          },
          {
            label: "晚",
            entries: [
              {
                time: "18:00",
                content: "かに道樂 銀座八丁目店（已預約）",
                icon: "🦀",
              },
              {
                time: "地址",
                content: "東京都中央區銀座 8-10-8 銀座八丁目 10 番ビル",
                icon: "📍",
                href: "https://maps.google.com/?q=%E9%8A%80%E5%BA%A78-10-8",
                address: "東京都中央區銀座 8-10-8 銀座八丁目 10 番ビル",
              },
              { content: "飯後散步或回飯店休息", icon: "🌙" },
            ],
          },
        ],
          notes: [
            "かに道樂：請準時抵達，若要改時間提前一天通知。",
            "東京車站地下街有 Gransta、Character Street，可順便拍照。",
          ],
            transit: {
    title: "除夕前自由行路線",
      segments: [
        {
          line: "JR 京葉線",
          from: "新浦安站",
          to: "東京站",
          note: "建議離峰時段避開人潮",
        },
        {
          line: "東京 Metro 各線",
          from: "東京站",
          to: "表參道 / 澀谷 / 表參道",
          note: "依照活動選擇，留意末班車",
        },
      ],
    },
},
{
  id: "2026-02-17",
    dateLabel: "2026/2/17",
      weekday: "二",
        title: "Day 6・返回台灣",
          highlight: "8:00 包車前往羽田機場，下午返台",
            icon: "🧳",
              weather: {
    icon: "⛅",
      summary: "多雲時晴",
        high: 7,
          low: 1,
    },
  blocks: [
    {
      label: "早",
      entries: [
        { time: "早餐", content: "飯店早餐", icon: "🥐" },
        { time: "08:00", content: "包車前往羽田機場", icon: "🚐" },
      ],
    },
    {
      label: "午",
      entries: [
        {
          time: "12:15",
          content: "EVA Air BR191 羽田 T3 起飛，飛行 3h50m",
          icon: "🛫",
        },
        {
          time: "15:05",
          content: "抵達台北松山 (T1)，歡迎回家！",
          icon: "🛬",
        },
      ],
    },
  ],
    transit: {
    title: "飯店 → 羽田機場 → 松山",
      segments: [
        {
          line: "包車",
          from: "三井花園飯店銀座五丁目",
          to: "羽田機場第3航廈",
          note: "08:00 出發",
        },
      ],
    },
},
];

export const lodgingInfo = {
  name: "東京灣東方飯店 (Tokyo Bay Oriental Hotel)",
  address: "〒279-0013 千葉縣浦安市日之出 2-6-1",
  phone: "+81 47-350-8111",
  mapUrl: "https://maps.google.com/?q=Tokyo%20Bay%20Oriental%20Hotel",
  nights: "2/12 - 2/16",
  note: "可搭乘利木津巴士或迪士尼接駁，入住當天 15:00 後可取得房卡。",
  shuttleTimetableUrl:
    "https://www.oriental-hotel.co.jp/zhch/images/home/timeshuttle.pdf?20250606",
};

export const transitResources = [
  {
    title: "東京 Metro 路線圖",
    description: "查詢地鐵路線、首末班車、沿站景點。",
    href: "https://www.tokyometro.jp/lang_en/station/index.html",
  },
  {
    title: "Google Maps 大眾運輸",
    description: "實時路線與步行導航，支援 Apple / Android。",
    href: "https://maps.google.com",
  },
];

export function getDayPlan(dayId: string) {
  return itinerary.find((day) => day.id === dayId);
}
