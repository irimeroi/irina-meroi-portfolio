import { useState, useEffect } from "react";
import './AboutMe.css';

function AboutMe() {
    useEffect(() => {
        document.title = 'Irina Meroi\'s portfolio';
    })

    const [name, setName] = useState('');
    const handleUserTyping = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }
    // const handleUserName = (event) => {
    //     event.preventDefault();
    //     setUserName(true)
    // }

    return (
        <main>
            {/* <form id="add-name-form">
                <div>
                    {name ?
                        (<h1 className="h2-p-form" >Hi {name}, welcome to my portfolio!</h1>) :
                        (<h1 className="h2-p-form" >Hi, welcome to my portfolio!</h1>)}
                    <p className="h2-p-form" ><label>What's your name? <input id="input-name" onChange={handleUserTyping} type="text" name="name" /></label></p>
                </div>
            </form> */}
            <img id="backgr" src="src/assets/images/background.png" />
            <img id="mypic" src="src/assets/images/im.png" />
            <form id="add-name-form">
                <div>
                    {name ?
                        (<h1 className="h2-p-form" >Hi {name}, welcome to my portfolio!</h1>) :
                        (<h1 className="h2-p-form" >Hi, welcome to my portfolio!</h1>)}
                    <p className="h2-p-form" ><label>What's your name? <input id="input-name" onChange={handleUserTyping} type="text" name="name" /></label></p>
                </div>
            </form>
            <div className="about-me" >
                <h2>About me</h2>
                <p className="about-p">I enjoy working in environments that push me to learn new skills quickly, solve problems creatively, develop innovative strategies with a team, and never become complacent. I consider myself a very passionate and outgoing person, who over the years have discovered the power of patience and perseverance, the drive to exit my comfort zones, the strength to overcome adversity, and most importantly, the value of humility and gratitude.</p>
            </div>
        </main>
    )
}

export default AboutMe;