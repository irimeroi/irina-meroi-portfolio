import { useState, useEffect } from "react";

function AboutMe () {
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
        <p>Hi, welcome to my portfolio! about me page</p>
        // <section id="add-name">
        //     <form>
        //         <p><label>What's your name? <input onChange={handleUserTyping} type="text" name="name" /></label></p>
        //     </form>
            
        //     {name ?
        //     (<p>Hi {name}, welcome to my portfolio!</p>):
        //     (<p>Don't forget to add your name!</p>)}
        // </section>
    )
}

export default AboutMe;