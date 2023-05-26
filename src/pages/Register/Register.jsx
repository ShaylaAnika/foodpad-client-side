import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, image, email, password);


        if(password.length < 6){
            setError('password not valid need 6 char')
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At last one uppercase ")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("At last one Character ")
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateProfile( createdUser, {displayName: name , photoURL: image})
                form.reset();
              
            })
            .catch(error => {
                console.log(error);
                // setError(error.message);
            })
    }
    return (
        <div>
            <div>
            
            <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Please Register!!</h1>
          </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body " onSubmit={handleRegister}  >
                <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
               </div>

                <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name='image' placeholder="url" className="input input-bordered" required />
                </div>

                <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                </div>
                 <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />

            <span className='mt-2 text-gray-600'><small>Already Have an Account? </small><Link to={'/login'} className="label-text-alt link link-hover text-purple-500">Login</Link></span>
            
        
                 </div>
                 <div className="form-control mt-6">
                    <button className="btn bg-purple-500 border-none">Login</button>
                </div>
           </form>
           <p className="text-red-600 p-4">{error}</p>
       </div>
   </div>
</div>
 
        </div>
        </div>
    );
};

export default Register;