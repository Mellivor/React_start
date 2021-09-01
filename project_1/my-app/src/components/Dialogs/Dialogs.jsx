import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import stl from './Dialogs.module.css';


let dialogs = [
    { id: 1, name: 'Dimon' },
    { id: 2, name: 'Vasa' },
    { id: 6, name: 'Sergey' },
    { id: 9, name: 'Pedro' },
    { id: 9, name: 'Pedro' },
    { id: 9, name: 'Yorik' },
    { id: 2, name: 'Anna' },
    

];
let dialogsElement = dialogs.map (d =>  <Dialogitem name = {d.name}  id = {d.id}/>)

let messages = [
    { id: 1, messages: 'Hello' },
    { id: 2, messages: 'Vatsapp' },
    { id: 6, messages: 'Reacr rules' },
    { id: 9, messages: 'Yohoho' }
];
let messageElement = messages.map (m => <Message message={m.messages} />)
const Dialogs = (props) => {
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