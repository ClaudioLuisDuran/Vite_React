import { useRouteError } from "react-router-dom";

const Error404 = () => {

    const error = useRouteError();

    return (
        <>
        <h3>{error.status}  Ops!...</h3>
        {/* <div>La página que busca no existe.</div> */}
        <p>
            <i>{error.data}</i>
        </p>
        </>
    )
}

export default Error404;

