// trendingData.js
const trendingData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-WfPiJ61EwwwgMIdsBHyCPiiWokFF-WlhjExPoJ9uUDdTy8eY132ybs&s=10",
        title: "Bonk (BONK)",
        price: "$207B",
        startDate: "2026-07-17T00:00:00",
        endDate: "2026-07-24T23:59:59",
        prediction: "+151%",
        bannerImage: "https://media.yellow.com/uploads/Chat_GPT_Image_May_30_2026_11_45_01_PM_97bbbfa0e3.jpg",
        bannerText: "The odds on a seven-leg parlay and the odds on a fresh memecoin trade are roughly the same, BONK core contributor Nom told audience at the ongoing Consensus Miami on Tuesday.\nMost memecoin teams lack the staying power to push their projects through real regulatory steps.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-BONK"
    },
    {
        img: "https://file.coinexstatic.com/fit-in/1600x0/filters:format(webp):quality(80)/2023-04-21/401A88CC25737447601BAF2497ADC185.png",
        title: "OriginTrail (TRAC)",
        price: "$184B",
        startDate: "2026-07-17T00:00:00",
        endDate: "2026-07-24T23:59:59",
        prediction: "+95%",
        bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnAGzsvVKg9r66l6TaJWzzb2R7Uu9wZukQgABZ7agygOWWb0bmPLKZJ_k&s=10",
        bannerText: "The event was organized by OriginTrail, a blockchain ecosystem focused on building what it describes as the world’s first decentralized knowledge graph.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-TRAC"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqjfFGMcNSfBBUk0KkePEJtUDajsB3jcuQlZVEpIJkMRJK7_zViTrcNPI&s=10",
        title: "Aethir (ATH)",
        price: "$137B",
        startDate: "2026-07-20T00:00:00",
        endDate: "2026-07-26T23:59:59",
        prediction: "+225%",
        bannerImage: "https://cdn.prod.website-files.com/6506e01c107238bf78e07f19/663e147c9467383ff83f3e6e_ath_morethanjustacryptocurrencyblog.png",
        bannerText: "Aethir’s decentralized GPU cloud has achieved record-breaking growth throughout 2026.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-ATH"
    },
    {
        img: "https://img.magnific.com/free-vector/modern-coming-soon-new-arrival-background-with-spot-light-effect_1017-57496.jpg?semt=ais_hybrid&w=740&q=80",
        title: "COMING SOON",
        price: "$0",
        startDate: "2026-07-27T23:59:59",
        endDate: "2026-08-02T23:59:59",
        prediction: "+282%",
        bannerImage: "https://img.magnific.com/free-vector/modern-coming-soon-new-arrival-background-with-spot-light-effect_1017-57496.jpg?semt=ais_hybrid&w=740&q=80",
        bannerText: "We are looking for a new CRYPTO. A moment would be appreciated.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-ALGO"
    }
];

