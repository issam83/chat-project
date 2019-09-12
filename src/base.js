import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARv0hzcHNKEkFgJV4TlZPcnH_7taqYYyc",
    authDomain: "chatbox-project-643b3.firebaseapp.com",
    databaseURL: "https://chatbox-project-643b3.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base