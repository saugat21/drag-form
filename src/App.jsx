
import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBuilder from './components/FormBuilder';
import FormPreview from './components/FormPreview';

const App = () => {
 const [formComponents, setFormComponents] = useState([]);

 return (
   <div className="container mt-4">
     <h1 className="text-center mb-4">Interactive Form Builder</h1>
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
   </div>
 );
}

export default App