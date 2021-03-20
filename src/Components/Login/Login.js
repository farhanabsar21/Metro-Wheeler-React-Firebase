import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { userCommonData } from '../../App';
import "./Login.css";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLogin, signInUserWithEmailAndPassword } from './loginManager';

// initialize firebase
initializeLogin();

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        success: false
    });
    const [newMember, setNewMember] = useState(false);
    const handleBlur = e => {
        let isFieldValid;

        if (e.target.name === "name") {
            isFieldValid = /([A-Z][a-z\d]+)+/.test(e.target.value);
        }
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === "password") {
            const isPassValid = e.target.value.length > 6;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPassValid && passHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // sending data to the context api
    const [userLog, setUserLog] = useContext(userCommonData);

    // setting up the redirect location 
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const handleSubmit = e => {
        e.preventDefault();
        if (newMember && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    setUser(res);
                    setUserLog(res);
                    history.replace(from);
                })
        }

        // if not new user
        if (!newMember && user.email && user.password) {
            signInUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setUserLog(res);
                    history.replace(from);
                })
        }
    }
    // social log in
        //google sign in
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                console.log("res", res)
                setUser(res);
                setUserLog(res);
                history.replace(from);
            })
    }
        //facebook sign in
    const facebookSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setUser(res);
                setUserLog(res);
                history.replace(from);
            })
    }
    return (
        <div className="Login">
            <div className="submit-form">
                <div className="message">
                    <p className="error">{user.error}</p>
                    {user.success && <p className="success">User {newMember ? "Registration" : "Logged In is"} Successful</p>}
                </div>
                <div className="email-login">
                    <form onSubmit={handleSubmit}>
                        {newMember && <input type="text" name="name" placeholder="your name" onBlur={handleBlur} required/>}
                        <input type="email" name="email" placeholder="your email" onBlur={handleBlur} required/>
                        <input type="password" name="password" placeholder="your password" onBlur={handleBlur} required/>
                        <input type="submit" value={newMember ? "Sign Up" : "Sign in"} className="submit"/>
                    </form>
                </div>
                <div className="or-divider">
                    <p>OR</p>
                </div>
                <div className="social-login">
                    <button className="google-btn" onClick={googleSignIn}>Google Login</button>
                    <button className="facebook-btn" onClick={facebookSignIn}>Facebook Login</button>
                </div>
                <div className="member">
                    { !newMember && <p>Not a member? <span onClick={()=> setNewMember(!newMember)}>Register</span></p>}
                    { newMember && <p>Already a member? <span onClick={()=> setNewMember()}>Login</span></p>}
                </div>
            </div>
        </div>
    );
};

export default Login;