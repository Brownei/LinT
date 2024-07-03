import { useLocation } from "react-router-dom";
import './Stepper.scss'

const Stepper = () => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return (
        "nav-link disabled " + (path === location.pathname ? "active" : undefined)
        );
    };

    return (
        <>
            <nav className="stepper navbar navbar-expand-lg">
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav">
                        <li className="step nav-item">
                            <span className={getLinkClass("/setup-profile")}></span>
                        </li>
                        <li className="step nav-item">
                            <span className={getLinkClass("/setup-profile/2")}></span>
                        </li>
                        <li className="step nav-item">
                            <span className={getLinkClass("/setup-profile/3")}></span>
                        </li>
                        <li className="step nav-item">
                            <span className={getLinkClass("/setup-profile/4")}></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Stepper