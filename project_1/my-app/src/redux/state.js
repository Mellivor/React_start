let state = {
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dimon' },
            { id: 2, name: 'Vasa' },
            { id: 6, name: 'Sergey' },
            { id: 9, name: 'Pedro' },
            { id: 9, name: 'Pedro' },
            { id: 9, name: 'Yorik' },
            { id: 2, name: 'janna' },
        ],
        friends: [
            { id: 1, name: 'Dimon' },
            { id: 2, name: 'Vasa' },
        ],
        messages: [
            { id: 1, messages: 'Hello' },
            { id: 2, messages: 'Vatsapp' },
            { id: 6, messages: 'Reacr rules' },
            { id: 9, messages: 'Yohoho' }
        ],
    },
    profilePage: {
        posts: [
            { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
            { id: 2, post: 'Second_post!!!', likes: 1 },
            { id: 6, post: 'Third_post!!!', likes: -300 },
        ]
    }
};

export default state;