<template>
	<div>
		<div class="app-head">
			<div class="app-head-inner">
			    <img src="../assets/logo.png">
			    <div class="head-nav">
					<ul class="nav-list">
						<li>登录</li>
						<li class="nav-line">|</li>
						<li>注册</li>
						<li class="nav-line">|</li>
						<li>关于</li>
					</ul>
			    </div>
			 </div>   
		</div>
		<div class="container">
			<keep-alive>
			<router-view></router-view>
		    </keep-alive>
		</div>
		<div class="app-foot">
			<p>@2018 fishenal AVERY </p>
		</div>	
	</div>
</template>



<script type="text/javascript">

import indexPage from '../pages/index'

export default{
     

}


</script>


<style >

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
	
ol,ul{
	list-style: none;
}

.button {
	  background: #4fc08d;
	  color: #fff;
	  display: inline-block;
	  padding: 10px 20px;
}

.app-head{
	background: #363636;
	color: yellow;
	height: 90px;
	line-height: 90px;
}

.app-head-inner{
	width: 100%;
}

.app-head img{
	width: 50px;
	margin-top: 20px;
}

.head-nav{
	float: right;
}

.head-nav ul{
	overflow: hidden;
}

.head-nav li{
	cursor: pointer;
	float: left;
}

.nav-line{
	padding: 0 10px;
}

.app-foot{
	text-align: center;
	height: 80px;
	width: 100%;
	line-height: 80px;
	background: #e3e4e8;
	clear: both;
	margin-top: 30px;
}




</style>