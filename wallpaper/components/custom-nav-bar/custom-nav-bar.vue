<template>
	<view class="layout">
		<view class="navBar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">
					{{title}}
				</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:getNavBarHeight()+'px'}">
			
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {getTitleBarHeight,getStatusBarHeight,getNavBarHeight} from '@/utils/system.js'
	defineProps({
		title:{
			type:String,
			default:"壁纸"
		}
	})
</script>

<style lang="scss" scoped>
.layout{
	.navBar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom,rgba(0,0,0,0),#fff 400rpx), 
		linear-gradient(to right,#b7c9e0 20%,#2691b3);
		.statusBar{
			
		}
		.titleBar{
			display: flex;
			padding: 0 30rpx;
			.title{
				font-size: 25rpx;
				font-weight: 700;
				color: $uni-text-color;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255,255,255,0.4);
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
				}
			}
		}
	}
	.fill{
		
	}
}
</style>