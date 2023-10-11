import emailjs from "@emailjs/browser";
import { useRef } from "react";

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
        <form ref={refForm} onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name..."/>
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Name..."/>
            </fieldset>
            <fieldset>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="name" placeholder="Name..."/>
            </fieldset>
            
            <button type="submit">Send</button>
        </form>
    )
}

export default FormMessage;