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

    update: (id,setCheckUpdateForm,reset, car, setValue) => {
        instance.put(`${endPoint.cars}/${id}`, car)
            .then(() => {
                setCheckUpdateForm(prev => !prev)
                setValue(car)
                reset()
            })
    }
}