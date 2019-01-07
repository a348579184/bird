<template>
  <div>
  	<div class="header">
      登录
    </div> 
    <div style="overflow-y: scroll;">
    	<div style="padding-top:60px" class="input">
    		<span class="span">用户名</span>
    		<input type="text" />
    	</div>
    	<div class="input">
    		<span class="span">密码</span>
    		<input type="text" />
    	</div>
    	<div class="div">
    		<button>登录</button>
    	</div>
    	<div class="div">
    		<span style="float:left;margin-left:5%;">忘记密码？</span>
    		<span style="float: right;margin-right: 5%;">注册</span>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
  .span{
  	display: inline-block;
  	width:20%;
  	text-align: right;
  	font-size: 20px;
  }
  .input{
  	width:100%;
  	margin-top:20px;
  }
  input{
  	border:1px solid #0a9ee8;
  	padding:10px 10px;
  	width:220px;
  	margin-left:16px;
  	color:#0A9EE8;
  	font-size:16px ;
  	border-radius: 2px;
  }
  input:focus{
  	border:1px solid #0a9ee8;
  	outline: none;
  	box-shadow: #0a9ee8 0px 0px 10px 1px;
  }
  .div{
  	width:100%;
  }
  button{
  	width:88%;
  	height:40px;
  	margin-left:6%;
  	margin-top:20px;
  	font-size: 20px;
  	background: linear-gradient(to left,#22b9ff,#0a9ee8);
  	border: none;
  	outline: none;
  	color:white;
  	border-radius: 6px;
  }
  .div span{
  	color:#0A9EE8;
  }
</style>
