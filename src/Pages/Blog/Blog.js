import React from 'react';

const Blog = () => {
    return (
        <div className='px-24'>
            <h2 className='text-center mt-10 text-3xl font-mono font-bold text-white'>Question and Answer Section</h2>
            <div className='text-center mt-10 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold text-white'>Q(1): How will you improve the performance of a React Application?</h5>
                <p className='px-12 py-4 text-white'> There are many ways to improve the performance of a React Application. <br/>
                     1.Keeping component state local where necessary.
                    2. Memoizing React components to prevent unnecessary re-renders.
                    3. Code-splitting in React using dynamic import()
                    4. Windowing or list virtualization in React.
                    5. Lazy loading images in React.
                </p>
            </div>
            <div className='text-center mt-8 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold text-white'>Q(2): What are the different ways to manage a state in a React application?</h5>
                <p className='px-12 py-4 text-white'>There are four main types of state you need to properly manage in your React apps:
                    1. Local State
                    2. Global state
                    3. Server state
                    4. URL state
                    <br/>
                    Local state is most often managed in React using the useState hook. So there are 3 others way to manage a state in React application.
                </p>
            </div>
            <div className='text-center mt-8 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold text-white'>Q(3):  How does prototypical inheritance work?</h5>
                <p className='px-12 py-4 text-white'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
            </div>
            <div className='text-center mt-8 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold text-white'>Q(4): Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
                <p className='px-12 py-4 text-white'>If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
            </div>
            <div className='text-center mt-8 mb-10 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold text-white'>Q(5): What is a unit test? Why should write unit tests?</h5>
                <p className='px-12 py-4 text-white'>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Unit tests save time and money. Well-written unit tests act as documentation for your code.It simplifies the debugging process.Unit testing is an integral part of extreme programming.Unit tests make code reuse easier.</p>
            </div>
        </div>
    );
};

export default Blog;