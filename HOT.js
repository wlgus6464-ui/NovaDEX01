// HOT.js
const hotChains = [
    {
        name: "Momentum (MMT)",
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [-1.0, 3.0, 1.4, 0.7, 0.1, -0.5, 0.2],
        reserve: [42.1, 43.0, 41.9, 40.8, 40.2, 41.7, 40.5],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-MMT"
    },
    {
        name: "MetaDAO (META2)",
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [-0.4, -1.2, -0.8, 1.5, 0.2, -0.7, -0.3],
        reserve: [1.85, 1.88, 1.82, 1.91, 1.75, 1.69, 1.71],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-META2"
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
