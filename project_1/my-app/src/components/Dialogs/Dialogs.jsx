import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import stl from './Dialogs.module.css';
import React from 'react';
import { actionCreateraddMessage, actionCreaterUpdMessageText } from '../../redux/messagesPage_reducer';



  

const Dialogs = (props) => {
    let messageElement = props.state.messages.map (m => <Message message={m.messages} who ={m.who} />)
    let dialogsElement = props.state.dialogs.map(d => <Dialogitem name={d.name} id={d.id} />)
    let friendElement = props.state.friends.map(f => <Dialogitem name={f.name} id={f.id} />)
    
    let addMessage = () => {
    props.dispatch(actionCreateraddMessage())
    };
    let updatMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(actionCreaterUpdMessageText(text))
        
    };
    
    return (
        <div className={stl.dialogs}>
            <div className={stl.items}>
                <div className={stl.friends}>
                    <h2>Friends</h2>
                    {friendElement} 
                </div>
                <h2>Dialogs</h2>
                {dialogsElement}  
            </div>
            <div className={stl.separator}></div>
            <div className={stl.messages}>
                {messageElement}
                <textarea value={props.state.newMessageText}
                    onChange={ updatMessageText } className={stl.textarea} />
                <div className={stl.button}>
                <button onClick = {addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;