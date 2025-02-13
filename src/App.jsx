import './App.css'
import { QuizApp } from './page/QuizApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { QuizTest } from './page/QuizTest';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<QuizApp />}/>
          <Route path='/QuizTest' element={<QuizTest />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
