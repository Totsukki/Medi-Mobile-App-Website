import React, {Component} from "react";
import './main.css'
import Info from './info/info.js'
import Comments from './comments/comments.js'
import AboutUs from './about-us/about-us.js'
class Main extends Component{
    render(){
        return(
            <main> 
                <Info/>
                <Comments/>
                <AboutUs/>
            </main>
        )
    }
}

export default Main