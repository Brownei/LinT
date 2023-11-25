import './RightNav.scss'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="flex">
                <h2>Project Ideas</h2>
                <div className='flex-child'>
                    <div className="idea">
                        <div className='idea-info'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="#939393"/>
                            </svg>
                            <div className="idea-details">
                                <h4>Ayati John</h4>
                                <span>WebFlow Designer</span>
                            </div>
                        </div>

                        <p>Learn to be better</p>
                    </div>
                </div>
                <button className="box2">Post</button>
            </div>

            <div className='flex'>
                <h2>Trending Topics</h2>
                <div className="flex-child">
                    <div className='topic'>
                        <p>How to React like a boss</p>
                        <div className='topic-details'>
                            <span>Ayati John</span>
                            <span>.</span>
                            <span>47k reads</span>
                        </div>
                    </div>
                    <div className='topic'>
                        <p>How to React like a boss</p>
                        <div className='topic-details'>
                            <span>Ayati John</span>
                            <span>.</span>
                            <span>47k reads</span>
                        </div>
                    </div>
                    <div className='topic'>
                        <p>How to React like a boss</p>
                        <div className='topic-details'>
                            <span>Ayati John</span>
                            <span>.</span>
                            <span>47k reads</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <h2>Who to follow</h2>
                <div className='flex-follow'>
                    <div className="follow">
                        <div className='follow-info'>
                            <div className='follow-sec'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="20" fill="#939393"/>
                                </svg>
                                <div className="follow-details">
                                    <h4>Ayati John</h4>
                                    <span>WebFlow Designer</span>
                                </div>
                            </div>
                            <button className='follow-button'>Follow</button>
                        </div>
                    </div>
                    <div className="follow">
                        <div className='follow-info'>
                            <div className='follow-sec'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="20" fill="#939393"/>
                                </svg>
                                <div className="follow-details">
                                    <h4>Ayati John</h4>
                                    <span>WebFlow Designer</span>
                                </div>
                            </div>
                            <button className='follow-button'>Follow</button>
                        </div>
                    </div>
                    <div className="follow">
                        <div className='follow-info'>
                            <div className='follow-sec'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="20" fill="#939393"/>
                                </svg>
                                <div className="follow-details">
                                    <h4>Ayati John</h4>
                                    <span>WebFlow Designer</span>
                                </div>
                            </div>
                            <button className='follow-button'>Follow</button>
                        </div>
                    </div>
                    <div className="follow">
                        <div className='follow-info'>
                            <div className='follow-sec'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="20" fill="#939393"/>
                                </svg>
                                <div className="follow-details">
                                    <h4>Ayati John</h4>
                                    <span>WebFlow Designer</span>
                                </div>
                            </div>
                            <button className='follow-button'>Follow</button>
                        </div>
                    </div>
                </div>
                <Link className='show-more' to={'/'}>Show More</Link>
            </div>
        </aside>
    )
}

export default Sidebar;