function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);
    alert("Form submitted successfully!");
    resetForm(); // clears the form after submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />
        </div>

        <div>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
        </div>

        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
