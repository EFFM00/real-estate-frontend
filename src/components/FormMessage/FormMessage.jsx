import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { FormMsg, ContainerFormMsg, H3, TextArea } from "./style";
import {Group, Label, Input, ButtonLogin} from "../../pages/Login/styled.js"
import { useFormik } from "formik";
import jwtDecode from "jwt-decode";
import * as Yup from "yup";
import Swal from "sweetalert2";

const FormMessage = () => {

    const [isSending, setIsSending] = useState(false)
    const [msgBtn, setMsgBtn] = useState("Send")

    useEffect(() => {
        if(isSending) {
            setMsgBtn("Loading...");
        } else {
            setMsgBtn("Send");
        }
    }, [isSending])
    

    const refForm = useRef();

    const dataUser = localStorage.getItem("token");
    const dataUserDecoded = jwtDecode(dataUser).result;

    const formik = useFormik ({

        initialValues: {
            name: dataUserDecoded.first_name+" "+dataUserDecoded.last_name,
            email: dataUserDecoded.email,
            message: ""
        },

        validationSchema: Yup.object({
            
            name: Yup.string()
            .required("Name is required"),
            
            email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),

            message: Yup.string()
            .min(10, "Message must have a minimum of 10 characters")
            .required("Message is required")
        }),
        onSubmit: () => {
            
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_ID;
            setIsSending(true)

            emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
            .then(_ => {
                setIsSending(false)
                formik.resetForm();
                Swal.fire({
                    title: "Success",
                    text: "Message sent",
                    icon: "success",
                })

            })
            .catch(_ => {
                setIsSending(false)
                Swal.fire({
                    title: "Error",
                    text: "An error occurred",
                    icon: "error",
                })
            })


        },
    })

    return(
        <ContainerFormMsg>
            <H3>Send a message to the owner</H3>
            <FormMsg ref={refForm} onSubmit={formik.handleSubmit}>
                <Group>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                    defaultValue={dataUserDecoded.first_name+" "+dataUserDecoded.last_name} 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.name && 
                        formik.errors.name && 
                        (<span style={{ color: "red", marginLeft: "12%" }}>
                            {formik.errors.name}
                        </span>)
                    }
                </Group>
                <Group>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                    defaultValue={dataUserDecoded.email} 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Email..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && 
                        formik.errors.email && 
                        (<span style={{ color: "red", marginLeft: "12%" }}>
                            {formik.errors.email}
                        </span>)
                    }
                </Group>
                <Group>
                    <Label htmlFor="message">Message</Label>
                    <TextArea 
                    id="message" 
                    name="message" 
                    placeholder="Message..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.message && 
                        formik.errors.message && 
                        (<span style={{ color: "red", marginLeft: "12%" }}>
                            {formik.errors.message}
                        </span>)
                    }
                </Group>
                
                <ButtonLogin type="submit">{msgBtn}</ButtonLogin>
            </FormMsg>
        </ContainerFormMsg>

    )
}

export default FormMessage;