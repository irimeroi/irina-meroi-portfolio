import React from 'react';
import './Portfolio.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <h2 className='h2'>Click on the slide to view all my projects!</h2>
            <Carousel id='carousel' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='item'>
                    <img className='images' src="src/assets/images/Travel-with-me.png" />
                    <Carousel.Caption className='caption'>
                        <h3 className='h3' >Travel With Me: a social media platform</h3>
                        <a href='https://pure-anchorage-91977-4dec50670cac.herokuapp.com/'>Check out the app here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src='src/assets/images/Recipes.png' />
                    <Carousel.Caption className='caption'>
                        <h3>Wine and Dine</h3>
                        <a href='https://irimeroi.github.io/recipes-api/'>Check out the app here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src="src/assets/images/Tech-blog.png" />
                    <Carousel.Caption className='caption'>
                        <h3>Tech Blog</h3>
                        <a href='https://irimeroi.github.io/recipes-api/'></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Portfolio;