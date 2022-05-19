import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./Page.css";

const Page = (props) => {
  return (
    <div >
        <div className={props.data.id === "1" ? "amazon" : "" || props.data.id === "2" ? "amazon" : ""  || props.data.id === "3" ? "apple" : ""}>
            <p className='date'>{props.data.date}</p>
            <img className='image' src={props.data.logo}/>
            <p className='heading'>{props.data.heading}</p>
            <h1 className='subheading'>{props.data.subheading}</h1>
            <h1 className='pay'>{props.data.pay}</h1>
            <h3 className='device'>{props.data.device}</h3>
            <p className='arrow'><FaArrowRight/></p>
        </div>
        
    </div>
  )
}

export default Page