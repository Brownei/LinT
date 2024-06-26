/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './UserProfilePage.scss';
import Ideas from '../../components/Card/Ideas';
import Coll from '../../components/Card/Coll';
import brownson from '../../assets/images/brownson.svg';
import gift from '../../assets/images/gift.svg';
import { Icon } from '@iconify/react';
import { useUserPosts } from '../../hooks/use-user-posts';
import { ClipLoader } from 'react-spinners';
import LinkIcons from '../../components/LinkIcons';
import { formatDate } from 'date-fns';
import { formatDate as dateFormater } from '../../utils/formatDate';
import { useProfile } from '../../hooks/use-profile';
import { api } from '../../utils/api';
import { useCurrentUser } from '../../hooks/use-current-user';


const UserProfilePage = () => {
  const { username } = useParams()
  const navigate = useNavigate()
  const { data: user } = useCurrentUser()
  const { data: profile, isLoading: profileIsFetching, error: profileError } = useProfile(username)
  const { data: posts, isFetching, error } = useUserPosts(username)
  const location = useLocation()
  console.log({ profile, posts, user })
  const searchParams = new URLSearchParams(location.search);
  const formattedDate = formatDate(profile.createdAt, "yyyy-MM-dd")

  if (profileIsFetching) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
      </div>
    )
  }

  if (profileError) {
    navigate('/collaborate')
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
            <img src={profile.profileImage} alt={'Profile Image'} />
            <div className='write-ups'>
              <h2>{profile.fullName}</h2>
              <span>@{profile.username}</span>
              <div>
                <p className='occupation'>{profile.occupation}</p>
                <p>{profile.bio}</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            {location.pathname.includes(user.username) || location.pathname === '/profile' ? (
              <div className='buttons'>
                <Link to={'/profile/edit'} className='edit-profile'>Edit Profile</Link>
                <button onClick={() => console.log('Hello fuck off!')}>Log Out</button>
              </div>
            ) : (
              <button className='collabs'>8 Collabs</button>
            )}
            <div className='icons'>
              {profile.links.map((link) => (
                <div key={link.id}>
                  <LinkIcons link={link} styles={'particular-icon'} />
                </div>
              ))}
            </div>

            <div className='loc-cal'>
              <div className='location'>
                <Icon icon={'mdi:location'} fontSize={24} />
                <p>{profile.location}</p>
              </div>
              <div className='calendar'>
                <Icon icon={'bx:calendar'} fontSize={24} />
                <p>{dateFormater(formattedDate)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='ideas-collabs'>
          <div className='card-title'>
            <h3>Ideas</h3>
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
                          <Ideas post={post} forProfile={true} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {location.pathname === '/profile' && (
            <div className='coll-1'>
              <h3>Collaborations</h3>
              {searchParams.get('params') === null && (
                <div className='user-collabs'>
                  {collaborations.map((collaborations, index) => (
                    <div key={index}>
                      <Coll collaborations={collaborations} currentUser={profile} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

    </main>

  );
}

export default UserProfilePage;
