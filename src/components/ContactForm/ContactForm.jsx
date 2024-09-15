import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Name must have at least 3 symbols")
    .max(50, "Name must have less than 50 symbols")
    .required("Name is requiered"),
  number: Yup.string()
    .min(3, "Number must have at least 3 symbols")
    .max(50, "Number must have less than 50 symbols")
    .required("Number is requiered"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    username: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={s.form}>
            <label className={s.label}>
              <span className={s.span}>Name</span>
              <Field
                name="username"
                placeholder="Enter the name"
                className={s.field}
              />
              <ErrorMessage
                name="username"
                component="div"
                className={s.error}
              />
            </label>
            <label className={s.label}>
              <span className={s.span}>Number</span>
              <Field
                type="text"
                name="number"
                placeholder="Enter the number"
                className={s.field}
              />
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>
            <button type="submit" className={s.btn}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
