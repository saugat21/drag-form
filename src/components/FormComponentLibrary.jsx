import React from "react";

const components = [
  { type: "text", label: "Text Field", icon: "bi-pencil-square" },
  { type: "select", label: "Dropdown", icon: "bi-chevron-down" },
  { type: "radio", label: "Radio Buttons", icon: "bi-ui-radios" },
];

const FormComponentLibrary = ({ setSelectedComponent }) => {
 return (
   <div className="card shadow-lg mt-4 text-center border-0">
     <div className="card-header bg-primary text-white">
       <h4 className="mb-0">Component Library</h4>
     </div>
     <div className="card-body">
       <p className="text-muted">
         Drag and drop components to build your form.
       </p>
       <div className="d-flex flex-wrap gap-3">
         {components.map((component) => (
           <div
             key={component.type}
             className="p-3 border rounded shadow-sm d-flex align-items-center justify-content-between bg-light"
             draggable
             onDragStart={() => setSelectedComponent(component)}
             style={{
               cursor: "grab",
               width: "100%",
               maxWidth: "250px",
               transition: "transform 0.2s",
             }}
             onMouseOver={(e) =>
               (e.currentTarget.style.transform = "scale(1.05)")
             }
             onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
           >
             <div className="d-flex align-items-center">
               <i className={`bi ${component.icon} fs-4 text-primary me-2`}></i>
               <span className="fw-semibold">{component.label}</span>
             </div>
             <i className="bi bi-arrows-move text-secondary"></i>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default FormComponentLibrary;
