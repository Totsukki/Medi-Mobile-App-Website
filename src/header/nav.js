import React, {Component} from 'react';
import Logo from '../img/logo_darkbg.png'

import './nav.css'
class Nav extends Component{
    componentDidMount= () => {
        const base = document.querySelector('header')
        console.log(base)
        const nav = document.querySelector('nav')
        const options = {
            rootMargin: "-550px 0px 0px 0px"
        }

        const navObserver = new IntersectionObserver(function(entries){
            entries.forEach(entry =>{
                if(!entry.isIntersecting){
                    nav.classList.add('nav-scroll')
                }
                else{
                    nav.classList.remove('nav-scroll')
                }
            })
        }, options)

        navObserver.observe(base)
    }
    render(){
        return(
            <nav className='App-header fixed w-[100%] h-24 pt-1 z-10' >
                <div className='flex flex-row p-10 px-20 items-center text-white'>
                    <img className='logo' src={Logo} alt='Medi Logo'/>
                    <ul className='grid grid-cols-6 color-white justify-center items-center'>
                        <li><a href='#header'>Home</a></li>
                        <li><a href='#info'>Features</a></li>
                        <li><a href='#comments'>Reviews</a></li>
                        <li><a href='#about-us'>About</a></li>
                        <li><a href='#contact-us'>Contact Us</a></li>
                    </ul>
                <button className='absolute right-20 py-[.6rem] px-[1.5rem] rounded-3xl border-none text-white bg-[#215BF0] transition-all' type='button'>Download</button>
                </div>
            </nav>
        )
    }
}

export default Nav