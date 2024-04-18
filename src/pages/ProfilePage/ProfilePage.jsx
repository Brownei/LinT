/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'; 
import './ProfilePage.scss'; 
import Ideas from '../../components/Card/Ideas'; 
import Coll from '../../components/Card/Coll'; 
import brownson from '../../assets/images/brownson.svg'; 
import gift from '../../assets/images/gift.svg'; 
import { Icon } from '@iconify/react';
import { useUserPosts } from '../../hooks/use-user-posts';
import { useCurrentUser } from '../../hooks/use-current-user';
import { ClipLoader } from 'react-spinners';
import LinkIcons from '../../components/LinkIcons';
import { Image } from '@mantine/core';

const ProfilePage = () => {
    const {data: user, isLoading: isCurrentUserLoading, isError: isCurrentUserError} = useCurrentUser()
    const {data: posts, isLoading, isError} = useUserPosts(user.profile.username)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);

    if(isCurrentUserLoading) {
        return (
            <div className="loader">
                <ClipLoader color="#0006B1" size={30} />
            </div>
        )
    }

    if(isCurrentUserError) {
        window.location.assign('/')
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
        <main id="profile_page">
            <div>
                <div className='profile'>
                    <div className='profile-details'>
                        <Image radius={100} h={94} w={94} src={user.profile.profileImage}/>
                        {/* <img src={`https://robohash.org/${searchParams.get('id')}.png?set=set4&size=50x50`} alt="" /> */}
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
                            <Link to={'/profile/edit'} className='edit-profile'>Edit Profile</Link>
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
                                <p>Joined April 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ideas-collabs'>
                    <div className='card-title'>
                        <h3>Ideas</h3>
                        <div className='user-ideas'>
                            {isLoading ? (
                                <div className='loading'>
                                    <ClipLoader />
                                </div>
                            ) : isError ? (<p className='information'>Wanna refresh?..</p>) : (
                                <div>
                                    {posts.length === 0 ? (
                                        <p className='information'>No ideas yet? Share and Collaborate!</p>
                                    ) : (
                                        <div>
                                            {posts.map((post) => {
                                                <p>{JSON.stringify(post)}</p>
                                            })}
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