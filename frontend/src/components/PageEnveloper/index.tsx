import Navbar from "../Navbar";
import { ScrollRestoration } from "react-router-dom";

interface IPageEnveloper {
    children: any;
}

const PageEnveloper: React.FC<IPageEnveloper> = ({ children }) => {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            {children}
        </>
    )
}

export default PageEnveloper;