// 코인별 HOT TOPIC 데이터 (ETH 항목 수정 완료)
const coinHotTopics = {
    'BTC': {
        title: "Bitcoin ETF Inflows Hit Record High",
        comment: "Institutional investors continue to pour money into Bitcoin ETFs as confidence grows.",
        img: "https://picsum.photos/id/1015/600/280",
        link: "#"
    },
    'ETH': {
        title: "Ether outpaces bitcoin as ETF flows split and Ethereum activity jumps 41% on-week",
        comment: "Ether is outperforming bitcoin as ETF flows, spot prices and a 41% jump in Ethereum transactions move in the same direction for the first time in months.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF0UAZr7vjtP1tiAiIwMtnlenM2RiFhZyrFDduiOqzWE09wmPm9Ae5ss&s=10",
        link: "https://www.coindesk.com/markets/2026/04/14/ether-outpaces-bitcoin-as-etf-flows-split-and-ethereum-activity-jumps-41-on-week"
    },
    'XRP': {
        title: "Ripple Wins Major Legal Victory",
        comment: "Court ruling boosts XRP adoption prospects in global payments.",
        img: "https://picsum.photos/id/301/600/280",
        link: "#"
    },
    'SHIB': {
        title: "SHIB Layer 2 Posts 216% in Weekend Transaction Spike: Is This a Turning Point?",
        comment: "Shiba Inu sees fresh network spark as Layer 2 blockchain numbers jump.",
        img: "https://u.today/sites/default/files/styles/1200x/public/2026-07/101504.jpg.webp",
        link: "https://u.today/shib-layer-2-posts-216-in-weekend-transaction-spike-is-this-a-turning-point"
    },
    'BTT': {
        title: "TRON Accelerates Ecosystem Growth Through Stablecoin Expansion",
        comment: "TRON has continued to expand its blockchain ecosystem through a series of official announcements.",
        img: "https://framerusercontent.com/images/QLsY9F9K6ZGBd8BxPdwewUVeW6E.png?width=1200&height=675",
        link: "https://trondao.org/news"
    },
    'ALT': {
        title: "VeChain Unveils 2026 Roadmap, Positioning Blockchain as the Trust Layer for the AI Economy",
        comment: "VeChain's 2026 roadmap outlines a vision where billions of AI agents will participate in the global economy.",
        img: "https://framerusercontent.com/images/9NryVtIT3mn1OE0iA6zpIL28r7Y.jpg?width=680&height=383",
        link: "https://vechain.org/vechain-roadmap-2026-agentic-foundations-for-tomorrow-beyond"
    },
    'ETC': {
        title: "Ethereum Classic Reinforces Core Infrastructure with Ongoing Network and Development Support",
        comment: "Ethereum Classic announced continued support for its Core-Geth client.",
        img: "https://ethereumclassic.org/static/3de952ceaed70ac85477b219e7bc5ed0/105d8/banner.png",
        link: "https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre"
    }
};

// Related Articles & Manual News (나머지는 그대로)
const coinRelatedArticles = {
    'BTC': [{ title: "Bitcoin ETF Inflows Surpass $10B This Month", link: "#" }],
    'ETH': [{ title: "The Arbitrum Foundation 2025 Transparency Report", link: "https://blog.arbitrum.foundation/the-arbitrum-foundation-2025-transparency-report-the-year-of-institutional-adoption" }],
    'XRP': [{ title: "Ripple Wins Major Legal Victory", link: "#" }],
    'SHIB': [{ title: "SHIB Layer 2 Posts 216% in Weekend Transaction Spike", link: "https://u.today/shib-layer-2-posts-216-in-weekend-transaction-spike-is-this-a-turning-point" }],
    'BTT': [{ title: "TRON Accelerates Ecosystem Growth", link: "https://trondao.org/news" }],
    'ALT': [{ title: "VeChain Unveils 2026 Roadmap", link: "https://vechain.org/vechain-roadmap-2026-agentic-foundations-for-tomorrow-beyond" }],
    'ETC': [{ title: "Ethereum Classic Reinforces Core Infrastructure", link: "#" }]
};

const manualNews = {
    'XRP': [{ title: "Ripple Receives Full MiCA CASP Authorisation in Europe", link: "https://ripple.com/press-releases/" }],
    'SHIB': [{ title: "Shiba Eternity & SHIB Metaverse Relaunch Announced", link: "https://coinmarketcap.com/cmc-ai/shiba-inu/latest-updates/" }],
    'BTT': [{ title: "Announcement on the Launch of BTT Buyback and Burn", link: "https://medium.com/@BitTorrent/announcement-on-the-launch-of-btt-buyback-and-burn-8b5a2b6af78d" }],
    'ALT': [{ title: "Altcoins Show Strength in Bull Market", link: "#" }],
    'ETC': [{ title: "Ethereum Classic Reinforces Core Infrastructure", link: "#" }]
};

window.trendingData = trendingData;
window.coinHotTopics = coinHotTopics;
window.coinRelatedArticles = coinRelatedArticles;
window.manualNews = manualNews;

console.log("✅ trendingData.js 로드 완료! 총 " + trendingData.length + "개 아이템");
