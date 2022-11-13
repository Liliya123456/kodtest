/**
 * @param {object} applicationData
 * @param {Array} lenders - An array with lenders and their rules
 * @return {Array} - The filtered array
 */

function run(applicationData, lenders) {
  let isLenderAdded = false;
  let resultArray = [];
  for (let i = 0; i < lenders.length; i++) {
    for (let j = 0; j < lenders[i].rules.length; j++) {
      switch (lenders[i].rules[j].field) {
        case 'amount':
          if (lenders[i].rules[j].operator == "greaterThan") {
            if (applicationData.data.amount > lenders[i].rules[j].value)
              isLenderAdded = true;
          } else if (lenders[i].rules[j].operator == "lessThan") {
            if (applicationData.data.amount < lenders[i].rules[j].value)
              isLenderAdded = true;
          }
          break;

        case 'repaymentYears':
          if (lenders[i].rules[j].operator == "greaterThan") {
            if (applicationData.data.amount > lenders[i].rules[j].value)
              isLenderAdded = true;
          } else if (lenders[i].rules[j].operator == "lessThan") {
            if (applicationData.data.amount < lenders[i].rules[j].value)
              isLenderAdded = true;
          }
          break;
      }
      if (isLenderAdded == true) {
        resultArray.add(lenders[i].name);
        sendToBank1(lenders[i]);
        res.status(200).send('Success hurra!');
        isLenderAdded = false;
        break;
      }
    }
  }
  return resultArray;
}
function sendToBank1(lender) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Applied to ${lender.name}`)
      resolve({
        name: lender.name,
        response: `Successfully applied to ${lender.name}`
      })
    }, 1000)
  })
}
module.exports = {
  run


}
