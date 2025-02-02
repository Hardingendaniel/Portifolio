import React from 'react';
import './Contact.css';
import Daniel from '../images/profile.jpg';
import { Link } from 'react-router-dom';
import git from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const person = {
    firstName: "Daniel",
    lastName: "Auflem Eikås",
    age: 23,
    email: "daniel.auflem@hotmail.com",
    phoneNumber: 95033148
}


const Contact = () => {
    return (
        <div className='crud'>
            <div className='container-contact'>
                <div className='personal-info'>
                    <div className='personal-paramters'>
                        <div className='personal-object'>
                        <p className='person-text'>Namn:</p>
                        <p className='person-text'>{person.firstName}</p>
                        </div>
                       
                        <div className='personal-object'>
                            <p className='person-text'>Etternamn:</p>
                            <p className='person-text'>{person.lastName}</p>
                        </div>

                        <div className='personal-object'>
                            <p className='person-text'>e-post:</p>
                            <p className='person-text'>{person.email}</p>
                        </div>
                        <div className='personal-object'>
                            <p className='person-text'>Alder:</p>
                            <p className='person-text'>{person.age}</p>
                        </div>

                        <div className='personal-object'>
                            <p className='person-text'>Telefon::</p>
                            <p className='person-text'>{person.phoneNumber}</p>
                        </div>
                    </div>

                    <div>
                        <img src={Daniel} alt='Personal' className='picture' />
                    </div>

                </div>

                <div className='linkdiv-contact'>
                    <Link to='https://github.com/Hardingendaniel?tab=repositories' target='blank'>
                        <img src={git} alt='Personal' className='linkpicture'></img>
                    </Link>
                    <Link to='https://www.linkedin.com/in/daniel-eik%C3%A5s-99b481235/' target='blank'>
                        <img src={linkedin} alt='Personal' className='linkpicture'></img>
                    </Link>
                </div>
            </div>
            
        </div>
    )
};

export default Contact;
