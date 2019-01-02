import React, {Component} from 'react';
import { FaBeer , FaSave , FaPen , FaPrint , FaClone } from 'react-icons/fa';

const Toolbar = (props) =>{

    return(
        <section>
        <span className='ico'  style={{display:props.showPen}}><FaPen size={16}/></span>
        <span className='ico'  style={{display:props.showPrint}}><FaPrint size={16} /></span>
        <span className='ico' style={{display:props.showSave}}><FaSave size={16} /></span>
        <span className='ico' style={{display:props.showPrinter}}><FaClone size={16} /></span>
        </section>

    );
}

export default Toolbar;
