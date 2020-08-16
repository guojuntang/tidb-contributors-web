import axios from 'axios'

// set different base URL between development and production environment
if (process.env.NODE_ENV === 'development'){
    //axios.defaults.baseURL = 'http://api.github.com'
    axios.defaults.baseURL = 'http://localhost:3000'
} else if(process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL = process.env.VUE_APP_API_ROOT
}

export function getContributorsData(per_page, page){
    return axios({
        method: 'get',
        url: `api?per_page=${per_page}&page=${page}`,
        //url: `/repos/pingcap/tidb/contributors?per_page=${per_page}&page=${page}`,
        header: {
                    "Content-Type": "application/json",
        //"Authorization": "bearer ******************************"
        }
    })
}