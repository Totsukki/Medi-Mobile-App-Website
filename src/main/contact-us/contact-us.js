import React, {Component} from 'react'
import './contact-us.css'
import Input from './input.js'
// import { Wrapper } from '@googlemaps/react-wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import Guy from '../../img/guy.png'
import Bag from '../../img/img_bag.png'


class ContactUs extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected: 'location',
            visible: ''
        }
    }
    
    handleChange = e =>{
        this.setState({selected: e.target.value})
        let container = document.querySelector('.tab-content-container')
        for (let cont of container.children){
            if(!cont.classList.contains('hidden'))
            {
                cont.classList.remove('grid')
                cont.classList.add('hidden')
            }

            if(cont.id === e.target.value)
                if(!cont.classList.contains('grid'))
                {
                    cont.classList.remove('hidden')
                    cont.classList.add('grid')
                }
        }
    }

    render(){
        return(
            <div id='contact-us' className='mt-[-2vh] scroll- contact-us text-[#000] flex flex-col justify-center items-center overflow-hidden'>
                <div className='flex flex-col justify-center items-center text-black w-[30%] text-center'>
                    <h1 className='mt-10 font-extrabold text-5xl'>Get in Touch!</h1>
                    <p>If you wanna reach out to us, click your desired information that will lead you to us!</p>
                </div>
                <div className='radio-wrapper flex flex-row gap-20 justify-center items-center text-center'>
                    <Input id='location' handleChange={this.handleChange} selected={this.state.selected} icon={faLocation} text='Location'></Input>
                    <Input id='support' handleChange={this.handleChange} selected={this.state.selected} icon={faHeadset} text='Support'></Input>
                    <Input id='email' handleChange={this.handleChange} selected={this.state.selected} icon={faEnvelope} text='Email'></Input>
                </div>

                <div className='tab-content-container bg-[#252939] h-[42.25vw] w-[85vw] mt-16 mb-5 rounded-xl'>
                    <div id='location' className='tab-content p-12 h-[100%]'>
                        <iframe className='rounded-md' title='CIT-U' src="https://storage.googleapis.com/maps-solutions-l8kfcx3517/locator-plus/hei5/locator-plus.html"
                            width="100%" height="100%"
                            loading="lazy">
                        </iframe>
                    </div>
                    <div id='support' className='tab-content p-12 hidden grid-cols-2 gap-3 items-center justify-center'>
                        <div  className='flex flex-col justify-center items-center'>
                            <FontAwesomeIcon className='text-[#FFCE31] mt-2 text-[30vw]' icon={faCircle} />
                            <img src={Guy} alt='Guy in the Desk' className='mt-[-32vw] flex-1'></img>
                        </div>
                        <div className='text-[5vw] text-white ml-5'>
                            <h1 className='font-bold'>Support</h1>
                            <h2 className='text-[3vw]'><FontAwesomeIcon icon={faPhone} /> (032) 232-2314</h2>
                            <h2 className='text-[3vw]'><FontAwesomeIcon icon={faAt} /> help@medi.com</h2>
                        </div>
                    </div>
                    <div id='email' className='tab-content relative p-[5vw] hidden grid-cols-2 gap-3 items-center justify-center'>
                        <div className='flex self-start items-left flex-col'>
                            <h1 className='text-5xl font-bold text-white mb-5'>Email Us</h1>
                            <form className='flex flex-col gap-3 text-2xl'>
                                <input type='text' className='w-[100%] rounded-[1.7rem] px-6 py-4' placeholder='Name'></input>
                                <textarea type='' className='rounded-3xl resize-none w-[100%] h-[20vw] px-6 py-4' placeholder='Message'></textarea>
                                <button type='submit' className='bg-white w-[30%] p-2 rounded-full self-end text-md hover:bg-[#e0e0e0]'>Send</button>
                            </form>
                        </div>
                        <div className='text-[5vw] relative text-[#FDA231] ml-5 flex flex-col justify-center items-center' >
                            <FontAwesomeIcon className='text-[#FFCE31] mt-[6vw] text-[25vw]' icon={faCircle} />
                            <img src={Bag} alt='Bag' className='absolute h-[22vw] mt-10'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs