import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcometo own real estate page</h1>
            <button>
                <Link to="/login">
                    Login
                </Link>
            </button>
        </>
    )
}

export default Home;