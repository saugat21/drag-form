
import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBuilder from './components/FormBuilder';
import FormPreview from './components/FormPreview';
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [formComponents, setFormComponents] = useState([]);
 

 return (
   <div className="container mt-4">
     <h1 className="text-center mb-4 fw-bold">Interactive Form Builder</h1>
     <div className="row">
       <div className="col-md-6">
         <FormBuilder
           formComponents={formComponents}
           setFormComponents={setFormComponents}
         />
       </div>
       <div className="col-md-6">
         <FormPreview formComponents={formComponents} />
       </div>
     </div>
     <Footer/>
     <ToastContainer position="top-right" autoClose={2000} />
   </div>
 );
}

export default App