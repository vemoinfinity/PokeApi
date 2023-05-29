import React from 'react'
import '../Theme.css'

function ThemeSup() {
    return (
        <div className="s-frame">
            <div className='l-s-frame'>
                <div className="b-circle abs t l tl"></div>
                <div className="s-circle abs t l tl"></div>
                <div className="right-line-circle"></div>
            </div>
            <div className='c-s-frame'>
                <div className='c-s-frame-up'></div>
                <div className='c-s-frame-bot'>
                    <div className='rectangle abs t l'></div>
                    <div className='rectangle abs t r'></div>
                    <div className='rectangleS abs t ls'></div>
                    <div className='triangle abs t l dd'></div>
                    <div className='triangle abs t r di'></div>
                    <div className='t-circle'></div>
                    <div className='t-circle-before'></div>
                    <div className='t-circle-after'></div>
                </div>
            </div>
            <div className='r-s-frame'>
                <div className="b-circle abs t r tr rotate90"></div>
                <div className="s-circle abs t r tr rotate90"></div>
                <div className="left-line-circle"></div>
            </div>
            <div className="light s-light"></div>
        </div>
    )
}

export default ThemeSup;