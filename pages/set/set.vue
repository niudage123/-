<template>
	<view>
		<view class="grace-left-padding-wrap">
			<navigator class="grace-list">
				<text class="grace-list-text">头像</text>
				<view>
					<image src="http://img5.imgtn.bdimg.com/it/u=2680621696,3508064843&fm=11&gp=0.jpg" class="grace-list-imgs-l" mode="widthFix"></image>
					<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
				</view>
			</navigator>
			<navigator class="grace-list">
			<text class="grace-list-text">昵称</text>
				<view>
					<text class="grace-list-text grace-list-mr">graceUI</text>
					<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
				</view>
			</navigator>
			<navigator class="grace-list">
			<text class="grace-list-text">手机号</text>
				<view>
					<text class="grace-list-text grace-list-mr">181095588**</text>
					<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
				</view>
			</navigator>
			<navigator class="grace-list grace-noborder">
				<text class="grace-list-text">收款账户</text>
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
		  </navigator>
		</view>
		<view class="grace-left-padding-wrap" style="margin-top:30upx;">
			<navigator class="grace-list">
				<text class="grace-list-text">消息通知设置</text>
				<switch checked></switch>
			</navigator>
		</view>

		<view class="grace-left-padding-wrap" style="margin-top:30upx;">
			<navigator class="grace-list">
				<text class="grace-list-text">去好评</text>
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
			</navigator>
			<navigator class="grace-list">
				<text class="grace-list-text">推荐好友</text>
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
			</navigator>
			<navigator class="grace-list grace-noborder">
				<text class="grace-list-text">关于我们</text>
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-right"></text>
			</navigator>
		</view>

		<view style="width:100%; margin-top:30upx;">
			<button style="width:100%; background:#FFFFFF; border:0;">退出登录</button>
		</view>
		<view style="width:100%; height:60upx;"></view>
	</view>
</template>
<script>
export default {}
</script>
<style>
page{background:#F6F7F8;}
</style>