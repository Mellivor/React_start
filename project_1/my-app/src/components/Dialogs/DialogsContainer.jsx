import { actionCreateraddMessage } from '../../redux/messagesPage_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { widthAuthRedirect } from '../../HOC/WithAuthRedirect';
import { __RouterContext } from 'react-router';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
};

const DialogsContainer = compose(
    connect(mapStateToProps, { actionCreateraddMessage }),
    widthAuthRedirect
)(Dialogs);

export default DialogsContainer;
