import React from 'react';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, } from "firebase/auth";
import fireabaseinitialize from '../Firebase/Firebase.init';
import { useState } from 'react/cjs/react.development';

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

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [login, setlogin] = useState('');
    const auth = getAuth();

    const handleName = (e) => {
        setname(e.target.value);

    }
    const handlecheckbox = e => {
        setlogin(e.target.checked);

    }
    const handleEmail = e => {
        setemail(e.target.value);

    }
    const handlePassword = e => {
        setpassword(e.target.value);
    }
    const handleregister = e => {
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

            <div>
                <h2> Please login</h2>
                <form onSubmit={handleregister}>


                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="text-danger">
                        {error}
                    </div>

                    <div>

                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">login </button>
                    </div>

                </form>


                <p>
                    not registerd ? <Link to="/signup"> Signup</Link>
                </p>
                <br />
                <button onClick={handlegooglelogin} className="btn btn-warning">google sign in</button>



            </div>

        </div>
    );
};

export default Login;