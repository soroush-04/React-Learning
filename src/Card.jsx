import profilePic from './assets/profile.jpg'

function Card (){

    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" className='card-picture'/>
            <h2 className='card-title'>Soroush</h2>
            <p className='card-text'>Software Developer, gamer, athlete</p>

        </div>
    );
}

export default Card