import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi
        .string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({
            'string.pattern.base': 'letter format from 1-20 ',
            'string.required': 'required to fill ',
            'string.empty': 'required to fill ',

        }),
    price: Joi
        .number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            'number.base': "only number ",
            'number.min':'min 0 ',
            'number.max':'max 100_000 ',
            'number.required':'required to fill '
        }),
    year: Joi
        .number()
        .min(1990)
        .max(new Date().getFullYear())
        .required()
        .messages({
            'number.base': "only number ",
            'number.min':'min - 1990 ',
            'number.max':'max - current date ',
            'number.required':'required to fill '
        })


})

export {carValidator}
