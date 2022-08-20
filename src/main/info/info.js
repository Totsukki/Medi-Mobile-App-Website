import React, {Component} from "react";
import './info.css'
import Img1 from '../../img/img1.png'
import Img2 from '../../img/img2.png'
import Img3 from '../../img/img3.png'
class Info extends Component{
    render(){
        return(
        <div className="info-wrapper my-20">
            <div className="text-center w-[50rem] m-auto">
                <h1 className="font-extrabold text-7xl mb-4">All about Medi App</h1>
                <p>At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</p>
            </div>

            <div className="content-wrapper mt-20 grid grid-cols-2 gap-9 px-56 justify-center text-center">
                <img src={Img1} alt='Img-1'></img>
                <div>
                    <div>
                        <h2>You can communicate with your doctor</h2>
                        <p>Medi has a built-in messenger app feature that lets the user communicate.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>You can spend more fun time</h2>
                        <p>Our application lets you enjoy more of your free time and will let its users forget the stress of forgetting their medications.</p>
                    </div>
                </div>
                <img src={Img2} alt='Img-2'></img>
                <img src={Img3} alt='Img-3'></img>
                <div>
                    <div>
                        <h2>{`Say goodbye to “Don’t forget” sticky notes!`}</h2>
                        <p>Our app erases the existence of sticky notes because medi takes over and will remind you better!</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Info