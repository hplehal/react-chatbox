import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Channel from './Channel';
import { firebase } from './firebase'; 

function App() {
  const [user, setUser ] = useState(null);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        setUser(user);
      }else{
        setUser(null);
      }
    });
  });

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider)
  };
  return user ? (
    <div className="App">
      <Nav />
      <Channel />
    </div>
  ) : (
    <div className = "Login">
      <h1>Lets Log In to Start Chatting</h1>
      <button onClick={handleSignIn}>Sign In with Google!</button>
    </div>
  )
}

export default App;
