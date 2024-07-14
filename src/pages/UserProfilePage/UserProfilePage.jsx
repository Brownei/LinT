import "./UserProfilePage.scss"
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useProfile } from '../../hooks/use-profile'
import { ClipLoader } from 'react-spinners'
import { formatDate } from 'date-fns';
import { formatDate as dateFormater } from '../../utils/formatDate';
import { useUserPosts } from '../../hooks/use-user-posts';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import LinkIcons from '../../components/LinkIcons';
import brownson from '../../assets/images/brownson.svg';
import gift from '../../assets/images/gift.svg';
import { useCurrentUser } from '../../hooks/use-current-user';
import Coll from '../../components/Card/Coll';
import { useSentRequests } from '../../hooks/use-requests-sent';
import Ideas from '../../components/Card/Ideas';
import { Button } from '@mantine/core';
import { useAllCollaborators } from '../../hooks/use-collaborators';

const UserProfilePage = () => {
  const { username } = useParams()
  const { data: sentInterests, isLoading: isFetchingSentRequests, error: sentRequestsError } = useSentRequests()
  const { data: collaborators, isLoading: isCollaboratorsLoading, error: collaboratorsError } = useAllCollaborators()
  const { data: profile, isLoading: isFetchingProfile, error: profileError } = useProfile(username)
  const { data: user } = useCurrentUser()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  const { data: posts, isLoading: isFetching, error } = useUserPosts(username)
  const navigate = useNavigate()

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

  if (isFetchingProfile) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
      </div>
    )
  }

  if (profileError) {
    navigate('/collaborate')
  }

  return (
    <main id="profile-page">
      <div className='profile-page'>
        <div className='profile'>
          <button className='button' onClick={() => window.history.back()}>
            <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1' />
            Leave
          </button>

          <div className='profile-details'>
            <img src={profile.profileImage} alt={'Profile Image'} />
            <div className='write-ups'>
              <div className='flex'>
                <div className='writings'>
                  <h2>{profile.fullName}</h2>
                  <span>@{profile.username}</span>
                </div>
                <div className="sidebar">
                  {location.pathname.includes(user.profile.username) || location.pathname === '/profile' ? (
                    <div className='buttons'>
                      <Link to={'/profile/edit'} className='edit-profile'>Edit Profile</Link>
                    </div>
                  ) : (
                    <button className='collabs'>{collaborations.length} Collabs</button>
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
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='div'>
            <p className='occupation'>{profile?.occupation}</p>
            <p>{profile.bio}</p>
          </div>

        </div>

        <div className='mobile-unnecessary'>
          <div className='mobile-profile-info'>
            <p className='occupation'>{profile.occupation}</p>
            <p>{profile.bio}</p>
          </div>

          <div className='mobile-icons'>
            {profile.links.map((link) => (
              <div key={link.id}>
                <LinkIcons link={link} styles={'particular-icon'} />
              </div>
            ))}
          </div>

          <div className='mobile-loc-cal'>
            <div className='mobile-location'>
              <Icon icon={'mdi:location'} fontSize={18} />
              <p>{profile.location}</p>
            </div>
            <div className='mobile-calendar'>
              <Icon icon={'bx:calendar'} fontSize={18} />
            </div>
          </div>
        </div>

        <div className='ideas-collabs'>
          <div className='card-title'>
            <div className='idea-collab-nav'>
              <Link className={location.search === '' ? 'active' : 'h3'} to={'/profile'}>Ideas</Link>
            </div>
            {location.search === '?query=collaborations' ? (
              <div className='user-ideas'>
                {isFetching ? (
                  <div className='loading'>
                    <ClipLoader color='#3338C1' />
                  </div>
                ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
                  <p className='information'>Help brother</p>
                )}
              </div>
            ) : location.search === '?query=interests' && location.pathname === user.profile.username ? (
              <div className='interests-section'>
                {isFetchingSentRequests ? (
                  <div className='loading'>
                    <ClipLoader color='#3338C1' />
                  </div>
                ) : sentRequestsError ? (<p>Error</p>) : (
                  <div>
                    {sentInterests.length === 0 ? (
                      <p className='information'>No ideas yet? Share and Collaborate!</p>
                    ) : (
                      <div className='posts'>
                        {sentInterests.map((interests) => (
                          <ProfileInterests key={interests.id} interest={interests} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className='posts-section'>
                {isFetching ? (
                  <div className='loading'>
                    <ClipLoader color='#3338C1' />
                  </div>
                ) : error ? (<p>Error</p>) : (
                  <div>
                    {posts.length === 0 ? (
                      <p className='information'>No ideas yet? Share and Collaborate!</p>
                    ) : (
                      <div className='posts'>
                        {posts.map((post) => (
                          <Ideas key={post.id} post={post} forProfile={true} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className='coll-1'>
            <h3>Collaborations</h3>
            <div className='coll-2'>
              {isCollaboratorsLoading ? (
                <div className='loading'>
                  <ClipLoader />
                </div>
              ) : collaborators.length <= 0 ? (
                <span className='empty-state'>
                  No collaborations yet!
                </span>
              ) : (
                <div className='user-collabs'>
                  {collaborations.map((collaborations, index) => (
                    <div key={index}>
                      <Coll collaborations={collaborations} currentUser={profile} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>

  )
}

export default UserProfilePage;
