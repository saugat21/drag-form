import React, { useMemo } from "react";
import { z } from "zod";
import generateSchema from "../utils/schemaGenerator";

const FormPreview = ({ formComponents }) => {
  const schema = useMemo(
    () => generateSchema(formComponents),
    [formComponents]
  );

  const validateForm = () => {
    const zodSchema = z.object(schema);
    try {
      zodSchema.parse({}); // Replace with actual form data
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
            <input type="text" className="form-control" />
          )}
          {component.type === "select" && (
            <select className="form-control">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          )}
          {component.type === "radio" && (
            <div>
              <input type="radio" name="radio" /> Option 1
              <input type="radio" name="radio" /> Option 2
            </div>
          )}
        </div>
      ))}
      <button className="btn btn-success" onClick={validateForm}>
        Validate Form
      </button>
    </div>
  );
};

export default FormPreview;
