import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    const { signIn, singInGithub, signInGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const loginGoogleHandle = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    const loginGithubHandle = () => {
        singInGithub()
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from);

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })


    }
    return (

        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-4">Please Login!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <span className='mt-2 text-gray-600'><small>Don't Have an Account? </small><Link to={'/register'} className="label-text-alt link link-hover text-purple-500">Register</Link></span>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-500 border-none">Login</button>
                            </div>
                        </form>

                        <hr />
                        <p className='text-center'>Or login with</p>
                        <hr />
                        <div className='text-center my-4'>
                            <button onClick={loginGoogleHandle}><FaGoogle className='text-2xl mr-2 text-purple-500'></FaGoogle></button>
                            <button onClick={loginGithubHandle}><FaGithub className='text-2xl  text-purple-500'></FaGithub></button>
                        </div>
                        <p className="text-red-600 p-4">{error}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;