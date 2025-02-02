import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useRef } from "react";
import './Information.css';
import Backyardtext from "../pages/events/backyard";
import BirkenText from "../pages/events/birken"
import BoulderingText from "../pages/events/buldring";
import FrivilligText from "../pages/events/frivillighet";

import ski from '../images/ski.jpg';
import run from '../images/løping.jpg';
import fkstryn from '../images/felleskjøpet.jpg';
import nordfjord from '../images/nordfjord.jpg';
import fkålesund from '../images/felleskjopet-aalesund.jpg';
import backyard from '../images/backyard.jpg';
import backyard2 from '../images/backyard2.jpg';



const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
      <div className='kort' onClick={flipCard}>
        {frontContent}
      </div>
      <div className="kort-bakside" onClick={flipCard}>
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

const Information = () => {
  const events = useRef();
  return (
    <div className="content-about">
    <div className="ni">
      <h1 className='Text'>Hobbyer</h1>
      <div className="innhold">
        <Card
          frontContent={<><img src={ski} alt='Personal' className='picture-card' /><text className="kort-tekst">Ski</text></>}
          backContent={
            <><text className="kort-tekst">Ski</text>
              <text className="kort-tekst">Eg er veldig glad i vinter</text>
              <text className="kort-tekst">Gått birkebeinerrennet</text>
              <text className="kort-tekst">Tid: 4:51:35 (125)(2017)</text>
              <text className="kort-tekst">Er veldig glad i topptur</text>
            </>

          }
        />
        <Card
          frontContent={<><img src={run} alt='Personal' className='picture-card' /><text className="kort-tekst">løping</text></>}
          backContent={
            <><text className="kort-tekst">Løpserfaring</text>
              <button className="button-reset" onClick={() => {
                events.current?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                <text onmouseover="this.style.color='red';" onmouseout="this.style.color='black';" className="kort-tekst2">Fullført NTNUI Backyard Ultra</text>
              </button>
              <text className="kort-tekst">37:11 personlig rekord 10 km</text>
              <text className="kort-tekst">Digger Strava</text>
            </>
          }
        />
        <Card
          frontContent={<><img src={run} alt='Personal' className='picture-card' /><text className="kort-tekst">Buldring/Klatring</text></>}
          backContent={
            <><text className="kort-tekst">Buldring</text>
              <text className="kort-tekst">Fekk ei intersse for buldring hausten 2023</text>
              <text className="kort-tekst">Har sia det gått mange bulder og beste grad 6C+</text>
              <text className="kort-tekst">Har også gått Via Ferrata Loen, der høgdeskrekken fekk testa seg</text>
            </>
          }
        />
      </div>
      <h1 className='Text'>Jobberfaring</h1>
      <div className="innhold">
        <Card
          frontContent={<><img src={fkstryn} alt='Personal' className='picture-card' /><text className="kort-tekst">Felleskjøpet Stryn</text></>}
          backContent={
            <><text className="kort-tekst">Felleskjøpet</text>
              <text className="kort-tekst">Har jobba på Felleskjøpet sia april 2016</text>
              <text className="kort-tekst">Kvar sommar sia 2016 har eg hjulpe med ferieavvikling</text>
              <text className="kort-tekst">Har fått bryna meg på både kjekke og vanskelege kunder</text>
              <text className="kort-tekst">Har gjennom arbeidet fått god lærdom i håndtering av folk</text>
            </>
          }
        />
        <Card
          frontContent={<><img src={nordfjord} alt='Personal' className='picture-card' /><text className="kort-tekst">Nordfjordkjøtt</text></>}
          backContent={
            <><text className="kort-tekst">Nordfjordkjøtt</text>
              <text className="kort-tekst">Hausten 2021 til mars 2022 jobba eg som fabrikkarbeidar</text>
              <text className="kort-tekst">Fekk fort ansvar for å lage til datovarer til ansatte</text>
              <text className="kort-tekst">Jobba også masse med pakking av pølser, karbonader og kjøttboller</text>
              <text className="kort-tekst">Fekk også et ansvar å lage til slakt som bønder bestilte</text>
            </>
          }
        />
        <Card
          frontContent={<><img src={fkålesund} alt='Personal' className='picture-card' /><text className="kort-tekst">Felleskjøpet Ålesund</text></>}
          backContent={
            <><text className="kort-tekst">Felleskjøpet Ålesund</text>
              <text className="kort-tekst">Trengte litt ekstra penger, og fekk meg tilallingsvakt stilling i tilleg til studier haust 2023</text>
              <text className="kort-tekst">Jobben eg utførte var dei fornøgde med, plutselig vart det i overkant med vakter</text>
              <text className="kort-tekst">Ei stor avdeling, der man kom i kontakt med mange folk</text>
            </>
          }
        />
      </div>
      <div ref={events} className="events">
        <h1 className="Text">Opplevelser</h1>
        <div id="backyard" className="event-specific">
          <div className="event-text">
            <p>Backyard ultra</p>
            <Backyardtext />
          </div>
          <img src={backyard} alt='brujogg' className="event-picture"></img>
          <img src={backyard2} alt='brujogg' className="event-picture"></img>
        </div>
        <div id="birken" className="event-specific">
          <div className="event-text">
            <p>Birkebeinerittet</p>
            <BirkenText />
          </div>
          <img src={backyard} alt='brujogg' className="event-picture"></img>
          <img src={backyard2} alt='brujogg' className="event-picture"></img>
        </div>

        <div id="buldring" className="event-specific">
          <div className="event-text">
            <p>Buldring</p>
            <BoulderingText />
          </div>
          <img src={backyard} alt='brujogg' className="event-picture"></img>
          <img src={backyard2} alt='brujogg' className="event-picture"></img>
        </div>

        <div id ="frivillighet" className="event-specific">
          <div className="event-text">
          <p>Frivillighet</p>
            <FrivilligText />
          </div>
          <img src={backyard} alt='brujogg' className="event-picture"></img>
          <img src={backyard2} alt='brujogg' className="event-picture"></img>
        </div>
        <button className="to-thetop" onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth"
          });
        }}>til toppen</button>
      </div>
    </div>

    </div>

  );
};

export default Information;

