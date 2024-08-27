import React from 'react';
import ButtonAppBar from './Components/Navbar';
// import Logo from './images/2.png';
import FixedContainer from "./Components/HeroSection";
import InnerSection1 from './Components/InnerSection1';
import InnerSection2 from './Components/InnerSection2';
import Footer from './Components/Footer';
// import DragDropImageUploader from './Components/DragDropImageUploader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/Sign-In';
import Signup from './Components/Signup';
import { SignpostOutlined } from '@mui/icons-material';
import Main_Linkquote from './Components/Main_Linkquote';
import Faq from './Components/Faq';
import OurTeam from './Components/OurTeam';
import Focus_Stacking from './Components/Focus_Stacking';
import ImageUploader from './Components/ImageUploader';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <>
              <div className='main_img' style={{ maxHeight: '650px' }}>
                <ButtonAppBar />
                <div className="bg">
                  <FixedContainer />
                  {/* <main style={{ minHeight: '350px' }}>
                    {/* Content can go here if needed */}
                  {/* </main> */}
                </div>
              </div>
              {/* <main style={{ maxHeight: 'px' }}>
                {/* Content can go here if needed */}
              {/* </main> */}
              <div className='site_bg'>
                {/* Additional content or background adjustments can be made here */}
                <div className='InnerSection1'><InnerSection1 /></div><br />
                <div className='InnerSection2'><InnerSection2 /></div>
                <div ><Main_Linkquote /></div>
                <div><OurTeam /></div>
                <div className='Faq'><Faq /></div>

                {/* <div className='DragDropImageUploader'><DragDropImageUploader /></div> */}
              </div>
              <br />
              <Footer />
            </>
          } />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/focus_stacking' element={<Focus_Stacking />}/>
          <Route path='/imageUploader' element={<ImageUploader />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
