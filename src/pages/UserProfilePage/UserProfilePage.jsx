import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProfile } from '../../hooks/use-profile'
import { ClipLoader } from 'react-spinners'

const UserProfilePage = () => {
  const { username } = useParams()
  const { data: profile, isFetching, error } = useProfile(username)
  const navigate = useNavigate()
  console.log({ profile, error })

  if (isFetching) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
      </div>
    )
  }


  if (error) {
    navigate('/collaborate')
  }

  return (
    <main>
      <div>
        Hello to me {profile.username}
      </div>
    </main>
  )
}

export default UserProfilePage;
