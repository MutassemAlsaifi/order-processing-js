
# Order Processing – JavaScript Practical Task

## 1. Introduction

This is a simple JavaScript project consisting of a function called `handelOrder()`.

The function receives an array of order objects (JSON-like data) and returns the total amount and count of valid paid orders.

It also handles invalid data, such as missing objects, missing values, and incorrectly formatted amounts.

For example, some amounts may be provided as strings instead of numbers. Although it is possible to check whether a string can be converted into a number and include it in the calculation, I decided to ignore all string values to keep the validation strict and avoid unexpected results.

Missing or invalid values are also ignored.

## 2. Project Structure & How to Run

The project contains three files:

- `orderFunction.js` – Contains the main function.
- `test.js` – Contains the test cases.
- `README.md` – Contains the project documentation.

### How to Run

1. Download the project.
2. Open a terminal in the project folder.
3. Run the tests using:

   ```bash
   node test.js
   ```


## 4. Test Cases & Results

I created three test cases in the `test.js` file to check how the function handles normal orders, invalid amounts, and missing or invalid order objects.
### Test 1 — Normal and Mixed Orders

**Purpose:** To check whether the function calculates the total amount and count of paid orders while ignoring pending and cancelled orders.

This test also includes a decimal amount with more than two decimal places.

**Expected Output:**
```text
{ sum: 126.25789, count: 2 }
```

**Actual Output:**
```text
{ sum: 126.26, count: 2 }
```

**Result:** Mismatch

**Note:** The difference is expected because I intentionally used `toFixed(2)` in my function to round amounts to two decimal places. Therefore, the actual output is consistent with how I designed the function.

### Test 2 — Invalid Amounts

**Purpose:** To check how the function handles invalid amounts, including `NaN`, `Infinity`, negative numbers, zero, null values, and strings.

**Expected Output:**
```text
{ sum: 0, count: 0 }
```

**Actual Output:**
```text
{ sum: 0, count: 0 }
```

**Result:** PASS

### Test 3 — Invalid Order Objects

**Purpose:** To check how the function handles missing objects, null values, and missing order statuses.

**Expected Output:**
```text
{ sum: 100.5, count: 1 }
```

**Actual Output:**
```text
{ sum: 100.5, count: 1 }
```

**Result:** PASS

### Test Summary

| Test Case | Result |
|-----------|--------|
| Test 1 — Normal and Mixed Orders | Mismatch |
| Test 2 — Invalid Amounts | PASS |
| Test 3 — Invalid Order Objects | PASS |
