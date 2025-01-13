import React, { useState } from "react";
import FormComponentLibrary from "./FormComponentLibrary";



const FormBuilder = ({ formComponents, setFormComponents }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    if (selectedComponent) {
      setFormComponents((prev) => [
        ...prev,
        { ...selectedComponent, id: Date.now() },
      ]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-4 ">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-10 mb-4">
          <div className="card shadow-lg  border-0">
            <div className="card-header bg-dark text-white text-center">
              <h4 className="mb-0">Form Builder</h4>
            </div>
            <div
              className="card-body"
              style={{
                minHeight: "310px",
                backgroundColor: "#f8f9fa",
                border: "2px dashed #6c757d",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: formComponents.length ? "flex-start" : "center",
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {formComponents.length ? (
                formComponents.map((component) => (
                  <div
                    key={component.id}
                    className="d-flex justify-content-between align-items-center border p-3 mb-2 bg-white rounded shadow-sm w-100"
                  >
                    <span>
                      <strong>{component.type}:</strong> {component.label}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted">
                  <i className="bi bi-plus-circle fs-1"></i>
                  <p className="mt-2">
                    Drag components here to start building your form.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <FormComponentLibrary setSelectedComponent={setSelectedComponent} />
      </div>
    </div>
  );
};

export default FormBuilder;