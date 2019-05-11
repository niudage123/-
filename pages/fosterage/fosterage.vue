<template>
	<view class="fos_index">
		<!-- 轮播图 -->
		<view class="banner">
			<graceSwiper swiperId="garce-swiper-2" :items="swiperItems"></graceSwiper>
		</view>
		<view class="fosterage_info banner">
			<text class="info_tit">成为寄养家庭，每月额外收入可达XXX</text>
			<text class="info_sum">通过iPet，在为自家毛孩子积攒口粮费和住宿基金之余，还可以结识有趣的宠爸宠妈，更可以给自己家的毛孩子寻找合适的小伙伴！</text>
			<text class="info_link">成为寄养家庭完全免费！</text>
			<text class="info_but">立即成为寄养家庭</text>
		</view>
		<view class="banner">
			<text class="info_tit">谁是本期超赞家庭，戳进来看看</text>
			<Litpics :Litpics="Litpics"></Litpics>
		</view>
		
		
		<view class="banner">
			<text class="info_tit">大咖访谈：寄养师进阶之路</text>
			
			<Bigpics :Bigpics="Bigpics_items"></Bigpics>
		</view>
		
		<!--view>测试数据
			<view class="list" v-for="(value, index) in fos_data" >
				<view  class="items" v-on:click="greet(index)">
					<image :src="value.pic" class="imgs" mode="widthFix"></image>
					<view class="title">{{value.title}}</view>
				</view>
			</view>
		</view-->
	</view>
</template>

<script>
	var dataObj = require('../../data/data.js');

	//console.log(plus);
	import graceSwiper from "../../graceUI/components/graceSwiper.vue";
	import Bigpics from "../../components/Bigpics.vue";
	import Litpics from "../../components/Littlepics.vue";
	export default {
		data() {
			return {
				swiperItems : [
					{ imgUrl: 'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png', path : ""},
					{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg', path : ""},
					{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg', path : ""}
				],
				Bigpics_items:[
					{
						tit:'快乐家庭宠物寄养',
						url:'',
						sum:'内容描述生活中小动物久是自己的亲人，没有谁比它更懂主人的心，有了它……',
						tx_img:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png',
						tx_tit:'寄养师',
						tx_nick:'花家',
						big_pic:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png'
					},{
						tit:'快乐家庭宠物寄养',
						url:'',
						sum:'内容描述生活中小动物久是自己的亲人，没有谁比它更懂主人的心，有了它……',
						tx_img:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png',
						tx_tit:'寄养师',
						tx_nick:'花家',
						big_pic:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png'
					},
					{
						tit:'快乐家庭宠物寄养',
						url:'',
						sum:'内容描述生活中小动物久是自己的亲人，没有谁比它更懂主人的心，有了它……',
						tx_img:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png',
						tx_tit:'寄养师',
						tx_nick:'花家',
						big_pic:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png'
					},
				],
				Litpics:[
					{
						tit:'快乐家庭宠物寄养',
						distance:'1.3km',
						price:'￥588/晚',
						pic:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png'
					},
					{
						tit:'快乐家庭宠物寄养',
						distance:'1.3km',
						price:'￥588/晚',
						pic:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png'
					},
					{
						tit:'快乐家庭宠物寄养',
						distance:'1.3km',
						price:'￥588/晚',
						pic:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png'
					}
				],
				fos_data:{},
				//加载代码
				loading: false,
				loadingType: 0,
				isEnd: false,
				
			};
		},
		onLoad() {
			//_self = this;
			this.getList();
		},
		methods: {
			getList : function(){
				
				
				//最后一页判断[模拟，正式环境请根据 api 接口请求结果判断]
				/*if(page > 3){
					this.loadingType = 2;
					return;
				}
				this.loadingType = 1;*/
				//模拟api请求延迟关闭 Loading
				
				uni.request({
					url: 'http://192.168.1.100:3001/inter/mao',
					success: (res) => {
						
						this.fos_data =res.data;
						console.log(this.fos_data);
						
					}
				});

			},
			greet:function(index){
				uni.navigateTo({
					url: 'test?id=index'
				});
			},
		},
		components:{
			graceSwiper,
			Bigpics,
			Litpics
			
		},
		
	}
	
	

</script>

<style>

.info_tit{
	font-weight: bold;
	width:100%;
	
	font-size: 32upx;
}
.info_sum{
	width:100%;
	
	font-size: 26upx;
    line-height: 48upx;
	margin: 10upx 0;
}
.info_link{
	width:100%;
	
	color: #F39319;
	font-size: 26upx;
}
.info_but{
	width: 550upx;
	height:88upx;
	background-color:#F39319 ;
	
	text-align: center;
	line-height: 88upx;
	color: white;
	border-radius: 44upx;
	margin-left: 50upx;
	margin-top: 70upx;
}


</style>
