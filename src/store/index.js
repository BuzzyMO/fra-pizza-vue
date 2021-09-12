import { createStore } from 'vuex'
// import cart from './modules/cart'
// import products from './modules/products'

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    state: {
            pizzas: [],
    },

    getters: {
        pizzas: (state) => state.pizzas,
    },

    mutations: {
        ADD_Item(state, id) {
            state.pizzas.push(id);
        },

        REMOVE_Item(state, index) {
            state.pizzas.splice(index, 1);
        },
    },

    actions: {
        addItem(context, pizza ) {
            context.commit("ADD_Item", pizza);
        },

        removeItem(context, index) {
            context.commit("REMOVE_Item", index);
        },
    },
    modules: {},
})