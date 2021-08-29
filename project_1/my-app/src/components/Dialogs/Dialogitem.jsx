import React from 'react';
import { NavLink } from 'react-router-dom';
import stl from './Dialogitem.module.css';


const Dialogitem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={stl.item} >
            <NavLink className={stl.contlinc} activeClassName={stl.active} to = {path} > { props.name }</NavLink>
        </div>
    )
};

export default Dialogitem;