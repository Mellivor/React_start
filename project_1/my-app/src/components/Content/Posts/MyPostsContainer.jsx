import { connect } from "react-redux";
import { actionCreaterAddPost, actionCreaterUpdatePost } from "../../../redux/profilePage_reducer";
import Posts from "./Posts";

// const MyPostsContainer = () => {


//     return (
//         <StoreContext>
//             {(store) => {
//             let addPost = () => {
//                 store.dispatch(actionCreaterAddPost());
//             }

//             let onPostChange = (text) => {
//                 let action = actionCreaterUpdatePost(text);
//                 store.dispatch(action);
//             }

//             let profil = store.getState();
//             return < onPostChange={onPostChange} addPost={addPost} posts={profil.profilePage} />
//             }}
//         </StoreContext>
//     )
// }
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
