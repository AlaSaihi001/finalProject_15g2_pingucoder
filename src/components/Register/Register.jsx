import { useFormik } from "formik";
import Style from "./Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  //   let navigate = useNavigate()
  let validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "name min length is 3")
      .max(10, "name max length is 10")
      .required("name is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    phone: Yup.string()
      .matches(/^012[0126][0-9]{8}$/, "phone must be valid")
      .required("phone is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
      )
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")])
      .required("rePassword is required"),
  });
  //Aaaa123
  function handelRegister(formValues) {
    // let {data} = await axios.post(`https://ecommerce.pingucoder.com/api/v1/auth/signup`, formValues)
    // if (data.message === 'success'){
    //   navigate('/login')
    // }else{
    //   console.log("error")
    // }
    // console.log(formValues)
    console.log(formValues);
    console.log("register");
  }

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = 'Name is required';
  //   }
  //   if (!values.email) {
  //     errors.email = 'Email is required';
  //   }
  //   if (!values.phone) {
  //     errors.phone = 'Phone is required';
  //   }
  //   if (!values.password) {
  //     errors.password = 'Password is required';
  //   }
  //   if (!values.rePassword) {
  //     errors.rePassword = 'Re-Password is required';
  //   } else if (values.rePassword !== values.password) {
  //     errors.rePassword = 'Passwords must match';
  //   }
  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="py-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Register Now</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder="Enter Your Name : "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ></label>
          {formik.errors.name && formik.touched.name ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 white:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.name}</span>
            </div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder="Enter Your Email : "
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ></label>
          {formik.errors.email && formik.touched.email ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 white:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.email}</span>
            </div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
            type="tel"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder="Enter Your Phone : "
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ></label>
          {formik.errors.phone && formik.touched.phone ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 white:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.phone}</span>
            </div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder="Enter Your Password : "
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ></label>
          {formik.errors.password && formik.touched.password ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 white:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.password}</span>
            </div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            type="password"
            name="rePassword"
            id="rePassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder="Confirm Your Password : "
          />
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          ></label>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 white:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.rePassword}</span>
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
