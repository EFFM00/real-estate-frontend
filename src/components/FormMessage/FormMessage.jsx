import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FormMsg, ContainerFormMsg, H3, TextArea } from "./style";
import {Group, Label, Input, ButtonLogin} from "../../pages/Login/styled.js"
const FormMessage = () => {

    const refForm = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_8856n79";
        const templateId = "template_w4ne1sc";
        const publicKey = "xc9ESIxzlvyVSXaiO";

        emailjs.sendForm(serviceId, templateId, refForm.current, publicKey).then(res => console.log(res.text)).catch(err => console.error(err))

    }

    return(
        <ContainerFormMsg>
            <H3>Send a message to the owner</H3>
            <FormMsg ref={refForm} onSubmit={handleSubmit}>
                <Group>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Name..."/>
                </Group>
                <Group>
                    <Label htmlFor="email">Email</Label>
                    <Input type="text" id="email" name="email" placeholder="Email..."/>
                </Group>
                <Group>
                    <Label htmlFor="message">Message</Label>
                    <TextArea id="message" name="message" placeholder="Message..."/>
                </Group>
                
                <ButtonLogin type="submit">Send</ButtonLogin>
            </FormMsg>
        </ContainerFormMsg>

    )
}

export default FormMessage;