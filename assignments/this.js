/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
    The value of this is actually not assigned to anything until an object calls a method where the `this` keyword is used. That is, the value of `this` is based on the object that invokes the method/function where `this` is defined: 
    
    * 1. Calling a function in the global environment without attaching it to an object as a method, or binding it explicitly, sets the global object(window) as `this`.

    * 2. Calling a method on an object where `this` is referenced, sets the `this` keyword to the object to the left of the method call.
    
    * 3. When invoking a constructor function with the `new` operator, the `this` keyword gets set to the newly created object.

    * 4. Functions can be bound to any objects of our choosing, by using either call or apply to set the `this` keyword at function calls, or bind to return a function that has been bound to a specified object. This sets `this` to the bound objects.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
var name = 'Global Object'
function whichObject(name) {
    console.log(`${name}: `, this);
}

// whichObject(name);


// Principle 2
// code example for Implicit Binding
const chioma = {
    name: 'Chioma Object',
}
chioma.whichObject = whichObject;

// chioma.whichObject(chioma.name);


// Principle 3
// code example for New Binding
function Person(name) {
    this.name = name;
}
Person.prototype.whichObject = whichObject;
const amaka = new Person('Amaka Object');

// amaka.whichObject(amaka.name);


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

// whichObject.call(jayne, jayne.name);
// whichObject.apply(carnun, [carnun.name]);
const newBind = whichObject.bind(oladimeji);
// newBind(oladimeji.name);