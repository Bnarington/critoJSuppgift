import React from 'react'
import '../../styles/index_styles/03_companylogos.css'


import Paperz from '../../assets/images/paperz.svg'
import Dorfus from '../../assets/images/dorfus.svg'
import Martino from '../../assets/images/martino.svg'
import Square from '../../assets/images/square.svg'
import Gobana from '../../assets/images/gobona.svg'

const companyLogos = () => {
  return (
    <section className="company-logos">
        <div className="container">
            <a href="#"><img src={Paperz} alt="logotype for paperz" /></a>
            <a href="#"><img src={Dorfus} alt="logotype for dorfus" /></a>
            <a href="#"><img src={Martino} alt="logotype for martino" /></a>
            <a href="#"><img src={Square} alt="logotype for square" /></a>
            <a href="#"><img src={Gobana} alt="logotype for gobona" /></a>
        </div>

    </section>
)
}

export default companyLogos