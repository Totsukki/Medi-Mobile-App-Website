import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from '../img/logo_lightbg.png'

class Footer extends Component{
    render(){
        return(
            <footer className="w-[85%] m-auto mb-2 mt-32 pt-10 border-t-2 items-center text-center">
                <div className="w-[80%] flex flex-row items-center">
                    <img className="h-12 mt-[-.5vw] mr-6" src={Logo} alt="Logo"></img>
                    <ul className="flex flex-row gap-1 justify-start items-center text-center">
                        <li className="w-24"><a href='#sample' className="hover:font-bold">Terms</a></li>
                        <li className="w-24"><a href='#sample' className="hover:font-bold">Privacy</a></li>
                    </ul>
                    <ul className="absolute right-24 flex flex-row justify-end ml-[30vw] text-2xl gap-2">
                        <li><a href='#sample' className="hover:bg-[#252939] hover:text-white px-2 py-1 rounded-md transition-all"><FontAwesomeIcon icon={faDribbble}/></a></li>
                        <li><a href='#sample' className="hover:bg-[#252939] hover:text-white px-2 py-1 rounded-md transition-all"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href='#sample' className="hover:bg-[#252939] hover:text-white px-2 py-1 rounded-md transition-all"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    </ul>
                </div>
                    <p className="mt-5">© 2022. All Rights Reserved.</p>                
            </footer>
        )
    }
}

export default Footer