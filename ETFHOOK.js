// ETFHOOK.js
// Coin / Price 정렬에서는 안 보임
// 24h % / 7D % / ETF Market Cap / ETF Volume (24h) 를 눌렀을 때만 표 맨 위에 붙음
// 항목을 누르면 ETFHOOK.html 로 이동
// 카드 제목을 누르면 각 항목의 link 로 이동
//
// 차트 규칙
// chartTo 는 항상 오늘 날짜 (지금은 09/08/2026)
// lastVolumeLabel 은 volumeBars 최댓값
const etfHookList = [
    {
        id: "hook1",
        rank: 842,
        name: "Bitlayer",
        symbol: "BTR",
        price: 0.07278,
        change24h: -64.2,
        change7d: 65.7,
        marketCap: 19038203,
        volume: 102410470,
        etfMarketCap: 903820300,
        etfVolume: 8241047000,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/36277.png",
        chartFrom: "11/20/2025",
        chartTo: "09/08/2026",
        lastVolumeLabel: "8.021B",
        chartLabels: [
            "Nov 20", "Nov 23", "Nov 26", "Nov 29", "Dec 2", "Dec 5", "Dec 8", "Dec 11", "Dec 14", "Dec 17", "Dec 20", "Dec 23", "Dec 26", "Dec 29", "Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16", "Jan 19", "Jan 22", "Jan 25", "Jan 28", "Jan 31", "Feb 3", "Feb 6", "Feb 9", "Feb 12", "Feb 15", "Feb 18", "Feb 21", "Feb 24", "Feb 27", "Mar 2", "Mar 5", "Mar 8", "Mar 11", "Mar 14", "Mar 17", "Mar 20", "Mar 23", "Mar 26", "Mar 29", "Apr 1", "Apr 4", "Apr 7", "Apr 10", "Apr 13", "Apr 16", "Apr 19", "Apr 22", "Apr 25", "Apr 28", "May 1", "May 4", "May 7", "May 10", "May 13", "May 16", "May 19", "May 22", "May 25", "May 28", "May 31", "Jun 3", "Jun 6", "Jun 9", "Jun 12", "Jun 15", "Jun 18", "Jun 21", "Jun 24", "Jun 27", "Jun 30", "Jul 3", "Jul 6", "Jul 9", "Jul 12", "Jul 15", "Jul 18", "Jul 21", "Jul 24", "Jul 27", "Jul 30", "Aug 2", "Aug 5", "Aug 8", "Aug 11", "Aug 14", "Aug 17", "Aug 20", "Aug 22", "Aug 25", "Aug 29", "Sep 1", "Sep 3", "Sep 6", "Sep 8"
        ],
        volumeBars: [
            2.381, 3.646, 3.303, 3.695, 1.861, 3.634, 3.679, 1.604, 1.127, 1.321, 0.68, 2.773, 1.899, 3.584, 1.998, 2.726, 1.034, 3.908, 3.647, 0.893, 0.628, 3.966, 2.44, 2.869, 0.973, 3.468, 2.491, 1.617, 2.129, 2.159, 2.45, 1.875, 3.921, 3.356, 2.167, 3.672, 0.508, 0.618, 2.902, 2.691, 1.979, 0.582, 2.718, 1.712, 2.894, 2.233, 0.734, 1.604, 1.759, 0.866, 1.837, 1.123, 2.954, 0.731, 2.754, 0.586, 3.219, 3.477, 0.78, 0.947, 2.561, 3.376, 2.71, 1.888, 2.226, 1.319, 0.76, 3.117, 1.648, 2.129, 1.808, 1.81, 0.814, 3.449, 1.8, 3.474, 3.421, 3.749, 1.328, 3.327, 2.754, 3.777, 2.13, 2.331, 3.254, 2.301, 3.786, 0.673, 2.864, 1.969, 3.857, 3.516, 8.021, 2.958, 1.248, 3.575, 2.539, 0.31, 3.98
        ],
        link: "https://www.bithumb.com/react/trade/order/BTR-KRW"
    },
    {
        id: "hook2",
        rank: 189,
        name: "Seeker",
        symbol: "SKR",
        price: 0.02377,
        change24h: 3.0,
        change7d: 188.9,
        marketCap: 166967000,
        volume: 43725000,
        etfMarketCap: 16696700000,
        etfVolume: 5745000000,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/39377.png",
        chartFrom: "11/20/2025",
        chartTo: "09/08/2026",
        lastVolumeLabel: "5.74B",
        chartLabels: [
            "Nov 20", "Nov 23", "Nov 26", "Nov 29", "Dec 2", "Dec 5", "Dec 8", "Dec 11", "Dec 14", "Dec 17", "Dec 20", "Dec 23", "Dec 26", "Dec 29", "Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16", "Jan 19", "Jan 22", "Jan 25", "Jan 28", "Jan 31", "Feb 3", "Feb 6", "Feb 9", "Feb 12", "Feb 15", "Feb 18", "Feb 21", "Feb 24", "Feb 27", "Mar 2", "Mar 5", "Mar 8", "Mar 11", "Mar 14", "Mar 17", "Mar 20", "Mar 23", "Mar 26", "Mar 29", "Apr 1", "Apr 4", "Apr 7", "Apr 10", "Apr 13", "Apr 16", "Apr 19", "Apr 22", "Apr 25", "Apr 28", "May 1", "May 4", "May 7", "May 10", "May 13", "May 16", "May 19", "May 22", "May 25", "May 28", "May 31", "Jun 3", "Jun 6", "Jun 9", "Jun 12", "Jun 15", "Jun 18", "Jun 21", "Jun 24", "Jun 27", "Jun 30", "Jul 3", "Jul 6", "Jul 9", "Jul 12", "Jul 15", "Jul 18", "Jul 21", "Jul 24", "Jul 27", "Jul 30", "Aug 2", "Aug 5", "Aug 8", "Aug 11", "Aug 14", "Aug 17", "Aug 20", "Aug 22", "Aug 25", "Aug 29", "Sep 1", "Sep 3", "Sep 6", "Sep 8"
        ],
        volumeBars: [
            1.831, 2.213, 1.304, 1.715, 1.104, 1.174, 1.702, 2.856, 0.699, 1.367, 1.08, 2.34, 2.828, 2.535, 2.704, 1.2, 0.885, 0.939, 1.77, 2.713, 2.452, 2.399, 1.56, 1.192, 2.259, 2.413, 1.669, 2.402, 1.907, 1.477, 0.679, 1.603, 1.172, 0.861, 1.186, 1.452, 2.675, 1.791, 1.687, 1.806, 1.266, 1.29, 1.495, 1.347, 2.829, 2.67, 0.519, 1.645, 0.545, 2.577, 0.445, 1.348, 1.242, 2.18, 2.635, 1.151, 1.52, 1.507, 1.092, 2.602, 2.366, 1.035, 0.975, 1.642, 2.25, 1.04, 0.774, 2.766, 1.329, 2.495, 1.986, 1.97, 2.485, 1.287, 2.043, 2.46, 2.04, 0.615, 1.455, 1.368, 0.655, 1.028, 2.076, 1.598, 1.442, 1.677, 1.829, 1.561, 1.978, 1.472, 2.614, 1.028, 1.011, 5.74, 1.373, 0.735, 2.633, 0.22, 2.81
        ],
        link: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-SKR"
    },
    {
        id: "hook3",
        rank: 880,
        name: "GRVT Token",
        symbol: "GRVT",
        price: 0.1677,
        change24h: 2.4,
        change7d: 5.0,
        marketCap: 19161886,
        volume: 7377291,
        etfMarketCap: 1916180086,
        etfVolume: 8316020091,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/40814.png",
        mosaic: true,
        chartFrom: "11/20/2025",
        chartTo: "09/08/2026",
        lastVolumeLabel: "8.316B",
        chartLabels: [
            "Nov 20", "Nov 23", "Nov 26", "Nov 29", "Dec 2", "Dec 5", "Dec 8", "Dec 11", "Dec 14", "Dec 17", "Dec 20", "Dec 23", "Dec 26", "Dec 29", "Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16", "Jan 19", "Jan 22", "Jan 25", "Jan 28", "Jan 31", "Feb 3", "Feb 6", "Feb 9", "Feb 12", "Feb 15", "Feb 18", "Feb 21", "Feb 24", "Feb 27", "Mar 2", "Mar 5", "Mar 8", "Mar 11", "Mar 14", "Mar 17", "Mar 20", "Mar 23", "Mar 26", "Mar 29", "Apr 1", "Apr 4", "Apr 7", "Apr 10", "Apr 13", "Apr 16", "Apr 19", "Apr 22", "Apr 25", "Apr 28", "May 1", "May 4", "May 7", "May 10", "May 13", "May 16", "May 19", "May 22", "May 25", "May 28", "May 31", "Jun 3", "Jun 6", "Jun 9", "Jun 12", "Jun 15", "Jun 18", "Jun 21", "Jun 24", "Jun 27", "Jun 30", "Jul 3", "Jul 6", "Jul 9", "Jul 12", "Jul 15", "Jul 18", "Jul 21", "Jul 24", "Jul 27", "Jul 30", "Aug 2", "Aug 5", "Aug 8", "Aug 11", "Aug 14", "Aug 17", "Aug 20", "Aug 22", "Aug 25", "Aug 29", "Sep 1", "Sep 3", "Sep 6", "Sep 8"
        ],
                volumeBars: [
            4.366, 0.397, 2.006, 1.438, 0.424, 1.096, 0.164, 3.44, 3.908, 0.174, 3.706, 2.462, 2.046, 2.771, 3.444, 1.297, 3.602, 3.57, 3.262, 3.693, 1.065, 4.42, 2.13, 4.255, 1.335, 4.376, 0.935, 3.479, 0.828, 0.897, 1.105, 1.882, 4.098, 2.67, 2.002, 3.509, 3.81, 0.252, 3.883, 3.728, 1.486, 2.63, 1.806, 3.415, 4.117, 3.292, 3.052, 3.761, 4.088, 0.762, 0.466, 0.441, 1.284, 2.833, 4.047, 2.02, 0.753, 1.253, 3.87, 2.571, 4.002, 3.443, 3.173, 0.514, 1.096, 0.183, 0.714, 1.727, 1.329, 4.079, 2.319, 2.142, 1.762, 2.729, 2.276, 0.791, 0.58, 3.827, 4.418, 3.2, 4.205, 3.049, 4.443, 2.35, 0.965, 1.02, 2.576, 4.01, 3.305, 0.3, 2.649, 2.404, 1.564, 2.704, 2.049, 1.264, 2.029, 2.223, 8.116
        ],
        link: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-GRVT"
    }
];
window.etfHookList = etfHookList;
console.log("✅ ETFHOOK.js 로드 완료! 총 " + etfHookList.length + "개");
