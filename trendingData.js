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
        bannerText: "The odds on a seven-leg parlay and the odds on a fresh memecoin trade are roughly the same, BONK core contributor Nom told audience at the ongoing Consensus Miami on Tuesday.\nMost memecoin teams lack the staying power to push their projects through real regulatory steps, Nom said, citing exchange listings, ETF filings and public-company structures as the markers that separate tokens that last from those that rinse retail.\nCrypto has built systems \"really, really good at incentivizing inorganic traffic,\" he added, pointing to points programs and airdrop farms that pull in mercenary capital and then watch network activity collapse the following week.\nBONK has worked through several of those rails. Nasdaq-listed Bonk Holdings (BNKK), which rebranded from beverage company Safety Shot in October 2025, holds roughly 2.7% of BONK's circulating supply and is targeting $115 million in token holdings by the end of 2026.",
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
        bannerText: "The event was organized by OriginTrail, a blockchain ecosystem focused on building what it describes as the world’s first decentralized knowledge graph, or DKG, which it says helps to bring trust and reliability to AI.\nThe agenda included talks and panels related to user privacy and empowerment as well as the impact of AI on various industries, with speakers ranging from Ethernet inventor Bob Metcalfe and prominent AI researcher and critic Gary Marcus to SingularityNET CEO Ben Goertzel.\nThere was a particular focus on ecosystem builders, with a dedicated section on day one for people to present the projects they are building using the DKG and a second conference day entirely for builder workshops.",
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
        bannerText: "Aethir’s decentralized GPU cloud has achieved record-breaking growth throughout 2026, expanding enterprise-grade infrastructure to 93 countries, 200+ global locations, and more than 435,000 high-performance GPU Containers. The ecosystem now serves over 150 AI, gaming, and enterprise clients and partners, with annual recurring revenue (ARR) surging to $147M+ and a historic $39.8M+ in Q3 2026 alone.\nA major 2026 milestone was the launch of the Aethir (ATH) Strategic Compute Reserve (SCR) in partnership with Predictive Oncology (Nasdaq: POAI).",
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

// 코인별 HOT TOPIC 데이터 (각각 수정 가능)
const coinHotTopics = {
    'BTC': {
        title: "Bitcoin ETF Inflows Hit Record High",
        comment: "Institutional investors continue to pour money into Bitcoin ETFs as confidence grows.",
        img: "https://picsum.photos/id/1015/600/280",
        link: "#"
    },
    'ETH': {
        title: "Ethereum Layer 2 Scaling Solutions Explode",
        comment: "Optimism and Arbitrum lead the charge in Ethereum's scaling race.",
        img: "https://picsum.photos/id/201/600/280",
        link: "#"
    },
    'XRP': {
        title: "Ripple Wins Major Legal Victory",
        comment: "Court ruling boosts XRP adoption prospects in global payments.",
        img: "https://picsum.photos/id/301/600/280",
        link: "#"
    },
    'SHIB': {
        title: "Big Win for SHIB? Japan's Crypto Reforms Open New Doors",
        comment: "Japan's evolving regulatory landscape could prove particularly meaningful for Shiba Inu.",
        img: "https://u.today/sites/default/files/styles/1200x/public/2026-07/s10063.jpg.webp",
        link: "https://u.today/big-win-for-shib-japans-crypto-reforms-open-new-doors?utm_source=chatgpt.com"
    },
    'BTT': {
        title: "BitTorrent File System (BTFS) to Provide Decentralized Peer-to-Peer Storage",
        comment: "BitTorrent is pleased to announce its plans to introduce decentralized storage as another blockchain solution into the BitTorrent ecosystem. BTFS, which is a variant of the open-source InterPlanetary File System (IPFS) protocol, will allow users to receive and host storage on their computers with other individuals and businesses. ",
        img: "https://blog.bittorrent.com/files/2020/02/bittorrent_blog_btfs.jpg",
        link: "https://www.blockchaingamer.biz/news/42586/the-sandbox-ai-game-jam-live/?utm_source=chatgpt.com"
    },
    'ALT': {
        title: "VeChain Unveils 2026 Roadmap, Positioning Blockchain as the Trust Layer for the AI Economy",
        comment: "VeChain's 2026 roadmap outlines a vision where billions of AI agents will participate in the global economy, requiring a trusted blockchain layer to verify identity, execute transactions, and transfer value securely. The initiative positions VeChain as foundational infrastructure for the emerging AI-driven Web3 economy, where trust, automation, and digital identity play a central role.",
        img: "https://framerusercontent.com/images/9NryVtIT3mn1OE0iA6zpIL28r7Y.jpg?width=680&height=383",
        link: "https://vechain.org/vechain-roadmap-2026-agentic-foundations-for-tomorrow-beyond?utm_source=chatgpt.com"
    },
    'ETC': {
        title: "Ethereum Classic Reinforces Core Infrastructure with Ongoing Network and Development Support",
        comment: "Ethereum Classic announced continued support for its Core-Geth client, along with ongoing efforts to improve network stability and maintain the development environment. The update underscores the project's long-term commitment to strengthening its core infrastructure and ensuring the reliability of the Ethereum Classic ecosystem.",
        img: "https://ethereumclassic.org/static/3de952ceaed70ac85477b219e7bc5ed0/105d8/banner.png",
        link: "https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre?utm_source=chatgpt.com"
    }
};

