import { useEffect, useState, useRef } from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import login from "../../service/login";

const Login = () => {

    const{setAuth} = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
            password: Yup.string()
            .min(1, "Too short")
            .max(50)
            .required("Password is required")
        }),
        onSubmit: async (values) => {
            axios.post("https://api-real-estates.onrender.com/api/users/login", values, {
                headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                }})
            .then(res => {
                const token = JSON.stringify(res.data.token);
                localStorage.setItem("token", token);

                console.log("TOKEN", token);
        
            })
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input placeholder="Email" type="email" name="email" id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                <span style={{ color: "red", marginLeft: "12%" }}>
                {formik.errors.email}
                </span>)}
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input placeholder="Password" type="password" name="password" id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                <span style={{ color: "red", marginLeft: "12%" }}>
                {formik.errors.password}
                </span>)}
            </fieldset>
        <button type="submit">Login</button>
        </form>
    )
}



export default Login