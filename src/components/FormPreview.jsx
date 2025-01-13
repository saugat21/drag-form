import React, { useMemo, useState } from "react";
import { z } from "zod";
import generateSchema from "../utils/schemaGenerator";
import { toast } from "react-toastify";

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
      toast.success("Validation Passed");
    } catch (error) {
        toast.error("Validation Failed")
    
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow border-0">
        <div className="card-header bg-dark text-center text-white">
          <h3 className="mb-0">Form Preview</h3>
        </div>
        <div className="card-body">
          <form>
            {formComponents.map((component) => (
              <div className="mb-3" key={component.id}>
                <label htmlFor={component.id} className="form-label">
                  {component.label}
                </label>
                {component.type === "text" && (
                  <input
                    type="text"
                    id={component.id}
                    className="form-control"
                    placeholder={`Enter ${component.label.toLowerCase()}`}
                    value={formData[component.id] || ""}
                    onChange={(e) =>
                      handleInputChange(component.id, e.target.value)
                    }
                  />
                )}
                {component.type === "select" && (
                  <select
                    id={component.id}
                    className="form-select"
                    value={formData[component.id] || ""}
                    onChange={(e) =>
                      handleInputChange(component.id, e.target.value)
                    }
                  >
                    <option value="">
                      Select {component.label.toLowerCase()}
                    </option>
                    <option value="Option 1">Intern</option>
                    <option value="Option 2">Junior Dev</option>
                  </select>
                )}
                {component.type === "radio" && (
                  <div className="d-flex flex-wrap gap-2">
                    <div className="form-check">
                      <input
                        type="radio"
                        id={`${component.id}-option1`}
                        name={component.id}
                        value="Option 1"
                        checked={formData[component.id] === "Option 1"}
                        className="form-check-input"
                        onChange={(e) =>
                          handleInputChange(component.id, e.target.value)
                        }
                      />
                      <label
                        htmlFor={`${component.id}-option1`}
                        className="form-check-label"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id={`${component.id}-option2`}
                        name={component.id}
                        value="Option 2"
                        className="form-check-input"
                        checked={formData[component.id] === "Option 2"}
                        onChange={(e) =>
                          handleInputChange(component.id, e.target.value)
                        }
                      />
                      <label
                        htmlFor={`${component.id}-option2`}
                        className="form-check-label"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </form>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            type="reset"
            onClick={() => setFormData({})}
          >
            Reset Form
          </button>
          <button className="btn btn-success" onClick={validateForm}>
            Validate Form
          </button>
        </div>
      </div>
    </div>
  );
};


export default FormPreview;
