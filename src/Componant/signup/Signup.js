import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import fireabaseinitialize from '../Firebase/Firebase.init';
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


fireabaseinitialize();

const Signup = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const auth = getAuth();

    const handleName = (e) => {
        setname(e.target.value);

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
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            seterror('password Minimum six characters, at least one letter and one number')

            return;
        }
        register(email, password)

    }

    const register = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            const user = result.user;
            setusername()
            console.log(user)
            seterror("")
        }).catch((error) => {
            seterror(error.message)
        });
    }
    const setusername = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }
    const handlesignupbtn = () => {
        user.email && history.push("/")

    }
    return (
        <div className="in-form">

            <div className="mx-4">
                <h2>Pleace Sign up</h2>
                <form onSubmit={handleregister}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="name" onBlur={handleName} className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" required />

                    </div>

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
                    <button onClick={handlesignupbtn} type="submit" className="btn btn-primary">Signup</button>
                </form>

                <p>
                    already have an account ? <Link to="/login">login</Link>
                </p>
                <br />

            </div>

        </div>
    );
};

export default Signup;