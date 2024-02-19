import './Ideas.scss';

const Ideas = ({user}) => {

    return (
        <div className='ideas'>
            {/* <h2>Ideas</h2> */}
            <div className="card" key={user.id}>
                <img className='image' src={user.image.brownson}></img>
                <div id='not-image'>
                    <p className='name'>{user.name}</p>
                    <p className='profession'>{user.profession}</p>
                </div> 
                <p className='post-title'>{user.post.title}</p>
                <p className='post-desc'>{user.post.description}</p>
                
            </div>
        </div>
    );
}
 
export default Ideas;