import { NavLink, useLocation } from "react-router-dom"
// import Articles from "./Articles"

const Home = () => {
  const location = useLocation()
  return (
    <main>
      <NavLink to="/" className={location.pathname === '/' ? 'nav_selected' : 'home'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 41 40" fill="#3338C1">
            <g clipRule="url(#clip0_131_395)">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5466 4.47966C21.9615 4.02447 21.2413 3.77734 20.5 3.77734C19.7586 3.77734 19.0384 4.02447 18.4533 4.47966L4.47997 15.3463C3.22664 16.3247 3.91664 18.333 5.50497 18.333H7.32497L8.69164 31.998C8.77388 32.8205 9.15881 33.5831 9.77169 34.1378C10.3846 34.6925 11.1817 34.9996 12.0083 34.9997H28.9916C29.8182 34.9996 30.6154 34.6925 31.2282 34.1378C31.8411 33.5831 32.2261 32.8205 32.3083 31.998L33.675 18.333H35.495C37.0816 18.333 37.775 16.3247 36.52 15.348L22.5466 4.47966ZM20.5 26.6663C21.8261 26.6663 23.0978 26.1395 24.0355 25.2019C24.9732 24.2642 25.5 22.9924 25.5 21.6663C25.5 20.3402 24.9732 19.0685 24.0355 18.1308C23.0978 17.1931 21.8261 16.6663 20.5 16.6663C19.1739 16.6663 17.9021 17.1931 16.9644 18.1308C16.0268 19.0685 15.5 20.3402 15.5 21.6663C15.5 22.9924 16.0268 24.2642 16.9644 25.2019C17.9021 26.1395 19.1739 26.6663 20.5 26.6663Z" fill={location.pathname === '/' ? '#3338C1' : '#939393'}/>
            </g>
            <defs>
                <clipPath id="clip0_131_395">
                <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
          </svg>
          <span>Home</span>
      </NavLink>
    </main>
  )
}

export default Home;