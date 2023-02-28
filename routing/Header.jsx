import { NavLink } from "react-router-dom";
const activeClass = (params) => {
    return params.isActive ? "active-item" : "";
};

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/" className={activeClass}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/welcome" className={activeClass}>
                    Welcome
                </NavLink>
            </li>
            <li>
                <NavLink to="/products" className={activeClass}>
                    Products
                </NavLink>
            </li>
        </ul>
    );
};
