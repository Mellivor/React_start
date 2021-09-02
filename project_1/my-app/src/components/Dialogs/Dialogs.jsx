import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import stl from './Dialogs.module.css';

const Dialogs = (props) => {
    let messageElement = props.message.map (m => <Message message={m.messages} />)
    let dialogsElement = props.dialog.map (d =>  <Dialogitem name = {d.name}  id = {d.id}/>)
    return (
        <div className={stl.dialogs}>
            <div className={stl.items}>
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