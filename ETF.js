// ETF.js
// 이 배열만 수정하면 ETF 시세표가 바뀝니다.
// rank: 기본 순서
// name / symbol / image / price / change24h / marketCap / volume
const etfList = [
    {
        rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        price: 65003,
        change24h: 1.2,
        marketCap: 1304069110041,
        volume: 15304243951,
        image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
    },
    {
        rank: 2,
        name: "Ethereum",
        symbol: "ETH",
        price: 1941.12,
        change24h: 3.5,
        marketCap: 234259095966,
        volume: 6342011407,
        image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
    },
    {
        rank: 3,
        name: "Tether",
        symbol: "USDT",
        price: 0.999219,
        change24h: 0.0,
        marketCap: 184013062984,
        volume: 28545443435,
        image: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661"
    },
    {
        rank: 4,
        name: "BNB",
        symbol: "BNB",
        price: 572.09,
        change24h: 0.6,
        marketCap: 76182769582,
        volume: 388074418,
        image: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
    },
    {
        rank: 5,
        name: "USDC",
        symbol: "USDC",
        price: 0.999721,
        change24h: 0.0,
        marketCap: 72561101103,
        volume: 6973498071,
        image: "https://coin-images.coingecko.com/coins/images/6319/large/USDC.png?1769615602"
    },
    {
        rank: 6,
        name: "XRP",
        symbol: "XRP",
        price: 1.11,
        change24h: 0.9,
        marketCap: 69197561583,
        volume: 613827445,
        image: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442"
    },
    {
        rank: 7,
        name: "Solana",
        symbol: "SOL",
        price: 76.18,
        change24h: 2.4,
        marketCap: 44410359213,
        volume: 1082111304,
        image: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756"
    },
    {
        rank: 8,
        name: "TRON",
        symbol: "TRX",
        price: 0.331591,
        change24h: 0.1,
        marketCap: 31461151008,
        volume: 266563318,
        image: "https://coin-images.coingecko.com/coins/images/1094/large/photo_2026-04-13_09-59-16.png?1776048311"
    },
    {
        rank: 9,
        name: "Dogecoin",
        symbol: "DOGE",
        price: 0.072798,
        change24h: 1.8,
        marketCap: 12444649497,
        volume: 539559582,
        image: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409"
    }
];

window.etfList = etfList;
console.log("✅ ETF.js 로드 완료! 총 " + etfList.length + "개 항목");
