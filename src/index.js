const { createStore, combineReducers } = require('redux');

// Store === State
// Event Emitter on any dispatched action
// .subscribe

const initialState = {
    title: 'My Cool Counting App',
    counter: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UPDATE_TITLE = 'UPDATE_TITLE';

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}
const updateTitle = (updatedTitle) => {
    return {
        type: UPDATE_TITLE,
        title: updatedTitle,
    };
}

const countReducer = (state = 0, action) => {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    }

    return state;
}

const titleReducer = (state = '', action) => {
    if (action.type === UPDATE_TITLE) {
        return action.title;
    }

    return state;
}

const reducer = combineReducers({
    counter: countReducer,
    title: titleReducer,
});

const store = createStore(reducer);

store.dispatch(updateTitle('2101 Counting Demo'));

console.log(store.getState());

store.dispatch({
    type: INCREMENT,
});

console.log(store.getState());

// const mapDispatchToProps = (dispatch) => ({
//     getUsers: async () => {
//         try {
//             const res = await axios.get('blah blah.com');
//
//             dispatch({
//                 type: 'thing',
//                 res,
//             });
//         } catch (e) {
//             console.error(e);
//         }
//     },
// });
