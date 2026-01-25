export type Lodging = {
    name: string;
    address: string;
    phone: string;
    mapUrl: string;
    nights: string;
    note: string;
    shuttleTimetableUrl?: string; // Optional since not all hotels have shuttles
};

export const lodgingList: Lodging[] = [
    {
        name: "東京灣東方飯店 (Tokyo Bay Oriental Hotel)",
        address: "〒279-0013 千葉縣浦安市日之出 2-6-1",
        phone: "+81 47-350-8111",
        mapUrl: "https://maps.google.com/?q=Tokyo%20Bay%20Oriental%20Hotel",
        nights: "2/12 - 2/14 (2晚)",
        note: "可搭乘利木津巴士或迪士尼接駁，入住當天 15:00 後可取得房卡。",
        shuttleTimetableUrl:
            "https://www.oriental-hotel.co.jp/zhch/images/home/timeshuttle.pdf?20250606",
    },
    {
        name: "三井花園飯店銀座五丁目 (Mitsui Garden Hotel Ginza Gochome)",
        address: "東京都中央區銀座 5-13-15",
        phone: "+81 3-6226-5131",
        mapUrl: "https://maps.google.com/?q=Mitsui+Garden+Hotel+Ginza+Gochome",
        nights: "2/14 - 2/17 (3晚)",
        note: "位置便利，近銀座站。15:00 Check-in, 11:00 Check-out。",
    },
];
