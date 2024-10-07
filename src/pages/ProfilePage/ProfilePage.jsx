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
import { formatDate } from 'date-fns';
import { formatDate as dateFormater } from '../../utils/formatDate';
import { useMutation } from "@tanstack/react-query";
import { api } from '../../utils/api';
import { useSentRequests } from '../../hooks/use-requests-sent';
import { useAllCollaborators } from '../../hooks/use-collaborators';
import { useAuthStore } from '../../hooks/use-auth-store';
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { filter } from 'lodash';

const ProfilePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const maxChars = 200
  const user = useAuthStore((state) => state?.user)
  const navigate = useNavigate()
  const clear = useAuthStore((state) => state?.clear)
  const [expanded, setExpanded] = useState(false)
  const { data: posts, isLoading: isFetching, error } = useUserPosts(user?.username)
  const { data: sentInterests, isLoading: isFetchingSentRequests, error: sentRequestsError } = useSentRequests()
  const { data: collaborators, isLoading: isCollaboratorsLoading, error: collaboratorsError } = useAllCollaborators()
  const userLocation = user?.location.split(',');
  const location = useLocation()
  const formattedDate = formatDate(user.createdAt, "yyyy-MM-dd")

  function handlesShowMoreOrLess() {
    setExpanded(!expanded)
  }

  function signOut() {
    clear()
    window.location.assign('/auth/login')
    sessionStorage.removeItem("lint_session");
  }

  function getTheLastElement() {
    const index = userLocation.length

    return userLocation[index - 1]
  }

  if (location.search === '?query=collaborations' && !isMobile) {
    navigate('/profile')
  }

  return (
    <main id="profile-page">
      <div className='profile-page'>
        <div className='profile'>
          <div className='profile-details'>
            <img src={user.profileImage} alt={'Profile Image'} />
            <div className='write-ups'>
              <div className='flex'>
                <div className='writings'>
                  <h2>{user.fullName}</h2>
                  <span>@{user.username}</span>
                </div>
                <div className="sidebar">
                  {location.pathname.includes(user.username) || location.pathname === '/profile' ? (
                    <div className='buttons'>
                      <Link to={'/profile/edit'} className='edit-profile'>Edit Profile</Link>
                      <Link to={'/profile/edit'} className='mobile-edit-profile'>Edit Profile</Link>
                      <button className='logout' onClick={signOut}>
                        <span>
                          <Icon color='#E30000' icon={'mingcute:exit-line'} fontSize={20} />
                        </span>
                      </button>
                    </div>
                  ) : (
                    <button className='collabs'>{collaborators.length} Collabs</button>
                  )}

                  <div className='icons'>
                    {user.links.map((link) => (
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
            <p className='occupation'>{user.occupation}</p>
            <p>
              <span>{expanded ? user.bio : `${user.bio.slice(0, maxChars)}...`}</span>
              {user.bio.length > maxChars && (
                <span className='expanded' onClick={handlesShowMoreOrLess}>
                  {expanded ? '   show less' : '   show more'}
                </span>
              )}
            </p>
          </div>
        </div>

        <div className='mobile-unnecessary'>
          <div className='mobile-profile-info'>
            <p className='occupation'>{user.occupation}</p>
            <p>
              <span>{expanded ? user.bio : `${user.bio.slice(0, maxChars)}...`}</span>
              {user.bio.length > maxChars && (
                <span className='expanded' onClick={handlesShowMoreOrLess}>
                  {expanded ? '   show less' : '   show more'}
                </span>
              )}
            </p>
          </div>

          <div className='mobile-icons'>
            {user.links.map((link) => (
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
              {isMobile && (<Link className={location.search === '?query=collaborations' ? 'active' : 'coll-link'} to={'/profile?query=collaborations'}>Collaborations</Link>)}
            </div>
            {location.search === '?query=collaborations' ? (
              <div className='user-ideas'>
                {isFetching ? (
                  <div className={isMobile ? 'mobile-loading' : 'loading'}>
                    <ClipLoader color='#3338C1' size={isMobile ? 20 : 30} />
                  </div>
                ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
                  <div className='users-ideas'>
                    {collaborators.length <= 0 ? (
                      <p className='information'>
                        No collaborations yet!
                      </p>
                    ) : (
                      <div className='posts'>
                        {collaborators.map((collaborator, index) => {
                          const filteredCollaborator = collaborator.sender.id === user.id ? collaborator.receiver : collaborator.sender
                          return (
                            <div key={index}>
                              <Coll collaborations={filteredCollaborator} currentUser={user} />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : location.search === '?query=interests' ? (
              <div className='interests-section'>
                {isFetchingSentRequests ? (
                  <div className={isMobile ? 'mobile-loading' : 'loading'}>
                    <ClipLoader size={isMobile ? 20 : 30} color='#3338C1' />
                  </div>
                ) : sentRequestsError ? (<p>Error</p>) : (
                  <div className='interest-section'>
                    {sentInterests.length === 0 ? (
                      <p className='information'>Collaborate now!</p>
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
                  <div className={isMobile ? 'mobile-loading' : 'loading'}>
                    <ClipLoader color='#3338C1' size={isMobile ? 20 : 30} />
                  </div>
                ) : error ? (<p>Error</p>) : (
                  <div className='post-section'>
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
                <div className={isMobile ? 'mobile-loading' : 'loading'}>
                  <ClipLoader color='#3338C1' size={isMobile ? 20 : 30} />
                </div>
              ) : collaborators.length <= 0 ? (
                <span>
                  No collaborations yet!
                </span>
              ) : (
                <div className='user-collabs'>
                  {collaborators.map((collaborator, index) => {
                    const filteredCollaborator = collaborator.sender.id === user.id ? collaborator.receiver : collaborator.sender
                    return (
                      <div key={index}>
                        <Coll collaborations={filteredCollaborator} currentUser={user} />
                      </div>
                    )
                  })}
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
