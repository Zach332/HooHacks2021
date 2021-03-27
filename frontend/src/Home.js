import Navbar from './Navbar';
import { useEffect } from "react";
import { toParams } from "./Routing";
import { useHistory } from "react-router-dom";


export default function Home() {
    let history = useHistory();
    useEffect(() => {
        const params = toParams(window.location.hash.replace(/^#/, ""));
        handleLogin(params);
    }, []);

    const handleLogin = (data) => {
        console.log(data)
        if (data.access_token) {
            history.push("/home")
        }
    };

    let activityAvailabilities = [];

    return <div>
        <Navbar />
        <div className="d-flex align-items-center">
            <div className="me-auto p-2 ms-5">
                <h1>Home</h1>
            </div>
            <div className="p-2 me-5">
                <a
                    type="btn btn-primary"
                    className="btn btn-outline-primary btn-md"
                    data-bs-toggle="modal"
                    data-bs-target={"#newTrigger"}
                >
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-plus"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                    </svg>
                        Add activity availability
                </a>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {activityAvailabilities.map((donation) => (
                    <div/>
                ))}
            </div>
        </div>
    </div>;
}
