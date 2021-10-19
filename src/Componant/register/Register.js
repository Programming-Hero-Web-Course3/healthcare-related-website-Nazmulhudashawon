import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login">
            <div>
                <h2>pleace register</h2>
            <form  className="form-label">
                <input className="mb-2" type="text" placeholder="enter your Name" />
                <br />
                    <input className="mb-2" type="email"placeholder="enter your email" />
                    <br />
                  <input className="mb-2" type="password" name="" placeholder="creat a password" />
                 <br />
                <input type="submit" value="submit" />

                </form>
                <p>
                   already have an account ? <Link to="/login">login</Link>
                </p>
                <br />
               
            </div>
            
        </div>
    );
};

export default Register;