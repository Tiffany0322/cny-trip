export type ScheduleEntry = {
  time?: string;
  content: string;
  icon?: string;
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
        entries: [{ content: "飯店附近商場逛街吃晚餐", icon: "🍜" }],
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
    blocks: [
      {
        label: "早",
        entries: [
          { content: "早餐 - 客美多咖啡", icon: "☕" },
          { content: "飯店接駁車前往迪士尼", icon: "🚎" },
          { content: "迪士尼 All day", icon: "🏰" },
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
    highlight: "行程彈性，可安排銀座逛街或 teamLab",
    icon: "🌸",
    weather: {
      icon: "🌦️",
      summary: "短暫陣雨",
      high: 9,
      low: 2,
    },
    lodging: "東京灣東方飯店",
    blocks: [
      {
        label: "全天",
        entries: [
          {
            content: "自由活動，建議：teamLab Planets、銀座、晴空塔",
            icon: "🗼",
          },
          {
            content: "想休息的人可以留在飯店附近慢慢逛",
            icon: "🛍️",
          },
        ],
      },
    ],
    notes: ["若想預約 teamLab，請提前一天確認時段。"],
    transit: {
      title: "進市區建議路線",
      segments: [
        {
          line: "飯店接駁巴士",
          from: "東京灣東方飯店",
          to: "新浦安站",
          note: "約 10 分鐘，班距 20 分",
        },
        {
          line: "JR 京葉線 / 武藏野線",
          from: "新浦安站",
          to: "東京站 / 銀座 / 舞濱",
          note: "往東京站約 17 分鐘",
        },
        {
          line: "東京 Metro 銀座線或半藏門線",
          from: "東京站 / 大手町",
          to: "銀座 / 晴空塔 / 表參道",
          note: "視目的地轉乘",
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
    lodging: "東京灣東方飯店",
    blocks: [
      {
        label: "早",
        entries: [
          { content: "自由活動，可視天氣決定去台場或築地", icon: "🌊" },
          { content: "若下雨就留在商場 / 飯店休息", icon: "☔" },
        ],
      },
      {
        label: "午餐",
        entries: [
          {
            time: "11:30",
            content: "人形町今半 銀座店壽喜燒（4人）",
            icon: "🍲",
          },
          {
            content: "地址：東京都中央區銀座 6-8-7 交詢ビル 5F",
            icon: "📍",
          },
          {
            content: "套餐：2 份午間特上壽喜燒套餐、2 份團體特上壽喜燒套餐",
            icon: "🍱",
          },
          {
            content: "付款：TableCheck Pay，已綁定信用卡（尾數 3502）",
            icon: "💳",
          },
          {
            content: "附註：用途寫家族聚餐，座位備註 Mitsui Garden Ginza-Gochome",
            icon: "📝",
          },
        ],
      },
    ],
    transit: {
      title: "慢遊建議路線",
      segments: [
        {
          line: "JR 京葉線",
          from: "新浦安站",
          to: "東京站",
          note: "尖峰班距 4-6 分鐘",
        },
        {
          line: "百合鷗號 / 臨海線",
          from: "新橋 / 新木場",
          to: "台場海濱公園",
          note: "往台場約 15 分鐘",
        },
      ],
    },
  },
  {
    id: "2026-02-16",
    dateLabel: "2026/2/16",
    weekday: "一",
    title: "Day 5・除夕晚餐",
    highlight: "白天自由活動，晚上除夕團圓餐",
    icon: "🎊",
    weather: {
      icon: "🌧️",
      summary: "小雨",
      high: 8,
      low: 2,
    },
    lodging: "東京灣東方飯店",
    blocks: [
      {
        label: "早",
        entries: [{ content: "自由活動（購物、咖啡廳、飯店休息）", icon: "🧋" }],
      },
      {
        label: "晚",
        entries: [{ content: "除夕晚餐！！", icon: "🍲" }],
      },
    ],
    notes: ["晚餐餐廳：TBD，由 Tiffany 當週再公布。"],
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
    highlight: "上午早餐後收拾行李，下午返台",
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
        entries: [{ content: "飯店早餐（行李打包、退房）", icon: "🥐" }],
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
          line: "利木津巴士 (羽田方向)",
          from: "東京灣東方飯店",
          to: "羽田機場第3航廈",
          note: "建議 08:30 前搭乘，車程約 40 分鐘",
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
