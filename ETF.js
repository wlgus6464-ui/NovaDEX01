// ETF.js
// CoinGecko API 시가총액 1~20위 (2026-09-02 갱신)
// 숫자에는 쉼표와 %를 넣지 마세요. 하락은 음수.

const etfList = [
    {
        rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        price: 77424,
        change24h: -1.82,
        change7d: -2,
        marketCap: 1554375962663,
        volume: 30355845330,
        image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
    },
    {
        rank: 2,
        name: "Ethereum",
        symbol: "ETH",
        price: 2409.99,
        change24h: -2.58,
        change7d: -2.1,
        marketCap: 290783067741,
        volume: 13346637162,
        image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
    },
    {
        rank: 3,
        name: "Tether",
        symbol: "USDT",
        price: 0.999634,
        change24h: -0.01,
        change7d: 0,
        marketCap: 183310344163,
        volume: 54218017275,
        image: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661"
    },
    {
        rank: 4,
        name: "BNB",
        symbol: "BNB",
        price: 686.44,
        change24h: -0.89,
        change7d: -1.2,
        marketCap: 91400440815,
        volume: 828036447,
        image: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
    },
    {
        rank: 5,
        name: "XRP",
        symbol: "XRP",
        price: 1.34,
        change24h: -2.95,
        change7d: -6.4,
        marketCap: 84301046473,
        volume: 2260231248,
        image: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442"
    },
    {
        rank: 6,
        name: "USDC",
        symbol: "USDC",
        price: 0.999785,
        change24h: -0.01,
        change7d: 0,
        marketCap: 73635603430,
        volume: 16097161763,
        image: "https://coin-images.coingecko.com/coins/images/6319/large/USDC.png?1769615602"
    },
    {
        rank: 7,
        name: "Solana",
        symbol: "SOL",
        price: 99.8,
        change24h: -3.97,
        change7d: 3.1,
        marketCap: 58398649719,
        volume: 3582940965,
        image: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756"
    },
    {
        rank: 8,
        name: "TRON",
        symbol: "TRX",
        price: 0.321717,
        change24h: -2.98,
        change7d: -4.6,
        marketCap: 30545811560,
        volume: 605851502,
        image: "https://coin-images.coingecko.com/coins/images/1094/large/photo_2026-04-13_09-59-16.png?1776048311"
    },
    {
        rank: 9,
        name: "Figure Heloc",
        symbol: "FIGR_HELOC",
        price: 1.046,
        change24h: 4.38,
        change7d: 3.5,
        marketCap: 23031681118,
        volume: 261137318,
        image: "https://coin-images.coingecko.com/coins/images/68480/large/figure.png?1755863954"
    },
    {
        rank: 10,
        name: "Hyperliquid",
        symbol: "HYPE",
        price: 83.05,
        change24h: -1.33,
        change7d: 1.7,
        marketCap: 18460675176,
        volume: 1390167441,
        image: "https://coin-images.coingecko.com/coins/images/50882/large/hyperliquid.jpg?1729431300"
    },
    {
        rank: 11,
        name: "Zcash",
        symbol: "ZEC",
        price: 836.28,
        change24h: -2.34,
        change7d: 6.8,
        marketCap: 14141334649,
        volume: 548605607,
        image: "https://coin-images.coingecko.com/coins/images/486/large/Brandmark-Yellow_%281%29.png?1785810558"
    },
    {
        rank: 12,
        name: "Dogecoin",
        symbol: "DOGE",
        price: 0.081564,
        change24h: -2.14,
        change7d: -5.8,
        marketCap: 12699735835,
        volume: 591922482,
        image: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409"
    },
    {
        rank: 13,
        name: "Rain",
        symbol: "RAIN",
        price: 0.01722675,
        change24h: 2.9,
        change7d: -3.9,
        marketCap: 12210524828,
        volume: 41630783,
        image: "https://coin-images.coingecko.com/coins/images/69134/large/Rain_logo_1_.png?1762952191"
    },
    {
        rank: 14,
        name: "USDS",
        symbol: "USDS",
        price: 0.999791,
        change24h: -0,
        change7d: 0,
        marketCap: 9835523609,
        volume: 149722007,
        image: "https://coin-images.coingecko.com/coins/images/39926/large/usds.webp?1726666683"
    },
    {
        rank: 15,
        name: "Monero",
        symbol: "XMR",
        price: 519.51,
        change24h: 0.79,
        change7d: 17,
        marketCap: 9767084321,
        volume: 156089191,
        image: "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460"
    },
    {
        rank: 16,
        name: "LEO Token",
        symbol: "LEO",
        price: 9.3,
        change24h: -1.35,
        change7d: 0.3,
        marketCap: 8553229328,
        volume: 277461,
        image: "https://coin-images.coingecko.com/coins/images/8418/large/leo-token.png?1696508607"
    },
    {
        rank: 17,
        name: "WhiteBIT Coin",
        symbol: "WBT",
        price: 71.19,
        change24h: -2.01,
        change7d: -2.4,
        marketCap: 8396107175,
        volume: 89997470,
        image: "https://coin-images.coingecko.com/coins/images/27045/large/wbt_token.png?1696526096"
    },
    {
        rank: 18,
        name: "Chainlink",
        symbol: "LINK",
        price: 11.22,
        change24h: -2,
        change7d: -1.3,
        marketCap: 8394414336,
        volume: 354115755,
        image: "https://coin-images.coingecko.com/coins/images/877/large/Chainlink_Logo_500.png?1760023405"
    },
    {
        rank: 19,
        name: "Cardano",
        symbol: "ADA",
        price: 0.196561,
        change24h: -2.44,
        change7d: -6.7,
        marketCap: 7371105395,
        volume: 347857695,
        image: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090"
    },
    {
        rank: 20,
        name: "Stellar",
        symbol: "XLM",
        price: 0.175005,
        change24h: -1.8,
        change7d: -4.8,
        marketCap: 6072797398,
        volume: 118777599,
        image: "https://coin-images.coingecko.com/coins/images/100/large/fmpFRHHQ_400x400.jpg?1735231350"
    }
];

window.etfList = etfList;
console.log("✅ ETF.js 로드 완료! 총 " + etfList.length + "개");
