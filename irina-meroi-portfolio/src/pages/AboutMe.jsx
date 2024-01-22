import { useEffect } from "react";

function AboutMe () {
    useEffect(() => {
        document.title = 'Irina Meroi\'s portfolio';
    })
    return <p>Hello</p>
}

export default AboutMe;