/* eslint-disable react/prop-types */
import './MobileIdeas.scss';
import { ClipLoader } from 'react-spinners';
import Ideas from '../../Card/Ideas';

const MobileIdeas = ({isFetching, posts, error}) => {
    return (
        <div className='all-ideas'>
            {isFetching ? (
            <div className='loading'>
                <ClipLoader color="#0006B1" fontSize={30}/>
            </div>
            ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
            <div className='posts'>
                {posts.length === 0 ? (
                <div className='no-data'>Nobody wants to post?</div>
                ): (
                    <>
                        <div className='all-posts'>
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