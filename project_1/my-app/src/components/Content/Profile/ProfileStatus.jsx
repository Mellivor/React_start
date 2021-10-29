import React from "react";



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log(this.state.editMode)
        this.setState({
            editMode: true
        })

    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,

        })
        this.props.setProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

}

   render(){
        if (!this.state.editMode) {
           return (<div >
               <span onDoubleClick ={ this.activateEditMode}>{this.state.status}</span>
           </div>)

        } else {
            return (
           <div >
                    <input autoFocus={true} onChange={this.onStatusChange } onBlur ={this.deActivateEditMode} value={this.state.status} type='text' />
           </div>
            )
       }
    }
}

export default ProfileStatus;
