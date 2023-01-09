// Basic Types
let id: number = 5
let company: string = 'Simon Edusi'
let isPublished: boolean = true
let X: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1, 'brad', true]

//Tuple Array
let employee: [number, string][]

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
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
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
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: 'John'
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// mapping PersonInterface with Person class
interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes 
class Person implements PersonInterface {
    // public, private & protected
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const simon = new Person(2, 'Simon Winston')
const cynthia = new Person(2, 'Cynthia George')

console.log(simon, cynthia);

// SubClass : extends Person from Person class
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(4, 'John', 'Baker')

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['simon', 'cynthia', 'lucas'])

numArray.push(1)
strArray.push('john')