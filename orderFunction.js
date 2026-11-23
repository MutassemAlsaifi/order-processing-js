
function handelOrder(order) {
    // Variables to store the total amount and count of paid orders
    let sum = 0
    let count = 0
    order.forEach(element => {
        // Skip null objects and continue processing the remaining orders
        if(element == null){
            return
        }
        // Accept only valid positive numbers
        if (Number.isFinite(element.amount) && element.amount > 0) {
            if (element.status == 'paid') {
                sum += Number((element.amount).toFixed(2))
                count += 1
            }
        }
    });
    return { sum, count }
   
    
}
export {handelOrder}
