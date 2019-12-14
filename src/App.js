import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Channel from './Channel';
import { firebase } from './firebase'; 


function App() {
  const user = useAuth();
  
  return user ? (
    <div className="App">
      <Nav user = {user}/>
      <Channel />
    </div>
  ) : (
  <LogIn/>
  )
}

const LogIn = () => {
  const [ authError, setAuthError ] = useState(null);
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try{
      await firebase.auth().signInWithPopup(provider)
    }catch(error){
      setAuthError(error)
    }
  };

  return(
    <div className = "Login">
      <h1>Lets Log In to Start Chatting</h1>
      <button onClick={handleSignIn}>Sign In with Google!</button>
      {
        authError && (
          <div>
            <p>Sorry there was a problem!</p>
            <p><i>{authError.message}</i></p>
            <p>Please try again!</p>
          </div>
        )
      }
    </div>
  );
}


const useAuth = () => {
  const [user, setUser ] = useState(null);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        setUser({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          uid: user.uid
        });
        console.log(user);
      }else{
        setUser(null);
      }
    });
  },[]);
  return user;
}

export default App;
