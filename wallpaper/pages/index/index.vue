<template>
	<view class="HomeLayout PageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(0,0,0,0.5)" indicator-active-color="#c8c7cc" autoplay>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="port">
			<view class="left">
				<uni-icons type="sound-filled" size="24" color="#b3e0f2"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="right">
			<uni-icons type="right" size="24" color="#cbcbcb"></uni-icons>
			</view>
		</view>
		
		<view class="selector">
			<common-title>
				<template #name>
					 每日推荐
				</template>
				<template #custom>
					<view class="data">
						<uni-icons type="calendar" size="24" color="#b3e0f2"></uni-icons>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x class="scroll-container" >
					<view class="box" v-for="item in randomList" @click="goPreview">
						<image :src="item.smallPicurl" :key="item._id" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
	
	<view class="theme">
		<common-title>
			<template #name>
				专题精选
			</template>
			<template #custom>
				<navigator url="" class="more">More+</navigator>
			</template>
		</common-title>
		
		<view class="content">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item">
				</theme-item>
			<theme-item :isMore="true"> </theme-item>
		</view>
		
		
	</view>
	
</template>

<script setup>
	import { ref } from 'vue';
	import {apiGetBanner,apiGetRandom,apiGetClassify} from '@/api/apis.js'
	
	const bannerList = ref([]);
	const randomList =ref([]);
	const classifyList =ref([]);
	
	const getBanner =async ()=>{
		let res = await apiGetBanner();
		bannerList.value = res.data.data;
	}
	
	
	const getDayRandom =async ()=>{
		let res = await apiGetRandom();
		randomList.value = res.data.data;
	}
	
	const getClassify =async()=>{
		let res = await apiGetClassify({
			select:true
		});
		classifyList.value = res.data.data;
	}
	
	
	const goPreview = ()=>{
		uni.navigateTo({
			url:"/pages/preview/preview"
		})
	}
	
	
	getBanner();
	getDayRandom();
	getClassify();
</script>

<style lang="scss">
	.HomeLayout{
		.banner{
			width: 760rpx;
			padding: 30rpx 0;
			swiper{
				width: 760rpx;
				height: 320rpx;
				&-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		.port{
			width: 690rpx;
			height: 70rpx;
			line-height: 70rpx;
			background-color: #f1f1f1;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				color: #b3e0f2;
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text{
					font-size: 28rpx;
					font-weight: 600;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.iconfont{
					font-size: 30rpx;
				}
			}
		}
	}
	
	.selector{
		padding-top: 50rpx;
		.data {
			font-size: 24rpx;
			color: #b3e0f2;
			align-items: center;
		}
		.content{
			width: 100%;
			margin-top: 30rpx;
			.scroll-container {
				white-space: nowrap;
				padding: 0 30rpx;
				.box{
					width: 220rpx;
					height: 380rpx;
					display: inline-block;
					margin-right: 20rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 16rpx;
					}
				}
			}
		}
	}
	
	.theme{
		margin-top: 50rpx;
		.more{
			font-size: 32rpx;
			color: #666;
		}
		.content{
			margin-top: 30rpx;
			padding: 0  30rpx;
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
</style>
