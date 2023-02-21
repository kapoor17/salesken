import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage as SignUp } from './Components/Authentication/SignUpPage';
import { LoginPage as Login } from './Components/Authentication/LoginPage';
import { Quiz , Result} from './Components/Quiz/Quiz';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Login setLoggedIn={setLoggedIn}/>}/>
      <Route path="/quiz" element={<Quiz loggedIn={loggedIn}/>}/>
      {/* <Route path="/result" element={<Result loggedIn={loggedIn}/>}/> */}
      <Route path="/signup" element={<SignUp />}/> 
    </Routes>
  );
}

export default App;
