<template>
	<view>
		<swiper indicator-dots indicator-color="rgba(255,255,255,0.3)" 
		indicator-active-color="#ffffff" circular autoplay interval="2000" vertical>
			<swiper-item><image src="../../static/重庆.jpg" mode="aspectFill"></image></swiper-item>
			<swiper-item><image src="../../static/重庆6.jpg" mode="aspectFill"></image></swiper-item>
			<swiper-item><image src="../../static/重庆7.jpg" mode="aspectFill"></image></swiper-item>
		</swiper>
	</view>
	
	-----
	<navigator url="/pages/demo2/demo2">跳转到demo2</navigator>
	
	
	
</template>

<script>

</script>

<style lang="scss">
.pic1{
	width: 150px;
	height: 150px;
}
.pic2{
	width: 200px;
	height: 200px;
}
.pic3{
	height: 300px;
}
	
	
swiper{
	width: 100vw;
	height: 500px;
	border:1px solid #fff;
	swiper-item{
		width: 100%;
		height: 100%;
		background: pink;
		image{
			
			width: 100%;
			height: 100%;
		}
	}
	swiper-item:nth-child(2n){
		background: orange;
	}
}
</style>
