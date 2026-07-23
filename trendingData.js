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
        title: "“껍데기만 블록체인”...SWIFT 결제망 출시에 터진 리플 커뮤니티의 분노",
        comment: "“도널드 트럼프 미국 대통령의 대국민 연설 이후 비트코인과 이더리움, 리플(XRP) 등 주요 가상자산 시장이 일제히 하락세로 돌아서며 투자 심리가 잔뜩 위축된 가운데, 국제은행간통신협회(SWIFT)가 전격 출시한 24시간 블록체인 원장 시스템을 두고 리플 커뮤니티가 기술적 한계와 결제 공백을 맹렬히 비판하고 나서며 제도권 결제 패권을 둘러싼 전운이 고조되고 있다.",
        img: "https://cdn.pinpointnews.co.kr/news/photo/202607/469261_457126_3823.png",
        link: "https://www.pinpointnews.co.kr/news/articleView.html?idxno=469261"
    },
    'DOGE': {
        title: "Dogecoin Surges as Elon Musk Mentions DOGE Again",
        comment: "Dogecoin sees renewed interest after recent comments from Elon Musk, with trading volume spiking across major exchanges.",
        img: "https://picsum.photos/id/237/600/280",
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
        title: "Hedera Expands Enterprise Blockchain Ecosystem Through Tokenization, Stablecoins, and Institutional Finance",
        comment: "Hedera is continuing to expand its enterprise-focused blockchain ecosystem by advancing real-world asset (RWA) tokenization, institutional finance, and stablecoin infrastructure. The initiative aims to provide businesses and financial institutions with the trusted infrastructure needed to adopt blockchain technology at scale, reinforcing Hedera's role as a foundation for enterprise-grade Web3 applications.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO33GyXKEA_ipANvJkBbFhnBSxK4T4xBh84YQd4nte2uMW5XoSR2A19U&s=10",
        link: "https://hedera.com/blog/hedera-in-2025-building-the-trust-layer/?utm_source=chatgpt.com"
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
    'XRP': [{ title: "Stellar's payment volume hit $5.5 billion in Q1 2026, a 72% annual increase, and XLM surged 28% on the DTCC announcement while the broader crypto market fell sharply the same day.", link: "https://finance.yahoo.com/markets/crypto/articles/xrp-ripple-vs-stellar-xlm-185640141.html" }],
    'DOGE': [{ title: "Dogecoin Community Celebrates New All-Time High in Daily Active Addresses", link: "#" }],
    'SHIB': [{ title: "SHIB Layer 2 Posts 216% in Weekend Transaction Spike", link: "https://u.today/shib-layer-2-posts-216-in-weekend-transaction-spike-is-this-a-turning-point" }],
    'BTT': [{ title: "TRON Accelerates Ecosystem Growth", link: "https://trondao.org/news" }],
    'ALT': [{ title: "Dubai developer DAMAC signs $1 bln deal with blockchain platform MANTRA", link: "https://www.reuters.com/technology/dubai-developer-damac-signs-1-bln-deal-with-blockchain-platform-mantra-2025-01-09/?utm_source=chatgpt.com" }],
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
