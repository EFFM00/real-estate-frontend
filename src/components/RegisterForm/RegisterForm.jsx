import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  ButtonLogin,
  FormCont,
  Group,
  H1Login,
  Input,
  Label,
  LinkTo,
} from "../../pages/Login/styled";
import { InputRadioGroup } from "./style";
import { useAuth } from "../../context/AuthProvider";
import { useEffect, useState } from "react";
import { Required } from "../Required/Required";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [msgBtnm, setMsgBtn] = useState("Login");

  const { setIsLogging, isLogging } = useAuth();

  useEffect(() => {
    if (isLogging) {
      setMsgBtn("Loading...");
    } else {
      setMsgBtn("Sign up");
    }
  }, [isLogging]);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      gender: "F",
      email: "",
      password: "",
      number: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Name is required"),

      last_name: Yup.string().required("Last name is required"),

      email: Yup.string().email("Invalid email").required("Email is required"),

      password: Yup.string()
        .min(5, "Password must have a minimum of 5 characters")
        .max(50, "Password must have a maximum of 50 characters")
        .required("Password is required"),

      number: Yup.string().required("A phone number is required"),

      gender: Yup.string()
        .oneOf(["M", "F"], "Please select a gender")
        .required("Gender is required"),
    }),

    onSubmit: async (values) => {
      setIsLogging(true);
      const url = "https://api-real-estates.onrender.com/api/users";

      const headers = {
        headers: {
          "Content-type": "application/json",
        },
      };

      axios
        .post(url, values, headers)
        .then((res) => {
          setIsLogging(false);
          if (res.status === 200 && res.data.success === 1) {
            navigate("/login");
          } else {
            Swal.fire({
              title: "Error",
              text: res.data.data,
              icon: "error",
            });
          }
        })

        .catch((err) => {
          setIsLogging(false);
          Swal.fire({
            title: "Error",
            text: err,
            icon: "error",
          });
        });
    },
  });

  return (
    <FormCont onSubmit={formik.handleSubmit}>
      <H1Login>Register to access our properties</H1Login>

      <Group>
        <Label htmlFor="first_name">Name{<Required/>}</Label>
        <Input
          placeholder="First name"
          type="text"
          name="first_name"
          id="first_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.first_name && formik.errors.first_name && (
          <span style={{ color: "red", marginLeft: "12%" }}>
            {formik.errors.first_name}
          </span>
        )}
      </Group>

      <Group>
        <Label htmlFor="last_name">Last name{<Required/>}</Label>
        <Input
          placeholder="Last name"
          type="text"
          name="last_name"
          id="last_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.last_name && formik.errors.last_name && (
          <span style={{ color: "red", marginLeft: "12%" }}>
            {formik.errors.last_name}
          </span>
        )}
      </Group>

      <Group>
        <Label>Gender{<Required/>}</Label>

        <div>
          <InputRadioGroup>
            <input
              type="radio"
              id="F"
              name="gender"
              value="F"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.gender === "F"}
            />
            <Label htmlFor="F">Female</Label>
          </InputRadioGroup>

          <InputRadioGroup>
            <input
              type="radio"
              id="M"
              name="gender"
              value="M"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.gender === "M"}
            />
            <Label htmlFor="M">Male</Label>
          </InputRadioGroup>
        </div>

        {formik.touched.gender && formik.errors.gender && (
          <span style={{ color: "red", marginLeft: "12%" }}>
            {formik.errors.gender}
          </span>
        )}
      </Group>

      <Group>
        <Label htmlFor="email">Email{<Required/>}</Label>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red", marginLeft: "12%" }}>
            {formik.errors.email}
          </span>
        )}
      </Group>

      <Group>
        <Label htmlFor="password">Password{<Required/>}</Label>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red", marginLeft: "12%" }}>
            {formik.errors.password}
          </span>
        )}
      </Group>

      <Group>
        <Label htmlFor="phone">Phone{<Required/>}</Label>
        <Input
          placeholder="Phone"
          type="number"
          name="number"
          id="number"
          min={0}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <span style={{ color: "red", marginLeft: "12%" }}>
            {formik.errors.phone}
          </span>
        )}
      </Group>

      <LinkTo to="/login">If you have an acount, login here</LinkTo>

      <ButtonLogin type="submit">{msgBtnm}</ButtonLogin>
    </FormCont>
  );
};

export default RegisterForm;
