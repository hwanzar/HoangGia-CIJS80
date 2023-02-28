// export default function Authenticate() {
//     return <h1>Authenticate</h1>;
// }
import { Outlet } from "react-router-dom";

const Authenticate = () => {
    return (
        <div>
            <h1>Authenticate</h1>
            <Outlet />
        </div>
    );
};
export default Authenticate;
