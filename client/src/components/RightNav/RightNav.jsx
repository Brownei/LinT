import './RightNav.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="flex">
                <h2>Project Ideas</h2>
                <div className="idea">
                    <div className='idea-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#939393"/>
                        </svg>
                        <div className="idea-details">
                            <h4>Ayati John</h4>
                            <span>WebFlow Designer</span>
                        </div>
                    </div>

                    <p>Learn to be better</p>
                </div>
                <div className="idea">
                    <div className='idea-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#939393"/>
                        </svg>
                        <div className="idea-details">
                            <h4>Ayati John</h4>
                            <span>WebFlow Designer</span>
                        </div>
                    </div>

                    <p>Learn to be better</p>
                </div>
                <div className="idea">
                    <div className='idea-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#939393"/>
                        </svg>
                        <div className="idea-details">
                            <h4>Ayati John</h4>
                            <span>WebFlow Designer</span>
                        </div>
                    </div>

                    <p>Learn to be better</p>
                </div>
                <button className="box2">Post</button>
            </div>
        </div>
    )
}

export default Sidebar;