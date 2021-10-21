import { actionCreateraddMessage, actionCreaterUpdMessageText } from '../../redux/messagesPage_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { widthAuthRedirect } from '../../HOC/WithAuthRedirect';
import { __RouterContext } from 'react-router';

const mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
};

let dialogsCntainerWithRouter = widthAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, {actionCreateraddMessage, actionCreaterUpdMessageText})(dialogsCntainerWithRouter);

export default DialogsContainer;
