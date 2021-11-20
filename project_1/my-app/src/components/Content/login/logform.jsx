import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
// import stl from './Logform.module.css';


const Logform = (props) => {
  const formik = useFormik({
      initialValues: {
            email: "",
            password: "",
      },
    onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
        props.login(values.email, values.password, false);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Logform;

// function App() {
//   return <SignupForm />;
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
