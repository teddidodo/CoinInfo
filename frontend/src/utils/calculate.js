export const convertUSD_ETH = (amount, current_price) => {
    let value = ((amount - 6.4 - 3.99) / current_price)
    return value.toFixed(5)
}
export const convertETH_USD = (amount, current_price) => {
    let value = ((amount * current_price) + 6.4 + 3.99)
    return value.toFixed(5)    
}