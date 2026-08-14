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
        title: "Tradable Agrees to Bring Up to $1 Billion in Tokenized Private Credit Assets to Stellar",
        comment: "Tradable, a leading private asset marketplace and tokenization platform, today announced an integration with the Stellar network to tokenize up to $1 billion of private credit assets onchain.The integration builds on Tradable’s mission to bring blockchain technology to traditional asset managers through tokenized institutional-grade investment opportunities across high-quality asset classes including private credit. The platform supports workflows that matter in real markets, including deal lifecycle management, compliance controls, investor onboarding, and ongoing operations. ",
        img: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/09c9c72ad95e7838fbc66d1ecfc013a09b5f67de-1200x630.png?rect=41,0,1119,630&w=748&h=421&auto=format&dpr=2",
        link: "https://stellar.org/press/tradable-agrees-to-bring-up-to-usd1-billion-in-tokenized-private-credit-assets-to-stellar?utm_source=chatgpt.com"
    },
    'DOGE': {
        title: "Global Crypto Card Spending Surges to $18 Billion Annually as House of Doge Targets Integration of Dogecoin Into Traditional Payment Rails",
        comment: "Explosive growth in crypto card usage signals a new era of real-world digital currency adoption.",
        img: "https://ml.globenewswire.com/Resource/Download/24d06781-2cc4-482a-9af0-c899b182f533?size=3",
        link: "https://www.globenewswire.com/news-release/2026/03/12/3254667/0/en/Global-Crypto-Card-Spending-Surges-to-18-Billion-Annually-as-House-of-Doge-Targets-Integration-of-Dogecoin-Into-Traditional-Payment-Rails.html"
    },
    'SHIB': {
        title: "Shibarium DappStore Now Open: Builder’s Big Chance",
        comment: "A new chapter opens quietly — not with hype, but with architecture. The Shibarium DappStore, a curated hub for decentralized applications, is now live. And with it, Shiba Inu begins turning a sprawling meme-fueled movement into something more structured: a working platform with open doors.‍‌‌​﻿‌​﻿‌​﻿​﻿​﻿​﻿​﻿‌‍​﻿​﻿‌‌‌​​﻿‌​​﻿‌‌​﻿​​‌‍‌‌‌‍​﻿‌‍‌‌‌‍​﻿​﻿​​‌﻿﻿​‌‍‍​‌﻿‌​‌﻿‌​‌﻿​​‌﻿​﻿​﻿‍‍​‍﻿﻿​‍﻿﻿‌‍﻿‌‌‍​‌‌‍‌﻿‌‍​‌‌﻿‍‍‌‍‍‌‌‍﻿‍‌‍‌‌​‍﻿‍‌﻿​﻿‌‍‍​‌‍‍‌‌‍​‍​‍﻿‍‌‍‍‌‌‍﻿﻿​‍﻿﻿‌﻿​﻿‌‍‍​‌‍‍‌‌‍​‍‌‍​‌‌﻿​‍‌‍‍‌‌﻿‌‌‌‍﻿‌​‍﻿‌‌‍‌​‌‍​‌‌﻿​​‌﻿​​‌﻿​﻿‌﻿‌​‌‍﻿﻿‌﻿​‍‌‍‌‌​‍﻿‌‌‍﻿​‌‍‍‌‌﻿‌‍‌‍‌‌​‍﻿﻿‍﻿‍",
        img: "https://magazine.shib.io/wp-content/uploads/2025/04/Shib-Spotlight-6.png.png",
        link: "https://magazine.shib.io/shibarium-dappstore-live/"
    },
    'BABY.D': {
        title: "BabyDoge`s Real-World Applications and Utility Features",
        comment: "The ecosystem's main hub is BabyDoge Swap, where users can trade tokens, provide liquidity, and earn in yield farms and staking. Recent upgrades brought Algebra Integral technology into the mix. The integration delivers concentrated liquidity and dynamic fees, cutting gas costs by up to 80% while boosting returns for liquidity providers. These upgrades align BabyDogeSwap with established DEX protocols.",
        img: "https://public.bnbstatic.com/static/content/square/images/aeee5b57b27240e7888704547ffa5f17.jpg",
        link: "https://bsc.news/post/babydoge-token-price-analysis-2025"
    },
    'BTT': {
        title: "TRON Network - Q2 2026",
        comment: "Payments & stablecoins: Daily active users averaged 3.5M (2nd to Solana); ~93% of stablecoin transfer volume was P2P, the highest of any chain. TRON's stablecoin market cap share rose to 28.7%, with USDT on the network hitting an all-time high of ~$89B (47% of USDT dominance).",
        img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Dj2XWI3kM_E64XxQYKvMWA.png",
        link: "https://www.coindesk.com/research/tron-network-q2-2026"
    },
    'ALT': {
        title: "카이아, 日 규제 '키맨' 품었다…스테이블코인 공략 속도",
        comment: "카이아가 일본 가상자산 규제 전문가들이 설립한 컨설팅 기업 피노젝트(finoject)와 손잡고 일본 스테이블코인과 토큰화(Tokenization) 시장 공략에 나선다. 24일 카이아는 피노젝트와 일본 내 스테이블코인과 토큰화, 디지털자산 사업 기회 발굴을 위한 전략적 업무협약(MOU)을 체결했다고 밝혔다. 이번 협약을 통해 피노젝트는 카이아의 일본 사업 확대와 금융 규제 대응을 지원할 예정이다.",
        img: "https://img.hankyung.com/photo/202607/10bbc858-f744-438f-861d-575d02cd2a75.webp",
        link: "https://www.hankyung.com/article/202607243596B"
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
    'XRP': [{ title: "Shortly after quarter-end, onchain RWAs crossed $2 billion, up from $785 million at year-end 2025.", link: "https://stellar.org/blog/foundation-news/q1-2026-execution-at-network-scale?utm_source=chatgpt.com" }],
    'DOGE': [{ title: "From Meme Coin to Mass Retail: BONK Announces Strategic Partnership With Paxos", link: "https://chainwire.org/2026/04/30/from-meme-coin-to-mass-retail-bonk-announces-strategic-partnership-with-paxos/" }],
    'SHIB': [{ title: "Shibarium Erupts: 4,000% User Surge, Transactions Soar", link: "https://news.shib.io/2025/03/27/shibarium-erupts-4000-user-surge-transactions-soar/" }],
    'BABY.D': [{ title: "BabyDoge Swap Holds Nearly $1.88 Million in TVL as DEX Activity Continues", link: "https://defillama.com/protocol/babydogeswap" }],
    'BTT': [{ title: "BTT Token Guide: BitTorrent Chain on TRON", link: "https://tronwiki.tech/en/articles/btt-token-guide/" }],
    'ALT': [{ title: "카이아, JPYC 유통액 31억원 돌파…온보딩 한 달 만에 1위", link: "https://www.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=03647366645483032" }],
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
