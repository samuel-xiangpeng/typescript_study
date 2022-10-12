// function main(x: number, y: number): Boolean {
//     console.log(x, y);
//     /* 类型推理 */
//     let name = "SAMUEL";
//     let big:bigint;
//     const age:number = 20;
//     let testName:undefined;
//     console.log(name, age);
//     let firstName: string = "Mateo";
//     let sentence: string = `My name is ${firstName}.I am new to TypeScript.`;
//     console.log(sentence);
//     console.log(testName, 'big');
//     return true
// }
//
// main(1, 2);
/* 枚举类型 */
// // @errors: 1005
// enum ContractStatus {
//     Permanent,
//     Temp,
//     Apprentice
// }
// let employeeStatus: ContractStatus = ContractStatus.Temp;
// console.log(employeeStatus, '🍳');
//
// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';

// let TestName: unknown = 100
// console.log(typeof TestName)
// // console.log((<string>TestName)?.toUpperCase(), '测试')
//
// /*  字面量类型 */
// type currentType = "boy" | "girl";
// let sex: currentType = "boy";
// console.log("字面量类型", sex);
//
// /* 集合类型 */
//
// let listNumber: number[] = [1, 2, 3]
// let listString: string[] = ["a", "b"]
//
// let _listNumber: Array<number> = [1, 2, 3]
// let _listString: Array<String> = ["a", "b"]
//
// console.log(listNumber, listString, _listNumber, _listString);
//
// /* 元组 */
// let listMeta: [string, number, boolean] = ["a", 1, true];
//
// /* TODO:问题，怎么在数组中存储不同类型的数据呢？ */
// console.log(listMeta);
//
// /* 接口类型 */
// interface Person {
//     /* 可选 */
//     name?: string,
//     /* 设置只读 */
//     readonly sex: "0" | "1",
//
//     say(): string
// }
//
// /* 接口继承或者说接口扩展 */
// interface Swimmer extends Person {
//     name: string,
//     sport: string,
// }
//
// const swimmer: Swimmer = {
//     name: "1",
//     sex: "0",
//     sport: "swim",
//     say(): string {
//         return ""
//     }
// }
//
// console.log(swimmer.name + swimmer.sex)
//
// /* 实例化接口并实现接口 */
// const man: Person = {
//     name: "Samuel.zhou",
//     sex: "0",
//     say(): string {
//         console.log(this.name, this.sex)
//         return "🍳"
//     }
// }
//
//
// /* 类型别名 */
// type CustomTypeAlias = number;
//
// let customAlias: CustomTypeAlias = 2;
//
// console.log(customAlias);
//
// interface CustomInterface {
//     name: string,
//     arr: Array<string>,
// }
//
// const customInterface: CustomInterface = {
//     name: "Test_Name",
//     arr: ["a"]
// }
//
// console.log(customInterface.arr[0]);
//
// interface IceCreamArray {
//     [index: number]: string;
// }
//
// let myIceCream: IceCreamArray;
// myIceCream = ['chocolate', 'vanilla', 'strawberry'];
// let myStr: string = myIceCream[0];
// console.log(myStr);
//
// /* 函数 - 必填参数 */
// const customFunction = (name: string = '默认值'): Boolean => {
//     console.log(name)
//     return true
// }
//
// /* 函数 - 可选参数 */
// const customOptionalFunction = (name?: string): Boolean => {
//     console.log(name)
//     return true
// }

/* 函数 - argument */

interface Object {

}

const customRestFunction = (name: string, ...object: Array<number>): Boolean => {
    console.log(object)
    return true
}
const customUHFunction = (obj: Object): Boolean => {
    console.log(obj)
    return true
}


customRestFunction("", 1, 2, 3)

class Car {
    // Properties
    private static numberOfCars: number = 0;  // New static property
    private _make: string | undefined;
    private _color: string | undefined;
    /* Property '_doors' has no initializer and is not definitely assigned in the constructor */
    /* 属性“ _doors”没有初始化器，并且在构造函数中不确定分配 */
    public _doors: number;

    // Constructor
    constructor(make?: string, color?: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
        console.log("初始化🐣")
    }

    // ...
}

class Bus extends Car {
    constructor(props: any) {
        super(props);
    }
}

const customFun = () => {
    return true
}

const car = new Car("a", "red");

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
    sex: string
}

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;
    sex: string

    constructor({name, age, description, id = 0, sex}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
        this.sex = sex;
    }

    static load(id: number) {
        // code to load dog from database
        // return dog;
    }

    save() {
        // code to save dog to database
    }
}

interface classA {
    classA_Name: string,

    say(): string
}

class ClassA implements classA {
    classA_Name: string;

    constructor() {
        this.classA_Name = ""
    }

    say(): string {
        return ""
    }
}

interface T {
}

const Test_A = (params: T) :T=> {
    console.log(params)
    return params
}

const Test_B = <T, A>(params: T, paramsA: A) :T=> {
    console.log(params, paramsA)
    return params
}

Test_B<string, number>("a", 2)

Test_A( 1)
Test_A( "")


import module01 from './module01'

module01<number>(2);