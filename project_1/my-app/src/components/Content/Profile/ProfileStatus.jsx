import React from "react";



class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })

    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })

    }
   render(){
        if (!this.state.editMode) {
           return (<div >
               <span onDoubleClick ={ this.activateEditMode.bind(this)}>{this.props.status}</span>
           </div>)

        } else {
            return (
           <div >
               <input autoFocus = {true} onBlur ={this.deActivateEditMode.bind(this)} value={this.props.status} type='text' />
           </div>
            )
       }
    }
}

export default ProfileStatus;
