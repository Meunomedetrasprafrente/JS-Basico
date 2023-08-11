/* E (AND)
    a           b           a && b
    true        true        true
    true        false       false
    false       true        false
    false       false       false
*/


const a = 2
const b = 2

console.log(a === b && a <= b )

/* 
    A é idêntico a b? V
    *e* A é igual ou menor a b? V
*/

console.log(a === b && a < b)
/* 
    V e F = F
*/

console.log(a > b && a === b)

/* 
    F e V = F
*/

console.log(a > b && a < b)
/* 
    F e F = F
*/

/* 
    OR (ou)
    a           b           a || b
    true        true        true
    true        false       false
    false       true        false   
    false       false       false
*/

console.log(a === b || a <= b)
/* 
    V ou V = V
*/

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
// F ou V = V

console.log(a > b || a < b)
//F ou F = F

/* 
    NOT (não)
    a       b
    true    false
    false   true
*/

console.log(!(a === b)) //false

console.log(!(a < b)) //false