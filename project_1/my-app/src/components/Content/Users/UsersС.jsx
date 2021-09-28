import UserItem from './UserItem';
import * as axios from 'axios'
import React from 'react';

class UsersC extends React.Component {

    // constructor(props) {
        //     super(props);
        // }
        componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        }

        render () {
            return(
                <div>
                    {this.props.usersList.map(u => <UserItem folow={this.props.follow} unFolov={this.props.unFolov} id={u.id} followed={u.followed} key={u.id} name={u.name} birdthDate={u.birdthDate} sity={u.sity} education={u.education} webSite={u.webSite} />)}
        </div>
    );
}
}

export default UsersC;
