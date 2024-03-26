import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen">
            <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
            <h2 className="text-3xl font-bold">Oops!!!</h2>
            <Link to={"/"} className="btn">Go back to home page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;