// 코인별 Related Articles (각각 수정 가능)
const coinRelatedArticles = {
    'BTC': [
        { title: "Bitcoin ETF Inflows Surpass $10B This Month", link: "#" },
        { title: "Why Institutions Are Betting Big on Bitcoin", link: "#" },
        { title: "Bitcoin Halving Cycle Analysis 2026", link: "#" }
    ],
    'ETH': [
        { title: "Ethereum ETF Approval Expected Soon", link: "#" },
        { title: "Layer 2 Solutions Driving ETH Adoption", link: "#" },
        { title: "Vitalik Buterin on Ethereum's Future", link: "#" }
    ],
    'XRP': [
        { title: "Ripple Wins Major Legal Victory", link: "#" },
        { title: "XRP Adoption in Global Payments", link: "#" },
        { title: "Ripple Partners with Major Banks", link: "#" }
    ],
    'SHIB': [
        { title: "Shibarium Hits New Transaction Milestone", link: "#" },
        { title: "Shiba Inu Metaverse Expansion", link: "#" },
        { title: "SHIB Burn Rate Increases Dramatically", link: "#" }
    ],
    'BTT': [
        { title: "Decentralize Your Data. Store it with Filecoin.", link: "https://fil.org/blog/decentralize-your-data-store-it-with-filecoin?utm_source=chatgpt.com" },
        { title: "BitTorrent Token Utility Expansion", link: "#" },
        { title: "BTT Long-Term Burn Strategy", link: "#" }
    ],
    'ALT': [
        { title: "‘Move-to-earn’ Solana app StepN is latest crypto gaming craze", link: "https://techcrunch.com/2022/05/22/play-move-to-earn-solana-stepn-gamefi/?utm_source=chatgpt.com" },
        { title: "Top Altcoins to Watch in 2026", link: "#" },
        { title: "Altcoin Season Indicators", link: "#" }
    ],
    'ETC': [
        { title: "Ethereum Classic Reinforces Core Infrastructure with Ongoing Network and Development Support", link: "https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre" },
        { title: "ETC Mining Difficulty Adjustment", link: "#" },
        { title: "ETC Ecosystem Growth 2026", link: "#" }
    ]
};

// 수동 뉴스 데이터 (XRP, SHIB, BTT, ALT, ETC)
const manualNews = {
    'XRP': [
        { title: "Ripple Receives Full MiCA CASP Authorisation in Europe", link: "https://ripple.com/press-releases/" },
        { title: "Ripple and SBI Group Partner to Launch Ripple USD (RLUSD) in Japan", link: "https://ripple.com/press-releases/" },
        { title: "Ripple Secures Preliminary MiCA CASP License", link: "https://ripple.com/press-releases/" }
    ],
    'SHIB': [
        { title: "SBI Virtual Currencies to Exclusively List XRP at Launch", link: "https://ripple.com/insights/sbi-virtual-currencies-to-exclusively-list-xrp-at-launch/" },
        { title: "Shiba Eternity & SHIB Metaverse Relaunch Announced", link: "https://coinmarketcap.com/cmc-ai/shiba-inu/latest-updates/" },
        { title: "SHIB OS: Building the Future of Decentralized Governance", link: "https://blog.shib.io/" }
    ],
    'BTT': [
        { title: "Announcement on the Launch of BTT Buyback and Burn", link: "https://medium.com/@BitTorrent/announcement-on-the-launch-of-btt-buyback-and-burn-8b5a2b6af78d" },
        { title: "BitTorrent Sets Q3 Launch for BTT Buyback", link: "https://cfgi.io/bittorrent-news/" }
    ],
    'ALT': [
        { title: "Altcoins Show Strength in Bull Market", link: "#" }
    ],
    'ETC': [
        { title: "Ethereum Classic Reinforces Core Infrastructure with Ongoing Network and Development Support", link: "https://ethereumclassic.org/blog/2024-07-30-ethereum-classic-pathways-by-etc-cooperative-istora-and-donald-mcIntyre" },
        { title: "ETC Mining Difficulty Adjustment", link: "#" },
        { title: "ETC Ecosystem Growth 2026", link: "#" }
    ]
};

window.trendingData = trendingData;
window.coinHotTopics = coinHotTopics;
window.coinRelatedArticles = coinRelatedArticles;
window.manualNews = manualNews;

console.log("✅ trendingData.js 로드 완료! 총 " + trendingData.length + "개 아이템");
