// onChainData.js
const onChainData = {
    BTC: {
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [2.1, -1.4, 0.8, -3.2, 1.5, -0.6, -2.4],
        reserve: [2.71, 2.705, 2.712, 2.698, 2.715, 2.709, 2.717],
        metrics: [
            { name: "Exchange Reserve", desc: "Total BTC held on exchanges", value: "2.717M", change: 0.09 },
            { name: "Exchange Inflow", desc: "BTC sent to exchanges", value: "18.4K", change: -2.1 },
            { name: "Exchange Outflow", desc: "BTC withdrawn from exchanges", value: "21.6K", change: 3.8 },
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "-3.2K", change: 3.39 }
        ]
    },
    ETH: {
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [-5.2, 1.1, -3.4, 2.8, -1.9, 0.4, -2.7],
        reserve: [15.92, 15.88, 15.85, 15.87, 15.83, 15.81, 15.82],
        metrics: [
            { name: "Exchange Reserve", desc: "Total ETH held on exchanges", value: "15.82M", change: -0.4 },
            { name: "Exchange Inflow", desc: "ETH sent to exchanges", value: "48.3K", change: 1.1 },
            { name: "Exchange Outflow", desc: "ETH withdrawn from exchanges", value: "61.2K", change: 2.4 },
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "-12.9K", change: 2.7 }
        ]
    },
    XRP: {
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [12, -4, 8, -15, 6, 3, -7],
        reserve: [4.08, 4.09, 4.10, 4.11, 4.10, 4.12, 4.12],
        metrics: [
            { name: "Exchange Reserve", desc: "Total XRP held on exchanges", value: "4.12B", change: 0.3 },
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "+8.7M", change: -1.8 }
        ]
    },
    USDT: {
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [120, -80, 45, -30, 90, -50, 20],
        reserve: [51.8, 52.0, 51.9, 52.2, 52.1, 52.3, 52.4],
        metrics: [
            { name: "Exchange Reserve", desc: "USDT on major exchanges", value: "52.4B", change: 0.1 }
        ]
    }
};

window.onChainData = onChainData;
console.log("✅ onChainData.js 로드 완료!");
