// trendingData.js
const trendingData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKZoQyhsuxeP60iXRTQQX7pUlvBcvTO230x8ta7Stqyb0X5GMw7K31sKJ&s=10",
        title: "Dexe (DEXE)",
        price: "$302B",
        startDate: "2026-07-24T00:00:00",
        endDate: "2026-07-31T23:59:59",
        prediction: "+260%",
        bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAz2lVSy2n8WzpLRzUNj4btnBWcxvC2P0o4xGg-3pcb0bTQtNVXTUgtq7&s=10",
        bannerText: "In the alt-coin market, some stocks are showing strength based on individual materials. While Bitcoin (BTC) does not have a clear direction, selective buying is flowing in, centering on artificial intelligence (AI), on-chain infrastructure, and governance-related stocks. DEXE showed the most prominent trend, rising 19.04 percent in the top 24 hours of increase based on the coin market cap on the 22nd. DEXE is a decentralized autonomous organization (DAO) governance tooling project, which recently rebounded with the listing of virtual asset (cryptocurrency) exchanges such as CEX and expectations for upgrading DAO governance. The flow to incorporate AI agents into DAO operations is also cited as a factor that strengthened related narratives.",
        participateLink: "https://www.bithumb.com/react/trade/order/DEXE-KRW"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhpEQds0CNKnT7pxYzb9KU46UhAHkY-Z7J9hlqHgAYXfFhGMuKY3VOIE&s=10",
        title: "Euler (EUL)",
        price: "$225B",
        startDate: "2026-07-24T00:00:00",
        endDate: "2026-07-31T23:59:59",
        prediction: "+180%",
        bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNEDmCOfrUxAwoPFqrS2GoZIvpmRXt21IjS0Fgymj7oAjXzBKV5VdyX4&s=10",
        bannerText: "Euler (EUL) is a digital token of the Euler platform, a decentralized finance (DeFi) protocol built on Ethereum. Users can borrow and lend various digital assets through functions such as unauthorized lending and efficient risk management. The EUL token is used for governance, allowing holders to vote on platform decisions and to use it in a reward structure. The platform was founded in 2021 by Michael Bentley, Doug Hoyte, and Jack Prior. Euler (EUL) is a digital token that operates within the Euler ecosystem, a platform designed primarily for various financial activities in decentralized finance (DeFi). As an encryption token, EUL functions as the default utility token of the Euler platform. The token is built on Ethereum and follows the widely accepted ERC-20 token standard that guarantees compatibility with a wide range of wallets and exchanges.",
        participateLink: "https://www.bithumb.com/react/trade/order/EUL-KRW"
    },
    {
        img: "https://public.bnbstatic.com/static/content/square/images/2fd06595c2c343298c933984d2492fb5.png",
        title: "Pudgy Penguins (PENGU)",
        price: "$223B",
        startDate: "2026-07-27T00:00:00",
        endDate: "2026-08-03T23:59:59",
        prediction: "+255%",
        bannerImage: "https://img.bgstatic.com/multiLang/image/social/41085086361f5f913e0fc3ad474cf5911734708802965.jpeg",
        bannerText: "The Pudgy Penguins ecosystem has recently experienced large price volatility and increased trading volumes, which on-chain data has attributed to both underlying growth and technical market mechanisms. While some analysts point to the timing of the token unlocking as the main reason for the recent liquidity, others are highlighting the project's recent expansion into the mainstream financial and gaming sectors. The PENGU token, a cryptocurrency endemic to the Pudgy Penguins ecosystem, is up more than 30% over the past month since hitting a 12-month low earlier this year.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-MIRA"
    },
    {
        img: "https://img.magnific.com/free-vector/modern-coming-soon-new-arrival-background-with-spot-light-effect_1017-57496.jpg?semt=ais_hybrid&w=740&q=80",
        title: "COMING SOON",
        price: "$0",
        startDate: "2026-08-03T23:59:59",
        endDate: "2026-08-10T23:59:59",
        prediction: "+282%",
        bannerImage: "https://img.magnific.com/free-vector/modern-coming-soon-new-arrival-background-with-spot-light-effect_1017-57496.jpg?semt=ais_hybrid&w=740&q=80",
        bannerText: "We are looking for a new CRYPTO. A moment would be appreciated.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-ALGO"
    }
];
// 코인별 HOT TOPIC 데이터
const coinHotTopics = {
    'BTC': {
        title: "Live updates: Bitcoin rises near $65,000 as markets get more good inflation news",
        comment: "U.S. spot bitcoin ETFs took in about $181 million on Tuesday.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd42h6QfmxemDH7cIsyg6KBons5RVGKWvgsZELyd0MlBAGqGykX2R-7Lk&s=10",
        link: "https://www.coindesk.com/tech/2026/07/15/live-markets-bitcoin-ether-etfs-draw-inflows-as-majors-rise-as-much-as-5"
    },
    'ETH': {
        title: "Ether outpaces bitcoin as ETF flows split and Ethereum activity jumps 41% on-week",
        comment: "Ether is outperforming bitcoin as ETF flows, spot prices and a 41% jump in Ethereum transactions move in the same direction for the first time in months.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczWlWkTWl3dv0CH6MfeCs9xthUxNzclk8TLQtRYaZjZFvQOnr2CchoORa&s=10",
        link: "https://www.coindesk.com/markets/2026/04/14/ether-outpaces-bitcoin-as-etf-flows-split-and-ethereum-activity-jumps-41-on-week"
    },
    'XRP': {
        title: "“MoneyGram, Figure Markets, and Range to Help Secure the Stellar Network by joining as Tier 1 Validators",
        comment: "The Stellar Development Foundation (SDF), the non-profit organization that supports the development and growth of Stellar, the blockchain network built to run regulated finance, today announced that MoneyGram, Figure Markets, and Range will operate Tier 1 validators on the Stellar network. The addition of these three organizations, spanning capital markets, global money movement, and blockchain security infrastructure, marks a significant step in expanding the decentralization and resilience of the network’s core infrastructure.",
        img: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/cab834e0c314ae2fb0eff1edc48226a2c1c6d560-1238x697.png?w=748&h=421&auto=format&dpr=2",
        link: "https://stellar.org/press/moneygram-figure-markets-and-range-to-help-secure-the-stellar-network-by-joining-as-tier-1-validators?utm_source=chatgpt.com"
    },
    'DOGE': {
        title: "Global Crypto Card Spending Surges to $18 Billion Annually as House of Doge Targets Integration of Dogecoin Into Traditional Payment Rails",
        comment: "Explosive growth in crypto card usage signals a new era of real-world digital currency adoption.",
        img: "https://ml.globenewswire.com/Resource/Download/24d06781-2cc4-482a-9af0-c899b182f533?size=3",
        link: "https://www.globenewswire.com/news-release/2026/03/12/3254667/0/en/Global-Crypto-Card-Spending-Surges-to-18-Billion-Annually-as-House-of-Doge-Targets-Integration-of-Dogecoin-Into-Traditional-Payment-Rails.html"
    },
    'SHIB': {
        title: "Rakuten Wallet adds XRP and SHIB—exchanges from Rakuten Points are also possible",
        comment: "On the 15th, Rakuten Wallet added five assets—XRP, DOGE, XLM, SHIB, and TON—to spot trading, and through its share in Rakuten Cash, it also supports payments at Rakuten Pay merchants﻿‍",
        img: "https://crypto-economy.com//wp-content/uploads/2026/06/Rakuten-Wallet-Launches-SHIB-and-DOGE-Giveaway.jpg",
        link: "https://jinacoin.ne.jp/kuratenpay-xrp-doge-20260415/?utm_source=chatgpt.com"
    },
    'BABY.D': {
        title: "BabyDoge Burns 75,000,000,000 Tokens in April as Activity-Driven Mechanism Continues",
        comment: "BabyDoge burned 75.15 billion tokens in April through trading activity, marking a shift from large coordinated burns to continuous, ecosystem-driven deflation.",
        img: "https://coinremark.com/wp-content/uploads/ChatGPT-Image-Jan-7-2026-11_14_30-AM-1.png",
        link: "https://coinremark.com/babydoge-burns-75000000000-tokens-in-april-as-activity-driven-mechanism-continues/"
    },
    'BTT': {
        title: "4BitTorrent Launches BTTInferGrid: The Decentralized Infrastructure Layer for Scalable AI Inference",
        comment: "BTTInferGrid is a decentralized GPU computing network purpose-built for AI inference. By bridging the global supply of idle GPU capacity with the surging demand for AI workloads, BTTInferGrid delivers an open-access, verifiably secure, and pay-as-you-go computing infrastructure for AI developers worldwide.   ",
        img: "https://ml.globenewswire.com/Resource/Download/09ab6648-d83b-46f3-94c0-13a29ef12639/hdhgds.jpg",
        link: "https://www.globenewswire.com/news-release/2026/06/17/3313261/0/en/4BitTorrent-Launches-BTTInferGrid-The-Decentralized-Infrastructure-Layer-for-Scalable-ai-Inference.html"
    },
    'ALT': {
        title: "From Infrastructure to Onchain Finance: Kaia’s 2025 Recap and 2026 Direction",
        comment: "If 2025 was about foundation, 2026 is about activating capital. We are shifting from infrastructure to execution, creating a venue where institutional capital meets retail agility. Learn how LINE integration, DeFi primitives, and RWAs are positioning Kaia as the engine for Asian capital markets.",
        img: "https://storage.ghost.io/c/e5/2f/e52fcac7-62db-40bd-a733-39d00209d57d/content/images/size/w2000/2026/02/1-20260106_2025-recap---2026-plans.png",
        link: "https://blog.kaia.io/from-infrastructure-to-onchain-finance-kaias-2025-recap-and-2026-direction/"
    },
    'ETC': {
        title: "Ethereum Classic Reinforces Core Infrastructure with Ongoing Network and Development Support",
        comment: "Ethereum Classic announced continued support for its Core-Geth client.",
        img: "https://ethereumclassic.org/static/3de952ceaed70ac85477b219e7bc5ed0/105d8/banner.png",
        link: "https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre"
    }
};
// Related Articles (각 코인당 1개)
const coinRelatedArticles = {
    'BTC': [{ title: "Bitcoin ETF Inflows Surpass $10B This Month", link: "#" }],
    'ETH': [{ title: "The Arbitrum Foundation 2025 Transparency Report", link: "https://blog.arbitrum.foundation/the-arbitrum-foundation-2025-transparency-report-the-year-of-institutional-adoption" }],
    'XRP': [{ title: "The headline number in Q1 was tokenized real-world assets on Stellar. Shortly after quarter-end, onchain RWAs crossed $2 billion.", link: "https://stellar.org/blog/foundation-news/q1-2026-execution-at-network-scale?utm_source=chatgpt.com" }],
    'DOGE': [{ title: "From Meme Coin to Mass Retail: BONK Announces Strategic Partnership With Paxos", link: "https://chainwire.org/2026/04/30/from-meme-coin-to-mass-retail-bonk-announces-strategic-partnership-with-paxos/" }],
    'SHIB': [{ title: "Shiba Inu Holder Growth Sparks Controversy as Holder Count Surpasses 1.67M.", link: "https://cryptonews.net/news/altcoins/33114053/?utm_source=chatgpt.com" }],
    'BABY.D': [{ title: "Los holders de Baby Doge Coin ya poseen más de $3,9 billones", link: "https://es.beincrypto.com/holders-baby-doge-coin-poseen-mas-39-billones/?utm_source=chatgpt.com" }],
    'BTT': [{ title: "BitTorrent Chain Surpasses 335 Million Transactions as On-Chain Activity Continues to Grow", link: "https://bttcscan.com/txs?utm_source=chatgpt.com" }],
    'ALT': [{ title: "Kaia Mini Dapp on LINE Messenger attracts 35 million users in its first month of launch", link: "https://blog.kaia.io/kaia-mini-dapp-on-line-messenger-attracts-35-million-users-in-its-first-month-of-launch/" }],
    'ETC': [{ title: "Ethereum Classic Reinforces Core Infrastructure", link: "#" }]
};
// Manual News (각 코인당 5개 이상)
const manualNews = {
    'BTC': [
        { title: "Bitcoin ETF Inflows Hit Record High", link: "#", time: "1 hour ago" },
        { title: "Why Institutions Are Betting Big on Bitcoin", link: "#", time: "3 hours ago" },
        { title: "Bitcoin Halving Cycle Analysis 2026", link: "#", time: "12 hours ago" },
        { title: "Bitcoin Surpasses $100K Milestone", link: "#", time: "1 day ago" },
        { title: "BTC Dominance Remains Strong", link: "#", time: "2 days ago" }
    ],
    'ETH': [
        { title: "Ether outpaces bitcoin as ETF flows split and Ethereum activity jumps 41% on-week", link: "https://www.coindesk.com/markets/2026/04/14/ether-outpaces-bitcoin-as-etf-flows-split-and-ethereum-activity-jumps-41-on-week", time: "45 minutes ago" },
        { title: "The Arbitrum Foundation 2025 Transparency Report", link: "https://blog.arbitrum.foundation/the-arbitrum-foundation-2025-transparency-report-the-year-of-institutional-adoption", time: "2 hours ago" },
        { title: "Layer 2 Solutions Driving ETH Adoption", link: "#", time: "5 hours ago" },
        { title: "Vitalik Buterin on Ethereum's Future", link: "#", time: "1 day ago" },
        { title: "Ethereum ETF Approval Expected Soon", link: "#", time: "2 days ago" }
    ],
    'XRP': [
        { title: "Ripple Receives Full MiCA CASP Authorisation in Europe", link: "https://ripple.com/press-releases/", time: "30 minutes ago" },
        { title: "Ripple and SBI Group Partner to Launch Ripple USD (RLUSD) in Japan", link: "https://ripple.com/press-releases/", time: "4 hours ago" },
        { title: "Ripple Secures Preliminary MiCA CASP License", link: "https://ripple.com/press-releases/", time: "9 hours ago" },
        { title: "XRP Adoption Growing in Asia", link: "#", time: "1 day ago" },
        { title: "Ripple Expands Partnerships with Banks", link: "#", time: "2 days ago" }
    ],
    'DOGE': [
        { title: "Dogecoin Sees Massive Volume Spike After Musk Tweet", link: "#", time: "1 hour ago" },
        { title: "DOGE Whales Accumulate Amid Market Dip", link: "#", time: "3 hours ago" },
        { title: "Dogecoin Payment Adoption Grows in Online Retail", link: "#", time: "8 hours ago" },
        { title: "Community-Driven Development Pushes DOGE Forward", link: "#", time: "1 day ago" },
        { title: "Analysts Predict Strong DOGE Rally in Q3 2026", link: "#", time: "2 days ago" }
    ],
    'SHIB': [
        { title: "Shiba Eternity & SHIB Metaverse Relaunch Announced", link: "https://coinmarketcap.com/cmc-ai/shiba-inu/latest-updates/", time: "1 hour ago" },
        { title: "SHIB OS: Building the Future of Decentralized Governance", link: "https://blog.shib.io/", time: "3 hours ago" },
        { title: "SHIB Burn Rate Increases Dramatically", link: "#", time: "8 hours ago" },
        { title: "Shibarium Hits New Transaction Milestone", link: "#", time: "1 day ago" },
        { title: "Big Win for SHIB? Japan's Crypto Reforms Open New Doors", link: "https://u.today/big-win-for-shib-japans-crypto-reforms-open-new-doors", time: "2 days ago" }
    ],
    'BABY.D': [
        { title: "Baby Doge Burn Event Attracts Attention", link: "#", time: "1 hour ago" },
        { title: "Community Pushes for Major Exchange Listings", link: "#", time: "3 hours ago" },
        { title: "Baby Doge Volume Spikes on Social Media Buzz", link: "#", time: "8 hours ago" },
        { title: "Meme Coin Season Benefits Baby Doge", link: "#", time: "1 day ago" },
        { title: "Holders Await Next Major Announcement", link: "#", time: "2 days ago" }
    ],
    'BTT': [
        { title: "Announcement on the Launch of BTT Buyback and Burn", link: "https://medium.com/@BitTorrent/announcement-on-the-launch-of-btt-buyback-and-burn-8b5a2b6af78d", time: "2 hours ago" },
        { title: "BitTorrent Sets Q3 Launch for BTT Buyback", link: "https://cfgi.io/bittorrent-news/", time: "6 hours ago" },
        { title: "BTFS Decentralized Storage Update", link: "#", time: "14 hours ago" },
        { title: "BTT Long-Term Burn Strategy", link: "#", time: "1 day ago" },
        { title: "BitTorrent Token Utility Expansion", link: "#", time: "3 days ago" }
    ],
    'ETC': [
        { title: "Ethereum Classic Reinforces Core Infrastructure with Ongoing Network and Development Support", link: "https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre", time: "50 minutes ago" },
        { title: "ETC Mining Difficulty Adjustment", link: "#", time: "5 hours ago" },
        { title: "ETC Ecosystem Growth 2026", link: "#", time: "11 hours ago" },
        { title: "Ethereum Classic Stability Update", link: "#", time: "1 day ago" },
        { title: "ETC Core-Geth Client Support", link: "#", time: "2 days ago" }
    ],
    'ALT': [
        { title: "Altcoins Show Strength in Bull Market", link: "#", time: "1 hour ago" },
        { title: "Top Altcoins to Watch in 2026", link: "#", time: "4 hours ago" },
        { title: "Altcoin Season Indicators", link: "#", time: "9 hours ago" },
        { title: "VeChain 2026 Roadmap Update", link: "#", time: "1 day ago" },
        { title: "ALT Ecosystem Growth", link: "#", time: "2 days ago" }
    ]
};
window.trendingData = trendingData;
window.coinHotTopics = coinHotTopics;
window.coinRelatedArticles = coinRelatedArticles;
window.manualNews = manualNews;
console.log("✅ trendingData.js 로드 완료! 총 " + trendingData.length + "개 아이템");
