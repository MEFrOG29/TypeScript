// === ТИПЫ ДАНННЫХ === //
//Примитивы(Int, String, Boolean, BigInt, Undefind, Null, Symbol)
//Union/Intersaction ( A|B , A&B)
//Специальные типы (any, unknown, never, void)
//Составные типы (Объекты, массивы, interface, type)
//Литералы(Строковые, числовые, булевы, шаблонные строковые, составные)
//Generic(динамический тип данных)

// let sum  = 1+1  //sum: number
// console.log(sum)

// let anything = 'any' + 'thing'
// console.log(anything);

// let data: number | string; //тип данных обьединение (union). Переменная data может быть
// data = 5;                  //как number так и string
// data = "str";

// type MainInfo = {
//     firstName: string,
//     lastName: string
// };

// type AdditionalInfo = {
//     age: number
// };

// type FullInfo = MainInfo | AdditionalInfo;  //union обьектов

// const info1: FullInfo = {   //содержит в себе поля обьекта MainInfo
//     firstName: "Vadim",
//     lastName: "Pyatovskiy"
// };

// const info2: FullInfo = {   //содержит в себе поле обьекта AdditionalInfo
//     age: 18
// };

// const info0: FullInfo = {   //содержит в себе поля обьектов MainInfo и AdditionalInfo
//     firstName: "Vadim",
//     lastName: "Pyatovskiy",
//     age: 18
// };

// type FullInfo2 = MainInfo & AdditionalInfo;  //тип данных пересечения (intersection).

// const info3: FullInfo2 = {   //содержит в себе поля обьектов MainInfo и AdditionalInfo
//     firstName: "Vadim",
//     lastName: "Pyatovskiy",
//     age: 18
// };

// type SuperType = {    //Надтип. (Что-то типа родительского класса в C#)
//     name: string
// };

// type SubType = {     //Подтип. (Что-то типа дочернего класса в C#)
//     name: string,
//     age:number
// };

// const SubType: SubType = {name: "Vadim", age:18};
// const SuperType: SuperType = SubType;   //Так можно.

// console.log(SuperType);

// const SuperType2: SuperType = {name: "Vadim"};
//const SubType2: SubType = SuperType;  //Так нельзя.

// let value: any;  //тип данных any - все типы. Является и надтипом и подтипом одновременно
// value = 5;
// value = "qwerty";
// value = true;
// value = NaN;
// value = null;

// function logData(data: unknown){  // Тип данных unknown - все типы, но без проверки на тип будет ошибка. Может быть надтипом для всех типов, но не может быть подтипом(кроме самого себя и any)
//     let value: string;
//     if(typeof(data) === 'string')
//         value = data;
// }

// let value: never;   // Тип данных never является подтипом для всех типов, но нельзя его привести явно. Не может быть надтипом
// let value2: string = value;

// enum Values {
//     FIRST,
//     SECOND
// }

// function fn(value:Values){
//     switch(value){
//         case Values.FIRST:
//             return 1;
//         case Values.SECOND:
//             return 2;
//         default:
//             const check:never = value;  //используем тип never для проверки на наличие других вариантов
//             return value;
//     }
// }

// fn(Values.FIRST);
// fn(Values.SECOND);

// function fh() {   //тип данных void - ничего не возвращает
//     console.log();
// }

// interface Address {   //Составные типы могут иметь в себе что угодно. Даже другие составные типы
//     city?: string,
//     street?: string,
//     coords: number[],
// }

// type User = {
//     name: string,
//     age?: number,
//     address: Address
// }

// const user: User = {
//     address: {
//         coords: [5, 5],
//     },
//     name: "vadim"
// }

//type Color = 'red' | 'green' | 'blue';  //строковый литерал - можно будет использовать только red greeen или blue
//const color: Color = "blue"
// type Number =  1 | 14 | 36; //числовой литерал
// type Anything = 'uhdja' | 12 | true; //составной литерал
// type Boolean = true //булевый литерал

