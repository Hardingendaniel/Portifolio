import { Link } from 'react-router-dom';

import Daniel from '../images/profile.jpg';
import git from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import java from '../images/java.svg';
import js from '../images/js.svg';
import dart from '../images/dartlang-ar21.svg';
import html from '../images/html.svg';
import azure from '../images/azure-2.svg';
import react from '../images/react.svg';

import '../App.css';

const Home = () => {

    function showAbouts(element) {
        var innerDiv = element.nextElementSibling
        if (innerDiv.style.display === "none")
            innerDiv.style.display = "";
        else
        innerDiv.style.display = "none";
    };

    return (
        
        <div className="App">
            <div className='idk-div'>
                <div className='pic-info'>
                    <div className='text'>
                        <h1 className='data-student'>NTNU student Dataingeniør</h1>
                        <p className='person-text'>
                            Hei mitt namn er Daniel og eg går tredje året på dataingeniørstudiet på NTNU Ålesund.
                            Under er ikon som kan trykkes på for å komme i kontakte  med meg.
                        </p>
                        <div className='linkdiv'>
                            <Link to='https://github.com/Hardingendaniel?tab=repositories' target='blank'>
                                <img src={git} alt='Personal' className='linkpicture'></img>
                            </Link>
                            <Link to='https://www.linkedin.com/in/daniel-eik%C3%A5s-99b481235/' target='blank'>
                                <img src={linkedin} alt='Personal' className='linkpicture'></img>
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
                        <div className='javascript'>
                            <p>Javascript</p>
                            <img onClick={(e) => showAbouts(e.target)} src={js} alt='Personal' className='picture2' />
                            <div className="inner" style={{display:'none'}}>
                                Experience in the web development course
                            </div>
                        </div>
                        <div className='java'>
                            <p>Java</p>
                            <img onClick={(e) => showAbouts(e.target)} src={java} alt='Personal' className='picture2' />
                            <div className="inner" style={{display:'none'}}>
                                Experience in programming 1 and 2 subject
                            </div>
                        </div>
                        <div className='skills2'>
                            <p>React</p>
                            <img onClick={(e) => showAbouts(e.target)} src={react} alt='Personal' className='picture2' />
                            <div className="inner" style={{display:'none'}}>
                            Some experience in react in web dev
                            </div>
                        </div>
                        <div className='azure'>
                            <p>Azure</p>
                            <img onClick={(e) => showAbouts(e.target)} src={azure} alt='Personal' className='picture2' />
                            <div className="inner" style={{display:'none'}}>
                                Some experience through CI/CD in administrasjon of cloud services subject
                            </div>
                        </div>
                        <div className='skills2'>
                            <p>Dart</p>
                            <img onClick={(e) => showAbouts(e.target)} src={dart} alt='Personal' className='picture2' />
                            <div className="inner" style={{display:'none'}}>
                                Made a movierater app with dart and flutter and google firbase
                            </div>
                        </div>

                        <div className='skills2'>
                            <p>HTML/CSS</p>
                            <img onClick={(e) => showAbouts(e.target)} src={html} alt='Personal' className='picture2' />
                            <div className="inner" style={{display:'none'}}>
                            Experience in the web development course
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

};

export default Home;