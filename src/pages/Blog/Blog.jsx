import React from 'react';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';


const Blog = () => {

    const ref = useRef();

    return (
        <div className='container mx-auto'>
            <div ref={ref} >
                <h1 className='text-center mt-28 text-5xl font-bold'> Question & Answer</h1>

                <div className=' my-20' >
                    <div className='border p-16 border-purple-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>Tell us the differences between uncontrolled and controlled components.</h1>
                        <p className='text-gray-500'>Ans:  The main difference between controlled and uncontrolled components is that controlled components store their data in the state, while uncontrolled components store their data in the DOM. Controlled components provide better control over the user input, and are easier to maintain, but may require more code to write. Uncontrolled components are simpler to write, but can be harder to maintain.</p>
                    </div>

                    <div className='border p-16 border-purple-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>How to validate React props using PropTypes?</h1>
                        <p className='text-gray-500'>Ans:  To validate React props using PropTypes, you can use the prop-types library that comes with React. This library provides a set of validators that can be used to ensure that the props passed to a component conform to the expected data types. <br />
                            Here in below how to use PropTypes to validate props. <br />
                            1. First, install the prop-types library. <br />
                            2. Import the PropTypes object from the prop-types library in your componen <br />
                            3. Define the propTypes object as a static property of your component class and specify the expected data types for each prop.
                        </p>
                    </div>

                    <div className='border p-16 border-purple-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>Tell us the difference between nodejs and express js.</h1>
                        <p className='text-gray-500'>Ans:
                            Node.js and Express.js are both popular technologies used for building web applications with JavaScript. Node.js is a runtime environment that allows JavaScript code to be executed outside of a web browser. It is based on the V8 JavaScript engine developed by Google and provides an event-driven, non-blocking I/O model that allows for efficient handling of large numbers of concurrent connections.
                            <br />
                            Node.js provides the runtime environment for executing JavaScript code outside of a web browser, while Express.js provides a framework for building web applications with Node.js.  </p>
                    </div>

                    <div className='border p-16 border-purple-400 rounded-xl mb-4' >
                        <h1 className='text-2xl mb-4 '>What is a custom hook, and why will you create a custom hook?</h1>
                        <p className='text-gray-500'>Ans:  Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks. <br />

                            A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: <br />

                            1. A custom hook does not require a specific signature. <br />
                            2. A software developer can choose what argument the custom hook has and what should the argument return. <br />
                            3. A custom hook always starts with the name 'use'.</p>
                    </div>
                </div>

            </div>

            <div className='flex justify-center'>
                <ReactToPrint trigger={() => <button className='btn bg-purple-500 border-none my-10 '>Print</button>}  content = {() => ref.current}/>
            </div>

        </div>
    );
};

export default Blog;