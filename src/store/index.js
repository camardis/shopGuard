import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export default new vuex.Store({
    // state is used to store the data 
    state: {},
    // mutations are used to change the state in a synchronous way
    mutations: {},
    // actions are used to commit the mutations to change the state in an asynchronous way
    actions: {},
    // getters are used to get the state in a computed way 
    getters: {},
    // modules are used to split the store into different modules 
    modules: {}
});