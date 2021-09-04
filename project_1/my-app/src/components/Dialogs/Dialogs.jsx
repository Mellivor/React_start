import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import stl from './Dialogs.module.css';

const Dialogs = (props) => {
    let messageElement = props.state.messages.map (m => <Message message={m.messages} />)
    let dialogsElement = props.state.dialogs.map(d => <Dialogitem name={d.name} id={d.id} />)
    let friendElement = props.state.friends.map (f =>  <Dialogitem name = {f.name}  id = {f.id}/>)
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
            </div>
        </div>
    )
};
export default Dialogs;