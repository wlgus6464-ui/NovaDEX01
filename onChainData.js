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
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "-3.2K", change: 3.39 },
            { name: "Exchange Whale Ratio", desc: "Share of large deposits in total exchange inflows", value: "0.42", change: 1.2 },
            { name: "Exchange Inflow (Mean)", desc: "Average size of deposits to exchanges", value: "0.82 BTC", change: -0.5 },
            { name: "Exchange Deposit Count", desc: "Number of deposit transactions to exchanges", value: "12,480", change: 2.3 },
            { name: "Stablecoin Exchange Reserve", desc: "USDT+USDC held on major exchanges (proxy)", value: "$48.2B", change: 0.4 }
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
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "-12.9K", change: 2.7 },
            { name: "Exchange Whale Ratio", desc: "Share of large deposits in total exchange inflows", value: "0.38", change: -0.8 },
            { name: "Exchange Inflow (Mean)", desc: "Average size of deposits to exchanges", value: "12.4 ETH", change: 0.6 },
            { name: "Exchange Deposit Count", desc: "Number of deposit transactions to exchanges", value: "28,150", change: 1.5 },
            { name: "Stablecoin Exchange Reserve", desc: "USDT+USDC held on major exchanges (proxy)", value: "$48.2B", change: 0.4 }
        ]
    },
    XRP: {
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [12, -4, 8, -15, 6, 3, -7],
        reserve: [4.08, 4.09, 4.10, 4.11, 4.10, 4.12, 4.12],
        metrics: [
            { name: "Exchange Reserve", desc: "Total XRP held on exchanges", value: "4.12B", change: 0.3 },
            { name: "Exchange Inflow", desc: "XRP sent to exchanges", value: "42M", change: -1.2 },
            { name: "Exchange Outflow", desc: "XRP withdrawn from exchanges", value: "33.3M", change: 2.1 },
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "+8.7M", change: -1.8 },
            { name: "Exchange Whale Ratio", desc: "Share of large deposits in total exchange inflows", value: "0.51", change: 3.2 },
            { name: "Exchange Inflow (Mean)", desc: "Average size of deposits to exchanges", value: "18,400 XRP", change: 0.9 },
            { name: "Exchange Deposit Count", desc: "Number of deposit transactions to exchanges", value: "6,920", change: -0.7 },
            { name: "Stablecoin Exchange Reserve", desc: "USDT+USDC held on major exchanges (proxy)", value: "$48.2B", change: 0.4 }
        ]
    },
    USDT: {
        labels: ["Jul 28","Jul 29","Jul 30","Jul 31","Aug 1","Aug 2","Aug 3"],
        netflow: [120, -80, 45, -30, 90, -50, 20],
        reserve: [51.8, 52.0, 51.9, 52.2, 52.1, 52.3, 52.4],
        metrics: [
            { name: "Exchange Reserve", desc: "USDT on major exchanges", value: "52.4B", change: 0.1 },
            { name: "Exchange Inflow", desc: "USDT sent to exchanges", value: "1.8B", change: 0.8 },
            { name: "Exchange Outflow", desc: "USDT withdrawn from exchanges", value: "1.6B", change: -0.3 },
            { name: "Exchange Netflow", desc: "Inflow − Outflow", value: "+0.2B", change: 1.1 },
            { name: "Exchange Whale Ratio", desc: "Share of large deposits in total exchange inflows", value: "0.61", change: 0.5 },
            { name: "Exchange Inflow (Mean)", desc: "Average size of deposits to exchanges", value: "$42,000", change: -0.2 },
            { name: "Exchange Deposit Count", desc: "Number of deposit transactions to exchanges", value: "41,200", change: 0.9 },
            { name: "Stablecoin Exchange Reserve", desc: "USDT+USDC held on major exchanges (proxy)", value: "$48.2B", change: 0.4 }
        ]
    }
};

window.onChainData = onChainData;
console.log("✅ onChainData.js 로드 완료!");
