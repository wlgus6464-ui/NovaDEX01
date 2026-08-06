// HOT.js
const hotChains = [
    {
        name: "MetaDAO (META2)",
        labels: ["Jul 31","Aug 1","Aug 2","Aug 3","Aug 4","Aug 5","Aug 6",],
        netflow: [ 1.5, 0.2, -0.7, -0.3, -0.7, -0.3, 0.1, 0.1],
        reserve: [1.91, 1.75, 1.69, 1.71, 1.65, 1.57, 1.50],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-META2"
    },
    {
        name: "Biconomy (BICO)",
        labels: ["Jul 31","Aug 1","Aug 2","Aug 3","Aug 4","Aug 5","Aug 6",],
        netflow: [-0.8, -0.2, 0.0, 3.0, 2.8, 2.0, 2.3],
        reserve: [5.14, 5.11, 5.07, 5.28, 5.19, 5.22, 5.01],
        goToLink: "https://www.bithumb.com/react/trade/order/BICO-KRW"
    },
    {
        name: "Definitive (EDGE)",
        labels: ["Jul 31","Aug 1","Aug 2","Aug 3","Aug 4","Aug 5","Aug 6",],
        netflow: [-0.6, -1.1, -0.5, -0.8, -0.5, 1.0, 2.5],
        reserve: [15.27, 15.05, 15.11, 15.14, 15.11, 15.31, 15.50],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-EDGE"
    }
];

window.hotChains = hotChains;
console.log("✅ HOT.js 로드 완료! 총 " + hotChains.length + "개 추천 코인");
