/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'; 
import './ProfilePage.scss'; 
import Ideas from '../../components/Card/Ideas'; 
import Coll from '../../components/Card/Coll'; 
import brownson from '../../assets/images/brownson.svg'; 
import gift from '../../assets/images/gift.svg'; 
import { Icon } from '@iconify/react';
import { useUserPosts } from '../../hooks/use-user-posts';
import { ClipLoader } from 'react-spinners';
import LinkIcons from '../../components/LinkIcons';
import {formatDate} from 'date-fns';
import { formatDate as dateFormater } from '../../utils/formatDate';
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { getToken } from '../../utils/api';
import { useCurrentUser } from '../../hooks/use-current-user';
// import MobileIdeas from '../../components/Mobile/MobileIdeas/MobileIdeas';
import { useMediaQuery } from 'react-responsive';

const ProfilePage = () => {
    const isMobile = useMediaQuery({maxWidth: 800})
    console.log(isMobile)
    const navigate = useNavigate()
    const {data: user, isLoading: isCurrentUserFetching, error: isCurrentError} = useCurrentUser()
    // console.log(user)
    const {data: posts, isFetching, error} = useUserPosts(user?.profile.username)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const formattedDate = formatDate(user.profile.createdAt, "yyyy-MM-dd")
    // console.log(location.pathname)
    const signOutMutation = useMutation({
        mutationFn: (token) => {
            return axios.post(`http://localhost:3131/auth/logout`, {}, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token  
                }
            })
        },
        onSuccess() {
            // clearUser()
            sessionStorage.removeItem('session')
            window.location.assign('/')
        },
    });
    
    if(isCurrentUserFetching) {
        return (
            <div className="loader">
                <ClipLoader color="#0006B1" size={30} />
            </div>
        )
    }

    if(isCurrentError) {
        navigate('/')
    }

    const collaborations = [
        {
            id: 1,
            name: "Brownson Esiti",
            profession: "Product Designer",
            image: brownson
        },
        {
            id: 2,
            name: "Udofiah Gift",
            profession: "Product Designer",
            image: gift
        },
        {
            id: 3,
            name: "Brownson Esiti",
            profession: "Product Designer",
            image: brownson
        },
        {
            id: 4,
            name: "Udofiah Gift",
            profession: "Product Designer",
            image: gift
        },
    ]


    return (
        <main id="profile-page">
            <div className='profile-page'>
                <div className='profile'>
                    <div className='profile-details'>
						<img src={user.profile.profileImage} alt={'Profile Image'}/>
                        <div className='write-ups'>
                            <h2>{user.profile.fullName}</h2>
                            <span>@{user.profile.username}</span>
                            <div>
                                <p className='occupation'>{user?.profile.occupation}</p>
                                <p>{user?.profile.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        {location.pathname.includes(user.profile.username) || location.pathname === '/profile' ? (
                            <div className='buttons'>
                                <Link to={'/profile/edit'} className='edit-profile'>Edit Profile</Link>
                                <button className='logout' disabled={signOutMutation.isPending} onClick={async () => await signOutMutation.mutateAsync(getToken())}>{signOutMutation.isPending ? (
                                    <span>
                                        <Icon className='logout-button' icon={'formkit:spinner'} fontSize={16}/>
                                        Running...
                                    </span>
                                ) : 'Log Out'}</button>
                            </div>
                        ) : (
                            <button className='collabs'>8 Collabs</button>
                        )}
                        
                        <div className='icons'>
                            {user.profile.links.map((link) => (
                                <div key={link.id}>
                                    <LinkIcons link={link} styles={'particular-icon'}/>
                                </div>
                            ))}
                        </div>
                        <div className='loc-cal'>
                            <div className='location'>
                                <Icon icon={'mdi:location'} fontSize={24}/>
                                <p>{user?.profile.location}</p>
                            </div>
                            <div className='calendar'>
                                <Icon icon={'bx:calendar'} fontSize={24}/>
                                <p>{dateFormater(formattedDate)}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='mobile-unnecessary'>
                    <div className='mobile-profile-info'>
                        <p className='occupation'>{user?.profile.occupation}</p>
                        <p>{user?.profile.bio}</p>
                    </div>

                    <div className='mobile-icons'>
                        {user.profile.links.map((link) => (
                            <div key={link.id}>
                                <LinkIcons link={link} styles={'particular-icon'}/>
                            </div>
                        ))}
                    </div>

                    <div className='mobile-loc-cal'>
                        <div className='mobile-location'>
                            <Icon icon={'mdi:location'} fontSize={24}/>
                            <p>{user?.profile.location}</p>
                        </div>
                        <div className='mobile-calendar'>
                            <Icon icon={'bx:calendar'} fontSize={24}/>
                            <p>{dateFormater(formattedDate)}</p>
                        </div>
                    </div>
                </div>

                <div className='ideas-collabs'>
                    <div className='card-title'>
                        {isMobile ? (<NavLink className={`h3 ${location.pathname === '/profile' && 'active'}`} to={'/profile'}>Ideas</NavLink>) : (<h3>Ideas</h3>)}
                        <div className='user-ideas'>
                            {isFetching ? (
                                <div className='loading'>
                                    <ClipLoader />
                                </div>
                            ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
                                <div>
                                    {posts.length === 0 ? (
                                        <p className='information'>No ideas yet? Share and Collaborate!</p>
                                    ) : (
                                        <div>
                                            {posts.map((post) => (
                                                <div key={post.id}>
                                                    <Ideas post={post} forProfile={true}/>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='coll-1'>
                        <h3>Collaborations</h3>
                        {searchParams.get('params') === null && ( 
                            <div className='user-collabs'>
                                {collaborations.map((collaborations, index) => (
                                    <div key={index}>
                                        <Coll collaborations={collaborations} currentUser={user.profile}/>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>

    );
}
 
export default ProfilePage;
