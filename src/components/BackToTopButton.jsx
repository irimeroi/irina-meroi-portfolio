import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton () {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(<div>
        {backToTopButton && (
            <i className="arrow-up fa-solid fa-angles-up" onClick={scrollUp}></i>
        )}
    </div>)
}

export default BackToTopButton;