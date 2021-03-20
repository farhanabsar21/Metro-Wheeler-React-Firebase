import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLogin = () => {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

// google sign in
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
                success: true
            }
            return signedInUser;

        }).catch(err => {
            console.log("error: ", err.message);
        })
}

// fb sign in 
export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then((result) => {
            const credential = result.credential;
            const user = result.user;
            const accessToken = credential.accessToken;
            user.success = true;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });
}

// sign out 

export const handleGoogleSignOut = () => {
    return firebase.auth().signOut().then(() => {
        const userOut = {
            isSignedIn: false,
            name: "",
            email: "",
            photoURL: ""
        }
        return userOut;
    }).catch(err => {
        console.log(err);
    });
}


// sign in with email and pass word

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = "";
            updateUserInfo(name);
            return newUserInfo;
        })
        .catch(err => {
            // const errorCode = err.code;
            // const errorMessage = err.message;
            // console.log(errorCode, errorMessage);
            const newUserInfo = {};
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        })
}

export const signInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.success = true;
            newUserInfo.error = "";
            return newUserInfo;
            //   console.log("sign in user info", res.user)
        })
        .catch(err => {
            const newUserInfo = {};
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        })
}

const updateUserInfo = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    }).then(() => {
        console.log("updated successfully")
    }).catch(err => {
        console.log(err)
    })
}