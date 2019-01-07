<template>
  <div>
  	<div class="header">
  		我
    </div> 
    <div class="png">
    	<div>
    		<span v-on:click="login()">登录</span>&nbsp;/&nbsp;<span v-on:click="register()">注册</span>
    		
    	</div>
    </div>
    <div class="item">
    	编辑资料
    	<img src="../assets/toright.png" alt="" />
    </div>
    <div class="item">
    	我的钱包
    	<img src="../assets/toright.png" alt="" />
    </div>
    <div class="item">
    	我的收藏
    	<img src="../assets/toright.png" alt="" />
    </div>
    <div class="item">
    	预约咨询
    	<img src="../assets/toright.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      
    }
  },
  methods:{
  	login:function(){
//		this.$router.replace('/my');
  		this.$router.push({path:'/login'});
  	},
  	register:function(){
//		this.$router.replace('/my');
  		this.$router.push({path:'/login'});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  	height:56px;
  	background: linear-gradient(to left,#22b9ff,#0a9ee8);
  	font-size: 24px;
  	width: 100%;
  	line-height: 56px;
  	text-align: center;
  	color:white;
  	border-radius: 4px;
  	position: absolute;
  	top:0px;
  }
  
  .png{
  	margin-top:56px;
  	height:160px;
  	background-color: #E8EAED;
  	width:100%;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  .item>img{
  	width: 22px;
  	float:right;
  	margin-top:10px;
  	margin-right: 10px;
  }
  .png>div{
  	width:100px;
  	height:100px;
  	border-radius: 50%;
 
  	color:#22b9ff;
  	background: white;
  	text-align: center;
  	line-height: 100px;
  }
  .item{
  	background: grey;
  	margin-top:26px;
  	color:white;
  	height:45px;
  	line-height: 45px;
  	text-indent: 12px;
  	font-size: 18px;
  }
</style>
