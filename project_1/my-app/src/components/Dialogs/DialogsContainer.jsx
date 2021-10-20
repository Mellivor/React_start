import { actionCreateraddMessage, actionCreaterUpdMessageText } from '../../redux/messagesPage_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { widthAuthRedirect } from '../../HOC/WithAuthRedirect';
import { Redirect, __RouterContext } from 'react-router';

const mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
        authorized:state.auth.authorized,
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


// let dialogsCntainerWithRouter = (props) => {


//         if (!props.authorized) return <Redirect to='/login' />

//         return < Dialogs {...props} />


// }
let dialogsCntainerWithRouter = widthAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(dialogsCntainerWithRouter);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
