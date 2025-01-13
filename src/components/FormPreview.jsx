import React, { useMemo, useState } from "react";
import { z } from "zod";
import generateSchema from "../utils/schemaGenerator";

const FormPreview = ({ formComponents }) => {
  const [formData, setFormData] = useState({});
  const schema = useMemo(() => generateSchema(formComponents), [formComponents]);

  const handleInputChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const zodSchema = z.object(schema);
    try {
      zodSchema.parse(formData);
      alert("Validation Passed");
    } catch (error) {
      alert("Validation Failed: " + error.errors[0].message);
    }
  };

  return (
    <div>
      <h2>Form Preview</h2>
      {formComponents.map((component) => (
        <div key={component.id} className="mb-3">
          <label>{component.label}</label>
          {component.type === "text" && (
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleInputChange(component.id, e.target.value)}
            />
          )}
          {component.type === "select" && (
            <select
              className="form-control"
              onChange={(e) => handleInputChange(component.id, e.target.value)}
            >
              <option value="">Select an Job</option>
              <option value="Option 1">Intern</option>
              <option value="Option 2">Junior Dev</option>
            </select>
          )}
          {component.type === "radio" && (
            <div>
              <input
                type="radio"
                name={component.id}
                value="Option 1"
                onChange={(e) => handleInputChange(component.id, e.target.value)}
              />
              Male
              <input
                type="radio"
                name={component.id}
                value="Option 2"
                onChange={(e) => handleInputChange(component.id, e.target.value)}
              />
              Female
            </div>
          )}
        </div>
      ))}
      <button className="btn btn-warning" onClick={validateForm}>
        Validate Form
      </button>
    </div>
  );
};


export default FormPreview;
