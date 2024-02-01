import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from '../utils/helpers';

function AboutMe() {
    useEffect(() => {
        document.title = 'Irina Meroi\'s portfolio';
    })

    const [name, setName] = useState('');
    const handleUserTyping = (event) => {
        event.preventDefault();
        setName(capitalizeFirstLetter(event.target.value))
    }

    return (
        <main>
            <div className="d-flex flex-wrap pt-2">
                <img id="backgr-pic" className="" src="src/assets/images/background.png" />
                <img id="mypic" src="src/assets/images/im.png" />
            </div>
            <form id="add-name-form" className="d-flex justify-content-center">
                <div>
                    {name ?
                        (<h1 className="d-flex justify-content-center" >Hi {name}, welcome to my portfolio!</h1>) :
                        (<h1 className="d-flex justify-content-center" >Hi, welcome to my portfolio!</h1>)}
                    <p className="d-flex justify-content-center" ><label>What's your name? <input id="input-name" onChange={handleUserTyping} type="text" name="name" /></label></p>
                </div>
            </form>
            <div className="about-me" >
                <h2>About me</h2>
                <p>I enjoy working in environments that push me to learn new skills quickly, solve problems creatively, develop innovative strategies with a team, and never become complacent. I consider myself a very passionate and outgoing person, who over the years have discovered the power of patience and perseverance, the drive to exit my comfort zones, the strength to overcome adversity, and most importantly, the value of humility and gratitude.</p>
            </div>
        </main>
    )
}

export default AboutMe;