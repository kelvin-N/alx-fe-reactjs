import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Initial form values
const initialValues = {
  username: "",
  email: "",
  password: "",
};

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      setSubmitting(true);
      setSubmitStatus(null);

      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const data = await response.json();
      console.log("Form submitted:", data);
      setSubmitStatus({ success: true, message: "Form submitted successfully!" });
      resetForm();
    } catch (error) {
      console.error(error);
      setSubmitStatus({ success: false, message: "Error submitting form. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div style={{ marginBottom: "1rem" }}>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>

          {submitStatus && (
            <p style={{ color: submitStatus.success ? "green" : "red", marginTop: "1rem" }}>
              {submitStatus.message}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
