// Task 1: Format full name as "LastName, FirstName"
// Capitalize the first letter of each name
// If either name is missing, return error message

function formatFullName(firstName, lastName) {
  if (firstName === "" || lastName === "" || firstName === undefined || lastName === undefined) {
    return "Invalid name input.";
  }

  var firstLetterFirstName = firstName.charAt(0).toUpperCase();
  var restFirstName = firstName.slice(1).toLowerCase();
  var formattedFirstName = firstLetterFirstName + restFirstName;

  var firstLetterLastName = lastName.charAt(0).toUpperCase();
  var restLastName = lastName.slice(1).toLowerCase();
  var formattedLastName = firstLetterLastName + restLastName;

  return formattedLastName + ", " + formattedFirstName;
}

console.log(formatFullName("naquan", "spinner"));  // Spinner, Naquan
console.log(formatFullName("", "doe"));             // Invalid name input.


// Task 2: Calculate total cost with tax
// If inputs are not numbers, return error

function calculateTotalCost(price, quantity, taxRate) {
  if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
    return "Invalid input.";
  }

  var totalCost = (price * quantity) * (1 + taxRate);
  return totalCost;
}

console.log(calculateTotalCost(10, 3, 0.1));  // 33
console.log(calculateTotalCost("10", 3, 0.1));  // Invalid input.


// Task 3: Check eligibility based on age and employment

function checkEligibility(age, isEmployed) {
  if (age > 18) {
    if (isEmployed === true) {
      return "You are eligible for the program.";
    } else {
      return "You are conditionally eligible for the program.";
    }
  } else {
    return "You are not eligible for the program.";
  }
}

console.log(checkEligibility(20, true));   // You are eligible for the program.
console.log(checkEligibility(20, false));  // You are conditionally eligible for the program.
console.log(checkEligibility(16, true));   // You are not eligible for the program.


// Task 4: Calculate total cost with optional discount

function calculateTotalCostWithDiscount(price, quantity, taxRate, discount) {
  if (discount === undefined) {
    discount = 0;
  }

  if (
    typeof price !== "number" || 
    typeof quantity !== "number" || 
    typeof taxRate !== "number" || 
    typeof discount !== "number"
  ) {
    return "Invalid input.";
  }

  var subtotal = (price * quantity) - discount;
  var totalCost = subtotal * (1 + taxRate);
  return totalCost;
}

console.log(calculateTotalCostWithDiscount(10, 3, 0.1));        // 33
console.log(calculateTotalCostWithDiscount(10, 3, 0.1, 5));     // 28.6
console.log(calculateTotalCostWithDiscount("10", 3, 0.1, 5));   // Invalid input.
