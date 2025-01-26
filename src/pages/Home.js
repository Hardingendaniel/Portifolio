import { Link } from 'react-router-dom';

import Daniel from '../images/profile.jpg';
import git from '../images/github.jpg';
import linkediin from '../images/linkedin.jpg';
import '../App.css';

const Home = () => {

    return (
        <div className="App">
            <div className='idk-div'>
                <div className='pic-info'>
                    <div className='text'>
                        <p>
                            Hei mitt namn er Daniel og eg går tredje året på dataingeniørstudiet på NTNU Ålesund.
                        </p>
                        <div className='linkdiv'>
                        <Link to='https://github.com/Hardingendaniel?tab=repositories'>
                        <img src={git} alt='Personal' className='linkpicture'></img>
                        </Link>
                        <Link to ='https://www.linkedin.com/in/daniel-eik%C3%A5s-99b481235/'>
                        <img src={linkediin} alt='Personal' className='linkpicture'></img>
                        </Link>
                        </div>
                    </div>
                    <div>
                        <img src={Daniel} alt='Personal' className='picture' />
                    </div>
                </div>
                <div className='skillset'>
                    <h1 className='skills'>Skillset</h1>
                    <div className='qualifications'>
                        <div className='skills2'>
                            <p>Javascript</p>
                            <img src={Daniel} alt='Personal' className='picture2' />
                        </div>
                        <div className='skills2'>
                            <p>Java</p>
                            <img src={Daniel} alt='Personal' className='picture2' />
                        </div>
                        <div className='skills2'>
                            <p>Python</p>
                            <img src={Daniel} alt='Personal' className='picture2' />
                        </div>
                        <div className='skills2'>
                            <p>Azure</p>
                            <img src={Daniel} alt='Personal' className='picture2' />
                        </div>
                        <div className='skills2'>
                            <p>Dart</p>
                            <img src={Daniel} alt='Personal' className='picture2' />
                        </div>

                        <div className='skills2'>
                            <p>HTML/CSS</p>
                            <img src={Daniel} alt='Personal' className='picture2' />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

};

export default Home;