import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import EvaluationForm from './components/EvaluationForm/EvaluationForm';
import Test from './components/Test';
import Thankyou from './components/Thankyou/Thankyou';
import AdminHome from './components/admin/AdminHome';
import ViewEvaluation from './components/admin/ViewEvaluation/ViewEvaluation';
import AddProfessor from './components/admin/AddProfessor/AddProfessor';
import AddStudent from './components/admin/AddStudent/AddStudent';
import ProfessorHome from './components/Professor/ProfessorHome';
import ViewProfessor from './components/admin/ViewProfessor/ViewProfessor';
import MetamaskWalletModel from './components/MetamaskWalletModel/MetamaskWalletModel';

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
           <Route path="/admin/" element={<AdminHome/>} />
           <Route path="/admin/viewEvaluation" element={<ViewEvaluation/>} />
           <Route path="/admin/AddProfessor" element={<AddProfessor/>} />
           <Route path="/admin/ViewProfessor" element={<ViewProfessor/>} />
           <Route path="/admin/AddStudent" element={<AddStudent/>} />
           <Route path="/Professor" element={<ProfessorHome/>} />
           <Route path="auth" element={<MetamaskWalletModel />} />

         {/* </Route> */}
       </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
