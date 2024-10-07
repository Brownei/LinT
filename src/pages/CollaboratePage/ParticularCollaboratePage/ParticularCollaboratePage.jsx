import './ParticularCollaboratePage.scss'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useIdeaData } from '../../../hooks/use-idea-data'
import { ClipLoader } from 'react-spinners'
import RequestModal from '../../../components/RequestModal/RequestModal'
import { useState } from 'react'
import LanguageIcons from '../../../components/LanguageIcons/LanguageIcons'
import { useAuthStore } from '../../../hooks/use-auth-store'
import { useMediaQuery } from 'react-responsive'

const ParticularCollaboratePage = () => {
  const [onOpen, setOnOpen] = useState()
  const { id } = useParams()
  const { data: particularpost, error, isLoading } = useIdeaData(id)
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const user = useAuthStore((state) => state?.user)

  console.log(particularpost)
  return (
    <main id='particular-page'>
      {isLoading ? (
        <div className='loader'>
          <ClipLoader size={isMobile ? 20 : 30} color='#3338C1' />
        </div>
      ) : error ? (
        <div>You might wanna refresh big boy!</div>
      ) : (
        <div className='container'>

          <button onClick={() => window.history.back()} className='back-button'>
            <span>
              <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1' />
              Back
            </span>
          </button>

          <div className='header'>
            <div className='header-info'>
              <img src={particularpost.profile.profileImage} alt="My picture" />
              <p>
                <span className='fullName'>{particularpost.profile.fullName}</span>
                <span className='occupation'>{particularpost.profile.occupation}</span>
              </p>
            </div>
            {user?.id !== particularpost.profile.id && (
              <button disabled={particularpost.requests.some((request) => request.senderId === user?.id)} onClick={() => setOnOpen(true)} >{particularpost.requests.some((request) => request.senderId === user?.id) ? 'Already Interested' : 'Interested'}</button>
            )}
          </div>

          <div className='content'>
            <h2>{particularpost.title}</h2>
            <p>{particularpost.description}</p>

            <div className='tags'>
              <p>Skill tags</p>
              {particularpost.toolsTags.length <= 0 ? (
                <span>
                  Nothing bruh!
                </span>
              ) : (
                <div className='languages'>
                  {particularpost.toolsTags.map((tag, index) => (
                    <div className='language' key={index}>
                      <LanguageIcons language={tag} />
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      )}

      {onOpen && <RequestModal post={particularpost} />}

      {onOpen && <div className='overlay' onClick={() => setOnOpen(false)} />}

    </main>
  )
}

export default ParticularCollaboratePage
