<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image src="/common/image/preview1.jpg" mode="aspectFill" @click="maskChange"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<view class="goBack"></view>
			<view class="count">3 / 9</view>
			<view class="time">11:55</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				
				<view class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">5分</view>
				</view>
				
				<view class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view class="title">
						壁纸信息
					</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">
								壁纸ID：
							</view>
							<text selectable class="value">
								000001
							</text>
						</view>
						
						<view class="row">
							<view class="label">
								分类：
							</view>
							<text class="value class">
								明星美女
							</text>
						</view>
						
						<view class="row">
							<view class="label">
								发布者：
							</view>
							<text class="value">
								薼
							</text>
						</view>
						
						<view class="row">
							<view class="label">
								评分：
							</view>
							<view class="value roteBox">
								<uni-rate readonly value="5"></uni-rate>
								<text class="score">5分</text>
							</view>
						</view>
						
						<view class="row">
							<view class="label">
								摘要：
							</view>
							<text class="value">
								666
							</text>
						</view>
						
						<view class="row">
							<text class="label">
								标签：
							</text>
							<view class="value tabs">
								<view class="tab">
									标签名
								</view>
							</view>
						</view>
						
						<view class="copyright">
						声明：本图片不会用作商用，如有侵权请联系2056115219@qq.com，将会第一时间删除侵权图片！
						</view>
					</view>
				</scroll-view>
				
			</view>
		</uni-popup>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const maskState = ref(true);
	const infoPopup =ref(null);

	const maskChange = ()=>{
		maskState.value = !maskState.value
	}
	
	const clickInfo = ()=>{
		infoPopup.value.open()
	}
	
	const clickInfoClose = ()=>{
		infoPopup.value = !infoPopup.value
	}
</script>

<style lang="scss">
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask{
		
		
		&>view{
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			color: #fff;
			width: fit-content;
		}
		.goBack{
			
		}
		.count{
			top: 10vh;
			background: rgba(0, 0, 0,0.3);
			font-size: 28rpx;
			color: #fff;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}
		.time{
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		.date{
			font-size: 30rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
		}
		.footer{
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(20rpx);
			.box{
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				padding: 2rpx 12rpx;
				.text{
					font-size: 26rpx;
					color: $uni-text-color-grey;
				}
			}
		}
	}
}	 
	.infoPopup{
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		.popHeader{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				color: $uni-text-color-grey;
				font-size: 26rpx;
			}
			.close{
				padding: 6rpx;
			}
		}
		scroll-view{
			max-height: 60vh;
			.content{
				.row{
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;
					.label{
						color: $uni-text-color-grey;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value{
						flex: 1;
						width: 0;
					}
					.roteBox{
						display: flex;
						align-items: center;
						.score{
							font-size: 26rpx;
							color: $uni-text-color-inverse;
							padding-left: 10rpx;
						}
					}
					.tabs{
						display: flex;
						flex-wrap: wrap;
						.tab{
							border: 1px solid $brand-theme-color;
							color:$brand-theme-color;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 1em;
							margin: 0 10rpx 10rpx 0;
						}
					}
					.class{
						color: $brand-theme-color;
					}
					
				}
				.copyright{
					font-size: 28rpx;
					padding: 20rpx;
					background: #F6F6F6;
					color: #666;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
			}
		}
		
	}
</style>
