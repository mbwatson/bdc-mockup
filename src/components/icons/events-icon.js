import React from 'react'
import PropTypes from 'prop-types'

export const EventsIcon = ({ size, fill, ...rest }) => {
	return (
        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 128.9 118.3">
            <rect x="42.8" y="15.1" width="42.3" height="3.7"/>
            <path d="M33,27.2L33,27.2c4.2,0,7.7-3.4,7.7-7.7v-0.7v-3.7v-4.6c0-4.2-3.4-7.7-7.7-7.7h0c-4.2,0-7.7,3.4-7.7,7.7v4.6v3.7v0.7 C25.3,23.8,28.8,27.2,33,27.2z"/>
            <path d="M95,27.2c4.2,0,7.7-3.4,7.7-7.7v-0.7v-3.7v-4.6c0-4.2-3.4-7.7-7.7-7.7s-7.7,3.4-7.7,7.7v4.6v3.7v0.7 C87.3,23.8,90.8,27.2,95,27.2z"/>
            <path d="M113.3,15.1h-8.4v3.7h6.2c5.9,0,10.7,4.8,10.7,10.7v8.6H6.3v-8.6c0-5.9,4.8-10.7,10.7-10.7h6.2v-3.7h-8.4 c-7.1,0-12.9,5.8-12.9,12.9v75.2c0,7.1,5.8,12.9,12.9,12.9h98.5c7.1,0,12.9-5.8,12.9-12.9V28.1C126.2,20.9,120.4,15.1,113.3,15.1z M43.9,98.4c-5.3,0-9.8-1.4-12.2-2.9l2-7.2c1.7,0.9,5.6,2.5,9.5,2.5c5,0,7.5-2.4,7.5-5.5c0-4-4-5.9-8.3-5.9h-3.9v-6.9h3.7 c3.2-0.1,7.3-1.3,7.3-4.7c0-2.5-2-4.3-6.1-4.3c-3.3,0-6.9,1.4-8.6,2.5l-2-6.9c2.5-1.6,7.4-3.1,12.7-3.1c8.8,0,13.6,4.6,13.6,10.2 c0,4.4-2.5,7.8-7.5,9.5v0.1c4.9,0.9,8.9,4.6,8.9,10C60.7,93.1,54.3,98.4,43.9,98.4z M88.5,97.7h-9.3V65.3h-0.1L71.3,69l-1.6-7.2 l10.8-5h7.9V97.7z"/>
        </svg>
    )
}


EventsIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

EventsIcon.defaultProps = {
    size: 24,
    fill: '#000',
}