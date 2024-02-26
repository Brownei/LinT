import './Coll.scss';

const Coll = ({collaborations}) => {
    return (
        <div className='collabo'>
            <div className='first-coll' key={collaborations}>
                <img className='image' src={collaborations.image.ayati}></img>
                <p className='profession'>{collaborations.profession}</p>
                <p className='name'>{collaborations.name}</p>
            </div>
            <div id='and'>&</div>
            {/* <div className='second-coll' key={collaborations}>
                <img className='image' src={collaborations.image.ayati}></img>
                <p className='profession'>{collaborations.profession}</p>
                <p className='name'>{collaborations.name}</p>
            </div> */}
        </div>
    );
}
 
export default Coll;