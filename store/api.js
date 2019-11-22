
console.log(process.env.NODE_ENV)

var url

if(process.env.NODE_ENV == "development"){

    var url = "http://127.0.0.1:8000/api/";

}else{

    var url = "/api/";

}

export const state = () => ({



    login: url + "login/customer",

    signup: url + "register",

    user_ext: "http://127.0.0.1:8000/user_ext_post",

    getImages: "http://127.0.0.1:8000/carousel_image",



})


export const getters = {
    // getLoginAPI(state) {
    //     return state.login
    // }
}
