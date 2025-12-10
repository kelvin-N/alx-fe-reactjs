import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  });

  return (
    <div>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Form submitted: " + JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>Username:</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />

          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
