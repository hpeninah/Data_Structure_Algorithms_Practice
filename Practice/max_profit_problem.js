// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?

//brute force approach O(n^2)
// function maxProfit(prices) {
//     let maxProfit = 0;
//     for(let i = 0; i<prices.length; i++) {
//         for(let j=i+1; j < prices.length; j++) {
//             const profit = prices[j] - prices[i];
//             if(profit > maxProfit){
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
// }

//O(n) solution better approach
function maxProfit(prices) {
    let maxProfit = 0;
    let startPrice = prices[0];
    for(let i=1; i<prices.length; i++) {
        let price = prices[i];
        if(price < startPrice) {
            startPrice = price;
            continue; // end the current loop and start next iteration
        }
        let profit = price - startPrice;
        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}


console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 - buy at 1, sell at 6
console.log(maxProfit([7, 6, 5, 4, 3, 2])); // 0 - don't buy!
console.log(maxProfit([])); // 0
