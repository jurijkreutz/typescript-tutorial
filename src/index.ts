let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished: boolean = true;

function render(salesNumber: number) {
    console.log(salesNumber);
}

render(sales);

// array
let numbers: number[] = [1, 2, 3];

// tuple
let user: [number, string] = [1, 'Mosh']

// enum: PascalCase
enum Size { Small = 1, Medium = 2, Large = 3 };
let mySize: Size = Size.Medium;
console.log(mySize);

// functions should be properly annotated (return type, parameter types)
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000, 2022);