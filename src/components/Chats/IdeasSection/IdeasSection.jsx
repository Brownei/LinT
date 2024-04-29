/* eslint-disable react/prop-types */
import './IdeasSection.scss'
import Ideas from '../../Card/Ideas'
import { NavLink } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useAllPosts } from '../../../hooks/use-all-posts'

const IdeasSection = () => {
  const {data: posts, isLoading, isError} = useAllPosts()

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
                <ClipLoader color="#0006B1" fontSize={30}/>
              </div>
            ) : isError ? (<p className='information'>Wanna refresh?..</p>) : (
              <div>
                {posts.length === 0 ? (
                  <div className='no-data'>Nobody wants to post?</div>
                ): (
                  <div>
                    {posts.map((post) => (
                      <div key={post.id}>
                        <Ideas post={post} forProfile={false}/>
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
