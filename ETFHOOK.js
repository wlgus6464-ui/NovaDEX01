// ETFHOOK.js
// Coin / Price 정렬에서는 안 보임
// 24h % / 7D % / ETF Market Cap / ETF Volume (24h) 를 눌렀을 때만 표 맨 위에 붙음
// 항목을 누르면 ETFHOOK.html 로 이동
//
// 차트 수정 방법
// chartFrom / chartTo : 상단 주황 날짜
// chartLabels         : 하단 X축 날짜 (막대 개수와 같게)
// volumeBars          : 각 막대 높이 (단위 M)
// lastVolumeLabel     : 범례 오른쪽 숫자

const etfHookList = [
    {
        id: "hook1",
        rank: 1,
        name: "Hook One",
        symbol: "HOOK1",
        price: 0,
        change24h: 0,
        change7d: 0,
        marketCap: 0,
        volume: 0,
        image: "",
        chartFrom: "11/20/2025",
        chartTo: "08/24/2026",
        lastVolumeLabel: "80.901M",
        chartLabels: [
            "Nov 20", "Nov 28", "Dec 6", "Dec 14", "Dec 22", "Dec 31",
            "Jan 7", "Jan 15", "Jan 23", "Jan 31", "Feb 8", "Feb 16",
            "Feb 24", "Mar 4", "Mar 12", "Mar 20", "Mar 28", "Apr 5",
            "Apr 13", "Apr 21", "Apr 29", "May 7", "May 15", "May 23",
            "May 31", "Jun 8", "Jun 16", "Jun 24", "Jul 2", "Jul 10",
            "Jul 18", "Jul 26", "Aug 3", "Aug 11", "Aug 16", "Aug 19",
            "Aug 21", "Aug 24"
        ],
        volumeBars: [
            26, 40, 12, 19, 17, 8,
            24, 12, 13, 36, 24, 12,
            8, 21, 10, 13, 8, 13,
            20, 13, 11, 20, 22, 13,
            9, 13, 13, 11, 9, 11,
            13, 11, 12, 8, 22, 66,
            80.901, 77
        ]
    },
    {
        id: "hook2",
        rank: 2,
        name: "Hook Two",
        symbol: "HOOK2",
        price: 0,
        change24h: 0,
        change7d: 0,
        marketCap: 0,
        volume: 0,
        image: "",
        chartFrom: "11/20/2025",
        chartTo: "08/24/2026",
        lastVolumeLabel: "80.901M",
        chartLabels: [
            "Nov 20", "Nov 28", "Dec 6", "Dec 14", "Dec 22", "Dec 31",
            "Jan 7", "Jan 15", "Jan 23", "Jan 31", "Feb 8", "Feb 16",
            "Feb 24", "Mar 4", "Mar 12", "Mar 20", "Mar 28", "Apr 5",
            "Apr 13", "Apr 21", "Apr 29", "May 7", "May 15", "May 23",
            "May 31", "Jun 8", "Jun 16", "Jun 24", "Jul 2", "Jul 10",
            "Jul 18", "Jul 26", "Aug 3", "Aug 11", "Aug 16", "Aug 19",
            "Aug 21", "Aug 24"
        ],
        volumeBars: [
            18, 22, 10, 14, 12, 7,
            16, 11, 9, 28, 18, 10,
            7, 15, 9, 11, 7, 12,
            16, 11, 9, 15, 17, 11,
            8, 11, 10, 9, 8, 10,
            11, 9, 10, 7, 20, 54,
            72, 68
        ]
    }
];

window.etfHookList = etfHookList;
console.log("✅ ETFHOOK.js 로드 완료! 총 " + etfHookList.length + "개");
