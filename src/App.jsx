import { useState, useEffect } from 'react'
import './App.css';
import RightBlock from './Components/RightBlock/RightBlock';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  



  return (
    <>

        <ToastContainer
          position="top-center"
          newestOnTop
          closeOnClick
        />
        <RightBlock />
    </>
  )
}

export default App;
