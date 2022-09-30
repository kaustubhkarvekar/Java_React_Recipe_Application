import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
//import axios from 'axios'
import ListRecipeComponent from './components/ListRecipeComponent';
import AddRecipeComponent from './components/AddRecipeComponent';
import ViewRecipeComponent from './components/ViewRecipeComponent';
import WelcomePageComponent from './components/WelcomePageComponent';
import LoginUserComponent from './components/LoginUserComponent';
import LogoutUserComponent from './components/LogoutUserComponent';
import SignupUserComponent from './components/SignupUserComponent';
import WishlistComponent from './components/WishlistComponent';
import AddToWishlistComponent from './components/AddToWishlistComponent';
import RemoveWishCommponent from './components/RemoveWishComponent';

function App() {
  return (
    <div class="addbg">
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<WelcomePageComponent/>}/>
          <Route exact path='/login' element={<LoginUserComponent/>}/>
          <Route exact path='/logout' element={<LogoutUserComponent/>}/>
          <Route exact path='/signup' element={<SignupUserComponent/>}/>
          <Route exact path='/wishlist' element={<WishlistComponent/>}/>
          <Route exact path='/add-to-wishlist/:id' element={<AddToWishlistComponent/>}/>
          <Route exact path='/recipes' element={<ListRecipeComponent/>}/>
          <Route exact path='/add-recipe' element={<AddRecipeComponent/>}/>
          <Route exact path='/view-recipe/:id' element={<ViewRecipeComponent/>}/>
        </Routes>
      </div>  
      <FooterComponent/>
      </Router>
    </div>
  );
}


export default App;
