import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Login from './Components/Login';
import Books from "./Components/BookDetails";
import Test from "./Components/test";
import BookList from "./Components/BookList";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="book/:id" element={<Books/>}/>
        <Route  path="booklist/:query" element={<BookList/>}/>
        <Route path="test" element={<Test/>}/>
    </Routes>
  </BrowserRouter>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);