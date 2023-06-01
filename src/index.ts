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