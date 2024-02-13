import { Link, useLocation } from 'react-router-dom';
import './Profile.scss';
import Ideas from '../../components/Card/Ideas';

const Profile = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const users = [
        {
          id: 1,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 2,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 3,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 4,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 5,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 6,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 7,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        },
        {
          id: 8,
          name: "Udofiah Gift",
          profession: "Lead Front-end Developer",
          timestamp: "15 mins",
          post: {
            title: "How to write React",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
          }
        }
    ]
    return (
        <div id="profile_page">
            <div className='profile-details'>
                <img src={`https://robohash.org/${searchParams.get('id')}.png?set=set4&size=50x50`} alt="" />
                <div className='write-ups'>
                    <h2>Ayati Ogochukwu</h2>
                    <p>Product Designer</p>
                    <p>creating webflow content | providing creative solutions that helps brands grow and beknown. designing fintech solutions that'll change the world.</p>
                </div>
            </div>
            <aside className="sidebar">
                <button>Shake</button>
                <div className="icons">
                    <div className='web'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM9.52782 15.75H14.4722C13.9688 17.4694 13.125 19.0191 12 20.2397C10.875 19.0191 10.0313 17.4694 9.52782 15.75ZM9.1875 14.25C8.93876 12.7603 8.93876 11.2397 9.1875 9.75H14.8125C15.0613 11.2397 15.0613 12.7603 14.8125 14.25H9.1875ZM3.75 12C3.74935 11.2392 3.85442 10.4819 4.06219 9.75H7.66782C7.44407 11.2417 7.44407 12.7583 7.66782 14.25H4.06219C3.85442 13.5181 3.74935 12.7608 3.75 12ZM14.4722 8.25H9.52782C10.0313 6.53062 10.875 4.98094 12 3.76031C13.125 4.98094 13.9688 6.53062 14.4722 8.25ZM16.3322 9.75H19.9378C20.3541 11.2211 20.3541 12.7789 19.9378 14.25H16.3322C16.5559 12.7583 16.5559 11.2417 16.3322 9.75ZM19.3472 8.25H16.0256C15.6429 6.74392 15.0001 5.31623 14.1263 4.03125C15.2427 4.33127 16.2839 4.86162 17.1831 5.58818C18.0823 6.31475 18.8194 7.22146 19.3472 8.25ZM9.87375 4.03125C8.9999 5.31623 8.35713 6.74392 7.97438 8.25H4.65282C5.18056 7.22146 5.91772 6.31475 6.81689 5.58818C7.71606 4.86162 8.75733 4.33127 9.87375 4.03125ZM4.65282 15.75H7.97438C8.35713 17.2561 8.9999 18.6838 9.87375 19.9688C8.75733 19.6687 7.71606 19.1384 6.81689 18.4118C5.91772 17.6852 5.18056 16.7785 4.65282 15.75ZM14.1263 19.9688C15.0001 18.6838 15.6429 17.2561 16.0256 15.75H19.3472C18.8194 16.7785 18.0823 17.6852 17.1831 18.4118C16.2839 19.1384 15.2427 19.6687 14.1263 19.9688Z" fill="black"/>
                        </svg>
                    </div>
                    <div className='twitter'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2119 5.65593C21.4488 5.99352 20.6395 6.2153 19.8109 6.31393C20.6839 5.79106 21.3372 4.96866 21.6489 3.99993C20.8289 4.48793 19.9299 4.82993 18.9939 5.01493C18.3645 4.34151 17.5302 3.89489 16.6208 3.74451C15.7114 3.59413 14.7778 3.74842 13.9651 4.18338C13.1525 4.61834 12.5063 5.30961 12.127 6.14972C11.7477 6.98983 11.6566 7.93171 11.8679 8.82893C10.2048 8.74572 8.57785 8.31365 7.09262 7.56079C5.60739 6.80793 4.29712 5.7511 3.24688 4.45893C2.87517 5.09738 2.67984 5.82315 2.68088 6.56193C2.68088 8.01193 3.41988 9.29293 4.54088 10.0429C3.8769 10.022 3.22753 9.84267 2.64688 9.51993V9.57093C2.64685 10.5368 2.98091 11.4729 3.59241 12.2206C4.20391 12.9682 5.05519 13.4814 6.00188 13.6729C5.38552 13.8401 4.73917 13.8648 4.11188 13.7449C4.3788 14.5763 4.89909 15.3034 5.59988 15.8243C6.30066 16.3453 7.14684 16.6339 8.01988 16.6499C7.15224 17.3314 6.15877 17.8351 5.09629 18.1323C4.03381 18.4295 2.92317 18.5143 1.82788 18.3819C3.7396 19.6113 5.96499 20.264 8.23788 20.2619C15.9319 20.2619 20.1379 13.8889 20.1379 8.36193C20.1379 8.18193 20.1339 7.99993 20.1259 7.82093C20.9443 7.22928 21.6507 6.49549 22.2119 5.65593Z" fill="black"/>
                        </svg>
                    </div>
                    <div className='git'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="black"/>
                        </svg>
                    </div>
                    <div className='fb'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="black"/>
                        </svg>

                    </div>
                    <div className='linked-in'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='loc-cal'>
                    <div className='location'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61108 10.2037C8.19996 9.92897 7.87953 9.53852 7.69031 9.08171C7.50109 8.62489 7.45158 8.12223 7.54804 7.63727C7.64451 7.15232 7.88261 6.70686 8.23224 6.35723C8.58187 6.0076 9.02733 5.7695 9.51228 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625Z" fill="#8F9191"/>
                        </svg>
                        <p>Worldwide</p>
                    </div>
                    <div className='calendar'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.8335 9.16602H7.50016V10.8327H5.8335V9.16602ZM5.8335 12.4993H7.50016V14.166H5.8335V12.4993ZM9.16683 9.16602H10.8335V10.8327H9.16683V9.16602ZM9.16683 12.4993H10.8335V14.166H9.16683V12.4993ZM12.5002 9.16602H14.1668V10.8327H12.5002V9.16602ZM12.5002 12.4993H14.1668V14.166H12.5002V12.4993Z" fill="#8F9191"/>
                            <path d="M4.16667 18.3327H15.8333C16.7525 18.3327 17.5 17.5852 17.5 16.666V4.99935C17.5 4.08018 16.7525 3.33268 15.8333 3.33268H14.1667V1.66602H12.5V3.33268H7.5V1.66602H5.83333V3.33268H4.16667C3.2475 3.33268 2.5 4.08018 2.5 4.99935V16.666C2.5 17.5852 3.2475 18.3327 4.16667 18.3327ZM15.8333 6.66602L15.8342 16.666H4.16667V6.66602H15.8333Z" fill="#8F9191"/>
                        </svg>
                        <p>Joined April 2022</p>
                    </div>
                </div>
            </aside>
            
            <div>
                {/* <h2>Ideas</h2> */}
                {searchParams.get('params') === false && ( 
                    <div>
                    {users.map((user, index) => (
                        <div key={index}>
                        <Ideas user={user} />
                        </div>
                    ))}
                    </div>
                )}
               </div>
        </div>
    );
}
 
export default Profile;