// const color = 'green';

// function paint(color:Color){

// }

// paint(color); //так можно. TS сам определяет color как Color тк const

//  const values = {
//     color:"green"
//  }

//  function paint(color:Color){

//  }

//  paint(values.color); //так уже нельзя. Тк color у values можно легко изменить (не является константой),
//                       //  поэтому ts определяет color как string а не как Color

// const values = {
//     color:"green"
//  } as const

//  function paint(color:Color){

//  }

//  paint(values.color); //так уже можно. Мы явно указали что поля у обьекта values константы (as const)

//  type EventName = 'click' | 'swipe';
//  type EventaHandler = `on${EventName}` //Шаблонный строковый литерал. В зависимости от того что выберем будет либо onClick либо onSwipe

//  type Userid = `user_id_${string}}`  //можно передавать и примитивы

// interface MetaData {}

// interface User {
//   username: string
// }

// interface Article {
//   title: string;
// }

// interface ApiResponce<T> {
//   //<T> - это generic. Динамический тип данных.
//   status?: "Error" | "Success";
//   meta?: MetaData;
//   requestId?: string;
//   data: T;
// }

// const responceFromUserApi: ApiResponce<User> = {
//   //здесь <T> = User
//   data: {
//     username: "oleg",
//   },
// };

// const responceFromArticleApi: ApiResponce<Article> = {
//   //здесь <T> = Article
//   data: {
//     title: "something",
//   },
// };

// interface Tree<T> {
//   id: string;
//   value: T;
//   children: Tree<T>[] | null; //Здесь <T> = Tree<T> (рекурсия)
// }

// const treeNode: Tree<User> = {
//   id: "10",
//   value: {
//     username: "123",
//   },
//   children: [
//     {
//       id: "11",
//       value: {
//         username: "1234",
//       },
//       children: null,
//     },
//   ],
// };

// function genericFn<T>(arg: T) {
//   //функция с аргументом generic
// }
// const arrowGeneric = <T,>(arg: T): T => {
//   //стрелочная функция с аргументом generic (<T,> потому что реакт может подумать что <T> это JSX тэг.
//   // : T значит функция возвращает T
//   return arg;
// };

// function createEntity<T extends{id:string, createdAt:Date}>(arg:T){  //Constraints - ограничения в generic. Мы прописываем extends и все что мы пишем после него
//                                                                      // обязательно должно быть у сущности которую мы передаем в функцию
//     arg.id;
// }

// class Order<T> {   //generic в классе
//     private data: T;

//     constructor(arg: T){
//         this.data = arg;
//     }
// }

// interface ApiResponce<Data = string>{  //у generic также можно указать дефолтный тип
//     status?: 'error'| 'success';
//     requestId?: string;
//     data: Data;
// }

// const responce : ApiResponce = {  //теперь ts не требует от нас явно указывать тип generic`a. Он сразу подставляет дефолтное значение
//     data: 'osakdlask',
// }

// const responce2 : ApiResponce<User> = {  //но нам никто не запрещает явно указывать тип у generic'а
//     data:{
//         username: 'djdka',
//     }
// }

// type isArray<T> = T extends any[] ? true : false;   //условные типы в generic. Мы прописываем простой тернарный оператор который при определенном условие может возвращать любой тип данных
// const first:isArray<string> = false; //пример. Так как generic != any[]. То наш тернарный оператор возвращает в константу first значение false
// const second:isArray<string[]> = true;

// type RandomName<T> = T extends User ? {username: string} : false;  //еще один пример, в данном случае мы передаем значение и если условие подходит то мы возвращаем определенный тип иначе false
// const third:RandomName<string> = false //пример.
// const four:RandomName<User> = {username: 'вадик'} //пример.
// const five:RandomName<{username: string}> = {username: 'вадик'} //пример. Здесь работает правило супертипов и подтипов.
//                                                                 //  так поле username является подтипом для User ts что это User

//===ТИПЫ ДАННЫХ===//

//===СУЖЕНИЕ ТИПОВ. NARROWING===//
// function fn(arg: number | string | null) {
//1 способ:(через typeof)
//   // Мы прописываем все типы данных которыми может быть аргумент. Потом делаем проверки и после их прохождения ts определяет какой тип данных в аргументе.
//   if (typeof arg === "number") {
//     return;
//   } else if (typeof arg === "string") {
//     return;
//   }

//   return arg;
// }

// function padLeft(padding: number | string, input: string): string {
//   // еще один пример сужения типов с использованием typeof
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }
//   return padding + input;
// }

//2 способ: Сужение правдивости (Truthiness narrowing)

// //Интересно
// //type:bool, value: true
// Boolean("Hello!");

// //type: true, value: true
// //!! - двойное отрицание, краткая проверка на true/false. Удобно и TS заодно возвращает не bool значение а тип данных true, который является проще и соответственно занимает меньшую память
// !!"Hello!";

// //логический оператор if/else преобразуют в bool все типы данных

//3 способ: Сужение равенства (Equality narrowing) пр: switch, ===, !===, !=, ==

// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     //равенство на типы данных.
//     x.toUpperCase(); //Теперь мы можем использовать с параметрами x и y любые методы для string
//     y.toLowerCase();
//   } else {
//     console.log(x); //А тут x может быть string | number
//     console.log(y); //А тут x может быть string | boolean
//   }
// }

// function printAll(strs: string | string[] | null) {
//   if (strs !== null) {
//     // проверка на соответствие типа
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s); //выводим все элементы массива
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }
// }

// interface Container {
//   value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//   //данный оператор проверяет на наличие данных. Соответсвенно в данном случае эта одна проверка замещает собой проверки: container.value !== null и container.value !== undefined
//   if (container.value != null) {
//     console.log(container.value);
//     container.value *= factor;
//   }
// }

//4 способ: Сужение с помощью in

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { fly?: () => void; swim?: () => void };

// function move(animal: Fish | Bird) {
//     //оператор in проверяет есть ли в параметре animal функция swim
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

// function move(animal: Fish | Bird | Human) {
//   //неопределенные типы данных по типу human будут располагаться с обоих сторон сужения
//   if ("swim" in animal) {
//     animal;
//   } else {
//     animal;
//   }
// }

//5 способ: Сужение с помощью instanceof

// function logValue(x: Date | string) {
//     //instanceof проверяет является ли параметр экземпляром какого нибуль класса или типа
//   if (x instanceof Date) {
//     console.log(x);
//   } else {
//     console.log(x);
//   }
// }

//Назначения (Assignments)

// let x = Math.random() < 0.5 ? 10 : "hello world!"; //в данном случае ts понимет по назначению что у x тип данных будет: number | string

// x = 1; //x: number
// console.log(x);

// x = "goodbye"; //x: string
// console.log(x);

// x = true  //если мы попытаемся подставить в x любой другой тип данных то будет ошибка
// console.log(x);

//Анализ потока управления(Control flow analysis)

// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }
//   return padding + input; //Анализ потока управления -  анализ потока для сужения типов,ts сталкивается с защитой типов и назначениями.
//   // Когда переменная анализируется, поток управления может разделяться и повторно объединяться снова и снова, и можно наблюдать, что в каждой точке эта переменная имеет разный тип.
// }

// function example() {
//   // пример:
//   let x: string | number | boolean;

//   x = Math.random() < 0.5;

//   console.log(x); //x: boolean

//   if (Math.random() < 0.5) {
//     x = "hello";
//     console.log(x); //x: string
//   } else {
//     x = 100;
//     console.log(x); //x: number
//   }

//   return x; //x:string | number
// }

//Использование предикатов типа(Using type predicates)

// type Fish = { swim: () => void, name: string };
// type Bird = { fly: () => void, name: string };
// declare function getSmallPet(): Fish | Bird;
// function isFish(pet: Fish|Bird): pet is Fish{  //pet is Fish это предикат. Каждый раз при вызове функции ts будет приводить праметр к типу Fish если данный тип совместим.
//     return(pet as Fish).swim !== undefined;
// }

// let pet = getSmallPet();

// if(isFish(pet)){
//     pet.swim();  //В данном случае ts не только понимает что в ветке if у нас Fish но и то что в другой ветке Bird
// }
// else{
//     pet.fly();
// }

// const zoo:(Fish|Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];  //Также с помощью функций с предикатами можно фильровать данные

// const underWater1: Fish[] = zoo.filter(isFish)  //1 способ. Слабая фильтрация

// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];  //2 способ. Фильтрция с эквивалентным типом

// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {  //3 способ.  Сильная фильтрация. Проверяет даже поля.
//     if (pet.name === "sharkey") return false;
//     return isFish(pet)
// })

//Дискриминантные обьединения (Discriminated unions)

// interface Shape{
//     kind: "Circle"|"Shape",
//     radius?: number,
//     sideLength?: number;
// }

// function getArea(shape: Shape){
//     if(shape.kind === "Circle"){
//         return Math.PI * shape.radius ** 2;  //ts не может определить поле radius у shape так как от kind не зависит будет ли у shape radius или sideLength
//     }

// }

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   return Math.PI * shape.radius ** 2;  //теперь ошибка тк из за того что мы обьеденили в shape circle и square.

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
// } //теперь ошибки нет так как мы сделаи проверку на kind и теперь ts понимает что мы имеем дело с circle

// function getArea(shape:Shape){  //вариант с условным оператором switch
//   switch(shape.kind){
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return Math.PI * shape.sideLength ** 2;
//   }
// }

//Проверка полноты охвата (Exhaustiveness checking)

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;  // для того чтобы удостоверится что все варианты использованы часто использубт тип невер который является дочерним всем типам.
//       return _exhaustiveCheck;
//   }
// }

// === ФУНКЦИИ === //

//ВЫРАЖЕНИЕ ТИПОВ ФУНКЦИИ

// function greeter(fn: (a: string) => void) {
//   fn("Hello world!");
// }

// function printToConsole(a: string) {
//   console.log(a);
// }

// greeter(printToConsole);

//альтернативный вариант с псевдонимом типа

// type GreeterFunction = (a:string)=>void;

// function greeter(fn:GreeterFunction){
//     //...
// }

//СИГНАТУРА ВЫЗОВА

// type DescribableFunction = {
//     description:string,
//     (someArg:number):boolean;
// }

// function doSomething(fn:DescribableFunction){
//     console.log(fn.description + "returned" + fn(6));
// }

// function myFunc(someArg:number){
//     return someArg > 3;
// }
// myFunc.description = "default description";

// doSomething(myFunc);

//СИГНАТУРА КОНСТРУКТОРА

// type SomeConstructor = {
//     new (s: string): boolean
// }

// function fn(ctor: SomeConstructor){
//     return new ctor("hello")
// }

// interface CallOrConstructor {
//   (n?: number): string;
//   new (s: string): Date;
// }

// function fn(ctor: CallOrConstructor) {
//   console.log(ctor(6));

//   console.log(new ctor("10"));
// }

// fn(Date);

//ОБОБЩЕННЫЕ ФУНКЦИИ

// function firstElement<Type>(arr:Type[]):Type|undefined{
//     return arr[0];
// }

// function map<Input, Output>(
//   arr: Input[],
//   func: (arg: Input) => Output
// ): Output[] {
//   return arr.map(func);
// }

// const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }

// const longerArray = longest([1,2],[1,2,3]);
// const longerString = longest("alice", "bob");
// //const longestNumber = longest(10,100);

