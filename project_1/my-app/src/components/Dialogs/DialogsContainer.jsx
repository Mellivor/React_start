import { actionCreateraddMessage, actionCreaterUpdMessageText } from '../../redux/messagesPage_reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import React from 'react';

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                    let addMessage = () => {
                    store.dispatch(actionCreateraddMessage())
                };

                    let updatMessageText = (text) => {
                        store.dispatch(actionCreaterUpdMessageText(text));

                };

            return <Dialogs addMessage={addMessage} updatMessageText={updatMessageText} state={store.getState()} />
            }}
        </StoreContext.Consumer>
        )
};
export default DialogsContainer;
