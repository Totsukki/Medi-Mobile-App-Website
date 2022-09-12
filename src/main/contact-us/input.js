import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Input extends Component{
    render(){
        const{
            id,
            icon,
            text,
            selected
        } = this.props
        return(
            <div className='tabs'>
                <input id={id} value={id} onChange={this.props.handleChange} checked={selected===id} type='radio' name='contact'></input>
                <label htmlFor={id}><div><FontAwesomeIcon icon={icon}/></div>{text}</label>
            </div>
        )
    }
}

export default Input