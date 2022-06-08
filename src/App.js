import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreeen from './screen/HomeScreeen';
import ProductScreen from './screen/ProductScreen';

const App = () => {
  return (
    <Router>
     <Header />
      <main className='my-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreeen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>}/>
          </Routes>
        </Container>
      </main> 
     <Footer />    
    </Router>
  );
}

export default App;
