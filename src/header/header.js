import React, {Component} from 'react'
import Nav from './nav.js'
import './header.css'
import phone1 from '../img/phone1.png'
import phone2 from '../img/phone2.png'

class Header extends Component{
    render(){
        return(
            <header>
                <Nav/>
                <div className='p-20 text-white grid grid-cols-2 flex flex-col justify-center'>
                    <div className='left-side w-[80%]'>
                        <h1 className='font-extrabold text-[500%] leading-[6rem]'>Medicine Remind App</h1>
                        <p className='mt-7 w-[80% text-[1.5em]'>Medi is a medicine reminder app that helps remind users to drink their medications.</p>
                        <button className='mt-6 py-[1.5%] px-[3%] rounded-3xl border-none text-white bg-[#215BF0]' type='button'>Get Started</button>
                    </div>
                    <div className='right-side'>
                         <img src={phone1} className='-mt-[5%] absolute h-[100%] right-[5%]' alt='Main'/>
                         <img src={phone2} className='-mt-[5%] absolute h-[100%] right-[31%] -z-10' alt='Side'/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header