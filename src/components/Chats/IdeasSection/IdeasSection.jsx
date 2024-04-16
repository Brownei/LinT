/* eslint-disable react/prop-types */
import './IdeasSection.scss'
import ayati from '../../../assets/images/ayati.svg'
import Ideas from '../../Card/Ideas'
import { NavLink } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const IdeasSection = ({ posts, isLoading, isError }) => {

  return (
    <>
      <main id='ideas-section'>
        <div className='ideas-details'>
          <div className='ideas-header'>
            <h1>Explore Ideas and collaborate</h1>
            <NavLink className='button' to={'/collaborate/create-post'}>Share your idea</NavLink>
          </div>

          <div className='all-ideas'>
            {isLoading ? (
              <div className='loading'>
                <ClipLoader />
              </div>
            ) : isError ? (<p className='information'>Wanna refresh?..</p>) : (
              <div>
                {posts.length === 0 ? (
                  <div className='no-data'>Nobody wants to post?</div>
                ): (
                  <div>
                    {posts.map((post) => (
                      <div key={post.id}>
                        {/* <Ideas user={user}/> */}
                        {JSON.stringify(post)}
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