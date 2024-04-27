import './ParticularCollaboratePage.scss'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useIdeaData } from '../../../hooks/use-idea-data'
import { ClipLoader } from 'react-spinners'
import {useCurrentUser} from '../../../hooks/use-current-user'
import { parsedToken } from '../../../utils/api'
import { useMutation } from '@tanstack/react-query'
import {useModalStore} from '../../../hooks/use-modal-store'

const ParticularCollaboratePage = () => {
    const { id } = useParams()
    const { data: particularpost, error, isLoading } = useIdeaData(id)
	const { data: currentUser } = useCurrentUser()
	const { setModalOpen, open } = useModalStore()

	console.log(open)
	const sendInterestMutation = useMutation({
		mutationFn: (token) => {
			return axios.post(`http://localhost:3131/collaborators/requests`, {
				content
			}, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				}
			})
		},
		onSuccess() {
			alert('Request Sent!')
		},
		onError() {
			alert('Request failed!')
		}
	});	

	return (
        <main id='particular-page'>
            {isLoading ? (
				<div className='loader'>
					<ClipLoader color="#0006B1" fontSize={30}/>
				</div>
			) : error ? (
				<div>You might wanna refresh big boy!</div>
			) : (
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
                        {currentUser.id !== particularpost.profile.id && (
							<button onClick={() => setModalOpen(true)} >Interested</button>
						)}
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
