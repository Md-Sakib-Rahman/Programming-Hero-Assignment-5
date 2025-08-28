### <span style="color:red">What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</span>


1) getElementById finds one element by its id (provided inside it as parmeter) and returs single element or null if not found. 

Code : document.getElementById("subscribeButton")

this will return a single element which has the following id named "subscribeButton" or null if not found.

2) getElementsByClassName finds all element by its class name (provided inside it as parmeter) return HTMLCollection. 

Code: document.getElementsByClassName("item");

this will return a HTML collection which has the following class named "item" .

3) querySelector finds first element which matches the css selector (provided inside it as parmeter - (#id, .class, div > p, etc )) and returs single element (Node) . 

code : document.querySelector(".item");

this will return a single element (as Node) which has the following class named "item" .

4) querySelectorALL finds all element which matches the css selector (provided inside it as parmeter - (#id, .class, div > p, etc )) and returs a list of elements (NodeList) .

code : document.querySelectorAll(".item");

this will return a all element (as Nodelist) which has the following class named "item" .


### <span style="color:red">How do you create and insert a new element into the DOM?</span>

step 1: take the div where new elements will be inserted Code: const element = document.getElementById("itemDiv")
step 2: create a new div using javascript, Code: const newDiv = document.createElement("div");
step 3: fill the div, Code: newDiv= &lt;p&gt; im the new element &lt;/p&gt;
step 4: append the div inside the main div (element) Code: element.appendChild(newdiv)

### <span style="color:red">What is Event Bubbling and how does it work?</span>

Html :<pre> ``` <div id="parent"> <button id="child">Click Me</button> </div> ``` </pre>

jsCode: 
document.getElementById("parent").addEventListener("click", () => {
  alert("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
  alert("Child clicked");
});

here when we click the child element the dom api will move up (bubble up) and also triger the event on parent even though we didnt clicked the parent div we click on child button. 
as a result it will show this alert first "Child clicked" and then this "Parent clicked"

this is called Event Bubbling.


### <span style="color:red">What is Event Delegation in JavaScript? Why is it useful?</span>

Event deligation means using one event listener on parent to catch the event from its child. 

if a parent element has 100 buttons we dont need 100 event listener what we can do is give a single event listener on the parent and catch the from its child using event bubbling to our advantage.


### <span style="color:red">What is the difference between preventDefault() and stopPropagation() methods?</span>

event.preventDefault() this prevent the browser default behaviour for an event. For example in a form there is a submit button which has a default behaviour of submitting we can prevent it by using event.preventDefault()

stopPropagation() this is a solution to event bubbling problem where it prevents events from bubbling up.


