/* eslint-disable react/prop-types */
import './MobileIdeas.scss';
import { ClipLoader } from 'react-spinners';
import Ideas from '../../Card/Ideas';

const MobileIdeas = ({isFetching, posts, error}) => {
    return (
        <div className='mobile-all-ideas'>
            {isFetching ? (
            <div className='mobile-loading'>
                <ClipLoader color="#0006B1" fontSize={30}/>
            </div>
            ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
            <div className='mobile-posts'>
                {posts.length === 0 ? (
                <div className='mobile-no-data'>Nobody wants to post?</div>
                ): (
                    <>
                        <div className='mobile-all-posts'>
                            {posts.map((post) => (
                                <div key={post.id}>
                                    <Ideas post={post} forProfile={false}/>
                                </div>
                            ))}
                        </div>
                        <p>You really hit rock bottom</p>
                    </>
                    
                )}
            </div>
            )}
        </div>
    )
}

export default MobileIdeas