import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



var firebaseConfig = {
    apiKey: "AIzaSyC34xPwCmt6RNQWDL5DU3OtbWvjL9mSPWE",
    authDomain: "authorizations-test.firebaseapp.com",
    projectId: "authorizations-test",
    storageBucket: "authorizations-test.appspot.com",
    messagingSenderId: "290804777408",
    appId: "1:290804777408:web:dc98ba7b664e23f18c0825",
    measurementId: "G-77PZR5PZ96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.firestore()
  
  export default firebase;
  export  const db = firebase.firestore();



  const auth = firebase.auth()

  export const RegisterInFirebase = async cred =>{
    try {
        const response = await auth.createUserWithEmailAndPassword(cred.email, cred.password);
        await response.user.updateProfile({
            displayName: cred.displayName
        })
        return await setUserProfileData(response.user)
    } catch (error) {
        throw error;
    }
}

export const setUserProfileData = user =>{
    db.collection('users').doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        createdAt : firebase.firestore.FieldValue.serverTimestamp()
    })
}