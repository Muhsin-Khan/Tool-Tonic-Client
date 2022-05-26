import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <h4 className="text-center mt-5 mb-3 text-3xl font-semibold">Answers of the questions are given below</h4>
      <div className="blogs-container">
        {/* Q1 */}
        <div className="ans">
          <h5 className="text-lg font-semibold" >1. How will you improve the performance of a React Application?</h5>
          <h5 className="text-lg py-2">We can improve the performace of a React Router Application using few techniques given below:</h5>
          <ul className="list-disc px-4">
            <li>First of all we can keep the component state local where needed. Besides we can extract the part of code that cares about component state.</li>
            <li>We can Memoize the React components to prevent unnecessary re-renders. Because in computing Memoization is a good technique to improve the performance of the application.</li>
            <li>We can split the in React using dynamic import() to improve the perfomance.</li>
            <li>Virtualization in React application is a good way to improve the performance. we can even try the Windowing technique to upgrade the performance.</li>
            <li>We can avoid the rendering all images at a time to improve the page load time. It is similar to widowing and also called lazy doing.</li>
            
          </ul>
          
        </div>
        {/* Q2 */}
        <div className="ans">
          <h5 className="text-lg font-semibold">
          2. What are the different ways to manage a state in a React application?
          </h5>
          <h5 className="text-lg py-2">We can manage sate in a React Application using by some different state mentisoned below:</h5>
          <h1 className="text-lg font-semibold">Server state</h1>
          <p className="mb-2">We can manage state by Server state in react application. There are tools like SWR and React Query that make managing server state much easier. That's how we can manage it.</p>
          
          <h1 className="text-lg font-semibold">Global State</h1>
          <p className="mb-2">We manage across mulltiple components with the Global state data. Global state is necessary to get and update data anywhere in the ap or in the multiple components.</p>
          
          <h1 className="text-lg font-semibold">URL State</h1>
          <p className="mb-2">URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. It can help a lot to manage the state.</p>
         
          <h1 className="text-lg font-semibold">Local State</h1>
          <p>Local state is a kind of date by which we manage in a component. Local state usually managed in React using the useState hook. By using local state we can find another option to manage state.</p>
          
          
          
        </div>
        {/* Q3 */}
        <div className="ans">
          <h5 className="text-lg font-semibold">
          3. How does prototypical inheritance work?
          </h5>
          <h6 className="text-lg font-semibold my-2">Short Explaination of How PI works-</h6>
          <p className="mb-2">JavaScript inheritance is more widely known as “prototypal inheritance.” Prototypal inheritance uses the concept of prototype chaining, and it refers to the linking of objects via the prototype property. </p>
          
          <p className="mb-2">When a constructor function creates an object, it does not create it based on the constructor’s prototype; instead, it creates an object linked to the constructor’s prototype object.</p>
          
          <p className="mb-2" >All functions in JavaScript are ordinary objects, which means they can have properties. They implement the "Call" method, but when invoked with the new operator, they become constructors factories for making objects.</p>
          <p className="mb-2" >Functions in JavaScript that can be used as constructors, whether built-in or user-defined, by default have a “prototype” property. This prototype property is only available on functions, not on objects.</p>
          
          
        </div>
        {/* Q4 */}
        <div className="ans">
          <h5 className="text-lg font-semibold">
          4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
          </h5>
          <h5 className="text-lg py-2">The reasons we don not set state directly is given below:</h5>
          <ul className="list-disc px-4">
            <li>First of all if we set the state directly we will lose the control of the state across all the components.</li>
            <li>When we directly update the state, it doesn't change the state immediately.</li>
            <li>When we directly update the state it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
            <li>If we update the state directly, calling the setState() afterward can just replace the update we made.</li>
            
            </ul>
          
        </div>
        {/* Q5 */}
        <div className="ans">
          <h5 className="text-lg font-semibold">
          5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
          </h5>
          <p></p>
          <br />
          <p></p>
          
        </div>
        {/* Q6 */}
        <div className="ans">
          <h5 className="text-lg font-semibold">
          6. What is a unit test? Why should write unit tests?
          </h5>
          <h1 className="text-lg font-semibold mt-3 mb-1">Unit Test</h1>
          <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
          
          <h1 className="text-lg font-semibold mt-3 mb-1">Reasons of Unit Test</h1>
          
          <ul className="list-disc px-4">
            <li>Unit Test helps the developers to understand the testing code base and enables them to make changes quickly</li>
            <li>Unit tests help with code re-use. Migrate both code and tests to a new project. Tweak the code until the tests run again.</li>
            <li>It helps the developers to fix bugs early in the development cycle and save costs and time as well.</li>
            <li>Good unit testing serves as project documentations.</li>
            
            </ul>
        </div>
      </div>

    </div>
  );
};

export default Blogs;