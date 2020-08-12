<template>
    <div id="contributors">
        <hr>
            <el-row v-for="(i,j) in 2" :key="i" :index="j" :gutter="10">
    <el-col :xl="5" :lg="5" :md="6" :sm="6" v-for="(o, index) in 4" :key="o" :index="index" :offset="1">
        <el-card class="card-contributors" :body-style="{ padding: '5px' }">
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
        <el-pagination
            background
            layout="prev, pager, next"
            :total='total_contributors'
            :page-size='page_size'>
        </el-pagination>
    </div>
</template>

<script>
export default {
    data (){
        return {
            total_contributors: 500,
            page_size: 20,
            data: [
  {
    "login": "coocood",
    "id": 891222,
    "node_id": "MDQ6VXNlcjg5MTIyMg==",
    "avatar_url": "https://avatars0.githubusercontent.com/u/891222?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/coocood",
    "html_url": "https://github.com/coocood",
    "followers_url": "https://api.github.com/users/coocood/followers",
    "following_url": "https://api.github.com/users/coocood/following{/other_user}",
    "gists_url": "https://api.github.com/users/coocood/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/coocood/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/coocood/subscriptions",
    "organizations_url": "https://api.github.com/users/coocood/orgs",
    "repos_url": "https://api.github.com/users/coocood/repos",
    "events_url": "https://api.github.com/users/coocood/events{/privacy}",
    "received_events_url": "https://api.github.com/users/coocood/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 1074
  },
  {
    "login": "shenli",
    "id": 1192573,
    "node_id": "MDQ6VXNlcjExOTI1NzM=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/1192573?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shenli",
    "html_url": "https://github.com/shenli",
    "followers_url": "https://api.github.com/users/shenli/followers",
    "following_url": "https://api.github.com/users/shenli/following{/other_user}",
    "gists_url": "https://api.github.com/users/shenli/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shenli/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shenli/subscriptions",
    "organizations_url": "https://api.github.com/users/shenli/orgs",
    "repos_url": "https://api.github.com/users/shenli/repos",
    "events_url": "https://api.github.com/users/shenli/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shenli/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 808
  },
  {
    "login": "zimulala",
    "id": 4242506,
    "node_id": "MDQ6VXNlcjQyNDI1MDY=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/4242506?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zimulala",
    "html_url": "https://github.com/zimulala",
    "followers_url": "https://api.github.com/users/zimulala/followers",
    "following_url": "https://api.github.com/users/zimulala/following{/other_user}",
    "gists_url": "https://api.github.com/users/zimulala/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zimulala/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zimulala/subscriptions",
    "organizations_url": "https://api.github.com/users/zimulala/orgs",
    "repos_url": "https://api.github.com/users/zimulala/repos",
    "events_url": "https://api.github.com/users/zimulala/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zimulala/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 805
  },
  {
    "login": "tiancaiamao",
    "id": 1420062,
    "node_id": "MDQ6VXNlcjE0MjAwNjI=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/1420062?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tiancaiamao",
    "html_url": "https://github.com/tiancaiamao",
    "followers_url": "https://api.github.com/users/tiancaiamao/followers",
    "following_url": "https://api.github.com/users/tiancaiamao/following{/other_user}",
    "gists_url": "https://api.github.com/users/tiancaiamao/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tiancaiamao/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tiancaiamao/subscriptions",
    "organizations_url": "https://api.github.com/users/tiancaiamao/orgs",
    "repos_url": "https://api.github.com/users/tiancaiamao/repos",
    "events_url": "https://api.github.com/users/tiancaiamao/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tiancaiamao/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 717
  },
  {
    "login": "siddontang",
    "id": 1080370,
    "node_id": "MDQ6VXNlcjEwODAzNzA=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/1080370?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/siddontang",
    "html_url": "https://github.com/siddontang",
    "followers_url": "https://api.github.com/users/siddontang/followers",
    "following_url": "https://api.github.com/users/siddontang/following{/other_user}",
    "gists_url": "https://api.github.com/users/siddontang/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/siddontang/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/siddontang/subscriptions",
    "organizations_url": "https://api.github.com/users/siddontang/orgs",
    "repos_url": "https://api.github.com/users/siddontang/repos",
    "events_url": "https://api.github.com/users/siddontang/events{/privacy}",
    "received_events_url": "https://api.github.com/users/siddontang/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 586
  },
  {
    "login": "hanfei1991",
    "id": 20884546,
    "node_id": "MDQ6VXNlcjIwODg0NTQ2",
    "avatar_url": "https://avatars0.githubusercontent.com/u/20884546?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hanfei1991",
    "html_url": "https://github.com/hanfei1991",
    "followers_url": "https://api.github.com/users/hanfei1991/followers",
    "following_url": "https://api.github.com/users/hanfei1991/following{/other_user}",
    "gists_url": "https://api.github.com/users/hanfei1991/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hanfei1991/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hanfei1991/subscriptions",
    "organizations_url": "https://api.github.com/users/hanfei1991/orgs",
    "repos_url": "https://api.github.com/users/hanfei1991/repos",
    "events_url": "https://api.github.com/users/hanfei1991/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hanfei1991/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 520
  },
  {
    "login": "qiuyesuifeng",
    "id": 1953644,
    "node_id": "MDQ6VXNlcjE5NTM2NDQ=",
    "avatar_url": "https://avatars1.githubusercontent.com/u/1953644?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/qiuyesuifeng",
    "html_url": "https://github.com/qiuyesuifeng",
    "followers_url": "https://api.github.com/users/qiuyesuifeng/followers",
    "following_url": "https://api.github.com/users/qiuyesuifeng/following{/other_user}",
    "gists_url": "https://api.github.com/users/qiuyesuifeng/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/qiuyesuifeng/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/qiuyesuifeng/subscriptions",
    "organizations_url": "https://api.github.com/users/qiuyesuifeng/orgs",
    "repos_url": "https://api.github.com/users/qiuyesuifeng/repos",
    "events_url": "https://api.github.com/users/qiuyesuifeng/events{/privacy}",
    "received_events_url": "https://api.github.com/users/qiuyesuifeng/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 370
  },
  {
    "login": "ngaut",
    "id": 878009,
    "node_id": "MDQ6VXNlcjg3ODAwOQ==",
    "avatar_url": "https://avatars2.githubusercontent.com/u/878009?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ngaut",
    "html_url": "https://github.com/ngaut",
    "followers_url": "https://api.github.com/users/ngaut/followers",
    "following_url": "https://api.github.com/users/ngaut/following{/other_user}",
    "gists_url": "https://api.github.com/users/ngaut/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ngaut/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ngaut/subscriptions",
    "organizations_url": "https://api.github.com/users/ngaut/orgs",
    "repos_url": "https://api.github.com/users/ngaut/repos",
    "events_url": "https://api.github.com/users/ngaut/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ngaut/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 367
  },
  {
    "login": "zz-jason",
    "id": 5268763,
    "node_id": "MDQ6VXNlcjUyNjg3NjM=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/5268763?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zz-jason",
    "html_url": "https://github.com/zz-jason",
    "followers_url": "https://api.github.com/users/zz-jason/followers",
    "following_url": "https://api.github.com/users/zz-jason/following{/other_user}",
    "gists_url": "https://api.github.com/users/zz-jason/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zz-jason/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zz-jason/subscriptions",
    "organizations_url": "https://api.github.com/users/zz-jason/orgs",
    "repos_url": "https://api.github.com/users/zz-jason/repos",
    "events_url": "https://api.github.com/users/zz-jason/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zz-jason/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 340
  },
  {
    "login": "XuHuaiyu",
    "id": 9039012,
    "node_id": "MDQ6VXNlcjkwMzkwMTI=",
    "avatar_url": "https://avatars1.githubusercontent.com/u/9039012?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/XuHuaiyu",
    "html_url": "https://github.com/XuHuaiyu",
    "followers_url": "https://api.github.com/users/XuHuaiyu/followers",
    "following_url": "https://api.github.com/users/XuHuaiyu/following{/other_user}",
    "gists_url": "https://api.github.com/users/XuHuaiyu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/XuHuaiyu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/XuHuaiyu/subscriptions",
    "organizations_url": "https://api.github.com/users/XuHuaiyu/orgs",
    "repos_url": "https://api.github.com/users/XuHuaiyu/repos",
    "events_url": "https://api.github.com/users/XuHuaiyu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/XuHuaiyu/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 336
  }]
        }
    }
}
</script>

<style>
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