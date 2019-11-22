import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const state = () => {
    
    //global var
    // showLogin: false,
    return {
        showLogin: false,
      }
    
}


export const mutations = {

    showLogin(state, isLoggedIn) {
        // console.log('selecting exercise mutation, ' + isLoggedIn)
        state.showLogin = isLoggedIn
    },
}


export const getters = {
   
  }



export const actions = {
    


    signup({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                data: payload,
                url: state.api.signup,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "Token c1caab4f8caea62d5ea07edf0d355af314351223"
                // }
            })
                .then(res => {
                    // console.log(res)
                    // commit('getSingleAuction', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },
    user_ext_post({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                data: payload,
                url: state.api.user_ext,
                contentType: 'application/json',
            })
            .then(res => {
                console.log(res)
                resolve(res)
            })
            .catch(err => {
                console.log('error in ext', err)
            })
        })
    },

    getImages({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getImages,
                contentType: 'application/json',
                
            })
                .then(res => {
                    // console.log(res.data)
                    // console.log('response')
                    // commit('getAllProducts', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },
}

