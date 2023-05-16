        // The Concept of Data Types
// 1. Primitive Data Types: 6 tanedir: String, Number, Boolean, Null, Undefined, Symbol
// 2. Object Data Types: List, Set, Map, Array, function
// "typeof operator: "Bir variable ın data type ını öğrenmek için kullanılır.

let x;
console.log(typeof x); // undefined
x = 7;
console.log(x); // 7
console.log(typeof x); // number

x = 'Ahmet';
console.log(x); // Ahmet
console.log(typeof x); // string

let check = true;
console.log(typeof check); // boolean


        // 1. Strings
// 'Tek tırnak' ya da "çift tırnak" arasına text girerek String oluşturabilirsiniz.
// Stringi 'tek tırnakla' oluşturursanız, içerisinde "çift tırnakla" ayraç kullanabilirsiniz.
// Stringi 'çift tırnakla' oluşturursanız, içerisinde "tek tırnakla" ayraç kullanabilirsiniz.
// Ya da aynı işareti kullanacaksanız, öncesinde backward slash \ kullanmalısınız. 
let car1 = 'Toyota';
let car2 = "Bugatti";
let car11 = 'Toyota" nın ilk 5 yıldaki arıza verme oranı genelde çok düşük oluyor.';
let car22 = "Bugatti' nin fiyatı da çok be kardeşim, tez zamanda hepimizde 1 er tane olur inşaallah.";
let car3 = 'Honda\' nın motoru 500 bini rahat görür diyorlar.';

// Strings as Objects: String leri "new" keyword ile object olarak da oluşturabiliriz.
 let car4 = new String('Ferrari');
 console.log(typeof car4); // object


    // String Methods and Properties:
// String ler "immutable" dır. Yani method lar uygulandıkları String leri değiştirmezler,
//   yeni string değeri oluştururlar.
// 1) length: String in karakter sayısını verir.
let str1 = "JavaScript";
console.log(str1.length); // 10


// 2) substring(startIndex, endIndex): Bir string içerisinden belirtilen index aralığını alır.
//          startIndex dahildir, endIndex dahil değildir. endIndex optional dır.
let str1Part = str1.substring(2);
console.log(str1Part); // vaScript
console.log(str1.substring(2, 5)); // vaS


// 3) slice(startIndex, endIndex): substring methodu ile aynı özellikleri taşır. Extra olarak
//      eksi index değerleri alabilir.
let str2 = "elma, armut, portakal";
let str2Part = str2.slice(6, 11);
console.log(str2Part); // armut
let str2Part2 = str2.slice(-15, -10); // burada -10 dahil, -15 dahil değil
console.log(str2Part2); // armut


// 4) substr(startIndex, length): startIndex ten almaya başlar, length adedince karakteri alır.
let str2Part3 = str2.substr(6, 3);
console.log(str2Part3); // arm


// 5) replace(valueToBeChanged, newValue):
//      Sadece bulduğu ilk eşleşmeyi değiştirir.
let str3 = "elma, Armut, portakal, armut, muz, armut";
let str3Part1 = str3.replace('armut', 'kiwi');
console.log(str3Part1); // elma, Armut, portakal, kiwi, muz, armut

// Eğer bütün eşleşen substring lerin değişmesini istiyorsak, /g flag iyle (global match) 
//  regular expression kullanmalıyız.
let str3Part2 = str3.replace(/armut/g, 'kiwi');
console.log(str3Part2); // elma, Armut, portakal, kiwi, muz, kiwi

// case insensitive için /i flag i (insensitive) kullanılır.
let str3Part3 = str3.replace(/armut/gi, 'kiwi');
console.log(str3Part3); // elma, kiwi, portakal, kiwi, muz, kiwi


// 6) toUpperCase():
let newLove = 'JavaScript';
let newLoveM = newLove.toUpperCase();
console.log(newLoveM); // JAVASCRIPT


// 7) toLowerCase():
let newLoveM2 = newLove.toLowerCase();
console.log(newLoveM2); // javascript


// 8) concat(): birden fazla string i birbirine ekler.
let text1 = 'Hi';
let text2 = 'JavaScript';
let textJoin = text1.concat(text2);
console.log(textJoin); // HiJavaScript

let textJoin2 = text1.concat(' ', text2, ' I fell in love with u!');
console.log(textJoin2); // Hi JavaScript I fell in love with u!


// 9) trim(): baştaki ve sondaki boşlukları siler.
let text3 = "     Java Script     ";
console.log(text3.trim()); //Java Script
// trimStart():
console.log(text3.trimStart()); //Java Script     ==> baştaki boşlukları siler
// trimEnd():
console.log(text3.trimEnd()); //     Java Script==> sondaki boşlukları siler


// 10) padStart(length, paddingValue): String önüne, String in karakter sayısı length miktarınca
//      oluncaya kadar paddingValue dan koyar.
let text4 = '4';
let text4P = text4.padStart(7, 'x');
console.log(text4P); // xxxxxx4

