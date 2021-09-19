import { connect } from "react-redux";
import { actionCreaterAddPost, actionCreaterUpdatePost } from "../../../redux/profilePage_reducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
                dispatch(actionCreaterAddPost());
        },

        onPostChange: (text) => {
                let action = actionCreaterUpdatePost(text);
                dispatch(action);
        }

    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default MyPostsContainer;
