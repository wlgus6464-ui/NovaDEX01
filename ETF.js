// ETF.js
// CoinGecko 시가총액 1~20위 (2026-09-02)
// 숫자에는 쉼표와 %를 넣지 마세요.

const etfList = [
    {
        rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        price: 77507.11,
        change24h: 1.4,
        change7d: 2.0,
        marketCap: 1556238190141,
        volume: 30759628108,
        image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
    },
    {
        rank: 2,
        name: "Ethereum",
        symbol: "ETH",
        price: 2415.69,
        change24h: 2.2,
        change7d: 2.0,
        marketCap: 291533689237,
        volume: 13447134838,
        image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
    },
    {
        rank: 3,
        name: "Tether",
        symbol: "USDT",
        price: 0.9996,
        change24h: 0.0,
        change7d: 0.0,
        marketCap: 183299881667,
        volume: 54458004460,
        image: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661"
    },
    {
        rank: 4,
        name: "BNB",
        symbol: "BNB",
        price: 687.44,
        change24h: 0.9,
        change7d: 1.4,
        marketCap: 91533790811,
        volume: 817586804,
        image: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
    },
    {
        rank: 5,
        name: "XRP",
        symbol: "XRP",
        price: 1.35,
        change24h: 2.3,
        change7d: 6.8,
        marketCap: 84837036940,
        volume: 2353937733,
        image: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442"
    },
    {
        rank: 6,
        name: "USDC",
        symbol: "USDC",
        price: 0.9998,
        change24h: 0.0,
        change7d: 0.0,
        marketCap: 73621244840,
        volume: 16244020974,
        image: "https://coin-images.coingecko.com/coins/images/6319/large/USDC.png?1769615602"
    },
    {
        rank: 7,
        name: "Solana",
        symbol: "SOL",
        price: 100.32,
        change24h: 3.2,
        change7d: 2.9,
        marketCap: 58714909218,
        volume: 3648638500,
        image: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756"
    },
    {
        rank: 8,
        name: "TRON",
        symbol: "TRX",
        price: 0.3217,
        change24h: 3.0,
        change7d: 4.3,
        marketCap: 30541546331,
        volume: 609075365,
        image: "https://coin-images.coingecko.com/coins/images/1094/large/photo_2026-04-13_09-59-16.png?1776048311"
    },
    {
        rank: 9,
        name: "Figure Heloc",
        symbol: "FIGR_HELOC",
        price: 1.05,
        change24h: 4.4,
        change7d: 3.5,
        marketCap: 23032966120,
        volume: 261146903,
        image: "https://coin-images.coingecko.com/coins/images/54458/large/figure-heloc.png"
    },
    {
        rank: 10,
        name: "Hyperliquid",
        symbol: "HYPE",
        price: 83.07,
        change24h: 1.6,
        change7d: 1.9,
        marketCap: 18478469328,
        volume: 1417266656,
        image: "https://coin-images.coingecko.com/coins/images/50882/large/hyperliquid.png"
    },
    {
        rank: 11,
        name: "Zcash",
        symbol: "ZEC",
        price: 837.11,
        change24h: 2.5,
        change7d: 6.6,
        marketCap: 14151673154,
        volume: 547915032,
        image: "https://coin-images.coingecko.com/coins/images/486/large/circle-zcash-color.png"
    },
    {
        rank: 12,
        name: "Dogecoin",
        symbol: "DOGE",
        price: 0.08142,
        change24h: 2.1,
        change7d: 6.3,
        marketCap: 12681572765,
        volume: 564396302,
        image: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409"
    },
    {
        rank: 13,
        name: "Rain",
        symbol: "RAIN",
        price: 0.01723,
        change24h: 3.4,
        change7d: 5.1,
        marketCap: 12224149159,
        volume: 41771920,
        image: "https://coin-images.coingecko.com/coins/images/65374/large/rain.png"
    },
    {
        rank: 14,
        name: "USDS",
        symbol: "USDS",
        price: 0.9998,
        change24h: 0.0,
        change7d: 0.0,
        marketCap: 9836521185,
        volume: 150737714,
        image: "https://coin-images.coingecko.com/coins/images/39926/large/usds.webp"
    },
    {
        rank: 15,
        name: "Monero",
        symbol: "XMR",
        price: 513.62,
        change24h: 1.0,
        change7d: 16.1,
        marketCap: 9656421909,
        volume: 148904013,
        image: "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png"
    },
    {
        rank: 16,
        name: "LEO Token",
        symbol: "LEO",
        price: 9.33,
        change24h: 0.6,
        change7d: 0.2,
        marketCap: 8586422341,
        volume: 278275,
        image: "https://coin-images.coingecko.com/coins/images/8418/large/leo-token.png"
    },
    {
        rank: 17,
        name: "Chainlink",
        symbol: "LINK",
        price: 11.24,
        change24h: 1.7,
        change7d: 2.0,
        marketCap: 8406631339,
        volume: 345463276,
        image: "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png"
    },
    {
        rank: 18,
        name: "WhiteBIT Coin",
        symbol: "WBT",
        price: 71.24,
        change24h: 1.6,
        change7d: 2.4,
        marketCap: 8402855168,
        volume: 89974800,
        image: "https://coin-images.coingecko.com/coins/images/27045/large/wbt_token.png"
    },
    {
        rank: 19,
        name: "Cardano",
        symbol: "ADA",
        price: 0.1981,
        change24h: 1.0,
        change7d: 6.5,
        marketCap: 7430600582,
        volume: 359929552,
        image: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png"
    },
    {
        rank: 20,
        name: "Stellar",
        symbol: "XLM",
        price: 0.1762,
        change24h: 1.6,
        change7d: 4.8,
        marketCap: 6113458608,
        volume: 117699829,
        image: "https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png"
    }
];

window.etfList = etfList;
console.log("✅ ETF.js 로드 완료! 총 " + etfList.length + "개 카드");
