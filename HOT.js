// HOT.js
const hotChains = [
    {
        name: "Solana (SOL)",
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [1.8, -0.9, 2.4, -1.2, 3.1, 0.5, -0.7],
        reserve: [42.1, 42.3, 41.9, 42.8, 43.2, 42.7, 43.5],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-SOL"
    },
    {
        name: "Sui (SUI)",
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [-0.4, 1.2, 0.8, -1.5, 2.0, 1.1, 0.3],
        reserve: [1.85, 1.88, 1.82, 1.91, 1.95, 1.90, 1.98],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-SUI"
    },
    {
        name: "Zilliqa (ZIL)",
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [0.6, -1.1, 1.9, 0.2, -0.8, 2.5, 1.3],
        reserve: [5.12, 5.05, 5.18, 5.22, 5.09, 5.30, 5.28],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-RENDER"
    }
];

window.hotChains = hotChains;
console.log("✅ HOT.js 로드 완료! 총 " + hotChains.length + "개 추천 코인");
