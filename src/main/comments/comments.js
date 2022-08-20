import React, {Component} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './comments.css'
import Item from './item.js'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Item score={4.5}
        comment={`“I've tried 4 or 5 different med trackers and this one beats them all by far. Ease of use, clean interface, ability to track multiple meds, and I love the high quality daily pictures.”`}
        picUrl={'https://scontent.xx.fbcdn.net/v/t1.15752-9/89860227_505000423418859_6440194565751177216_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH4wBsDjKn9sh8MtLXRnVJE7hG6qRsFrO7uEbqpGwWs7ub79T9ntAatnnxfdx2wyCWE9dNUsUhl9WXxVm7EFIVd&_nc_ohc=Rm1hlyC0ClYAX83db2J&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIEstYXIRJ353YAx4O_ccEFzQcogSZ08Q3UC2wwqISJPA&oe=6326E82B'}
        name='Reynald Sampelo' 
        className='hakdog'
        id={'user1'}/>,
  <Item score={5}
        comment={`“Have been using it for about 2 months and have not had any issues. Reminder sets are great, and ability to show that you purposefully skipped a dose is spot on.”`}
        picUrl={'https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.18169-9/10953446_665749896884885_8162062935109357569_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEoxAjC5Aqjc_5wfy0WUbImEr6KfX3VGG8Svop9fdUYb2wP4f1qzrOOvFKmCBIkaEheNDIsh9Q35KNKMCYBuYUt&_nc_ohc=--v85fABt_AAX8VCwgK&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9J6bui0MX40V-lJ5KolD2RTkQVIfTbRUn5dGzqNunidg&oe=632517A2'}
        name='Sean Maverick Saligue' 
        id={'user2'}/>,
<Item score={4}
        comment={`“Pwede raman ta mag puwa nya tapad tang sean para mobigay siyag shade”`}
        picUrl={'https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.18169-9/10153234_767734796617331_7237920364670744333_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHcJGRsyOf_hv8uGkXzn6MoYeV_lF4UU-5h5X-UXhRT7lw4Gqy5AFgtVMFkM534W54D67xOS_HKdgOJ8r6zuw93&_nc_ohc=417ZBmiYDJkAX8hmQa2&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT9eOLkW51j78pXfhufvfecfyDZFXAp1atKdPCele0MBOQ&oe=6323A26F'}
        name='Klint Dajao' 
        id={'user3'}/>     
  
];

const responsive = {
    0: { items: 1 },
    128: { items: 2 },
};

const Gallery = () => {
  return (
    <AliceCarousel infinite autoPlay={true} autoPlayInterval={5000} mouseTracking items={items} responsive={responsive}/>
  );
}

class Comments extends Component{
  render(){
      return(
          <div className="comments-wrapper my-2 text-center bg-[#252939] text-white p-20 flex flex-col justify-center items-center outli" >
              <div className="w-[40%]">
                  <h1 className="font-extrabold text-6xl">How our users feel about Medi</h1>
                  <p className="mb-4">Read what our users feel about our Medi App!</p>
                  <hr/>
              </div>
              <div className="w-[90%] relative">
                <Gallery className='w-100'/>
              </div>
          </div>
      )
    }
}
export default Comments