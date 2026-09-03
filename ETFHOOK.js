// ETFHOOK.js
// Coin / Price 정렬에서는 안 보임
// 24h % / 7D % / ETF Market Cap / ETF Volume (24h) 를 눌렀을 때만 표 맨 위에 붙음
// 항목을 누르면 ETFHOOK.html 로 이동
//
// 차트 규칙
// chartTo 는 항상 오늘 날짜 (지금은 09/03/2026)
// chartLabels / volumeBars 는 매번 랜덤 생성
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
        etfMarketCap: 19038203,
        etfVolume: 102410470,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/36277.png",
        chartFrom: "11/20/2025",
        chartTo: "09/03/2026",
        lastVolumeLabel: "80.901M",
        chartLabels: [
            "Nov 20", "Nov 23", "Nov 26", "Nov 29", "Dec 2", "Dec 5", "Dec 8", "Dec 11", "Dec 14", "Dec 17", "Dec 20", "Dec 23", "Dec 26", "Dec 29", "Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16", "Jan 19", "Jan 22", "Jan 25", "Jan 28", "Jan 31", "Feb 3", "Feb 6", "Feb 9", "Feb 12", "Feb 15", "Feb 18", "Feb 21", "Feb 24", "Feb 27", "Mar 2", "Mar 5", "Mar 8", "Mar 11", "Mar 14", "Mar 17", "Mar 20", "Mar 23", "Mar 26", "Mar 29", "Apr 1", "Apr 4", "Apr 7", "Apr 10", "Apr 13", "Apr 16", "Apr 19", "Apr 22", "Apr 25", "Apr 28", "May 1", "May 4", "May 7", "May 10", "May 13", "May 16", "May 19", "May 22", "May 25", "May 28", "May 31", "Jun 3", "Jun 6", "Jun 9", "Jun 12", "Jun 15", "Jun 18", "Jun 21", "Jun 24", "Jun 27", "Jun 30", "Jul 3", "Jul 6", "Jul 9", "Jul 12", "Jul 15", "Jul 18", "Jul 21", "Jul 24", "Jul 27", "Jul 30", "Aug 2", "Aug 5", "Aug 8", "Aug 11", "Aug 14", "Aug 17", "Aug 20", "Aug 23", "Aug 26", "Aug 29", "Sep 1", "Sep 3"
        ],
        volumeBars: [
            14.143, 22.636, 15.141, 9.324, 17.338, 7.694, 7.632, 34.482, 23.679, 17.771, 24.835, 31.511, 9.424, 6.541, 13.93, 15.344, 14.996, 14.232, 23.958, 21.124, 11.675, 11.203, 19.793, 21.239, 23.245, 6.01, 22.385, 23.646, 7.315, 20.013, 7.569, 23.353, 8.124, 23.819, 20.346, 16.067, 9.432, 8.357, 8.097, 9.832, 23.477, 11.475, 9.793, 21.379, 7.806, 9.838, 19.908, 11.334, 7.622, 10.374, 12.691, 23.264, 16.342, 9.291, 22.352, 10.491, 19.31, 9.539, 21.879, 13.586, 6.697, 10.291, 10.626, 16.736, 9.158, 7.238, 16.069, 17.057, 22.512, 6.298, 30.023, 9.173, 16.299, 12.519, 23.649, 18.442, 24.526, 6.322, 18.617, 6.383, 14.68, 11.74, 7.355, 19.266, 19.268, 20.279, 12.333, 22.215, 13.509, 21.543, 17.249, 16.488, 7.444, 80.901, 19.108, 19.231, 13.929
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
        etfMarketCap: 166967000,
        etfVolume: 43725000,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/39377.png",
        chartFrom: "11/20/2025",
        chartTo: "09/03/2026",
        lastVolumeLabel: "71.4M",
        chartLabels: [
            "Nov 20", "Nov 23", "Nov 26", "Nov 29", "Dec 2", "Dec 5", "Dec 8", "Dec 11", "Dec 14", "Dec 17", "Dec 20", "Dec 23", "Dec 26", "Dec 29", "Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16", "Jan 19", "Jan 22", "Jan 25", "Jan 28", "Jan 31", "Feb 3", "Feb 6", "Feb 9", "Feb 12", "Feb 15", "Feb 18", "Feb 21", "Feb 24", "Feb 27", "Mar 2", "Mar 5", "Mar 8", "Mar 11", "Mar 14", "Mar 17", "Mar 20", "Mar 23", "Mar 26", "Mar 29", "Apr 1", "Apr 4", "Apr 7", "Apr 10", "Apr 13", "Apr 16", "Apr 19", "Apr 22", "Apr 25", "Apr 28", "May 1", "May 4", "May 7", "May 10", "May 13", "May 16", "May 19", "May 22", "May 25", "May 28", "May 31", "Jun 3", "Jun 6", "Jun 9", "Jun 12", "Jun 15", "Jun 18", "Jun 21", "Jun 24", "Jun 27", "Jun 30", "Jul 3", "Jul 6", "Jul 9", "Jul 12", "Jul 15", "Jul 18", "Jul 21", "Jul 24", "Jul 27", "Jul 30", "Aug 2", "Aug 5", "Aug 8", "Aug 11", "Aug 14", "Aug 17", "Aug 20", "Aug 23", "Aug 26", "Aug 29", "Sep 1", "Sep 3"
        ],
        volumeBars: [
            23.248, 6.425, 9.317, 17.726, 22.012, 23.271, 16.821, 18.335, 34.746, 21.865, 11.592, 21.297, 22.884, 23.301, 18.571, 10.651, 11.625, 23.183, 8.56, 18.015, 6.884, 6.581, 15.113, 13.37, 22.496, 12.728, 11.352, 15.776, 18.118, 7.586, 12.403, 13.25, 23.139, 13.212, 22.119, 15.839, 11.909, 25.443, 15.638, 17.647, 34.486, 13.393, 22.578, 21.238, 15.431, 23.843, 14.515, 17.579, 20.115, 16.951, 6.327, 17.422, 9.085, 13.819, 6.754, 12.341, 9.894, 21.592, 10.975, 14.459, 12.194, 22.651, 6.689, 37.281, 9.658, 12.884, 18.926, 10.482, 26.793, 17.984, 22.009, 7.022, 32.866, 30.761, 35.793, 17.376, 21.235, 15.622, 12.161, 36.719, 12.838, 9.159, 22.075, 12.517, 15.231, 11.0, 21.097, 18.54, 23.528, 13.303, 19.71, 17.804, 24.911, 71.4, 15.318, 8.752, 21.564
        ],
        link: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-SKR"
    }
];

window.etfHookList = etfHookList;
console.log("✅ ETFHOOK.js 로드 완료! 총 " + etfHookList.length + "개");
