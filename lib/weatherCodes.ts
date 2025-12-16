type WeatherDescription = {
  icon: string;
  summary: string;
};

const weatherMappings: Array<{ codes: number[]; icon: string; summary: string }> = [
  { codes: [0], icon: "☀️", summary: "晴朗" },
  { codes: [1, 2], icon: "🌤️", summary: "晴時多雲" },
  { codes: [3], icon: "☁️", summary: "陰天" },
  { codes: [45, 48], icon: "🌫️", summary: "霧" },
  { codes: [51, 53, 55], icon: "🌦️", summary: "細雨" },
  { codes: [56, 57], icon: "🌧️", summary: "凍雨" },
  { codes: [61, 63, 65], icon: "🌧️", summary: "陣雨" },
  { codes: [66, 67], icon: "🌨️", summary: "冰霰" },
  { codes: [71, 73, 75], icon: "❄️", summary: "降雪" },
  { codes: [77], icon: "🌬️", summary: "飄雪" },
  { codes: [80, 81, 82], icon: "🌧️", summary: "豪雨" },
  { codes: [85, 86], icon: "❄️", summary: "大雪" },
  { codes: [95], icon: "⛈️", summary: "雷雨" },
  { codes: [96, 99], icon: "⛈️", summary: "雷雨伴冰雹" },
];

export function describeWeatherCode(code: number): WeatherDescription {
  for (const entry of weatherMappings) {
    if (entry.codes.includes(code)) {
      return { icon: entry.icon, summary: entry.summary };
    }
  }
  return { icon: "🌤️", summary: "多雲" };
}
