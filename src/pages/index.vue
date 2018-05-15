<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<div v-for="product in productList">
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a v-bind:hert='item.url'>{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="index-left-block">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList">
						<a :herf="item.url" class="new-item">{{item.title}}</a>
					</li>
				</ul>
				

			</div>
		</div>
		<div class="index-right"></div>

	</div>
</template>

<script>
	



export default{

data (){
	return{

     productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
       newsList: []

	}
}

}


</script>





<style scoped >


	
.index-wrap{
	width: 1200px;
	margin: 0 auto;
}

.index-left{
	float: left;
	width: 300px;
	text-align: left;
}

.index-right {
	float: right;
	width: 900px;
	text-align: right;
}

.index-left-block{
	margin: 15px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
}

.index-left-block h2{
	background: #4fc08d;
	color: #fff;
	padding: 10px 15px;
	
}

.index-left-block h3 {
	padding: 0 15px 1px 15px;
	font-weight: bold;
	color: #222;
}

.index-left-block ul{
	padding: 10px 15px;
}

.index-left-block li{
	padding: 5px;
}

	
</style>