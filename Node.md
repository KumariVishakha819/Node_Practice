# node_js

Node JS is an `open source`and `cross platform` `runtime environment` for executing JavaScript code outside of a browser

- Quite often we use Node to build backend-services.
- Node is ideal for building highly scalable, data-intensive apps

- Every browser has JS engine,which takes Javascript code and converts to machine code
  Js Enginee for chrome V8(fastest), Each browser has its own JS engine

- because of different JS enginee in different browsers code may behave differently.
- Till 2009 only way of executing JS code was inside the browser.
- Node came in 2009, Ryan Dahl took the JS engine of chrome and embedded it a C++ program and called it Node.
- Node and Chrome use the same JS engine but they provide different runtime environments javascript
  like `window, document` in chrome and `fs, http` in Node
- Node is not a framework or programming language, Its a runtime environment for executing JS code.

## Node applications are highly scalable this is because of the non-blocking or asynchronous nature of Node

- Install node on system

  - check node -v (20)
  - create a folder and normal js file , write some basic js code
  - run as `node app.js`

## Global Objects in Node :

          console.log();//This console object is global object

- Global objects can be accessed from anywhere in any file
  Ex : setTimeOut, clearTimeout, setInterval, clearInterval(same as browser), console
- All these objects are part on window object in browser
  ex: window.console.log()
- In place of `window` object we have `global` object in Node
- variable and functions defined in node are not part of global object, they are only scoped the that particular file

## Modules in Node JS:

function sayHello(name){
console.log(name)
}
In case of chrome, this function is added to the global object windows
We often split our javascript code into multiple files, lets say we have to files and in both of them we define sayHello, because this function is added to the global scope , when we define this function in another file that new definition is going to overwrite the previous expression. This is the problem with global scope.

In order to build a reliable and maintainable application we should avoid defining variables and functions in global scope

- Every file in a node application is called module , The variable and functions defined in that file are scoped to that file , in object oriented terms its called private
- Outside the module if you want to use variable and function ,explicitly need to export it and make it public
- If we `console.log(module)`

  ![Delivery Pipline](images/module.png)

- lets create a logger module in and use it everywhere

            var url="https://"
            function log(message){
                console.log(message)
            }

            module.exports.log = log
            // in other module we might want to call this url variable endpoint
            module.exports.endpoint= url

- to load this in other module we use `require` keyword, require function takes one argument that is name or path of the module we want to load
- both app.js and logger.js are in same folder ./(to indicate current folder)

        var logger = require("./logger")// js engine understands its a js file
        console.log(logger)

        output : { log: [Function: log], endpoint: 'https://' }

- As per best practice we should store modules in a constant

## IIFE as Module wrapper

befor node module is executed , Node js wraps it with a function wrapper that provides module scope
Each loaded module in node js is wrapped with an IIFE
![Delivery Pipline](images/iifeWrapper.png)

- exports, require, module are functions
- filename(full path to the file), dirname(full path to the folder where file is) are string

`This shows that node js provides few global looking variable that are specific to a module`

## MODULE CACHING

In Nodejs when we require a new module it is loaded and cached for subsequent loading

![Delivery Pipline](images/ModuleCaching1.png)
![Delivery Pipline](images/ModuleCaching2.png)

- here in index.js using `superHero` object we are setting value `Superman` .
- We are creating a new object `newSuperHero` , we shoud getName as `Batman` but we are getting `Superman` which was set by previous object. We can inspect the `cache` under require
  ![Delivery Pipline](images/ModuleCaching3.png)

- inside a class we can directly write a function without writing function in front of it

- To resolve this instead of exporting the object we export the class
  `module.exports = Superhero;`

- Create object after importing

              const super_hero = require("./super_hero");
              let hero1 = new super_hero();
              console.log(hero1.getName());

## EXPORT PATTERN

- CASE 1

              export_pattern.js
              const add = (a, b) => {
              return a + b;
              };
              module.exports = add;

              const add = require("./export_patterns");
              console.log(add(5, 6));

- CASE 2

             module.exports = (a, b) => {
                return a + b;
              };

              const add = require("./export_patterns");
              console.log(add(5, 6));

- CASE 3

  ![Delivery Pipline](images/export_pattern.png)
  ![Delivery Pipline](images/export_pattern3.png)

  - in if key value are same we can also simply export

    `module.exports ={add,sub}`

  - also we can destructuring while importing

    `const { add, sub } = require("./export_patterns");`

