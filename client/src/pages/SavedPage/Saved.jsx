import { Link, useLocation } from 'react-router-dom';
import './Saved.scss';

const Saved = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    return (
        <div id="saved_page">
            <div className="h-container">
                Saved
            </div> 
        </div>
    );
}
 
export default Saved;