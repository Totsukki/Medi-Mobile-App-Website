import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import './item.css'

class Item extends Component{
    render(){
        let i = 0
        let num = this.props.score
        let checkIfHalf = num-Math.floor(num) === 0? false : true;
        const arr = []
        
        while(i<5){
          if(i<num)
            if(checkIfHalf)
              if(i===(Math.floor(num)))
                arr.push(
                  <span key={`${this.props.id+10}-halfstar`}>
                    <FontAwesomeIcon icon={faStar}  color='gray'/>
                    <FontAwesomeIcon icon={faStarHalf} color='yellow' className='ml-[-1.125rem]'/>
                  </span>
                )
              else  
                arr.push(<FontAwesomeIcon icon={faStar} key={`${this.props.id}${Math.floor(Math.random()*1000)}-star`} color='yellow'></FontAwesomeIcon>)  
            else
              arr.push(<FontAwesomeIcon icon={faStar} key={`${this.props.id}${Math.floor(Math.random()*1000)}-star`} color='yellow'></FontAwesomeIcon>) 
          else
          arr.push(<FontAwesomeIcon icon={faStar} key={`${this.props.id}${Math.floor(Math.random()*1000)}-star`} color='gray'></FontAwesomeIcon>) 
    
          i++;
        }
        return(
            <div key={this.props.id} className={`${this.props.className} item m-1 w-[90%] min-h-[27rem] max-h-[27rem] p-20 bg-[#DADADA] rounded-lg flex flex-col justify-center items-center`}>
                <span className='absolute top-10'>{arr}</span>
                <p className='absolute mt-[-5rem] w-[70%] text-black pt-10 text-[1.25em] font-bold'>{this.props.comment}</p>
                <img className='rounded-[20rem] absolute bottom-16 h-10 ' src={this.props.picUrl} alt={this.props.name}></img>
                <h3 className='absolute bottom-10 text-black'>{this.props.name}</h3>
            </div>
        )
    }
}

export default Item