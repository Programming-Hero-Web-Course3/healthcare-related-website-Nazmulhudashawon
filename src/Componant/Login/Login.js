import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Login.css'

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
    return (
        <div className="login">

            <div>
                <h2> please login</h2>
                <form>
                    <input type="email" placeholder="enter your email" />
                    <br />
                    <input type="password" name="" placeholder="password" />
                    <br />
                    <input type="submit" value="submit" />

                </form>


                <p>
                    not registerd ? <Link to="/register"> register</Link>
                </p>
                <br />
                <button onClick={handlegooglelogin} className="btn btn-warning">google sign in</button>



            </div>

        </div>
    );
};

export default Login;