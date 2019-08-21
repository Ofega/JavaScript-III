/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
var name = 'Global Object'
function whichObject(name) {
    console.log(`${name}: `, this);
}

whichObject(name);


// Principle 2
// code example for Implicit Binding
const chioma = {
    name: 'Chioma Object',
}
chioma.whichObject = whichObject;
chioma.whichObject(chioma.name);


// Principle 3
// code example for New Binding
function Person(name) {
    this.name = name;
}
Person.prototype.whichObject = whichObject;
const amaka = new Person('Amaka Object');

amaka.whichObject(amaka.name);


// Principle 4
// code example for Explicit Binding

const jayne = {
    name: 'Jayne Object',
}
const carnun = {
    name: 'Carnun Object',
}
const oladimeji = {
    name: 'Oladimeji Object',
}

whichObject.call(jayne, jayne.name);
whichObject.apply(carnun, [carnun.name]);
const newBind = whichObject.bind(oladimeji);
newBind(oladimeji.name);
