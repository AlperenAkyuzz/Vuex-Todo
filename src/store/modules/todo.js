import axios from 'axios'
const todo = ({
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        _doneItems: state => {
            return state.items.filter(item => item.done)
        },
        _all: state => state.items,
    },
    mutations: {
        add(state, value) {
            state.items.push(value);
        },
        setItems(state, data) {
            state.items = data
        }
    },
    actions: {
        fetchData(context) {
            axios.get('https://jsonplaceholder.typicode.com/todos/')
                .then(function (response) {
                    context.commit('setItems', response.data)
                }).catch(function() {
                    console.log('SERVER ERROR')
                })
        }
    }
});

export default todo;