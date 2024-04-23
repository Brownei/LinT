import './ParticularCollaboratePage.scss'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useIdeaData } from '../../../hooks/use-idea-data'
import { ClipLoader } from 'react-spinners'

const ParticularCollaboratePage = () => {
    const { id } = useParams()
    const { data: particularpost, error, isFetching, isSuccess } = useIdeaData(id)
    
    {isFetching && (
        <div className='loader'>
            <ClipLoader color="#0006B1" size={30} />
        </div>
    )}
    
    {error && (<div>You might wanna refresh!</div>)}

    return (
        <main id='particular-page'>
            {isSuccess && (
                <div className='container'>

                    <button onClick={() => window.history.back()} className='back-button'>
                        <span>
                            <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1'/>
                            Back
                        </span>
                    </button>
                    
                    <div className='header'>
                        <div className='header-info'>
                            <img src={particularpost.profile.profileImage} alt="My picture" />
                            <p>
                                <span>{particularpost.profile.fullName}</span>
                                <span>{particularpost.profile.occupation}</span>
                            </p>
                        </div>
                        <button>Interested</button>
                    </div>

                    <div className='content'>
                        <h2>{particularpost.title}</h2>
                        <p>{particularpost.description}</p>
                    
                        <div className='tags'>
                            <p>Skill tags</p>
                            {particularpost.toolsTags.map((tag, index) => (
                                <div key={index}>
                                    {JSON.stringify(tag)}
                                </div> 
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </main>
    )
}

export default ParticularCollaboratePage