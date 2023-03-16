import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import MainLayouts from './Layouts/MainLayouts';
import Avatar from './components/Avatar';
import PayPage from './pages/PayPage';

function App() {
  return (
    <Routes>
      <Route element = {<MainLayouts/>}>
      <Route path='/book' element ={<BookPage/>}/>
      <Route path='/' element ={<HomePage/>}/>
      <Route path='/search' element ={<SearchPage/>}/>
      <Route path='pay' element = {<PayPage/>}/>
      </Route>
    </Routes>
    
   );
}

export default App;
