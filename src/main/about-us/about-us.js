import React, {Component} from 'react'
import './about-us.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import bg from '../../img/aboutusbg.png'
import s1 from '../../img/sticker1.png'
import s2 from '../../img/sticker2.png'
import s3 from '../../img/sticker3.png'


class AboutUs extends Component{
    state ={
        cardNum: '',
    }
    handleLinkHover = (e) =>{
        let svg = document.querySelector(`#${e.target.id}>svg`)
        svg.classList.add('arrowMove')
        svg.classList.remove('arrowMoveBack')
        e.target.classList.add('enlarge')
    }
    handleLinkRemoveHover = (e) =>{
        let svg = document.querySelector(`#${e.target.id}>svg`)
        svg.classList.remove('arrowMove')
        svg.classList.add('arrowMoveBack')
    }

    render(){
        return(
            <div id='about-us' className='flex flex-col justify-center items-center'>
                <img className='absolute -z-10 mt-[-6%] fit-cover' src={bg} alt='About Us BG'></img>
                <h1 className='text-center text-6xl pt-20 font-bold'>About Us</h1>
                
                <div className='flex flex-row px-64 pb-64 pt-36 gap-4 justify-center items-center text-[120%]'>
                    <div className='card'>
                        <img src={s1} alt='Health Sticker'></img>
                        <p><strong>We are here to help</strong><br/>Medi is an application purely for the sake of helping people especially to those who often forget to take care of themselves.</p>
                        <a href='#about-us' id='health' onMouseLeave={this.handleLinkRemoveHover} onMouseOver={this.handleLinkHover}>Learn More <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                    </div>
                    <div className='card'>
                        <img src={s2} alt='Muscle Sticker'></img>
                        <p><strong>Let's make a difference</strong><br/>Many individuals feel they lack the ability to make a difference in the world, but our team seeks to make a difference!</p>
                        <a href='#about-us' id='muscle' onMouseLeave={this.handleLinkRemoveHover} onMouseOver={this.handleLinkHover}>Learn More <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                    </div>
                    <div className='card'>
                        <img src={s3} alt='Virus Sticker'></img>
                        <p><strong>Our Culture</strong><br/>Our team has the culture of “Your contribution is never too small”. This application is not as big as others but it can contribute big!</p>
                        <a href='#about-us' id='virus' onMouseLeave={this.handleLinkRemoveHover} onMouseOver={this.handleLinkHover}>Learn More <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                    </div>
                </div>
                <hr className='w-[80%] border-t-2 mt-[5rem]'/>
            </div>
        )
    }
}

export default AboutUs