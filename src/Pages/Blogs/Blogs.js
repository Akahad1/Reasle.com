import React from 'react';

const Blogs = () => {
    return (
        <div className='ml-5 mt-5'> 
            1,What are the different ways to manage a state in a React application?
            <p>
                Ans: The Four Kinds of React State to Manage<br />

                1,Local state.<br />
                2,Global state.<br />
                3,Server state.<br />
                4,URL state.
            </p>
            <div className='mt-7'>
            <p>2,How does prototypical inheritance work?</p>
            <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='mt-7'>
                <p>3,What is a unit test? Why should we write unit tests?</p>
                <p>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='mt-7 mb-20'>
                <p>3,React vs. Angular vs. Vue?</p>
                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
            </div>

        </div>
    );
};

export default Blogs;