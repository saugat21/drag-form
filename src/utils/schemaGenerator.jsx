import { z } from "zod";
const generateSchema = (components) => {
   const schema = {};
   components.forEach((component) => {
     if (component.type === "text") {
       schema[component.id] = z
         .string()
         .min(1, `${component.label} is required`);
     } else if (component.type === "select") {
       schema[component.id] = z
         .string()
         .min(1, `Please select ${component.label}`);
     } else if (component.type === "radio") {
       schema[component.id] = z
         .string()
         .min(1, `Please select an option for ${component.label}`);
     }
   });
   return schema;
};

export default generateSchema;
