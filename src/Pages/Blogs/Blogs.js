import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <h4 className="text-center mt-3 mb-3">Answers of the questions are given below</h4>
      <div className="blogs-container">
        {/* Q1 */}
        <div className="ans">
          <h5>1. How will you improve the performance of a React Application?</h5>
          <h5>Javascript</h5>
          <ul>
            <li>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</li>
            <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</li>
            
          </ul>
          <h5>Nodejs</h5>
          <ul>
            <li>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. </li>
            <li>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</li>
            
          </ul>
        </div>
        {/* Q2 */}
        <div className="ans">
          <h5>
          2. What are the different ways to manage a state in a React application?
          </h5>
          <p>So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
          <br />
          <p>And we will use MongoDB If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
          
        </div>
        {/* Q3 */}
        <div className="ans">
          <h5>
          3. How does prototypical inheritance work?
          </h5>
          <h6>SQL</h6>
          <ul>
            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
            <li>These databases are not suited for hierarchical data storage.</li>
            <li>These databases are best suited for complex queries.	</li>
            <li>Vertically Scalable</li>
            
          </ul>
          <h6>NoSQL</h6>
          <ul>
            <li>Non-relational or distributed database system.</li>
            <li>These databases are best suited for hierarchical data storage.</li>
            <li>These databases are not so good for complex queries.</li>
            <li>Horizontally scalable</li>
            
          </ul>
          
        </div>
        {/* Q4 */}
        <div className="ans">
          <h5>
          4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
          </h5>
          <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
          <br />
          <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
          
        </div>
        {/* Q5 */}
        <div className="ans">
          <h5>
          5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
          </h5>
          <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
          <br />
          <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
          
        </div>
        {/* Q6 */}
        <div className="ans">
          <h5>
          6. What is a unit test? Why should write unit tests?
          </h5>
          <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
          <br />
          <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
          
        </div>
      </div>

    </div>
  );
};

export default Blogs;