export type BudgetEntry = {
    item: string;
    costNT?: number;
    costJPY?: number;
    costPerPersonNT?: number;
    costPerPersonJPY?: number;
    memo?: string;
};

export const budgetItems: BudgetEntry[] = [
    {
        item: "機票(長榮)",
        costPerPersonNT: 26413,
        memo: "記得幫阿姨補登",
    },
    {
        item: "住宿(東京灣東方飯店)-2晚",
        costNT: 12735,
        costJPY: 63163,
        costPerPersonNT: 3184,
        memo: "Agoda訂房",
    },
    {
        item: "住宿(東京)-3晚",
        costNT: 46553,
        costJPY: 58323.25,
        costPerPersonNT: 11638.25,
        costPerPersonJPY: 14580.8125,
        memo: "Booking訂房",
    },
    {
        item: "旅平險",
        costPerPersonNT: 1302,
        memo: "柔+媽+阿姨共3906",
    },
    {
        item: "儲值西瓜卡",
    },
    {
        item: "eSim",
    },
    {
        item: "Disney Land 門票",
        costNT: 7064,
        costPerPersonNT: 1766,
        memo: "KKDAY購買，刷黑狗",
    },
    {
        item: "涉谷sky門票",
    },
    {
        item: "銀座包車去羽田機場",
    },
];
