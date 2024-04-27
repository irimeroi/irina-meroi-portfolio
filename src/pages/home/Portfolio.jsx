import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="portfolio">
            <h3 id="portfolio-title" className="text-center">Portfolio</h3>
            <p className="text-center">Click on the slide to view all my projects!</p>
            <Carousel className="portfolio-carousel" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="portfolio-carousel-images" src="assets/images/Travel-with-me.png" />
                    <Carousel.Caption className="portfolio-carousel-caption">
                        <h3 className="portfolio-carousel-caption-text" >Travel With Me: a social media platform</h3>
                        <a className="text-white" href='https://pure-anchorage-91977-4dec50670cac.herokuapp.com/'>Check out the app!<br /></a>
                        <a className="text-white" href='https://github.com/irimeroi/travel-with-me'>Or go to the Github repo</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="portfolio-carousel-images" src='assets/images/Recipes.png' />
                    <Carousel.Caption className="portfolio-carousel-caption">
                        <h3 className="portfolio-carousel-caption-text">Wine and Dine</h3>
                        <a className="text-white" href='https://irimeroi.github.io/recipes-api/'>Check out the app!<br /></a>
                        <a className="text-white" href='https://github.com/irimeroi/recipes-api'>Or go to the Github repo</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="portfolio-carousel-images" src="assets/images/Find-your-book.png" />
                    <Carousel.Caption className="portfolio-carousel-caption">
                        <h3 className="portfolio-carousel-caption-text">Find Your Book</h3>
                        <a className="text-white" href="https://find-your-book-dr65.onrender.com/">Check out the app!<br /></a>
                        <a className="text-white" href="https://github.com/irimeroi/find-your-book">Or go to the Github repo</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="portfolio-carousel-images" src="assets/images/Weather.png" />
                    <Carousel.Caption className="portfolio-carousel-caption">
                        <h3 className="portfolio-carousel-caption-text">Weather Website</h3>
                        <a className="text-white" href='https://irimeroi.github.io/weather-website/'>Check out the app!<br /></a>
                        <a className="text-white" href='https://github.com/irimeroi/weather-website'>Or go to the Github repo</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Portfolio;