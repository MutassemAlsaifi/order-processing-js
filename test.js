import {handelOrder} from './orderFunction.js'
/*******************************************  test 1 area  ---Normal and mixed orders/*******************************************/
// Test 1: Normal and mixed orders
let test1 = [
    { "id": 1, "amount": 100.50, "status": "paid" },
    { "id": 2, "amount": 60, "status": "pending" },
    { "id": 3, "amount": 25.75789, "status": "paid" },
    { "id": 4, "amount": 80, "status": "cancelled" },
    { "id": 5, "amount": null, "status": "cancelled" },
]

let actual1 = handelOrder(test1)
console.log("Expected:", 126.25789);
console.log("Actual:", actual1);

/* 
the output 
Expected: sum : 126.25789 , count: 2
Actual: { sum: 126.26, count: 2 }
*/ 


/*******************************************  test 2 area  ---Invalid amounts/*******************************************/


// Test 2: Invalid amounts
let test2 = [
    { "id": 1, "amount": NaN, "status": "paid" },
    { "id": 2, "amount": Infinity, "status": "pending" },
    { "id": 3, "amount": -25.75, "status": "paid" },
    { "id": 4, "amount": 0, "status": "cancelled" },
    { "id": 5, "amount": null, "status": "cancelled" },
    { "id": 4, "amount": '54', "status": "cancelled" },
]

let actual2 = handelOrder(test2)
console.log("Expected:", 0);
console.log("Actual:", actual2);

/* 
the output 
Expected: sum :0 , count: 0
Actual: { sum: 0, count: 0 }
*/ 

/*******************************************  test 3 area  ---Invalid amounts/*******************************************/

// Test 3: Invalid order objects
let test3 = [
     { "id": 1, "amount": 100.50, "status": "paid" },
    { "id": null, "amount": 60, "status": "pending" },
    { "id": 3, "amount": 25.75789, "status": "" },
    null,
    { "id": 4, "amount": 80, "status": "cancelled" },
    { "id": 5, "amount": null, "status": "cancelled" },
]

let actual3 = handelOrder(test3)
console.log("Expected:", 100.50);
console.log("Actual:", actual3);
/* 
the output 
Expected: sum :100.5 , count:1
Actual: { sum: 100.5, count: 1 }
*/ 

