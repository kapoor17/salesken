import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage as SignUp } from './Components/SignUp/SignUpPage';
import { LoginPage as Login } from './Components/Login/LoginPage';
import { Quiz } from './Components/Quiz/Quiz';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/signup" element={<SignUp/>}/> 
    </Routes>
  );
}

export default App;
