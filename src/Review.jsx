import React, { useState } from 'react'
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

export default function Review() {
    
    // console.log(reviews)
    // console.log(reviews.length)

    const [index, setIndex] = useState(0)
    const {job, name, text, image} = reviews[index]

    function checkIndex(indexNumber) {
        if(indexNumber > reviews.length - 1) {
            return 0
        }
        if(indexNumber < 0) {
            return reviews.length - 1
        }
        return indexNumber
    }

    const nextReview = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1
            return checkIndex(newIndex)
        })
    }

    const prevReview = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex - 1
            return checkIndex(newIndex)
        })
    }

    function surpriseMe() {
        let randomIndex =  Math.floor(Math.random() * (reviews.length))
        // console.log(randomIndex)
        if(randomIndex  === index) {
            randomIndex = randomIndex + 1
        }
        setIndex(checkIndex(randomIndex))
    }

    return (
        //not mapping so key is not required
        <article className='text-center shadow pt-2'>
            <img src={image} width='80px' height='80px' className='rounded-circle' />
            <h4>{name}</h4>
            <h6>{job}</h6>
            <p>{text}</p>
            <div>
                <button className='btn' onClick={prevReview}>
                    <FaChevronLeft className='me-4' />
                </button>
                <button className='btn' onClick={nextReview}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='btn btn-sm btn-primary my-3' onClick={surpriseMe}>surprise me</button>
        </article>
    )
}