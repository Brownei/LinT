import "./Collaborate.scss"
import { Link, useLocation } from 'react-router-dom';

const Collaborate = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

      return (
        <div className="collaborate-page">Collaborate</div>
      )
}

export default Collaborate;