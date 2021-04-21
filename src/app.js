// import './app.css'
const axios = require('axios')

axios.create({
    baseURL: 'https://wmes.weedscomm.com'
})

const url = '/api/authenticate'

const getUser = async () => {
    const res = await axios.get(
        url,
        {
            username: 'admin',
            password: '1234'
        }
    )
    console.log(res)
}
getUser() /*? */