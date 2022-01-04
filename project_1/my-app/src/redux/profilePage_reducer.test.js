import profilePage_reducer, {actionCreaterAddPost, actionCreaterDeletePost} from './profilePage_reducer'
//1 test dada
let state = {
posts: [
            { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
            { id: 2, post: 'Second_post!!!', likes: 1 },
            { id: 6, post: 'Third_post!!!', likes: -300 },
        ],
};
it('posts was added', () => {
    let action = actionCreaterAddPost('adding of new posts test');
//2 action
    let newState = profilePage_reducer(state, action);

//3 expectation
    expect(newState.posts.length).toBe(4);
})
it('correct post data was added', () => {
    let action = actionCreaterAddPost('adding of new posts test');
    //2 action
    let newState = profilePage_reducer(state, action);

    //3 expectation
    expect(newState.posts[3].post).toBe('adding of new posts test');
})

it('the length was decrement after deleting the publication', () => {
    let action = actionCreaterDeletePost(2);
//2 action
    let newState = profilePage_reducer(state, action);

//3 expectation
    expect(newState.posts.length).toBe(2);
})
it('correct post wsa deleted', () => {
    let action = actionCreaterDeletePost(2);
//2 action
    let newState = profilePage_reducer(state, action);

//3 expectation
    expect(newState.posts[1].post).toBe('Third_post!!!');
})