//ДОП ПАРАМЕТРЫ

// function fn(x?:number){

// }

// function fn2(x = 10){

// }

//ПЕРЕГРУЗКА ФУНКЦИЙ

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3);

// function fn() {
//   return;
// }

//REST-ПАРАМЕТРЫ И АРГУМЕНТЫ

// function fn(...x: number[]): number[] {
//   return x;
// }

// console.log(fn(1, 2, 3, 4, 5));
// fn(1);
// fn(1, 2, 3);

// function multiply(n: number, ...m: number[]) {
//   m.map((x) => n * x);
// }

// const a = multiply(10, 1, 2, 3, 4);
// console.log(a);

// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// arr1.push(...arr2);

//ДЕСТРУКТУРИЗАЦИЯ ПАРАМЕТРОВ

// type ABC = { a: number; b: number; c: number };
// function sum({ a, b, c }: ABC) {
//   console.log(a + b + c);
// }
// sum({ a: 9, b: 10, c: 2 });

//ПРИСВАИВАЕМОСТЬ ФУНКЦИЙ

// type voidFunc = () => void;

// const f1: voidFunc = () => {
//   return true;
// };

// const v1 = f1();

/// ===ТИПЫ ОБЬЕКТОВ=== ///

//МОДИФИКАТОРЫ СВОЙСТВ

// interface Shape {}
// declare function getShape(): Shape;

// interface PaintOptions {
//   shape: Shape;
//   xPos?: number;
//   yPos?: number;
// }

// function paintShape(opts: PaintOptions) {
//   //...
// }

// const shape = getShape();
// paintShape({ shape });
// paintShape({ shape, xPos: 100 });
// paintShape({ shape, yPos: 100 });
// paintShape({ shape, xPos: 100, yPos: 100 });

// function paintShape(opts: PaintOptions) {
//   let xPos = opts.xPos;
//   let yPos = opts.yPos;
// }

// function paintShape({ shape, xPos = 100, yPos = 100 }: PaintOptions) {
//   //...
// }

//readonly свойство

// interface SomeType {
//   readonly prop: string;
// }

// function doSomething(obj:SomeType){
//     console.log(obj.prop);

//     obj.prop = "something";
// }

// interface Home {
//   readonly resident: { name: string; age: number };
// }

// function visitForBirthday(home:Home){
//     console.log(`Happ birthday ${home.resident.name}!`);
//     home.resident.age++;
// }

// function evict(home:Home){
//     home.resident={
//         name:"Alex",
//         age:42
//     }
// }

// interface Person {
//   name: string;
//   age: number;
// }

// interface ReadonlyPerson {
//   readonly name: string;
//   readonly age: number;
// }

// let writablePerson: Person = {
//   name: "Vadim",
//   age: 18,
// };

// let readonlyPerson: ReadonlyPerson = writablePerson;

// console.log(readonlyPerson.age);
// writablePerson.age++;
// console.log(readonlyPerson.age);

//ПОДПИСИ ИНДЕКСОВ

// interface SomeInter {
//   [x: string]: number;
// }

