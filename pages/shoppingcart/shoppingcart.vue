<template>
	<view class="">
		
	</view>
</template>
<script>
export default {
	data() {
		
	},
	onShow: function(){
		wx.switchTab({
			url:'../index/index'
		});
		setTimeout(function(){
			wx.navigateTo({
				url:"../shopping-cart/shopping-cart"
			});
		}, 200);
	}
}
</script>
<style>
page{background:#F6F7F8;}
</style>