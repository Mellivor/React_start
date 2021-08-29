import React from 'react';
import Dialogitem from './Dialogitem';
import Message from './Message';
import stl from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={stl.dialogs}>
            <div className={stl.items}>
                <Dialogitem name='Pedro' id='1' />
                <Dialogitem name='Vasa' id='2' />
                <Dialogitem name='Igor' id='3' />
                <Dialogitem name='Masha' id='5' />
                <Dialogitem name='Olena' id='6' />
                
                
            </div>
            <div className={stl.separator}></div>
            <div className={stl.messages}>
                <Message message='Hello' />
                <Message message='biba' />  
            </div>
        </div>
    )
};
export default Dialogs;