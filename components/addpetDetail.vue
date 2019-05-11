<template>
	<view>
		<text class="login_tit">宠物信息</text>
		<view class="login_sum">请如实添加您所有的现有宠物</view>
		<view class="input_row" style="display: FLEX;justify-content: space-between;    align-items: start;border-bottom: none;">
			<view class="tabs" style="width: 100%;height: 90upx;    justify-content: center;">
				<text class="tab" data-isarea='0' @click="chooseTag" :class="isarea=='0'?'cur':''">狗狗</text>
				<text class="tab" data-isarea='1' @click="chooseTag" :class="isarea=='1'?'cur':''">猫咪</text>
			</view>
		</view>
		<view class="input_row">
			<view class="tx">
				<image :src=Detail.tx  class="tx_img"></image>	
			</view>
			<input type="text" :value=Detail.nick placeholder='昵称' style="font-size: 24upx;display: flex;justify-content: CENTER;    text-align: CENTER;" />
		</view>
		<view class="input_row" style="display: flex;    align-items: center;">
			<picker data-pick='index' @change="bindPickerChange" :value="index" :range="pets_kind" class="input_pick">
				<view class="uni-input">{{pets_kind[index]}}</view>
			</picker>
			<picker data-pick='index' @change="bindPickerChange" :value="index" :range="pets_year" class="input_pick">
				<view class="uni-input">{{pets_year[index]}}</view>
			</picker>
			<picker data-pick='index' @change="bindPickerChange" :value="index" :range="pets_year" class="input_pick">
				<view class="uni-input">{{pets_year[index]}}</view>
			</picker>
			<input type="text" value="" placeholder='' class="input_pick" style="font-size: 24upx;display: flex;justify-content: CENTER;" />kg
		</view>
		<view class="input_tit" style="">*疫苗信息(最近一次接种时间)</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between;  ">
			<text class="input_tit" style="color: #000000;" >四联</text>
			<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{date}}</view>
			</picker>
			<view class="upload_btn">证明</view>
		</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between; ">
			<text class="input_tit" style="color: #000000;" >狂犬</text>
			<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{date}}</view>
			</picker>
			<view class="upload_btn">已上传</view>
		</view>
		<view class="input_tit" style="">*驱虫信息(最近一次驱虫时间)</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between;  ">
			<text class="input_tit" style="color: #000000;" >体内</text>
			<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{date}}</view>
			</picker>
			<text class="input_tit" style="color: #000000;" >体外</text>
			<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{date}}</view>
			</picker>
		</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between; ">
			<text class="input_tit" style="color: #000000;" >*是否绝育</text>
			<switch style="margin-left: 20upx;" color='#F39319' />
		</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between; ">
			<text class="input_tit" style="color: #000000;" >*是否有狗证</text>
			<view class="upload_btn">证明</view>
			<switch style="margin-left: 20upx;" color='#F39319' />
		</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between; ">
			<text class="input_tit" style="color: #000000;" >*是否自主控制大小便</text>
			<switch style="margin-left: 20upx;" color='#F39319' />
		</view>
		<view class="input_row"  style="display: FLEX;justify-content: space-between; ">
			<text class="input_tit" style="color: #000000;" >*是否胆小</text>
			<switch style="margin-left: 20upx;" color='#F39319' />
		</view>
		<view class="input_row" style=" justify-content: center;display: flex;flex-wrap: wrap;">
			<!-- <navigator url="../login-family/login-family?v=2"> -->
				<view class="input_btn cur" @click="upload_btn">保存并继续</view>
			<!-- </navigator> -->
			<view class="input_btn">保存并退出</view>
		</view>
		
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
		//-${day}
		return `${year}-${month}`;
	}
	export default {
		data() {
			return {
				date: getDate({
					format: true
				}),
				isarea:0,
				Detail: this.petDetail,
				pets_kind:['品类','猫','狗'],
				pets_year:['1年','2年','3年及以上'],
				pets:[{kind:2,year:2}],
				index:0,
				startDate:getDate('start'),
				endDate:getDate('end'),
				tx:'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png',
				nick:'昵称',
				sex:'女',
				age:'2岁',
				kind:'猫'
				//key:this.key,
			};
		},
		props:{
			petDetail : {
				type : Object,
				default : function(){return {};}
			},
			
			// key: {
			// 	type : Number,
			// 	default : function(){return {};}
			// }
		},
		methods:{
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			chooseTag:function(e){
				let dataset =e.target.dataset ; 
				for (var key in dataset) ;
				//console.log(dataset[key]);
				this[key]=dataset[key];
			},
			upload_btn:function(e){
				let data = {
					tx:this.Detail.tx?this.Detail.tx:this.tx,
					nick:this.Detail.nick?this.Detail.nick:this.nick,
					sex:this.sex,
					age:this.age,
					kind:this.kind,
					key:this.Detail.key==undefined&&this.Detail.key!=0?-1:this.Detail.key,
					}
				this.$emit('sendmsg',data);
			},
			
		},
		created() {
			console.log(this.petDetail);
			console.log(this.Detail);
		},
		watch:{
			petDetail(val,oldVal){
				console.log(val);
				console.log(oldVal);
			}
		}
	}
</script>

<style>
	.upload_btn{
		background:url(../static/logos/f-info.png) no-repeat left;
		background-size: 40upx 40upx;
		padding-left: 54upx;
		color: #8E8585;
		width: 110upx;
	}
.login_tit{
		background:url(../static/logos/f-info.png) no-repeat left;
		background-size: 42upx 38upx;
		padding-left: 54upx;
		font-size:36upx;
		font-weight: bold;
		width: 100%;
		margin-top: 20upx;
	}
	.login_sum{
		color: #8E8585;
		font-size:24upx;
		margin-top: 10upx;
	}
	.input_row{
		width: 100%;
		margin-bottom: 20upx;
		margin-top: 20upx;
		align-items: center;
	}
	.input_tit{
		color: #8E8585;
		font-size: 28upx;
		line-height: 56upx;
	}
	.tabs{
		display: flex;  
		flex-wrap:wrap;
		justify-content: start;
		align-items: center;
	}
	.tab{
		background:rgba(250,248,247,1);
		border-radius:40upx;
		padding: 8upx 36upx;
		margin: 15upx 25upx;
		
		font-weight:500;
		font-size: 24upx;
	}
	.tab.cur{
		background-color: rgba(243,147,25,0.15);
		color: #F39319;
	}
	.tx {
	    justify-content: center;
	    display: flex;
	}
	.tx_img{
		width: 128upx;
	    height: 128upx;
	    border: 4upx solid #F39319;
	    border-radius: 50%;
	}
	.input_pick{
		background:rgba(250,248,247,1);
		border-radius:10upx;
		color:rgba(21,21,21,1);
		line-height:52upx;
		font-size:28upx;
		width: 120upx;
		height: 52upx;
		/* text-indent: 1em; */
		margin-right: 40upx;
		text-align: center;
		}
		.input_btn{
			width:450upx;
			height:88upx;
			color:rgba(243,147,25,1);
			font-size:32upx;
			text-align: center;
			line-height: 88upx;
			margin-bottom: 20upx;
		}
		.input_btn.cur{
			background:rgba(243,147,25,1);
			border-radius:22px;
			color:white;
		}
</style>
