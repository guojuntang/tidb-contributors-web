import axios from 'axios'

if (process.env.NODE_ENV === 'development'){
    axios.defaults.baseURL = 'http://api.github.com'
    //axios.defaults.baseURL = 'http://localhost:3000'
} else if(process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL = 'https://api.com'
}

export function getContributorsData(per_page, page){
    return axios({
        method: 'get',
        //url: `api?per_page=${per_page}&page=${page}`
        url: `/repos/pingcap/tidb/contributors?per_page=${per_page}&page=${page}`,
        header: {
                    "Content-Type": "application/json",
        "Authorization": "bearer 95e43f78c6e92a23303e081c88dc75dcee4dbfd7"
        }
    })
}