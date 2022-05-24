import React from 'react';

const Blog = () => {
    return (
        <div className='px-24'>
            <h2 className='text-center text-3xl font-mono font-bold'>Question and Answer Section</h2>
            <div className='text-center mt-10 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold'>Q: How will you improve the performance of a React Application?</h5>
                <p>Ans:</p>
            </div>
            <div className='text-center mt-8 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold'>Q: What are the different ways to manage a state in a React application?</h5>
                <p>Ans:</p>
            </div>
            <div className='text-center mt-8 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold'>Q: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h5>
                <p>Ans:</p>
            </div>
            <div className='text-center mt-8 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold'>Q: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h5>
                <p>Ans:</p>
            </div>
            <div className='text-center mt-8 mb-10 rounded-2xl border-2 border-indigo-600'>
                <h5 className='text-xl mt-10 mb-10 font-bold'>Q: What is a unit test? Why should write unit tests?</h5>
                <p>Ans:</p>
            </div>
        </div>
    );
};

export default Blog;