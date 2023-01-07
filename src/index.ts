// Basic Types
let id: number = 5
let company: string = 'Simon Edusi'
let isPublished: boolean = true
let X: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1, 'brad', true]

//Tuple Array
let employee: [number, string] []

employee = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Joe'],
    [4, 'Jack']
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up= 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up= 'Up',
    Down = 'Down',
    Left = 'Left',
    Right= 'Right',
}

console.log(Direction1.Left);

// Objects 
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number ): number {
    return x + y
}
console.log(addNum(1,2));

// Void
function log(message: string | number):  void {
    console.log(message);
}