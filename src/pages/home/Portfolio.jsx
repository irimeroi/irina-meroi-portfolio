import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div id="portfolio">
            <h2 className='d-flex justify-content-center'>Click on the slide to view all my projects!</h2>
            <Carousel id='carousel' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className='images' src="assets/images/Travel-with-me.png" />
                    <Carousel.Caption className='caption'>
                        <h3 className='h3' >Travel With Me: a social media platform</h3>
                        <a href='https://pure-anchorage-91977-4dec50670cac.herokuapp.com/'>Check out the app here!<br/></a>
                        <a href='https://github.com/irimeroi/travel-with-me'>Github repo here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src='assets/images/Recipes.png' />
                    <Carousel.Caption className='caption'>
                        <h3>Wine and Dine</h3>
                        <a href='https://irimeroi.github.io/recipes-api/'>Check out the app here!<br/></a>
                        <a href='https://github.com/irimeroi/recipes-api'>Github repo here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src="assets/images/Horiseon.png" />
                    <Carousel.Caption className='caption'>
                        <h3>Horiseon Website</h3>
                        <a href='https://irimeroi.github.io/horiseon-website/'>Check out the app here!<br/></a>
                        <a href='https://github.com/irimeroi/horiseon-website'>Github repo here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src="assets/images/Weather.png" />
                    <Carousel.Caption className='caption'>
                        <h3>Weather Website</h3>
                        <a href='https://irimeroi.github.io/weather-website/'>Check out the app here!<br/></a>
                        <a href='https://github.com/irimeroi/weather-website'>Github repo here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src="assets/images/Scheduler.png" />
                    <Carousel.Caption className='caption'>
                        <h3>Work Day Scheduler</h3>
                        <a href='https://irimeroi.github.io/work-scheduler/'>Check out the app here!<br/></a>
                        <a href='https://github.com/irimeroi/work-scheduler'>Github repo here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src="assets/images/Tech-blog.png" />
                    <Carousel.Caption className='caption'>
                        <h3>Tech Blog</h3>
                        <a href='https://irimeroi.github.io/tech-blog/'>Check out the app here!<br/></a>
                        <a href='https://github.com/irimeroi/tech-blog'>Github repo here!</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Portfolio;