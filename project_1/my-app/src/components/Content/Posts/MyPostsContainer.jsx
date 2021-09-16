import { actionCreaterAddPost, actionCreaterUpdatePost } from "../../../redux/profilePage_reducer";
import StoreContext from "../../../StoreContext";
import Posts from "./Posts";

const MyPostsContainer = () => {


    return (
        <StoreContext>
            {(store) => {
            let addPost = () => {
                store.dispatch(actionCreaterAddPost());
            }

            let onPostChange = (text) => {
                let action = actionCreaterUpdatePost(text);
                store.dispatch(action);
            }

            let profil = store.getState();
            return <Posts onPostChange={onPostChange} addPost={addPost} posts={profil.profilePage} />
            }}
        </StoreContext>
    )
}

export default MyPostsContainer;
