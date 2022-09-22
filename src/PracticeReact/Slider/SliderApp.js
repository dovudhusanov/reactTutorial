import React, {useEffect, useState} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from "react-icons/fa";
import data from "./data";
import "./Slider.css"

function SliderApp(props) {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)


    useEffect(() => {
        const lastIndex = people.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    useEffect(() => {
        let slide = setInterval(() => {
            setIndex(index + 1)
        }, 3500);
        return () => clearInterval(slide)
    })

    return (
        <section className='section'>
            <h2>
                <span>/</span>
                Reviews
            </h2>
            <div className='section-center'>
                {people.map((person, personIndex) => {
                    const {id, image, name, title, quote} = person

                    let position = 'nextSlide'
                    if (personIndex === index) {
                        position = "activeSlide"
                    }
                    if (personIndex === index - 1 || (index === personIndex && person.length - 1)) {
                        position = 'lastSlide'
                    }

                    return (
                        <article key={id} className={position}>
                            <img className='person-image' src={image} alt={title}/>
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight/>
                        </article>
                    );

                })}
                <button className='prev btn btn-primary' onClick={() => {
                    setIndex(index - 1)
                }}>
                    <FiChevronLeft/>
                </button>
                <button className="next btn btn-primary" onClick={() => {
                    setIndex(index + 1)
                }}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    );
}

export default SliderApp;