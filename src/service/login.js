import axios from "axios";

export default (values) => {
    axios.post("https://api-real-estates.onrender.com/api/users/login", values, {
        headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        }})
    .then(res => {
        const token = res.data;

        console.log("TOKEN", token);

    })
}