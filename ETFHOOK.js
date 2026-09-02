// ETFHOOK.js
// Coin / Price 정렬에서는 안 보임
// 24h % / 7D % / ETF Market Cap / ETF Volume (24h) 를 눌렀을 때만 표 맨 위에 붙음
// ETF.js 와 같은 형식, 항목 2개

const etfHookList = [
    {
        rank: 1,
        name: "Hook One",
        symbol: "HOOK1",
        price: 0,
        change24h: 50,
        change7d: 720,
        marketCap: 0,
        volume: 0,
        image: ""
    },
    {
        rank: 2,
        name: "Hook Two",
        symbol: "HOOK2",
        price: 0,
        change24h: 70,
        change7d: 500,
        marketCap: 0,
        volume: 0,
        image: ""
    }
];

window.etfHookList = etfHookList;
console.log("✅ ETFHOOK.js 로드 완료! 총 " + etfHookList.length + "개");
