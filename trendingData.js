// trendingData.js
const trendingData = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WvCEjNlUcfGtHvUgkOyvBp1odzERLjAyNK60u1thsMI30aDh3ry2X00&s=10",
        title: "Official Trump (TRUMP)",
        price: "$160B",
        startDate: "2026-08-13T00:00:00",
        endDate: "2026-08-22T23:59:59",
        prediction: "+160%",
        bannerImage: "https://media.bloomingbit.io/news/af36e49e-cfc8-4178-a8e8-c4e3cd168ae7.webp?w=800",
        bannerText: " The team behind President Donald Trump’s meme coin Official Trump (TRUMP) deposited a large amount of its own tokens to an exchange. According to Lookonchain, the Official Trump team deposited about 646,000 Official Trump tokens to global cryptocurrency exchange OKX in two transactions. The deposit was worth about $15.5 million at current prices, and deposits to exchanges are typically interpreted as a sell signal.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-TRUMP"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv0LwEW1NyXttEq9Gt3FayJCqFZtDrxN-PIGpaGvrKzKnuN8Dg3rYu9E&s=10",
        title: "Hemi (HEMI)",
        price: "$195B",
        startDate: "2026-08-14T00:00:00",
        endDate: "2026-08-21T23:59:59",
        prediction: "+250%",
        bannerImage: "https://i.ytimg.com/vi/QgES-e5LtLY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfKA-y6EQ9z2PAznlCatqUXygxNQ",
        bannerText: "Hemi (HEMI) is a modular Layer-2 blockchain network designed to merge Bitcoin's security with Ethereum's programmability. The native HEMI token is used for network governance, transaction fees, and staking incentives within this cross-chain ecosystem. Hemi Virtual Machine (hVM): Embeds a full Bitcoin node inside an Ethereum-compatible environment, giving smart contracts direct access to Bitcoin data. Anchors Hemi's network state to the Bitcoin blockchain to achieve high security and fast settlement finality.",
        participateLink: "https://www.bithumb.com/react/trade/order/HEMI-KRW"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8L78781SEl3cZepEkQBRSa-l2Kn0n6o-TmhyxXb4r1SYdL0vXStlylL0&s=10",
        title: "Pharos (PROS)",
        price: "$571B",
        startDate: "2026-08-18T00:00:00",
        endDate: "2026-09-01T23:59:59",
        prediction: "+705%",
        bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE83trkACkcpnM2O4pBK4hIvglVX00n25gTuZemlQrFyFVKclQfDoC8w4&s=10",
        bannerText: "The Pudgy Penguins ecosystem has recently experienced large price volatility and increased trading volumes, which on-chain data has attributed to both underlying growth and technical market mechanisms. While some analysts point to the timing of the token unlocking as the main reason for the recent liquidity, others are highlighting the project's recent expansion into the mainstream financial and gaming sectors. The PENGU token, a cryptocurrency endemic to the Pudgy Penguins ecosystem, is up more than 30% over the past month since hitting a 12-month low earlier this year.",
        participateLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-PROS"
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
        title: "XRP ETFs: The Institutional Era Has Begun",
        comment: "Perhaps no data point captures the moment better than a routine regulatory filing. In March 2026, Goldman Sachs disclosed a $153.8 million position in spot XRP ETFs through its Q4 2025 13F filing, making it the single largest known institutional holder of XRP ETF shares in the United States. Of the top 30 institutional holders collectively controlling just over $211 million in XRP ETF exposure, Goldman accounts for roughly 73%.",
        img: "https://cdn.blockmedia.co.kr/wp-content/uploads/2025/11/20251116-084700-1200x800.png",
        link: "https://ripple.com/insights/xrp-etfs-the-institutional-era-has-begun/?utm_source=chatgpt.com"
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
    'XRP': [{ title: "Why XRP ETFs Are Pulling in More Money Than Solana ETFs Despite the Price Lag", link: "https://finance.yahoo.com/markets/crypto/articles/why-xrp-etfs-pulling-more-144944588.html?utm_source=chatgpt.com" }],
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
