import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsuscribe;
  },[dispatch]);
  return (
     <Router>
      {!user ? (
        <Login />
      ) : (
        <Routes >
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Routes >
      )}
     </Router>
  );
}

export default App;
