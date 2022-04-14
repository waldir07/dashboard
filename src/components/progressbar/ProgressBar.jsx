import React, { useRef, useEffect } from 'react'

import './progress-bar.scss'

const ProgressBar = ({ value }) => {
    const barInnerRef = useRef()

    console.log(barInnerRef)
    useEffect(() => {
        barInnerRef.current.style.width = `${value}%`
    }, [])


    return (
        <div className='progress-bar'>
            <div ref={barInnerRef} className="progress-bar__inner"></div>
        </div>
    )
}

export default ProgressBar