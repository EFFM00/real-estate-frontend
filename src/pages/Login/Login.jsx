import { useEffect, useState, useRef } from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const Login = () => {

    const navigate = useNavigate();

    const{setAuth, setIsLogging, isLogging} = useAuth();
    const [msgBtnm, setMsgBtn] = useState("Login")

    useEffect(() => {
        console.log("isLogging", isLogging);
        if(isLogging) {
            setMsgBtn("Loading...");
        } else {
            setMsgBtn("Login");
        }
    }, [isLogging]);

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
            setIsLogging(true)
            const url = "https://api-real-estates.onrender.com/api/users/login";

            const headers = {
                headers: {
                    "Content-type": "application/json",
                }
            }
        
            axios.post(url, values, headers)
            .then(res => {
                setIsLogging(false);
                if(res.status === 200 && res.data.success === 1) {
                    const token = JSON.stringify(res.data.token);
                    localStorage.setItem("token", token);
                    navigate("/");

                } else {
                    Swal.fire({
                        title: "Error",
                        text: res.data.data ?? "Invalid email or password",
                        icon: "error",
                    })
                }
            })
        
            .catch(err => {
                setIsLogging(false);
                Swal.fire({
                    title: "Error",
                    text: err,
                    icon: "error",
                })
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
        <button type="submit">{msgBtnm}</button>
        </form>
    )
}



export default Login