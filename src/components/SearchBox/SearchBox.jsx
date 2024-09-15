import { Formik, Field, Form } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
      {({ values, handleChange }) => (
        <Form className={s.form}>
          <Field
            name="search"
            type="text"
            placeholder="Search contacts"
            className={s.field}
            value={values.search}
            onChange={(e) => {
              handleChange(e);
              onSearch(e.target.value);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
