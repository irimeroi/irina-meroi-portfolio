//HeroSection: first thing people see when they access your website

import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function HeroSection() {
    useEffect(() => {
        document.title = 'Irina Meroi\'s portfolio';
    })

    const [name, setName] = useState('');
    const handleUserTyping = (event) => {
        event.preventDefault();
        setName(capitalizeFirstLetter(event.target.value))
    }

    return (
        <main className="hs-main text-center">
            <h1 className="hs-main-name">Irina Meroi</h1>
            <h2 className="hs-main-title">Full Stack Web Developer</h2>
            <form className="hs-main-welcome_form">
                <p className="text-center">Yes, I wanna work in tech, but I really value human connection, so, first things first!</p>
                <p className="text-center"><label>What's your name? <input className="hs-main-inputname" onChange={handleUserTyping} type="text" name="name" /></label></p>
                {name ?
                    (<h2 className="hs-main-welcomeText text-center" >Hi {name}, welcome to my portfolio!</h2>) :
                    (<h2 className="hs-main-welcomeText text-center" >Hi, welcome to my portfolio!</h2>)}
            </form>
            <i className="fa-solid fa-arrow-down-long d-flex justify-content-center p-5"></i>
        </main>
    )
}

export default HeroSection;