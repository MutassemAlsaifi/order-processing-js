
function handelOrder(order) {
    let sum = 0
    let count = 0
    order.forEach(element => {
        if(element == null){
            return
        }
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
