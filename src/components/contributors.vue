<template>
    <div id="contributors">
        <hr>
        <div class="contributors-list">
            <el-row v-for="(i,j) in 5" :key="i" :index="j" :gutter="10">
    <el-col :xl="5" :lg="5" :md="6" :sm="6" v-for="(o, index) in 4" :key="o" :index="index" :offset="1">
        <el-card :class="[card_class,fade_class]" :body-style="{ padding: '5px' }">
        <img :src='data[j*4 + index].avatar_url' class="card-avatar">
        <div style="padding: 20px;">
            <div class="card-name">{{data[j*4 + index].login}}</div>
        <hr>
            <div class="card-contributions">Commits:{{data[j*4 + index].contributions}} </div>
            <div class="card-button">
            <a type="text" :href="data[j*4 + index].html_url" class="button-primary">Github</a>
            </div>
        </div>
        </el-card>
    </el-col>
    </el-row>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total='total_contributors'
            :current-page="current_page"
            @current-change="pageChangeHandler"
            :page-size='page_size'>
        </el-pagination>
     <el-backtop ></el-backtop>
    </div>
</template>

<script>
import {getContributorsData} from '@/api'
export default {
    data (){
        return {
            total_contributors: 500,
            page_size: 20,
            current_page:1,
            data: [],
            card_class: 'card-contributors',
            fade_class: 'fade-in'
        }
    },
    methods: {
        getData(per_page, page){
            // fade out animation and loading
            this.fade_class = 'fade-out'
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            getContributorsData(per_page, page)
                .then(res => {
                    // update data
                    this.data = res.data
                }).catch(err => {
                    this.$message.error("Get Data Fail!")
                    console.log(err.stack)
                }).finally(()=>{
                    //fade in animation and close loading
                    loading.close()
                    this.fade_class = 'fade-in'
                })
        },
        pageChangeHandler(page){
            this.current_page = page
        }
    },
    created(){
        this.getData(this.page_size, this.current_page)
    },
    watch: {
        // call getData when current_page is changed
        current_page: function(){
            this.getData(this.page_size, this.current_page)
        }
    }
}
</script>

<style>

@keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes fadeout {
    from { opacity: 1; }
    to { opacity: 0; }
}
#contributors {
    width: 100%;
    height: auto;
}
.card-name{
  font-weight: bolder;
  text-align: center;
  font-size: 20px;
}
.card-avatar {
    width: 100%;
}
.el-row{
    width: 99%;
    padding-left: 50px;
} 
.card-contributors{
    height: auto;
    width: 250px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.el-card{
    background-color: #3352AD !important;
    color: aliceblue !important;
}
.fade-in{
    animation: fadein 1.5s ease ;
}
.fade-out{
    animation: fadeout 0.7s ease;
}
.card-contributions{
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.card-button{
  text-align: center;
  margin-bottom: 20px;
}
.button-primary{
  background-color: #3352AD;
  font-size: 18px;
  border: 1px solid aliceblue;
  color: aliceblue;
  text-decoration: none;
  padding: 10px;
  cursor:pointer;
  border-radius: 10px;
}
.button-primary:hover{
  color: #3352AD;
  background-color: aliceblue;

}
.el-pagination {
  text-align: center;
  margin-top: 80px;
  margin-bottom: calc(2rem + 100px);
}
hr {
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 90%;
}
</style>