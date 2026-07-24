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
        comment: "“Explosive growth in crypto card usage signals a new era of real-world digital currency adoption.",
        img: "https://cdn.pinpointnews.co.kr/news/photo/202607/469261_457126_3823.png",
        link: "https://www.pinpointnews.co.kr/news/articleView.html?idxno=469261"
    },
    'DOGE': {
        title: "Global Crypto Card Spending Surges to $18 Billion Annually as House of Doge Targets Integration of Dogecoin Into Traditional Payment Rails",
        comment: "Explosive growth in crypto card usage signals a new era of real-world digital currency adoption.",
        img: "https://ml.globenewswire.com/Resource/Download/24d06781-2cc4-482a-9af0-c899b182f533?size=3",
        link: "https://www.globenewswire.com/news-release/2026/03/12/3254667/0/en/Global-Crypto-Card-Spending-Surges-to-18-Billion-Annually-as-House-of-Doge-Targets-Integration-of-Dogecoin-Into-Traditional-Payment-Rails.html"
    },
    'SHIB': {
        title: "Shibarium Erupts: 4,000% User Surge, Transactions Soar",
        comment: "Shibarium ignites with a surge of new users, its daily sign-ups rocketing over 4,000%, while transaction volumes swell аt a breakneck pace. From developers deploying fresh smart contracts to users flooding the network, adoption is not just growing but erupting.‍‌‌​﻿‌​‌​​﻿​‍​﻿​‍​﻿‌‌​﻿‌‌​﻿‌‌‌‌‌​​﻿​‍​﻿​‌‌‍​‍‌‍​‍‌‍‌​​﻿‍‌​﻿‌﻿‌‍​‌‌﻿﻿​‌‍‍​‌﻿‌​‌﻿‌​‌﻿​​‌﻿​﻿​﻿‍‍​‍﻿﻿​‍﻿﻿‌‍﻿‍‌‍‌‌‌﻿‌﻿‌﻿​﻿​‍﻿‍‌﻿​﻿‌‍‍​‌‍‍‌‌‍​‍​‍﻿‍‌‍‍‌‌‍﻿﻿​‍﻿﻿​﻿​‍​﻿​​​﻿​‍​﻿‌‌​‍﻿﻿​﻿​​​﻿​﻿​‍﻿﻿​﻿​‍​﻿‌﻿​‍﻿﻿‌﻿​﻿‌‍‍​‌‍‍‌‌‍​‍‌‍​‌‌﻿​‍‌‍‍‌‌﻿‌‌‌‍﻿‌​‍﻿‌‌‍‌‌‌﻿​‍‌﻿‌‌‌﻿​​‌﻿‌​‌﻿​﻿​‍﻿‌​﻿‌​​﻿​​​﻿​​​﻿​​​‍﻿‌‌﻿‌‌‌﻿​﻿‌‍‌‌‌﻿​‍​‍﻿‌‌﻿​﻿‌﻿‌‌‌﻿​‍‌‍‌﻿‌‍‌‌​‍﻿‌‌﻿‌​‌﻿​‍‌‍​‌‌‍﻿‍‌﻿​﻿‌‍​‌‌‍​﻿‌﻿‌​‌‍‍‌‌‍﻿﻿‌‍﻿‍‌﻿​﻿​‍﻿‌‌﻿​﻿‌‍﻿﻿‌‍​‌‌﻿​‍​‍﻿﻿‍",
        img: "https://news.shib.io/wp-content/uploads/2025/03/MAG-IMAGES-5.png",
        link: "https://news.shib.io/2025/03/27/shibarium-erupts-4000-user-surge-transactions-soar/"
    },
    'BTT': {
        title: "USDT on TRON Exceeds $90 Billion as TRON Leads USDT Transfer Volume with $4.2 Trillion YTD",
        comment: " TRON DAO, the community-governed DAO dedicated to accelerating the decentralization of the internet through blockchain technology and decentralized applications (dApps), announced today that the total circulating supply of USDT on the TRON blockchain has exceeded $90 billion.",
        img: "https://www.tbstat.com/cdn-cgi/image/f=avif,q=50/wp/uploads/2026/07/Screenshot-2026-07-09-at-3.03.35%E2%80%AFPM-1200x669.png",
        link: "https://www.theblock.co/post/407792/usdt-on-tron-exceeds-90-billion-as-tron-leads-usdt-transfer-volume-with-4-2-trillion-ytd"
    },
    'ALT': {
        title: "LINE NEXT and Kaia Expand Web3 and Stablecoin Adoption Across Asia Following the Launch of Tether’s USD₮ on Kaia Blockchain",
        comment: " Tether, the largest company in the digital assets industry today, announced it has created a native deployment of Tether’s USD₮ on the Kaia blockchain. LINE NEXT Corp., LINE’s venture dedicated to developing and expanding the Web3 ecosystem, and Kaia, a high-performance public layer 1 blockchain that exclusively powers the Mini Dapp and Dapp Portal ecosystem accessible within LINE Messenger, will collaborate to deliver USD stablecoin offerings to Asia’s mainstream consumers, leveraging native USD₮-Kaia integrated with LINE NEXT’s blockchain-powered services and platforms.",
        img: "https://tether.io/wp-content/uploads/2025/05/Kaia-Line-Next.png",
        link: "https://tether.io/news/line-next-and-kaia-expand-web3-and-stablecoin-adoption-across-asia-following-the-launch-of-tethers-usdt-on-kaia-blockchain/?utm_source=chatgpt.com"
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
    'DOGE': [{ title: "From Meme Coin to Mass Retail: BONK Announces Strategic Partnership With Paxos", link: "https://chainwire.org/2026/04/30/from-meme-coin-to-mass-retail-bonk-announces-strategic-partnership-with-paxos/" }],
    'SHIB': [{ title: "From Meme Coin to Mass Retail: BONK Announces Strategic Partnership With Paxos - Chainwire", link: "https://chainwire.org/2026/04/30/from-meme-coin-to-mass-retail-bonk-announces-strategic-partnership-with-paxos/" }],
    'BTT': [{ title: "SUN Expanded Beyond a Simple DeFi Protocol to Become a Core Project in the TRON Ecosystem", link: "https://docs.sun.io/get-started/overview/?utm_source=chatgpt.com" }],
    'ALT': [{ title: "Celo Receives Additional $20 Million In Institutional Backing Amid Launch Of Global Payments Application And Exponential User Growth", link: "https://www.prnewswire.com/news-releases/celo-receives-additional-20-million-in-institutional-backing-amid-launch-of-global-payments-application-and-exponential-user-growth-301226002.html?utm_source=chatgpt.com" }],
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
