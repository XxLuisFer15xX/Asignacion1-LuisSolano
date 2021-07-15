import { firebase, googleAuthProvider } from "../../config/firebaseConfig";
import { types } from "../../types/types";

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName, user.photoURL )
                )
            });

    }
}

export const login = (uid, displayName, photo) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        photo
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})
