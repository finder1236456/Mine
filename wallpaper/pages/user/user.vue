<template>
	<view class="userLayout PageBg">
		<view class="userInfo">
			<view class="avater">
				<image src="/static/image/PixPin_2025-04-17_18-32-41.png" mode="aspectFill"></image>
			</view>
			<view class="nickname">
				薼
			</view>
			<view class="address">
				来自于：四川
			</view>
		</view>
		
		
		
		<view class="section">
			<view class="list">
				<navigator url="/pages/classlist/classlist" class="row">
					<view class="left">
						<uni-icons type="download" size="20" color="#b3e0f2"></uni-icons>
						<view class="text">
							我的下载
						</view>
					</view>
					<view class="right">
						<view class="text">
							20
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</navigator>
				
				<navigator url="/pages/classlist/classlist" class="row">
					<view class="left">
						<uni-icons type="star-filled" size="20" color="#b3e0f2"></uni-icons>
						<view class="text">
							我的评分
						</view>
					</view>
					<view class="right">
						<view class="text">
							2
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</navigator>
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20" color="#b3e0f2"></uni-icons>
						<view class="text">
							联系客服
						</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					
					<!-- #ifdef MP -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->  <!-- 判断终端类型进行不同操作 -->
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="20" color="#b3e0f2"></uni-icons>
						<view class="text">
							订阅更新
						</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatbubble-filled" size="20" color="#b3e0f2"></uni-icons>
						<view class="text">
							常见问题
						</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.userLayout{
		.userInfo{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 50rpx 0;
			.avater{
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					height: 100%;
					width: 100%;
				}
			}
			.nickname{
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}
			.address{
				color: #aaa;
			}
		}
		.section{
			width: 690rpx;
			margin: 50rpx auto;
			border: 1px solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
			.list{
				.row{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					height: 100rpx;
					border-bottom: 1px solid #eee;
					position: relative;
					&:last-child{border-bottom: 0}
					.left{
						display: flex;
						align-items: center;
						.text{
							padding-left: 20rpx;
							color: #666;
						}
					}
					.right{
						display: flex;
						align-items: center;
						.text{
							font-size: 28rpx;
							color: #aaa;
						}
					}
					button{
						position: absolute;
						top: 0;
						left: 0;
						height: 100rpx;
						width: 100%;
						opacity: 0;
					}
				}
			}
		}
	}
		   
</style>
