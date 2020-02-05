import React from 'react'
import PropTypes from 'prop-types'

export const FaqsIcon = ({ size, fill, ...rest }) => {
	return (
        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 132.7 119.7">
            <path class="st0" d="M118.4,4.3H13.6c-6.6,0-12,5.4-12,12v76.5c0,6.6,5.4,12,12,12h14.1l-1.9,11.9l27.8-11.9h64.8 c6.6,0,12-5.4,12-12V16.3C130.4,9.7,125,4.3,118.4,4.3z M125.1,89.6c0,5.2-4.2,9.4-9.4,9.4H57.9l-27.2,11.6L32.6,99H16.3 c-5.2,0-9.4-4.2-9.4-9.4v-70c0-5.2,4.2-9.4,9.4-9.4h99.4c5.2,0,9.4,4.2,9.4,9.4V89.6z"/>
            <path class="st0" d="M115.7,13.1H16.3c-3.5,0-6.4,2.9-6.4,6.4v70c0,3.5,2.9,6.4,6.4,6.4h19.8l-1.5,9.7L57.3,96h58.4 c3.5,0,6.4-2.9,6.4-6.4v-70C122.1,16,119.2,13.1,115.7,13.1z M64.6,86.1c-3.2,0-5.4-2.5-5.4-5.7c0-3.4,2.3-5.8,5.5-5.8 c3.2,0,5.4,2.4,5.4,5.8C70.1,83.6,68,86.1,64.6,86.1z M73.5,51.5c-4.1,4.8-5.5,8.9-5.3,13.6l0.1,2.4h-7.2L61,65.1 c-0.6-5,1.1-10.4,5.7-16c4.1-4.9,6.5-8.5,6.5-12.6c0-4.7-3-7.8-8.8-7.9c-3.3,0-7,1.1-9.3,2.9l-2.2-5.8c3-2.2,8.3-3.7,13.2-3.7 c10.6,0,15.4,6.5,15.4,13.6C81.4,41.7,77.9,46.3,73.5,51.5z"/>
        </svg>
    )
}


FaqsIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

FaqsIcon.defaultProps = {
    size: 24,
    fill: '#000',
}