// HOT.js
const hotChains = [
     {
        name: "Biconomy (BICO)",
        labels: ["Aug 3","Aug 4","Aug 5","Aug 6","Aug 7","Aug 8","Aug 9",],
        netflow: [3.0, 2.8, 2.0, 2.3, 2.5, 2.8, 2.9],
        reserve: [5.28, 5.19, 5.22, 5.01, 5.11, 5.22, 5.33],
        goToLink: "https://www.bithumb.com/react/trade/order/BICO-KRW"
    },
    {
        name: "Cysic (CYS)",
        labels: ["Aug 3","Aug 4","Aug 5","Aug 6","Aug 7","Aug 8","Aug 9",],
        netflow: [-0.8, -0.2, 0.0, 3.0, 2.8, 2.0, 2.3],
        reserve: [5.14, 5.11, 5.07, 5.28, 5.19, 5.22, 5.01],
        goToLink: "https://www.bithumb.com/react/trade/order/CYS-KRW"
    },
    {
        name: "Falcon Finance (FF)",
        labels: ["Aug 3","Aug 4","Aug 5","Aug 6","Aug 7","Aug 8","Aug 9",],
        netflow: [-1.4, -1.1, -1.5, -1.3, -1.5, 0.0, 2.5],
        reserve: [15.27, 15.05, 15.11, 15.14, 15.11, 15.31, 15.50],
        goToLink: "https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-FF"
    }
];

window.hotChains = hotChains;
console.log("✅ HOT.js 로드 완료! 총 " + hotChains.length + "개 추천 코인");
