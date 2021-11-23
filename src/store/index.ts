/**
 * @description Vuex
 * @author 越浩玮 2021-11-23
 */
import { createStore } from "vuex";

interface UserInfo {
    userName: string,
    userAvatar: string,
    userGender: number
}

export default createStore({
    state: {
        userInfo: {
            userName: "Tony",
            userAvatar: "",
            userGender: 0
        }
    },
    mutations: {
        login(state, payload: UserInfo) {
            state.userInfo = payload;
        }
    }
});