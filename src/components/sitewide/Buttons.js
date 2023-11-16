import React from 'react'
import '../../styles/sitewide_styles/buttons.css'

const Buttons = ({type, url, title}) => {

    const getButtonColour = () => {
        switch(type) {
            default:
                return 'btn-ylw'
            case 'black':
                return 'btn-blk'
            case 'transparent':
                return 'btn-transparent'
            case 'login':
                return 'btn-login btn-ylw'
            case 'intro':
                return 'btn-intro'
            case 'round-intro':
                return 'btn-intro2'
        }
    }

    return (
        <a className={getButtonColour()} href={url}>{title} <i className="fa-regular fa-arrow-up-right" /></a>
    )
}



export default Buttons