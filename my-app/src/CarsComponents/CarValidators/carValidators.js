import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required()
        .messages({'string.pattern.base': 'буквеный формат от 1-20 ',
        'string.required': 'обязательно для заполнения '}),
    price: Joi
        .number()
        .ruleset
        .min(0)
        .max(1000000)
        .messages({'number.base': "только число "})
        .rule({message: 'от 0-100_000 '})
        .required(),
    year: Joi
        .number()
        .ruleset
        .min(1990)
        .max(new Date().getFullYear())
        .messages({'number.base': "только число "})
        .rule({message: 'от 1990г - до текущего год'})
        .required()
})

export {carValidator}
