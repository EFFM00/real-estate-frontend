import { useRef, useState } from "react";

const Register = () => {

    // const useRef = useRef();
    // const errRef = useRef();

    return (
        <form>
            <fieldset>
                <label htmlFor="first_name_register">First name</label>
                <input placeholder="first_name_register" type="text" name="first_name_register" id="first_name_register"/>
            </fieldset>

            <fieldset>
                <label htmlFor="last_name_register">Last name</label>
                <input placeholder="last_name_register" type="text" name="last_name_register" id="last_name_register"/>
            </fieldset>

            <fieldset>

                <input type="radio" id="F" name="gender_register" value="F"/>
                <label htmlFor="F">Female</label>

                <input type="radio" id="M" name="gender_register" value="M"/>
                <label htmlFor="M">Male</label>

            </fieldset>

            <fieldset>
                <label htmlFor="password_register">Password</label>
                <input placeholder="password_register" type="password" name="password_register" id="password_register"/>
            </fieldset>

            <fieldset>
                <label htmlFor="repeat_password_register">Confirm password</label>
                <input placeholder="repeat_password_register" type="password" name="repeat_password_register" id="repeat_password_register"/>
            </fieldset>

            <fieldset>
                <label htmlFor="phone_register">Phone</label>
                <input placeholder="phone_register" type="tel" name="phone_register" id="phone_register" pattern="/^\(\d{3}\) \d{3}-\d{4}$/"/>
            </fieldset>

            <button type="submit">Sign up</button>

        </form>
    )
}

export default Register;