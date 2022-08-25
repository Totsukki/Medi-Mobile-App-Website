import React, {Component} from 'react'
import './contact-us.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class ContactUs extends Component{
    render(){
        return(
            <div className='mt-[-2vh] contact-us text-[#000] flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center text-black w-[30%] text-center'>
                    <h1 className='mt-10 font-extrabold text-5xl'>Get in Touch!</h1>
                    <p>If you wanna reach out to us, click your desired information that will lead you to us!</p>
                </div>
                <div className='radio-wrapper flex flex-row gap-5 text-center'>
                    <div className='tabs'>
                        <input id='location' type='radio' name='contact'></input>
                        <label htmlFor='location'><div><FontAwesomeIcon icon={faLocation}/></div>Location</label>
                        <div className="tab-content">
                            <div>
                                asdfasdfsadfasdf
                            </div>
                        </div>
                    </div>
                    <div className='tabs'>
                        <input id='support' type='radio' name='contact'></input>
                        <label htmlFor='support'><div><FontAwesomeIcon icon={faHeadset}/></div>Support</label>
                    </div>
                    <div className='tabs'>
                        <input id='email' type='radio' name='contact'></input>
                        <label htmlFor='email'><div><FontAwesomeIcon icon={faEnvelope}/></div>Email</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs