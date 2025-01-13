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
    <div>
      <h2>Form Builder</h2>
      <div
        className="border p-3"
        style={{ minHeight: "300px" }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {formComponents.map((component) => (
          <div key={component.id} className="border p-2 mb-2">
            {component.type}: {component.label}
          </div>
        ))}
      </div>
      <FormComponentLibrary setSelectedComponent={setSelectedComponent} />
    </div>
  );
};

export default FormBuilder;