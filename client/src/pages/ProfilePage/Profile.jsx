import { useLocation } from 'react-router-dom'; 
import './Profile.scss'; 
import Ideas from '../../components/Card/Ideas'; 
import Coll from '../../components/Card/Coll'; 
import ayati from '../../assets/images/ayati.svg'; 
import brownson from '../../assets/images/brownson.svg'; 
import gift from '../../assets/images/gift.svg'; 
import { Icon } from '@iconify/react';

const Profile = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const users = [
        {
            id: 1,
            name: "Ayati Ogochukwu",
            profession: "Product Designer",
            image: ayati,
            post: {
                title: "Shopify Ecommerce Store like Jumia",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
            }
        },
        {
            id: 2,
            name: "Ayati Ogochukwu",
            profession: "Product Designer",
            image: ayati,
            post: {
                title: "Shopify Ecommerce Store like Jumia",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
            }
        },
    ]

    const currentUser = {
        id: 1,
        name: "Ayati Ogochukwu",
        profession: "Product Designer",
        image: ayati
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
                        <img src={ayati}/>
                        {/* <img src={`https://robohash.org/${searchParams.get('id')}.png?set=set4&size=50x50`} alt="" /> */}
                        <div className='write-ups'>
                            <h2>Ayati Ogochukwu</h2>
                            <p>Product Designer</p>
                            <p>creating webflow content | providing creative solutions that helps brands grow and be known. designing fintech solutions that&apos;ll change the world.</p>
                        </div>
                    </div>
                    <div className="sidebar">
                        <button>8 Collabs</button>
                        <div className='icons'>
                            <Icon icon={'ph:globe-light'} fontSize={24}/>
                            <Icon icon={'mdi:twitter'} fontSize={24}/>
                            <Icon icon={'mdi:github'} fontSize={24}/>
                            <Icon icon={'mdi:linkedin'} fontSize={24}/>
                            <Icon icon={'ic:baseline-facebook'} fontSize={24}/>
                        </div>
                        <div className='loc-cal'>
                            <div className='location'>
                                <Icon icon={'mdi:location'} fontSize={24}/>
                                <p>Worldwide</p>
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
                        {searchParams.get('params') === null && ( 
                            <div className='user-ideas'>
                                {users.map((user, index) => (
                                    <div key={index}>
                                        <Ideas user={user}/>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className='coll-1'>
                        <h3>Collaborations</h3>
                        {searchParams.get('params') === null && ( 
                            <div className='user-collabs'>
                                {collaborations.map((collaborations, index) => (
                                    <div key={index}>
                                        <Coll collaborations={collaborations} currentUser={currentUser}/>
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
 
export default Profile;