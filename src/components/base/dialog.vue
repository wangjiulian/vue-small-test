<template>
	<div id="dialog-wrap">
		<div class="dialog-cover" v-if="isShow" @click="closeMySelf"></div>

		   <transition name='drop'>
		   	<div class="dialog-content" v-if="isShow">
				<div class="dialog-close" @click="closeMySelf">X</div>
				<slot></slot>
			</div>		
		   </transition>
			
	</div>
</template>

<script >

export default{
	props:{
		isShow:{
			type:Boolean,
			default:false
		}
	},
	methods:{
		closeMySelf (){
			this.$emit('on-close')
		}
	}
}
	

</script>

<style scoped>


.dialog-wrap {
	position: fixed;
	width: 100%;
	height: 100%;	
}

.dialog-cover {
	position: fixed;
	background: #000;
	opacity: .3;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
}
.dialog-content {
    background: #fff;
	width: 50%;
	position: fixed;
	max-height: 50%;
	overflow: auto;
	top: 20%;
	left: 25%;
	z-index: 7;
	border: 2px solid #464068;
	padding: 2%;
	line-height: 1.6;

}

.dialog-close {
	position: absolute;
	right: 5px;
	top: 5px;
	width: 20px;
	height: 20px;
	text-align: center;
	cursor: pointer;
}

.dialog-close:hover {
  color: #4fc08d;
}


.drop-enter {
	transform: translateY(-500px);
}

.drop-enter-active {
	transition: all .5s ease;
}

.drop-leave-active {
  transform: translateY(-500px);
  transition: all .3s ease;

}



	

</style>
