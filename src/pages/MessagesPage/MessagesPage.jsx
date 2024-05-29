import MobileHeader from '../../components/Mobile/MobileHeader/MobileHeader'
import { Icon } from '@iconify/react/dist/iconify.js'
import './MessagesPage.scss'
import { useNavigate } from 'react-router-dom'
import { useAllInterests } from '../../hooks/use-all-interests'
import { ClipLoader } from 'react-spinners'

const MessagesPage = () => {
    const { data: interests, isLoading, error } = useAllInterests()
    const navigate = useNavigate()

    if(isLoading) {
        <div className='loader'>
            <ClipLoader />
        </div>
    }

    if(error) {
        <p>Error o!</p>
    }

    return (
        <main id='messages-page'>
            <div className='messages-page'>
                <button onClick={() => navigate('/collaborate')} className='back-button'>
                    <span>
                        <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1'/>
                        Ideas
                    </span>
                </button>
                <MobileHeader interests={interests} collaboratorPage={false}/>
            </div>
        </main>
    )
}

export default MessagesPage