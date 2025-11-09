
async function main() {

  // Define prompts for the inputs.
  const totalCostPrompt = "Total cost of goods: ";
  const cashPaymentPrompt = "Cash payment: ";
  const discountCodePrompt = "Discount code: ";

  // Define variable for the discount.
  let discount;

  // Read total cost as a number
  let totalCost = Number(await input(totalCostPrompt));

  // Check whether the entered value for the total cost is a number.
  if(isNaN(totalCost)) {
    output("Error: Please enter a valid number for the total cost.");

  // Check whether the entered value for the total cost not empty.
  } else if(!totalCost) {
    output("Error: Total cost cannot be blank. Please try again.");
  } else {

    // Read cash payment as a number
    let cashPayment = Number(await input(cashPaymentPrompt));

    // Check whether the entered value for the cash payment is a number.
    if(isNaN(cashPayment)) {
      output("Error: Please enter a valid number for the cash payment.");

    // Check whether the entered value for the cash payment not empty.
    } else if(!cashPayment) {
      output("Error: Cash payment cannot be blank. Please try again.");
    } else {

      // Read discount code as a number
      let discountCode = Number(await input(discountCodePrompt));

      // Check whether the entered value for the discount code is a number.
      if(isNaN(discountCode)) {
        output("Error: Please enter a valid number for the discount code.");
      
      // Check whether the entered value for the discount code not empty.
      } else if(discountCode == null) {
        output("Error: Discount code cannot be blank. Please try again.");
      } else {
        // Choose discount based on the entered discount code.
        switch (discountCode) {
          case 0:
            discount = 0;
            break;
          case 1:
            discount = 10;
            break;
          case 2:
            discount = 15;
            break;
          case 3:
            discount = 25;
            break;
          case 4:
            discount = 35;
            break;
          case 5:
            discount = 40;
            break;
          default:
            output("Error: Invalid discount code. Please try again.");
        }

        if (discount != null)
        {
          // Discunt %
          discount = discount / 100;

          // Compute discounted cost.
          let discountedCost = totalCost - (totalCost * discount);

          // Compute change value.
          let change = cashPayment - discountedCost;

          // Check whether the payment is sufficient.
          if (change < 0) {
            output("Insufficient Payment!");
          } else {
            // Display change value with two decimal places.
            output("$" + change.toFixed(2));
          }
        }
      }
    }
  }
}