- CASE 4
  ![Delivery Pipline](images/export_pattern4.png)
  importing is same as case three

- CASE 5
  exports can work only in this case
  ![Delivery Pipline](images/export_pattern5.png)

## Difference in module.exports and exports

![Delivery Pipline](images/objectsinjs.png)
o.p : Hulk
in javascript when you assign one object to another both object point to same address in the memory, modifying one will lead to modifying the other

- However if we assign object literal to the new object created from first object, instead of trying to change to property the reference breaks. Modifying obj 2 will not affect obj1
  ![Delivery Pipline](images/object_refernce_broken.png)

  o/p : Bruce Wayne

- obj1 is `module.exports` and obj2 is `exports`
- this works file
  ![Delivery Pipline](images/export_pattern5.png)
- but if we try, it will fail

```python
 const add = (a, b) => {
 return a + b;
 };

 const sub = (a, b) => {
 return a - b;
 };

 exports = {
 add: add,
 sub: sub,
 };
```

`TypeError: add is not a function` This means An empty object is returned

```python
const { add, sub } = require("./export_patterns");
console.log(add(5, 6));
console.log(sub(5, 6));
```

## JSON IMPORTS

![Delivery Pipline](images/json.png)

- For .json and .js files we dont need extention while importing.
- Although node will search for data.js first and then data.json. if there was a data.json node will import that, so better to have json extension

## In Node18 watchmode was introduced

- node --watch index.js

## CALLBACKS

- In javascript functions are first class objects
- This means that function can be passed as an agrument to a function
- function can also be returned as value from other function
  ![Delivery Pipline](images/higherorder.png)
  - here sort , map, filter are higher order functions
    ![Delivery Pipline](images/synchronous_callback.png)
  - here even though javascript will read the addEvenListener code it will not execute the call back until the btn is clicked
    ![Delivery Pipline](images/asynchronous_callback.png)

## Built in modeules

- Modules with which node js is shipped are called core module
- need to import to use
- Five most useful are

  - path
  - events
  - fs
  - stream
  - http

## PATH MODULE

- `const path =require("node:path")` // specify that it is present through node
- `const path =require("path")` // This also works fine
- node protocol makes it perfectly clear that import is a Node.js built in module
  ![Delivery Pipline](images/paths.png)
  ![Delivery Pipline](images/paths_output.png)

## EVENTS MODULE

- work with events in Node js
- Even is an action that has happenedin our application that we can respond to
- const EventEmitter = require("node:events"); We are calling it EventEmitter as events module returns a class called
  EventEmitter which encapsulates capacity to emit events and respond to events.
- instantiate this EventEmitter class
  ![Delivery Pipline](images/scenario_order.png)
- to emit an event we use `emit` method which takes events names as first argument. when program reaches this point an event is broadcasted.
- to respond to this `order-pizza` event we need to register a listener and to do that we use `on` method. This method receives two parameter first parameter is event name and the second parameter is a callback function to be executed on the event is emitted
  ![Delivery Pipline](images/base_scenario_event_emitter.png)

- While emitting event we can emit data to the listener, by passing data as second parameter to the `emit()` function
  ![Delivery Pipline](images/event_with_params.png)
- we can register multiple listeners for the same events
  ![Delivery Pipline](images/multiple_listeners_on_event.png)
- we are not blocking the code by writing code in this way , line number 14 is executed first. This is called event driven programming

## Own Module built on top of event emitter class

Lets say we want to create a pizzaShop with one class having two method ordering piza and displaying order
![Delivery Pipline](images/pizza_shop.png)
![Delivery Pipline](images/pizza_shops_use.png)

- We would like the shop to handle orders using event driven architecture using `Events Module` with `inheritance`
- what this inheritance allows us to do is use PizzaShop class as if it is an event emitter class

  - as we are inheriting `EventEmitter` this has `emit` function

  ![Delivery Pipline](images/pizzashop_ext2.png)
  ![Delivery Pipline](images/pizzashop_ext1.png)

## Charactersets and Encoding

![Delivery Pipline](images/characterencoding2.png)
![Delivery Pipline](images/characterencoding.png)

## fs Module (filesystem module)

![Delivery Pipline](images/txt_file.png)
![Delivery Pipline](images/fs_file.png)
![Delivery Pipline](images/utf-8.png)
