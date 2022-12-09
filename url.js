let apiUrl = 'https://back-my-tinerary-team-dev-mern-production.up.railway.app/api/'

if (process.env.NODE_ENV === 'production') {
    apiUrl =process.env.REACT_APP_URL
}


module.exports = apiUrl