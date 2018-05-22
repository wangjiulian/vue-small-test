<template>
	<div id="detail_wrap">
		<div id="detail_left">
			xxxx
		</div>
		<div id="detail_right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		
	</div>
</template>

<script >
	
</script>

<style scoped >
	
  .detail_wrap {
  	width: 1200px;
  	margin: 0;
  	overflow: hidden;
  	padding-top: 20px;
  }

  .detail_left {
  	float: left;
  	width: 200px;
  	height: 200px;
  	background: #000;
  }

  .detail_right {
  	float:left;
  	margin-left: 200px;
  }



</style>