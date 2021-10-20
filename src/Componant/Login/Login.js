import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, } from "firebase/auth";
import fireabaseinitialize from '../Firebase/Firebase.init';


fireabaseinitialize();
const Login = () => {
    const { signingoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";

    const handlegooglelogin = () => {
        signingoogle().then(result => {
            history.push(redirect_uri);

        })
    }

    //email password login


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const auth = getAuth();



    const handleEmail = e => {
        setemail(e.target.value);

    }
    const handlePassword = e => {
        setpassword(e.target.value);
    }
    const handlelogin = e => {
        e.preventDefault()
        if (password.length < 6) {
            seterror('password must be 6 character')

            return;
        }

        loggedin(email, password);

    }
    const loggedin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                history.push(redirect_uri);

                console.log(result.user);
                seterror("")
            }).catch((error) => {
                const errorMessage = error.message;
                seterror(errorMessage);
            });


    }
    return (
        <div className="in-form">

            <div className=" formfill">
                <h2>login</h2>
                <form onSubmit={handlelogin}>


                    <div className="mt-4 ">

                        <input onBlur={handleEmail} type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mt-1 mb-3">

                        <input onBlur={handlePassword} type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" required />
                    </div>
                    <div className="text-danger">
                        {error}
                    </div>

                    <div>

                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary px-4">login </button>
                    </div>

                </form>


                <p>
                    Not Have An Account ? <Link to="/signup"> Create Account</Link>
                </p>
                <br />
                <button onClick={handlegooglelogin} className="text-dark btn btn-warning">SIGN IN WITH GOOGLE</button>



            </div>

        </div>
    );
};

export default Login;