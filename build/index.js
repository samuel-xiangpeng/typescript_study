"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var customRestFunction = function (name) {
    var object = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        object[_i - 1] = arguments[_i];
    }
    console.log(object);
    return true;
};
var customUHFunction = function (obj) {
    console.log(obj);
    return true;
};
customRestFunction("", 1, 2, 3);
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
        console.log("初始化🐣");
    }
    // Properties
    Car.numberOfCars = 0; // New static property
    return Car;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(props) {
        return _super.call(this, props) || this;
    }
    return Bus;
}(Car));
var customFun = function () {
    return true;
};
var car = new Car("a", "red");
var DogRecord = /** @class */ (function () {
    function DogRecord(_a) {
        var name = _a.name, age = _a.age, description = _a.description, _b = _a.id, id = _b === void 0 ? 0 : _b, sex = _a.sex;
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
        this.sex = sex;
    }
    DogRecord.load = function (id) {
        // code to load dog from database
        // return dog;
    };
    DogRecord.prototype.save = function () {
        // code to save dog to database
    };
    return DogRecord;
}());
var ClassA = /** @class */ (function () {
    function ClassA() {
        this.classA_Name = "";
    }
    ClassA.prototype.say = function () {
        return "";
    };
    return ClassA;
}());
var Test_A = function (params) {
    console.log(params);
    return params;
};
var Test_B = function (params, paramsA) {
    console.log(params, paramsA);
    return params;
};
Test_B("a", 2);
Test_A(1);
Test_A("");
var module01_1 = require("./module01");
(0, module01_1["default"])(2);
