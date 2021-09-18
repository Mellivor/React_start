import { actionCreateraddMessage, actionCreaterUpdMessageText } from '../../redux/messagesPage_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.messagesPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(actionCreateraddMessage())
        },

        updatMessageText: (text) => {
                dispatch(actionCreaterUpdMessageText(text));

        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
