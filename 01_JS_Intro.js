                // JavaScript
// Programlar bilgisayarlara verilmiş instruction lardan oluşur.
// Her bir instruction, bir statement anlamına gelir.
// Her statement ın sonunda noktalı virgül olmalıdır.
// Apex ve JavaScript te bir satırda, aralarına noktalı virgül koyarak birden fazla statement yazabiliriz.
// JavaScript, Case Sensitive dir. Yani keyword ler ve name lerde büyük küçük harf önemlidir.

// Single line comment
/* multiple line comment */

/* JavaScript Identifiers / Names:
    İsimler şunlarla başlayabilir:
        -harfler
        -$ işareti
        - Alt çizgi (_)
    isimler rakamla başlayamaz.
*/

// JavaScript Variables: Syntax ==> type nameOfVariable = initialValue;
// JavaScript ile variable oluştururken data type ını girmek zorunlu olmadığından, Strongly Typed programming 
//      language değildir.
// Variable lar, bilgi tutmak için birer container dırlar.

/* JavaScript ile variable declare etmenin 4 yolu vardır:
        -var
        -let
        -const
        -nothing
    Bir variable declare edilip, initialize edilmezse (bir değer verilmezse), o zaman "undefined" olur.
*/

        // var:
/* nothing ile declare edilmiş olan variable ları daha sonradan "var" keyword ile yeniden declare edebiliriz.
    "var" keyword ile declare edilen variable lar: 
        -daha sonradan herhangi bir yerde yine var ile declare edilebilir.
        -yeni değerler reassign edilebilir.
        -en üste hoisted edilir ve herhangi bir anda initialize edilebilir.
        -Block Scope değildirler. Yani bir code bloğu içerisinde tanımlanmış olsa da, 
            o blok dışından da ona ulaşılabilir. Yani sadece o kod bloğu için tanımlanmış değildir.
            Her yer için tanımlanmış olur.
    Hoisting: Declare edilmeden önce kullanılabilmeye denir.
*/
name1 = 'Ahmet';
console.log(name1); // Apex teki System.debug(); ın işlevini görür.
name1 = 'Mehmet';
console.log(name1); // Mehmet
var name1;
console.log(name1); // Mehmet
var name1;
name1 = 5;
console.log(name1); // 5

var car; 
console.log(car); // undefined
car = 'Merso';
console.log(car); // Merso
car = 'BMW'; // "var" can be reassigned
console.log(car); // BMW
var car; // "var" can be redeclared
console.log(car); // BMW

// Block Scope:
{
    var carModel = 2023;
    console.log(carModel); // 2023
}
console.log(carModel); // 2023


        // let:
/* "let" keyword ile declare edilen variable lar: 
    -redeclaring yapılamaz.
    -reassigning yapılabilir.
    -Kullanılmadan önce declare edilmelidir.
    -Block Scope tur. Yani code bloğu içinde tanımlananlar, o blok dışında tanınmaz.
        O blok dışında tanınmadığı için de, o blok dışında aynı isimle redeclare yapılabilir.
*/

let name2 = 'Ahmet';
console.log(name2); // Ahmet
name2 = 'Mehmet';
console.log(name2); // Mehmet
// let name2; ==> Cannot redeclare block-scoped variable 'name2'

{
    let name2 = 'Cemil';
    console.log(name2); // Cemil
}

console.log(name2); // Mehmet

{
    let name2 = 'Kemal';
    console.log(name2); // Kemal
}

console.log(name2); // Mehmet

{
    let name3 = 'Ayşe';
    console.log(name3); // Ayşe
}
console.log(name3); // ReferenceError: name3 is not defined


        // const: (constant)
/* "const" keyword ile declare edilen variable lar:
    -redeclaring yapılamaz.
    -reassigning yapılamaz.
    -Kullanılmadan önce declare edilmelidir.
    -Block Scope tur. Yani code bloğu içinde tanımlananlar, o blok dışında tanınmaz.
        O blok dışında tanınmadığı için de, o blok dışında aynı isimle redeclare yapılabilir.
    -declare edildiğinde, initialize da edilmelidir. Yani değeri de verilmelidir.
*/
// const sabit; // const declarations must be initialized.

const price = 300;
console.log(price); // 300
price = 400; // reassigning yapılamaz.
console.log(price); // TypeError: Assignment to constant variable. 

{
    const price2 = 200;
    console.log(price2); // 200
}
console.log(price2); // ReferenceError: price2 is not defined. Code bloğu dışında tanımıyor price2 yi

{
    const price2 = 100;
    console.log(price2); // 100
}


        // Operators:
// 1. Arithmetic Operators:
/*
    +, -, *, /, ++, --
    %   Modulus (Remainder) (Kalan)
    **  Exponentiation (Üssü)    
*/

let x = 5;
x++;
console.log(x); // 6
x--;
console.log(x); // 5

// Post Increment (y++)
let y = 10;
console.log(y++); // 10
console.log(y); // 11

// Pre Increment(++y)
let z = 20;
console.log(++z); // 21
console.log(z); // 21

console.log(z%y); // 10 ==> 21 in 11 e bölümünden kalanı veriyor.

let w = 3;
console.log(x**w); // 125 ==> 5 üzeri 3 = 5*5*5 = 125


// 2. Assignment Operators:
/*
    x = y       Assignment
    x += y      x = x + y
    x -= y      x = x - y
    x *= y      x = x * y
    x /= y      x = x / y
    x %= y      x = x % y
    x **= y     x = x ** y
*/

let X = 10;
X += 3;
console.log(X); // 13
X *= 10;
console.log(X); // 130
X %= 100;
console.log(X); // 30 ==> 130 un 100 e bölümünden kalanı X e assign etti.
X **= 2;
console.log(X); // 900


// 3. Logical Operators:
/*
    &&      AND     Bütün condition lar true olduğunda sonuç true döner, aksi halde false döner
    ||      OR      Bütün condition lar false olduğunda sonuç false döner, aksi halde true döner
    !       NOT
*/

let Z = 5, W = 3;
let result = (Z > W && W < 7);
console.log(result); // true
let result2 = (Z < W || W < 4);
console.log(result2); // true
console.log(!(Z == W)); // true


// 4. Comparison Operators:
/*
    ==      equal to (values)
    ===     equal value and equal type
    !=      not equal (values)
    !==     not equal value or not equal type
    <       less than
    >       greater than
    <=
    >=
    ?       ternary operator
*/

let a = 5;
let b = 5;
let c = 4;
let d = '5';

console.log(a == b); // true
console.log(a == c); // false
console.log(a == d); // true ==> value ları aynı olduğu için true
console.log(a === b); // true ==> hem value ları hem de type ları aynı olduğu için true
console.log(a === c); // false ==> value ları farklı olduğu için false
console.log(a === d); // false ==> type ları farklı olduğu için false

console.log(a != b); // false
console.log(a != c); // true
console.log(a != d); // false
console.log(a !== b); // false
console.log(a !== c); // true
console.log(a !== d); // true

let age = 25;
let voteable = (age < 18) ? 'Too Young to vote' : 'Eligible for voting';
console.log(voteable); // Eligible for voting
// Ternary Syntax: condition ? (run this code if condition is true) : (run this code if condition is false);