//ДОПОЛНИТЕЛЬНЫЕ ПРОВЕРКИ СВОЙСТВ

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return {
//     color: config.color || "red",
//     area: config.width ? config.width * config.width : 100,
//   };
// }

//ИЗБЫТОЧНАЯ ПРОВЕРКА СВОЙСТВ

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [prop: string]: unknown;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return {
//     color: config.color ?? "red",
//     area: config.width ? config.width * config.width : 20,
//   };
// }

// let mySquare = createSquare({ colour: "red", width: 100 });
//let mySquare = createSquare({colour:'red', width:100} as SquareConfig);

//РАСШИРЯЮЩИЕСЯ ТИПЫ

// interface BasicAddres {
//   name?: string;
//   street: string;
//   city: string;
//   country: string;
//   postalname: string;
// }

// interface AddressWithunit extends BasicAddres {
//   unit: string;
// }

// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// interface ColorfulCircle extends Colorful, Circle {}

// const cc: ColorfulCircle = {
//   color: "red",
//   radius: 42,
// };

//ТИПЫ ПЕРЕСЕЧЕНИЙ

// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// type ColorfulCircle = Colorful & Circle;

// interface Person {
//     name:string;
// }

// interface Person {
//     name:number;
// }

// interface Person1 {
//   name: string;
// }

// interface Person2 {
//   name: number;
// }

// type Person3 = Person1 & Person2;

// ОБЩИЕ ТИПЫ ОБЪЕКТОВ (GENERICS)

// interface Box<T> {
//   value: T;
// }

// const numberBox: Box<number> = { value: 12 };
// const stringBox: Box<string> = { value: "12" };
// const boolBox: Box<boolean> = { value: false };

// КОРТЕЖИ

// let tuple: [string, number];
// tuple = ["hello", 12];
// tuple = [12, "hello"];

// let person: [string, number, boolean];
// person = ["Alice", 30, true];

// const name = person[0]; //string
// const age = person[1]; //number
// const isActive = person[2] //boolean

// person[0] = "Bob";

// let point: [number, number];
// point = [10, 20];

// const [x, y] = point;
// console.log(x);
// console.log(y);

// let optionalTuple:[string, number, boolean?];
// optionalTuple = ["Vadim", 18]
// optionalTuple = ["Vadim", 18, false]

// ОБОБЩЕНИЕ (GENERICS)

// function identity<T>(value:T):T{
//     return value;
// }

// let x = identity<string>("hello");
// let a = identity("hello");

// function identity<T>(value:T[]):T[]{
//     console.log(value.length);
//     return value;
// }

// function identity<T>(value: T): T {
//   return value;
// }

//ОБЩИЕ ТИПЫ, ОБЩИЕ ИНТЕРФЕЙСЫ

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;
//let myIdentity: <input>(arg: input) => input = identity;
//let myIdentity: {<input>(arg: input): input} = identity;

// interface MyIdentityFn {
//   <T>(arg: T): T;
// }

// let myIdentity: MyIdentityFn = identity;

// interface MyIdentityFn<T> {
//   (arg: T): T;
// }

// let MyIdentityFn: MyIdentityFn<number> = identity;

// MyIdentityFn(10);
// MyIdentityFn("10");

//оБЩИЕ КЛАССЫ

// class Box<T> {
//   value: T;
//   constructor(value: T) {
//     this.value = value;
//   }
//   getValue(): T {
//     return this.value;
//   }
//   setValue(newValue: T): void {
//     this.value = newValue;
//   }
// }

// const numberBox = new Box<number>(42);
// numberBox.getValue() //42

// const stringBox = new Box<string>("42");
// stringBox.getValue() //"42"
// stringBox.setValue("32");
// stringBox.setValue(32);

//ОБЩИЕ ОГРАНИЧЕНИЯ

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

//ИСПОЛЬЗОВАНИЕ ПАРАМЕТРОВ ТИПА В УНИВЕРСАЛЬНЫХ ОГРАНИЧИНИЯХ

// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a");
// getProperty(x, "m");

//ИСПОЛЬЗОВАНИЕ ТИПОВ КЛАССОВ В ДЖЕНЕРИКАХ

// class BeeKeeper {
//   hasMask: boolean = true;
// }

// class ZooKeeper {
//   nametag: string = "Mickle";
// }

// class Animal {
//     numLegs:number = 4;
// }

// class Bee extends Animal{
//     numLegs = 6;
//     keeper: BeeKeeper = new BeeKeeper();
// }

// class Lion extends Animal{
//     keeper:ZooKeeper = new ZooKeeper();
// }

// function createInstance<A extends Animal>(c: new () => A):A{
//     return new c();
// }

// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;