let text5 = '555';
let text5P = text5.padStart(7, 'x');
console.log(text5P); // xxxx555


// 11) padEnd(length, paddingValue): String ardına, String in karakter sayısı length miktarınca
//      oluncaya kadar paddingValue dan koyar. 
let text4PE = text4.padEnd(7, 'x');
console.log(text4PE); // 4xxxxxx

let text5PE = text5.padEnd(7, 'x');
console.log(text5PE); // 555xxxx


// 12) charAt(index): Belirtilen index teki karakteri verir.
let str4 = 'JavaScript';
console.log(str4.charAt(1)); // a

// Note: Property Access[]: belirtilen index teki karaktere bu şekilde de ulaşabilirsiniz.
console.log(str4[1]); // a


// 13) charCodeAt(index): Belirtilen index teki karakterin ASCII değerini verir.
console.log(str4.charCodeAt(1)); // 97


// 14) split(): String i belirtilen substring lerden ayırarak, ayrılan elementlerden Array oluşturur.
let str5 = "Hi JS, I love u very much JS, what r u doing so far!";
let array1 = str5.split();
// parametre girilmezse, tek elemanlı bir array oluşturur. Elemanı da string in kendisi olur.
console.log(array1); // [ 'Hi JS, I love u very much JS, what r u doing so far!' ]
console.log(typeof array1); // object

let array2 = str5.split('');
console.log(array2); /* her karakteri ayrı ayrı array in elemanı yapar.
[
  'H', 'i', ' ', 'J', 'S', ',', ' ', 'I',
  ' ', 'l', 'o', 'v', 'e', ' ', 'u', ' ',
  'v', 'e', 'r', 'y', ' ', 'm', 'u', 'c',
  'h', ' ', 'J', 'S', ',', ' ', 'w', 'h',
  'a', 't', ' ', 'r', ' ', 'u', ' ', 'd',
  'o', 'i', 'n', 'g', ' ', 's', 'o', ' ',
  'f', 'a', 'r', '!'
]     */

let array3 = str5.split(' ');
console.log(array3); /* 
[
  'Hi',   'JS,',  'I',
  'love', 'u',    'very',
  'much', 'JS,',  'what',
  'r',    'u',    'doing',
  'so',   'far!'
]      */

let array4 = str5.split('JS');
console.log(array4); /*
[ 'Hi ', ', I love u very much ', ', what r u doing so far!' ]    */


// 15) indexOf(searchValue,startIndex): Belirtilen subString in String içerisinde ilk var olduğu yerin 
//      (ilk karakterinin) index ini verir. İkinci parametre zorunlu değildir.
let str6 = "Hi JS, I love u very much JS, what r u doing so far JS!";
console.log(str6.indexOf('JS')); // 3

// ikinci parametreyi, search e başlayacağınız index numarası olarak girebilirsiniz.
console.log(str6.indexOf('JS', 5)); // 26

// olmayan birşeyi sorarsanız "-1" verir.
console.log(str6.indexOf('JavaScript')); // -1


// 16) lastIndexOf(): Belirtilen subString in String içerisinde son var olduğu yerin (ilk karakterinin) index ini verir.
// ikinci parametreyi, search e başlayacağınız index numarası olarak girebilirsiniz.
console.log(str6.lastIndexOf('JS')); // 52


// 17) search():
// bu method, ikinci parametreyi almaz, indexOf un aksine
// indexOf() method u regular expression larla işlem yapamaz
let str7 = "Hi JS, I love u very much JS, what r u doing so far JS!";
console.log(str7.search('JS')); // 3
console.log(str7.search(/JS/g)); // 3

// 18) match(): regEx kullanılabilir. Sonuçları Array içerisinde gösterir.
// /g flag ini kullanmazsanız, sadece ilk bulduğu sonucu verir.
console.log(str7.match(/JS/g)); // [ 'JS', 'JS', 'JS' ]


// 19) includes('searchValue', startIndex): içeriyorsa true döner, yoksa false. ikinci parametre optional dır.
console.log(str7.includes('love')); // true
console.log(str7.includes('love', 11)); // false


// 20) startsWith(searchValue, startIndex): Belirtilen substringle başlıyorsa true döner, aksi halde false döner.
//      ikinci parametre optional dır. startIndex varsa, oradan itibaren searchValue ile başlıyor mu diye bakar.
let str8 = "Hi JS, I love u very much JS, what r u doing so far JS!";
console.log(str8.startsWith('HI')); // false
console.log(str8.startsWith('JS', 3)); // true


// 21) endsWith(searchValue, length): Belirtilen substringle bitiyorsa true döner, aksi halde false döner.
//      ikinci parametre optional dır. Stringin başından itibaren length adedince karakteri alır. O kısım searchValue ile
//      bitiyor mu diye bakar.
console.log(str8.endsWith('JS')); // false
console.log(str8.endsWith('JS', 5)); // true
