import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import EvaluationForm from './components/EvaluationForm/EvaluationForm';
import Test from './components/Test';
import Thankyou from './components/Thankyou/Thankyou';
import AdminHome from './components/admin/AdminHome';
import ViewEvaluation from './components/admin/ViewEvaluation/ViewEvaluation';

const App = () => {

  return (
    <div>
      <BrowserRouter>
       <Routes>
         {/* <Route element={<Layout />} > */}
           <Route path="/" element={<Home/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/evaluate"  element={<EvaluationForm />} />
           <Route path="/test" element={<Test/>} />
           <Route path="/thankyou" element={<Thankyou/>} />
           <Route path="/admin" element={<AdminHome/>} />
           <Route path="/admin/viewEvaluation" element={<ViewEvaluation/>} />

         {/* </Route> */}
       </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
