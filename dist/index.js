"use strict";
let sales = 123456789;
let course = 'TypeScript';
let isPublished = true;
function render(salesNumber) {
    console.log(salesNumber);
}
render(sales);
let numbers = [1, 2, 3];
let user = [1, 'Mosh'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: 'la',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map