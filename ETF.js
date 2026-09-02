// ETF.js
// 여기에 코인 카드를 하나씩 추가하면 ETF.html에 나타납니다.
//
// rank        : Coin 클릭 시 1, 2, 3... 빠른 숫자 순
// price       : Price 클릭 시 $ 높은 순
// change24h   : 24h % 클릭 시 상승률 높은 순
// change7d    : 7D % 클릭 시 상승률 높은 순
// marketCap   : ETF Market Cap 클릭 시 큰 순
// volume      : ETF Volume (24h) 클릭 시 큰 순
// name, symbol, image : 카드에 표시
//
// 예시 (지금은 비워 둠 — 주석을 해제하거나 아래에 객체를 추가하세요)
// {
//     rank: 1,
//     name: "Bitcoin",
//     symbol: "BTC",
//     price: 65003,
//     change24h: 1.2,
//     change7d: 4.8,
//     marketCap: 1304069110041,
//     volume: 15304243951,
//     image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
// }

const etfList = [

];

window.etfList = etfList;
console.log("✅ ETF.js 로드 완료! 총 " + etfList.length + "개 카드");
