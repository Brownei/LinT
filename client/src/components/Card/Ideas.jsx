import './Ideas.scss';

const Ideas = ({user}) => {

    return (
        <div className='ideas' key={user.id}>
            <div className="card2">
               <p>Brownson Esiti</p>
               <p>Fullstack Developer</p>
            </div>
        </div>
    );
}
 
export default Ideas;