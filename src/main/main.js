import React, {Component} from "react";
import './main.css'
import Info from './info/info.js'
import Comments from './comments/comments.js'
import AboutUs from './about-us/about-us.js'
import ContactUs from "./contact-us/contact-us";
class Main extends Component{
    render(){
        return(
            <main> 
                <Info/>
                <Comments/>
                <AboutUs/>
                <ContactUs/>
            </main>
        )
    }
}

export default Main