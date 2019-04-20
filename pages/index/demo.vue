<template>
	<!-- 主体 start -->
	<view class="index-body">
		<!-- 搜索框 -->
		<view class="grace-padding" style="background-color: #00c143;">
			<view class="grace-rows" style="margin-top:15px;">
				<view class="grace-items grace-rows-demo " style="width:20%; line-height: 30px; margin-right: 10px; color: #FFFFFF;">
						<navigator :url="'../../components/'+lists.path">
							<view style="font-size: 13px; text-align: right;">
								<text style="font-size: 13px; text-align: right;">{{location}}</text>
								<text class="grace-iconfont icon-arrow-down" style="font-size: 13px;"></text>
							</view>
						</navigator>
				</view>
				<view class="grace-items grace-bg-green grace-rows-demo grace-center" style="width:90%;margin-right: 18px;">
					<view class="grace-search-in" style="border-radius: 3px;">
						<view class="grace-search-icon"></view>
						<input type="search" style="height:28upx; line-height:28upx; font-size:12px; " @input="searchChange" @confirm="searchNow" :value="searchKey" placeholder="您附近的寄养家庭"></input>
					</view>
				</view>
			</view>
		</view>
		<!--九宫格start -->
		<view class="grace-padding">
		  
		  <view style="padding:50upx 0;" class="grace-wrap">
				<navigator class="grace-boxes" url="../../components/submit-form-family">
					<view class="grace-boxes-img iconfont icon-dog" style="color: #09BB07;font-size: 30px;">
					  
					</view>
					<view class="grace-boxes-text" style="color: #00c143; font-size: 13px;">我要寄养</view>
				</navigator>
				<navigator class="grace-boxes" @tap="notExistFunc">
					<view class="grace-boxes-img iconfont icon-cat" style="color: #09BB07;font-size: 30px;">
					
					</view>
					<view class="grace-boxes-text" style="color: #00c143; font-size: 13px;">寄养家庭</view>
				</navigator>
				
				<navigator class="grace-boxes" @tap="notExistFunc">
					<view class="grace-boxes-img iconfont icon-story" style="color: #09BB07;font-size: 30px;">
					
					</view>
					<view class="grace-boxes-text" style="color: #00c143; font-size: 13px;">故事</view>
				</navigator>
				
				<navigator class="grace-boxes" @tap="notExistFunc">
					<view class="grace-boxes-img iconfont icon-shequ" style="color: #09BB07;font-size: 30px;">
					
					</view>
					<view class="grace-boxes-text" style="color: #00c143; font-size: 13px;">社区</view>
				</navigator>
			</view>
		</view>
		<!--九宫格end -->
		<!-- 轮播图 -->
		<graceSwiper swiperId="garce-swiper-1" :items="swiperItems"></graceSwiper>
		
		<!-- 滚动公告start -->
		<view class="grace-padding" style="border-bottom:dashed 1px #2FBF79;">
			<graceSpeaker  :msgs="speakerMsgs"></graceSpeaker>
		</view>
		<!-- 滚动公告end -->
		
		<!-- 品牌广告 strat -->
		<view class="grace-title grace-nowrap grace-space-between" style="margin-top:12px;">
			<view class="grace-h5 grace-blod">寄养家庭推荐</view>
			<navigator class="grace-more-r">更多<text class="grace-iconfont icon-arrow-right"></text></navigator>
		</view>
		<scroll-view class="grace-scroll-x" scroll-x style="margin-top:10px;">
			<view class="grace-items"><image src="../../static/pinpai/1.png" mode="widthFix"></image></view>
			<view class="grace-items"><image src="../../static/pinpai/2.png" mode="widthFix"></image></view>
			<view class="grace-items"><image src="../../static/pinpai/3.png" mode="widthFix"></image></view>
			<view class="grace-items"><image src="../../static/pinpai/4.png" mode="widthFix"></image></view>
			<view class="grace-items"><image src="../../static/pinpai/5.png" mode="widthFix"></image></view>
		</scroll-view>
		<!-- 单图广告 -->
		<view class="index-banner">
			<image src="../../static/index-banner.png" mode="widthFix"></image>
		</view>
		<!-- 分类产品展示 图片等大 可以循环多个分类及分类对应的商品 strat -->
		<!-- <view class="grace-title grace-nowrap grace-space-between" style="margin-top:12px;">
			<view class="grace-h5 grace-blod">某个分类</view>
			<navigator class="grace-more-r">更多<text class="grace-iconfont icon-arrow-right"></text></navigator>
		</view>
		<view class="grace-imgitems">
			
			<navigator url="../product-info/product-info" class="grace-items">
				<image src="https://img.alicdn.com/bao/uploaded/i2/452325706/O1CN011s1OQAszoPWK8Rt_!!0-item_pic.jpg" mode="widthFix"></image>
				<view class="grace-imgitems-text">拉风大衣</view>
				<view class="grace-imgitems-more">
					￥19.99
					<view class="grace-imgitems-button">购买</view>
				</view>
			</navigator>
			<navigator url="../product-info/product-info" class="grace-items">
				<image src="https://img.alicdn.com/bao/uploaded/i1/2787417447/O1CN0124sly8iXb80L4OS_!!0-item_pic.jpg" mode="widthFix"></image>
				<view class="grace-imgitems-text">特价T恤</view>
				<view class="grace-imgitems-more">
					￥9.99
					<view class="grace-imgitems-button">购买</view>
				</view>
			</navigator>
		</view> -->
		<!-- 分类产品展示 图片等大 可以循环多个分类及分类对应的商品 end -->
		
		<!-- 分类产品展示 end -->
		<!-- 猜你喜欢 strat -->
		<view class="grace-title grace-nowrap grace-space-between" style="margin-top:12px;">
			<view class="grace-h5 grace-blod">猜你喜欢</view>
		</view>
		<view class="grace-waterfall">
			<view class="list" v-for="(lists, index1) in productList" :key="index1">
				<navigator url="../product-info/product-info" class="items" v-for="(products, index2) in lists" :key="index2">
					<image :src="products.img" class="imgs" mode="widthFix"></image>
					<view class="title">{{products.title}}</view>
					<view class="price">
						{{products.price}}
						<view class="tips">{{products.tip}}</view>
					</view>
				</navigator>
			</view>
		</view> 
		<graceLoading :loadingType="loadingType"></graceLoading> 
		<!-- 猜你喜欢 end -->
	</view>
	<!-- 主体 end -->
</template>
<script>
var page = 1, _self;
var dataObj = require('../../data/data.js');
var products = dataObj.products;
import {
  mapState,
  mapMutations
 } from 'vuex';
import graceSwiper from "../../graceUI/components/graceSwiper.vue";
import graceLoading from "../../graceUI/components/graceLoading.vue";
import graceSpeaker from "../../components/graceSpeaker.vue"

export default {
	data() {
		return {
			// 轮播数据
			// 图片数据要用网络url，因为体积太大了
			swiperItems : [
				{ imgUrl: 'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png', path : ""},
				{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg', path : ""},
				{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg', path : ""}
			],
			// 瀑布流加载
			loading: false,
			loadingType: 0,
			isEnd: false,
			productList : [[],[]],
			// 搜索
			searchKey:'',
			lists : { path: "city"},
			publicTalkStaticUrl : this.publicTalkStaticUrl,
			speakerIconImg: this.publicTalkStaticUrl + 'speaker.png',
			speakerMsgs : [
			  { title: "边牧家庭故事分享", url: "flex", opentype: "navigate"},
			  { title: "我与狗狗的那几年", url: "../index/index", opentype: "switchTab"},
			],
			// location: '北京'
		}
	},
	
	onLoad() {
		_self = this;
		this.getList();
	},
	onReachBottom : function(){
		this.getList();
	},
	computed:{
	   ...mapState(['location']),
	   location: function () {
		   return this.$store.state.location
	   }
	},
	methods: {
		getList : function(){
			//最后一页判断[模拟，正式环境请根据 api 接口请求结果判断]
			if(page > 3){
				this.loadingType = 2;
				return;
			}
			this.loadingType = 1;
			//模拟api请求延迟关闭 Loading
			setTimeout(function () {
				var lArr = _self.productList[0];
				var rArr = _self.productList[1];
				//填充数组[此处的 products 数据应该来自与api接口数据]
				//数据格式见 "/data/data.js"
				products = dataObj.getArrRandomly(products); //打乱排序【模拟api】
				for (var i = 0; i < products.length; i++) {
					if (i % 2 == 0) {
						lArr.push(products[i]);
					} else {
						rArr.push(products[i]);
					}
				}
				_self.productList = [lArr, rArr];
				_self.loadingType = 0;
				page++;
			}, 1000);
		},
		
		bindDateChange : function(e){
			this.dateValue = e.detail.value;
		},
		formSubmit : function(e){
			wx.showToast({title:'请观察控制台', icon:'none'});
			console.log(JSON.stringify(e.detail.value));
		},
		changeAccordion : function(e){
			var accordionIndex = e.currentTarget.id;
			if (this.accordionActive == accordionIndex){accordionIndex = '';}
			this.accordionActive = accordionIndex;
		},
		notExistFunc : function(e){
			wx.showToast({title:'功能正在完善', icon:'none'});
		},
	},
	components:{
		graceSwiper,
		graceLoading,
		graceSpeaker
	}
}
</script>
<style>
.grace-search-in{border-radius:0;}
.input-placeholder{height:28upx !important; line-height:28upx ;}
/* .index-body{background:#E52852; height:350px; padding:8px 15upx; border-bottom-left-radius:30px; border-bottom-right-radius:30px;} */
.grace-boxes-text{color:#FFF;}
.grace-scroll-x{background:#F2F3F4; padding:6px 5px !important; width:710upx !important;}
.grace-scroll-x image{width:100%;}
.grace-scroll-x .grace-items{width:230upx; height:auto; font-size:0; margin:0 6upx;}
.index-banner{margin:10px 0;}
.index-banner image{width:100%;}
.grace-swiper-msg{width:100%; padding:10upx 0; display:flex; flex-wrap:nowrap;}
.grace-swiper-msg-icon{width:20px; margin:5px; flex-shrink:0;}
.grace-swiper-msg-icon image{width:20px; height:20px;}
.grace-swiper-msg swiper{width:100%; height:30px;}
.grace-swiper-msg swiper-item{line-height:30px;}
.grace-swiper-msg navigator{line-height:30px;}
</style>