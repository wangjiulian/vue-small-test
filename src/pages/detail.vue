<template>
	<div class="detail_wrap">
		<div class="detail_left">
		   <div class="product_board">
		   	 <img :src="productIcon">
		  <ul>
		  	<router-link v-for="item in products" :to="{path:item.path}" tag='li' active-class='active' >
		  		{{item.name}}
		  	</router-link>
		  
		  </ul>
			
		   </div>
		</div>
		<div class="detail_right">
			
		</div>
	</div>

</template>

<script >

   export default{
data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require("../assets/images/1.png"),
        '/detail/forecast': require("../assets/images/2.png"),
        '/detail/analysis': require("../assets/images/3.png"),
        '/detail/publish': require("../assets/images/4.png")
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
	
</script>

<style >

.detail_wrap {
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
	padding-top: 20px;
}

.detail_left {
	float: left;
	width: 200px;
}

.product_board {
	padding: 20px 0;
	background: #fff;
}

.detail_right{
	float: left;
	width: 980px;
	margin-left: 20px;
}

.product_board ul {
	margin-top: 20px;
}

.product_board li {
	text-align: left;
	padding:  10px 15px;
	cursor: pointer;
}

.product_board li.active,
.product-board li:hover {
	background: #4fc08d;
	color: #fff;
}	

.product-board li a {
  display: block;
}

</style>