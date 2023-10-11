import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const navigate = useNavigate();

    const formik = useFormik ({
        initialValues: {
            first_name: "",
            last_name: "",
            gender: "F",
            email: "",
            password: "",
            number: ""
        },
        validationSchema: Yup.object({
            
            first_name: Yup.string("1")
            .required("Name is required"),
            
            last_name: Yup.string("2")
            .required("Last name is required"),
            
            email: Yup.string("3")
            .email("Invalid email")
            .required("Email is required"),

            password: Yup.string("4")
            .min(5, "Password must have a minimum of 5 characters")
            .max(50, "Password must have a maximum of 50 characters")
            .required("Password is required"),

            number: Yup.string("5")
            .required('A phone number is required'),

            gender: Yup.string()
            .oneOf(['M', 'F'], 'Please select a gender')
            .required('Gender is required'),

        }),

        onSubmit: async (values) => {
            console.log("EEEEe");

            const url = "https://api-real-estates.onrender.com/api/users";

            const headers = {
                headers: {
                    "Content-type": "application/json",
                }
            }

            axios.post(url, values, headers)
            .then(res => {
                if(res.status === 200 && res.data.success === 1) {
                    navigate("/login");
                } else {
                    Swal.fire({
                        title: "Error",
                        text: res.data.data,
                        icon: "error",
                    })
                }

                console.log(res);
            })

            .catch(err => {
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
                <label htmlFor="first_name">First name</label>
                <input 
                placeholder="first_name" 
                type="text" 
                name="first_name" 
                id="first_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                
                {
                formik.touched.first_name && 
                formik.errors.first_name && 
                (<span style={{ color: "red", marginLeft: "12%" }}>
                    {formik.errors.first_name}
                </span>)}
            </fieldset>

            <fieldset>
                <label htmlFor="last_name">Last name</label>
                <input 
                placeholder="last_name" 
                type="text" 
                name="last_name" 
                id="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.last_name && formik.errors.last_name && (
                <span style={{ color: "red", marginLeft: "12%" }}>
                {formik.errors.last_name}
                </span>)}
            </fieldset>

            <fieldset>

                <input 
                type="radio" 
                id="F" 
                name="gender" 
                value="F"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "F"}
                />
                <label htmlFor="F">Female</label>

                <input 
                type="radio" 
                id="M" 
                name="gender" 
                value="M"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "M"}
                />
                <label htmlFor="M">Male</label>

                {formik.touched.gender && formik.errors.gender && (
                <span style={{ color: "red", marginLeft: "12%" }}>
                {formik.errors.gender}
                </span>)}
            </fieldset>

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
                <input 
                placeholder="password" 
                type="password" 
                name="password" 
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                <span style={{ color: "red", marginLeft: "12%" }}>
                {formik.errors.password}
                </span>)}
            </fieldset>

            <fieldset>
                <label htmlFor="phone">Phone</label>
                <input 
                placeholder="phone" 
                type="number" 
                name="number" 
                id="number" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                <span style={{ color: "red", marginLeft: "12%" }}>
                {formik.errors.phone}
                </span>)}
            </fieldset>

            <button type="submit">Sign up</button>

        </form>
    )
}

export default RegisterForm;