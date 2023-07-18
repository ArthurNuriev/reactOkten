import axios from "axios";

const instance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1"
})
const endPoint ={
    cars: '/cars'
}
export const CarApiService ={

     save: (car,setCheckUpdateForm,reset) => {
         instance.post(endPoint.cars, car)
            .then(() => {
                setCheckUpdateForm(prev => !prev)
                reset()
            })
    },

    view: (setCars)=>{
         instance.get(endPoint.cars)
             .then(cars => {
                 setCars(cars.data)
             })
    },

    delete: (id,setCheckUpdateForm) => {
        instance.delete(`${endPoint.cars}/${id}`)
            .then(() => {
                setCheckUpdateForm(prev => !prev)
            })
    },

    update: (carForUpdate,setCheckUpdateForm,reset,car,setCarForUpdate) => {
        instance.put(`${endPoint.cars}/${carForUpdate.id}`, car)
            .then(() => {
                setCheckUpdateForm(prev => !prev)
                setCarForUpdate(null)
                reset()
            })
    }
}

export const UserApiService = {
    createUser: (user) =>{
        axios.post('https://jsonplaceholder.typicode.com/users',user)
            .then(value => console.log(value.data))
    },

    createComment: (data)=>{
        console.log(data.postId)
        axios.post(`https://jsonplaceholder.typicode.com/posts/${data.postId}/comments`,data)
            .then(value => console.log(value.data))
    }
}


