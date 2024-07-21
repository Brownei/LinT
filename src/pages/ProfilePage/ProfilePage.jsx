/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.scss';
import Ideas from '../../components/Card/Ideas';
import ProfileInterests from '../../components/Card/ProfileInterests'
import Coll from '../../components/Card/Coll';
import brownson from '../../assets/images/brownson.svg';
import gift from '../../assets/images/gift.svg';
import { Icon } from '@iconify/react';
import { useUserPosts } from '../../hooks/use-user-posts';
import { ClipLoader } from 'react-spinners';
import LinkIcons from '../../components/LinkIcons';
import { formatDate, getDay } from 'date-fns';
import { formatDate as dateFormater } from '../../utils/formatDate';
import { useMutation } from "@tanstack/react-query";
import { api } from '../../utils/api';
// import MobileIdeas from '../../components/Mobile/MobileIdeas/MobileIdeas';
// import { useMediaQuery } from 'react-responsive';
import { useSession } from '../../hooks/use-session';
import { useCurrentUser } from '../../hooks/use-current-user';
import { useSentRequests } from '../../hooks/use-requests-sent';
import { useAllCollaborators } from '../../hooks/use-collaborators';

const ProfilePage = () => {
  // const isMobile = useMediaQuery({maxWidth: 800})
  const navigate = useNavigate()
  const { signOut } = useSession()
  const { data: user, isLoading: loading, error: isCurrentError } = useCurrentUser()
  const { data: posts, isLoading: isFetching, error } = useUserPosts(user?.profile?.username)
  const { data: sentInterests, isLoading: isFetchingSentRequests, error: sentRequestsError } = useSentRequests()
  const { data: collaborators, isLoading: isCollaboratorsLoading, error: collaboratorsError } = useAllCollaborators()
  const userLocation = user?.profile?.location.split(',');
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const formattedDate = formatDate(user?.profile?.createdAt, "yyyy-MM-dd")
  const signOutMutation = useMutation({
    mutationFn: () => {
      return api.post(`/auth/logout`)
    },
    onSuccess() {
      signOut()
    },
  });

  console.log(collaborators)

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
      </div>
    )
  }

  if (isCurrentError) {
    navigate('/')
  }

  function getTheLastElement() {
    const index = userLocation.length

    return userLocation[index - 1]
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
            <img src={user.profile.profileImage} alt={'Profile Image'} />
            <div className='write-ups'>
              <div className='flex'>
                <div className='writings'>
                  <h2>{user.profile.fullName}</h2>
                  <span>@{user.profile.username}</span>
                </div>
                <div className="sidebar">
                  {location.pathname.includes(user.profile.username) || location.pathname === '/profile' ? (
                    <div className='buttons'>
                      <Link to={'/profile/edit'} className='edit-profile'>Edit Profile</Link>
                      <button className='logout' disabled={signOutMutation.isPending} onClick={async () => await signOutMutation.mutateAsync()}>{signOutMutation.isPending ? (
                        <span>
                          <Icon className='logout-button' icon={'formkit:spinner'} color={'#E30000'} fontSize={20} />
                        </span>
                      ) : (
                        <span>
                          <Icon color='#E30000' icon={'mingcute:exit-line'} fontSize={20} />
                        </span>
                      )}</button>
                    </div>
                  ) : (
                    <button className='collabs'>{collaborations.length} Collabs</button>
                  )}

                  <div className='icons'>
                    {user.profile.links.map((link) => (
                      <div key={link.id}>
                        <LinkIcons link={link} styles={'particular-icon'} />
                      </div>
                    ))}
                  </div>
                  <div className='loc-cal'>
                    <div className='location'>
                      <Icon icon={'mdi:location'} fontSize={24} />
                      <p>{getTheLastElement()}</p>
                    </div>
                    <div className='calendar'>
                      <Icon icon={'bx:calendar'} fontSize={24} />
                      <p>{dateFormater(formattedDate)}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='div'>
            <p className='occupation'>{user.profile?.occupation}</p>
            <p>{user.profile?.bio}</p>
          </div>

        </div>

        <div className='mobile-unnecessary'>
          <div className='mobile-profile-info'>
            <p className='occupation'>{user.profile?.occupation}</p>
            <p>{user.profile?.bio}</p>
          </div>

          <div className='mobile-icons'>
            {user.profile.links.map((link) => (
              <div key={link.id}>
                <LinkIcons link={link} styles={'particular-icon'} />
              </div>
            ))}
          </div>

          <div className='mobile-loc-cal'>
            <div className='mobile-location'>
              <Icon icon={'mdi:location'} fontSize={18} />
              <p>{getTheLastElement()}</p>
            </div>
            <div className='mobile-calendar'>
              <Icon icon={'bx:calendar'} fontSize={18} />
              <p>{dateFormater(formattedDate)}</p>
            </div>
          </div>
        </div>

        <div className='ideas-collabs'>
          <div className='card-title'>
            <div className='idea-collab-nav'>
              <Link className={location.search === '' ? 'active' : 'h3'} to={'/profile'}>Ideas</Link>
              <Link className={location.search === '?query=interests' ? 'active' : 'h3'} to={'/profile?query=interests'}>Interests</Link>
              <Link className={location.search === '?query=collaborations' ? 'active' : 'coll-link'} to={'/profile?query=collaborations'}>Collaborations</Link>
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
            ) : location.search === '?query=interests' ? (
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
            <div>
              {isCollaboratorsLoading ? (
                <div>
                  <ClipLoader />
                </div>
              ) : collaborators.length <= 0 ? (
                <span>
                  No collaborations yet!
                </span>
              ) : (
                <div className='user-collabs'>
                  {collaborators.map((collaborator, index) => (
                    <div key={index}>
                      <Coll collaborations={collaborator.sender} currentUser={user.profile} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main >

  );
}

export default ProfilePage;
