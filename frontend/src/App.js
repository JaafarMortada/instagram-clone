import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './components/forms/registration-from/Index';
import './utilities.css'
import SignInForm from './components/forms/signin-form/Index';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignInForm />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
