import React from "react";

const components = [
  { type: "text", label: "Text Field" },
  { type: "select", label: "Dropdown" },
  { type: "radio", label: "Radio Buttons" },
];

const FormComponentLibrary = ({ setSelectedComponent }) => {
  return (
    <div>
      <h2>Component Library</h2>
      <div className="d-flex flex-column">
        {components.map((component) => (
          <div
            key={component.type}
            className="btn btn-light border mb-2"
            draggable
            onDragStart={() => setSelectedComponent(component)}
          >
            {component.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormComponentLibrary;
