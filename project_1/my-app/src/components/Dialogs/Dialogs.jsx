import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import stl from './Dialogs.module.css';
import React from 'react';


  

const Dialogs = (props) => {
    let messageElement = props.state.messagesPage.messages.map (m => <Message message={m.messages} who ={m.who} />)
    let dialogsElement = props.state.messagesPage.dialogs.map(d => <Dialogitem name={d.name} id={d.id} />)
    let friendElement = props.state.messagesPage.friends.map(f => <Dialogitem name={f.name} id={f.id} />)
     
    let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
    };
    let newMessageElement = React.createRef();
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
                <textarea ref = {newMessageElement} className={stl.textarea} id="post" name="post" placeholder="My news">
                </textarea>
                <div className={stl.button}>
                <button onClick = {addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;