import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage as SignUp } from './Components/SignUp/SignUpPage';
import { LoginPage as Login } from './Components/Login/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
