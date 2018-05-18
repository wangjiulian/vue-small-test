<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :hert='item.url'>{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lasttest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList">
						<a :herf="item.url" class="new-item">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
			<div class="index-board-list">
				<div class="index-board-item" v-for="(item,index) in boardList"
				:class="[{'index-last' : index % 2 !==0}, 'index-board-' + item.id]">
					<div class="index-board-item-inner">
						<h2>{{ item.title }}</h2>
						<p>{{ item.description }}</p>
						<div class="index-board-button">
							<a class="button">立即购买</a>
						</div>
						
					</div>
				</div>
				
			</div>

		</div>

	</div>
</template>

<script>
	import slideShow from '../components/slideShow' 

export default{
created: function(){
//   this.$http.post('http://192.168.1.29:8989/test_ele/menu_sort',{id:11}).
//   then((res) => {
//     alert(res.data)
//   // this.newsList = res.data
//   },(err) => {
// console.log(err)
//   })
  
},
components:{
slideShow
},
data (){
	return{
     invTime: 2000,
     slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
	  boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],	
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
       newsList: [
       {
      "id": 1,
      "title": "新闻条目1新闻条目1新闻条目1新闻条目1",
      "url": "http://starcraft.com"
    },
    {
      "id": 2,
      "title": "新闻条目2新闻条目2新闻条目2新闻条目2",
      "url": "http://warcraft.com"
    },
    {
      "id": 3,
      "title": "新闻条3新闻条3新闻条3",
      "url": "http://overwatch.com"
    },
    {
      "id": 4,
      "title": "新闻条4广告发布",
      "url": "http://hearstone.com"
    }]

	}
},
mounted(){

//            this.$fetch('/api/v2/movie/top250')
//                .then((response) => {
//                    console.log(response)
//                })
        //    this.$httpa.post('test_ele/menu_sort',{
               
        //    })
        //        .then(function (response) {
        //            console.log("获取成功"+ response);
        //    })
        //        .catch(function (error) {
        //            console.log("获取失败"+JSON.stringify(error));
        //        })

        },

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

.hot-tag {
	background: red;
	color: white;
}

.index-right {
	float: right;
	width: 900px;
	background: #fff;
	
}

.index-board-item {
	float: left;
	width: 400px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	padding: 20px;
	margin-right: 20px;	
	margin-bottom: 20px;
}

.index-board-item-inner{
	min-height: 125px;
	padding-left: 120px;
}

.index-last{
	margin-right: 0;
}

.index-board-button {
  margin-top: 20px;
}


.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}

.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


	
</style>