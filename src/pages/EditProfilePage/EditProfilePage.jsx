import { Icon } from '@iconify/react'
import { useRef, useState, useEffect } from 'react'
import './EditProfilePage.scss'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import Upload from '../../components/Upload/Upload'
// import {useSession} from '../../hooks/use-session'
import { useCurrentUser } from '../../hooks/use-current-user'

const EditProfilePage = () => {
    const textareaRef = useRef(null)
    // const {user, loading: isLoading} = useSession()
    const {data: user, isLoading} = useCurrentUser()
    const [bio, setBio] = useState(user.profile.bio ? user.profile.bio : '')
    const [uploadedImage, setUploadedImage] = useState(user.profile.profileImage ? user.profileImage : '');

    const autoResize = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        autoResize();
        window.addEventListener("resize", autoResize);
    }, [bio]);

    if(isLoading) {
        return (
            <div className="loader">
                <ClipLoader color="#0006B1" size={30} />
            </div>
        )
    }

    return (
        <main id='edit-profile-page'>
            <div className='edit-profile-page'>
                <div className='header'>
                    <Link className='link' to={'/profile'}>
                        <Icon icon={'ic:outline-arrow-back'} fontSize={24} color='#000000'/>
                        <span>Edit Profile</span>
                    </Link>

                    <button type='submit'>Save Changes</button>
                </div>

                <div className='content'>
                    <Upload styles={'upload'} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage}/>

                    <form className='inputs'>
                        {/* NAME */}
                        <div className='input'>
                            <label>Name</label>
                            <input type="text" placeholder={user.profile.fullName}/>
                        </div>

                        {/* OCCUPATION */}
                        <div className='input'>
                            <label>TagLine</label>
                            <input type="text" placeholder={user.profile.occupation}/>
                        </div>

                        {/* BIO */}
                        <div className='input'>
                            <label>Bio</label>
                            <textarea ref={textareaRef} type="text" placeholder={bio} value={bio} onChange={(e) => setBio(e.target.value)}/>
                        </div>

                        {/* LOCATION */}
                        <div className='input'>
                            <label>Location</label>
                            <input type="text" placeholder={user.profile.location}/>
                        </div>

                        {/* WEBSITE */}
                        <div className='input'>
                            <label>Website</label>
                            <input type="text" placeholder={user.profile.fullName}/>
                        </div>
                        
                        <div>
                            {user.profile.links.map((link, index) => (
                                <div key={index}>
                                    <label>Link</label>
                                    <input type="text" placeholder={link}/>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default EditProfilePage