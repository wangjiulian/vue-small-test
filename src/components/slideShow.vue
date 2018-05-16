<template>
	<div class="slide-show">
		<div class="slide-img">
			<a :herf="slides[nowIndex].href"></a>
			<img :src="slides[nowIndex].src"> 
		</div>
		<h2>{{ slides[nowIndex].title }}</h2>
		<ul class="slide-pages">
			<li>&lt;</li>
			<li v-for="(item,index) in slides">
				<a> {{index + 1 }}</a>
			</li>
			<li>&gt;</li>
		</ul>
		
	</div>
</template>
<script >
	
	export default{
		props:{
			slides:{
				type:Array,
				default:[]
			},
			inv:{
				type:Number,
				default:1000
			}
		},
		data (){
			return{
				nowIndex: 0
			}
		}
	}


</script>

<style scoped>


.slide-show {
	position: relative;
    margin: 15px 15px 15px 0;
	width: 900px;
	height: 500px;
	overflow: hidden;

}

.slide-show h2 {
	position: absolute;
	width: 100%;
	color: #fff;
	background: #000;
	opacity: 0.5;
	bottom: 0;
	height: 30px;
	text-align: left;
	padding-left: 15px;
}
.slide-img {
	width: 100%;
}

.slide-img img{
	width: 100%;
	position: absolute;
	top: 0;
}

.slide-pages{
	position: absolute;
	bottom: 5px;
	right: 15px;
}

.slide-pages li {
	float: left;
	padding: 0 10px;
	cursor: pointer;
	color: #fff;

	
}


</style>