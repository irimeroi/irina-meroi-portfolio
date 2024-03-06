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
                <img id="backgr-pic" src="assets/images/background.png" />
                <img id="mypic" src="assets/images/im.png" />
            </div>
            <form id="add-name-form">
                <div>
                    <div className="border-name border p-3">
                        <p className="text-center">Yes, i'm trying to get a job in technology, but I really value human connection, so, first things first!</p>
                        <p className="text-center"><label>What's your name? <input id="input-name" onChange={handleUserTyping} type="text" name="name" /></label></p>
                    </div>
                    {name ?
                        (<h1 className="text-center p-3" >Hi {name}, welcome to my portfolio!</h1>) :
                        (<h1 className="text-center p-3" >Hi, welcome to my portfolio!</h1>)}
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