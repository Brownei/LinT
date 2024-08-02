/* eslint-disable react/prop-types */
import './IdeasSection.scss'
import Ideas from '../../Card/Ideas'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
// import { toast } from 'sonner'
// import { infoToast } from '../../../utils/toast'

const IdeasSection = ({ isFetching, error, posts }) => {


  // function renderMyToast() {
  // 	infoToast('TOAST RENDERED')
  // }
  return (
    <>
      <main id='ideas-section'>
        <div className='ideas-details'>
          <div className='ideas-header'>
            <h1>Explore Ideas and collaborate</h1>
            <Link className='button' to={'/collaborate/create-post'}>Share your idea</Link>
            {/* <button onClick={renderMyToast}>toast</button> */}
          </div>

          <div className='all-ideas'>
            {isFetching ? (
              <div className='loading'>
                <ClipLoader color="#0006B1" fontSize={30} />
              </div>
            ) : error ? (<p className='information'>Wanna refresh?..</p>) : (
              <div>
                {posts.length === 0 ? (
                  <div className='no-data'>Nobody wants to post?</div>
                ) : (
                  <div>
                    {posts.map((post) => (
                      <div key={post.id}>
                        <Ideas post={post} forProfile={false} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

    </>
  )
}

export default IdeasSection
