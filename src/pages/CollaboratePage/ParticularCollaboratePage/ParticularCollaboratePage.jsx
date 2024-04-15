import './ParticularCollaboratePage.scss'
import { useParams } from 'react-router-dom'
import brownson from '../../../assets/images/brownson.svg'
import { Icon } from '@iconify/react'
import {useNavigate} from 'react-router-dom'

const ParticularCollaboratePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(id)
  return (
    <main id='particular-page'>
        <div className='container'>

            <button onClick={() => navigate('/collaborate')} className='back-button'>
                <span>
                    <Icon icon={'tabler:arrow-left'} fontSize={23} color='#0006B1'/>
                    Back
                </span>
            </button>
            
            <div className='header'>
                <div className='header-info'>
                    <img src={brownson} alt="My picture" />
                    <p>
                        <span>B</span>
                        <span>Fullstack</span>
                    </p>
                </div>
                <button>Interested</button>
            </div>

            <div className='content'>
                <h2>Shoping</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni sequi enim sint earum fugit tempora quam aliquid asperiores porro beatae, vel minus aliquam explicabo in culpa voluptate officia tempore architecto ipsam consequuntur? Architecto quibusdam rem deleniti vel dicta voluptates minima deserunt itaque? Nihil voluptatem itaque, explicabo praesentium provident saepe.</p>
            
                <div className='tags'>
                    <p>Skill tags</p>
                    <div>
                        40
                    </div>
                </div>
            </div>

        </div>
    </main>
  )
}

export default ParticularCollaboratePage