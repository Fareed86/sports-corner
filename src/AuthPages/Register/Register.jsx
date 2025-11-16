import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import working from '../../../public/Working.json';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AuthContext from '../../Provider/AuthContext';
import { auth } from '../../Firebase/firebase.config';
import toast from 'react-hot-toast';

const Login = () => {
    const { userSignUp, googleLogin } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        userSignUp(email, password)
            .then(res => {
                console.log(res.user)
                toast.success("Successfully registered")
            })
            .catch(err => console.log(err))
    }
    const handleGoogleLogin = () =>{
        googleLogin(auth)
        .then(res => {
            console.log(res)
            toast.success("Successfully registered")
        } )
        .catch((err) =>{
            console.log(err);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={working}></Lottie>
                    </div>
                    <form onSubmit={handleSignUp} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-blue-400 text-4xl font-bold'>Register Now</h1>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div>Already have an account? <Link to='/login' className="hover:text-blue-500">Login</Link></div>
                                <button className="btn btn-neutral mt-4 text-white rounded bg-blue-400 border-blue-400">Register</button>
                                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;