// trendingData.js
const trendingData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tu7mkTwSKwPlruCcUrqYmorvvykhp6EWeFQcK7JACH3APsOcD6UPzuuh&s=10",
        title: "Biconomy (BICO)",
        price: "$302B",
        startDate: "2026-08-02T00:00:00",
        endDate: "2026-08-09T23:59:59",
        prediction: "+612%",
        bannerImage: "https://i.ytimg.com/vi/Ta2rAwX3kVg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCXkDZ7ads-4qCykZuVTEtLW34HqQ",
        bannerText: "Data from global cryptocurrency exchange Binance on June 21 showed BICO up more than 90% from 24 hours earlier. The token traded at $0.0632, with a market capitalization of about $64 million. The rally has been linked to news that Biconomy plans to list Dream Bowl I Meme Coin Tokens. Nasdaq-listed Scilex Holding Company said on June 16 that the Dream Bowl token could be listed on the Biconomy exchange as early as June 23. Scilex previously said the listing could provide liquidity to Dream Bowl token holders and support broader distribution of the token.",
        participateLink: "https://www.bithumb.com/react/trade/order/BICO-KRW"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ5Q7c0SnlrAYhyDUIZUHZwWdx_ME2lrwOTk46o9GVeKF1wM8Zj2f6Q8k&s=10",
        title: "Cysic (CYS)",
        price: "$225B",
        startDate: "2026-08-04T00:00:00",
        endDate: "2026-08-15T23:59:59",
        prediction: "+518%",
        bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66EDLlOzf1FO91MpRCAHPNGovkFFmhSsBJqCcuPVh1Q&s",
        bannerText: "Something is stirring around Cysic again, and traders who blinked yesterday missed a wild ride. A zero-knowledge proving token, which most people had never heard of six months ago, is suddenly one of the loudest names in crypto chats. Nobody seems fully sure where this goes next.",
        participateLink: "https://www.bithumb.com/react/trade/order/CYS-KRW"
    },
    {
        img: "https://public.bnbstatic.com/static/content/square/images/2fd06595c2c343298c933984d2492fb5.png",
        title: "Pudgy Penguins (PENGU)",
        price: "$223B",
        startDate: "2026-08-18T00:00:00",
        endDate: "2026-08-24T23:59:59",
        prediction: "+511%",
        bannerImage: "https://img.bgstatic.com/multiLang/image/social/41085086361f5f913e0fc3ad474cf5911734708802965.jpeg",
        bannerText: "The Pudgy Penguins ecosystem has recently experienced large price volatility and increased trading volumes, which on-chain data has attributed to both underlying growth and technical market mechanisms. While some analysts point to the timing of the token unlocking as the main reason for the recent liquidity, others are highlighting the project's recent expansion into the mainstream financial and gaming sectors. The PENGU token, a cryptocurrency endemic to the Pudgy Penguins ecosystem, is up more than 30% over the past month since hitting a 12-month low earlier this year.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-0G"
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
        title: "리플·전북은행 맞손…국내 은행 최초 '리플 페이먼츠' 도입",
        comment: "리플이 JB금융그룹 전북은행과 전략적 파트너십을 체결하고 블록체인 기반 국경 간 결제 등 차세대 디지털 금융 생태계 구축에 협력한다고 18일 밝혔다. 이번 파트너십 체결식에는 피오나 머레이 리플 아시아태평양(APAC) 총괄을 비롯한 리플 주요 경영진과 박춘원 전북은행장 등 양사 관계자들이 참석했다. 양사는 디지털자산의 제도권 편입과 금융산업의 디지털 전환에 대응해 국경 간 결제 시스템을 비롯한 주요 디지털 금융 분야에서 포괄적인 협력을 추진할 계획이다.",
        img: "https://s3.tradingview.com/news/image/bloomingbit:c8dc24f5065a7-32250994d8f8e58378eff9532e6e1011-resized.webp",
        link: "https://kr.tradingview.com/news/bloomingbit:c8dc24f5065a7:0/"
    },
    'DOGE': {
        title: "Global Crypto Card Spending Surges to $18 Billion Annually as House of Doge Targets Integration of Dogecoin Into Traditional Payment Rails",
        comment: "Explosive growth in crypto card usage signals a new era of real-world digital currency adoption.",
        img: "https://ml.globenewswire.com/Resource/Download/24d06781-2cc4-482a-9af0-c899b182f533?size=3",
        link: "https://www.globenewswire.com/news-release/2026/03/12/3254667/0/en/Global-Crypto-Card-Spending-Surges-to-18-Billion-Annually-as-House-of-Doge-Targets-Integration-of-Dogecoin-Into-Traditional-Payment-Rails.html"
    },
    'SHIB': {
        title: "Shiba Inu Incineration Rate Surges 2,842%... Is a Supply Shock Coming?",
        comment: "Through SivaTorch, the automated burning portal for Layer 2 Sybarium, 113.63 million SHIB were permanently excluded in a single day, recording a weekly burn volume of 147.05 million SHIB and demonstrating a 579% surge in the burning rate compared to the previous week. With the number of on-chain holding addresses surpassing 1.6 million, a steady influx of investors continues amidst a trading slump.​﻿‌​﻿‌​﻿​﻿​﻿​﻿​﻿‌‍​﻿​﻿‌‌‌​​﻿‌​​﻿‌‌​﻿​​‌‍‌‌‌‍​﻿‌‍‌‌‌‍​﻿​﻿​​‌﻿﻿​‌‍‍​‌﻿‌​‌﻿‌​‌﻿​​‌﻿​﻿​﻿‍‍​‍﻿﻿​‍﻿﻿‌‍﻿‌‌‍​‌‌‍‌﻿‌‍​‌‌﻿‍‍‌‍‍‌‌‍﻿‍‌‍‌‌​‍﻿‍‌﻿​﻿‌‍‍​‌‍‍‌‌‍​‍​‍﻿‍‌‍‍‌‌‍﻿﻿​‍﻿﻿‌﻿​﻿‌‍‍​‌‍‍‌‌‍​‍‌‍​‌‌﻿​‍‌‍‍‌‌﻿‌‌‌‍﻿‌​‍﻿‌‌‍‌​‌‍​‌‌﻿​​‌﻿​​‌﻿​﻿‌﻿‌​‌‍﻿﻿‌﻿​‍‌‍‌‌​‍﻿‌‌‍﻿​‌‍‍‌‌﻿‌‍‌‍‌‌​‍﻿﻿‍﻿‍",
        img: "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2026061705515002905e7e8286d563912477188.jpg",
        link: "https://www.g-enews.com/article/Securities/2026/08/202608170354112971e7e8286d56_1?shem=dsdf,sharefoc,agadiscoversdl,,sh/x/discover/m1/4"
    },
    'BABY.D': {
        title: "Baby Doge Teases Major Q3 Development After Surviving Three Market Crashes",
        comment: "Three crashes. Three comebacks. Most projects don't survive one. Baby Doge stayed through all three, because we have a community large and loyal enough to build something bigger than a chart. We've been listening. Something's coming for Q3, and it's for the ones who never left.",
        img: "https://pbs.twimg.com/media/HPICYujXsAAdxrv?format=jpg&name=large",
        link: "https://x.com/BabyDoge/status/2086003982670213440"
    },
    'BTT': {
        title: "BitTorrent Chain Enables BTT Holders to Support Network Security Through Staking and Validator Delegation",
        comment: "BitTorrent Chain allows BTT holders to participate in network operations and security by staking their tokens and delegating them to validators. Through this structure, token holders can contribute to the network's Proof-of-Stake ecosystem without directly operating validator infrastructure, supporting the decentralization and security of the BitTorrent Chain.",
        img: "https://miro.medium.com/v2/0*9wQmGcrlKPne8_d3",
        link: "https://bt.io/"
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
    'XRP': [{ title: "As a Hedera Council member, Standard Bank leverages Hedera to revolutionize financial services.", link: "https://hedera.com/case-study/standard-bank/" }],
    'DOGE': [{ title: "From Meme Coin to Mass Retail: BONK Announces Strategic Partnership With Paxos", link: "https://chainwire.org/2026/04/30/from-meme-coin-to-mass-retail-bonk-announces-strategic-partnership-with-paxos/" }],
    'SHIB': [{ title: "The BNB Foundation has officially announced the successful completion of the 36th quarterly BNB token burn by BNB Chain.", link: "https://www.bnbchain.org/en/blog/36th-bnb-burn" }],
    'BABY.D': [{ title: "Floki Expands Beyond Meme Coin Origins With a Growing Web3 Ecosystem", link: "https://floki.com/" }],
    'BTT': [{ title: "Staking Parameters on Avalanche​", link: "https://build.avax.network/docs/primary-network/validate/how-to-stake" }],
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
