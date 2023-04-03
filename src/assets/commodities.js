import { v4 as uuidv4 } from 'uuid'

const commodities = [
    {
        id: uuidv4(),
        name: 'VegetableEnglish',
        price: 30,
        volumePerSeconds: 1,
        purchasedTime: 0
    },
    {
        id: uuidv4(),
        name: 'verySweetBear',
        price: 100,
        volumePerSeconds: 5,
        purchasedTime: 0
    }
]
export default commodities