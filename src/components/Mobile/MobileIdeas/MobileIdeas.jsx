/* eslint-disable react/prop-types */
import './MobileIdeas.scss';
import { ClipLoader } from 'react-spinners';
import Ideas from '../../Card/Ideas';
import { useMediaQuery } from 'react-responsive';

const MobileIdeas = ({ isFetching, posts, error }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  return (
    <div className='mobile-all-ideas'>
      {isFetching ? (
        <div className='mobile-loading'>
          <ClipLoader size={isMobile ? 20 : 30} color='#3338C1' />
        </div>
      ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
        <div className='mobile-posts'>
          {posts?.length === 0 ? (
            <div className='mobile-no-data'>Nobody wants to post?</div>
          ) : (
            <>
              <div className='mobile-all-posts'>
                {posts?.map((post) => (
                  <div key={post.id}>
                    <Ideas post={post} forProfile={false} />
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
