<template>
	<!-- 发布需求start-->
	<view class="grace-padding" style="background-color: #F8F8F8;">
		<view class="grace-accordion" style="margin-top: 20px;">
		<view class="grace-accordion-items">
			<view style="text-align: left;font-weight:bold;color: red; " :class="[accordionActive == 'grace-accordion-1' ? 'grace-accordion-title grace-current' : 'grace-accordion-title']" id="grace-accordion-1" @tap="changeAccordion">
				我要寄养
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-down" v-if="accordionActive == 'grace-accordion-1'"></text>
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-up" wx:else></text>
			</view>
			<view class="grace-accordion-body" v-if="accordionActive == 'grace-accordion-1'">
			<view class="grace-form">
					<form @submit="formSubmit">
						<view class="grace-items">
							<view class="grace-label">姓名</view>
							<input type="text" class="input" name="name"></input>
						</view>
						<view class="grace-items">
							<view class="grace-label">性别</view>
							<view class="grace-form-r">
								<picker @change="bindPickerChange" :value="genderIndex" :range="gender" name="gender">
									<text>{{gender[genderIndex]}}</text>
								</picker>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label">出生年月</view>
							<view class="grace-form-r">
								<picker @change="bindDateChange" :value="dateValue" mode="date" name="bd" start="1940-01-01" end="2019-01-01">
									<text>{{dateValue}}</text>
								</picker>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label">自动保存</view>
							<view class="grace-form-r"><switch checked /></view>
						</view>
						<view class="grace-items">
							<view class="grace-label">个人爱好</view>
							<view class="grace-label-x">
								<checkbox-group name="aihao">
									<label><checkbox value="1"></checkbox>读书</label>
									<label><checkbox value="2"></checkbox>运动</label>
									<label><checkbox value="3"></checkbox>音乐</label>
									<label><checkbox value="4"></checkbox>书法</label>
									<label><checkbox value="5"></checkbox>旅行</label>
									<label><checkbox value="6"></checkbox>其他</label>
								</checkbox-group>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label">单项选择</view>
							<view class="grace-label-y">
								<radio-group name="danxuan">
									<label><radio value="1"></radio>小学</label>
									<label><radio value="2"></radio>大学</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-items grace-noborder">
							<view class="grace-label">个人介绍</view>
							<view class="grace-form-r">
								<textarea placeholder="说点什么吧....." name="desc"></textarea>
							</view>
						</view>
						<view style="padding:22upx 0;">
							<button formType="submit" type="primary" style="width:100%;">提交</button>
						</view>
					</form>
				</view>
			</view>
			</view>
		</view>
			<view style="text-align: left;font-weight:bold;color: red;" :class="[accordionActive == 'grace-accordion-2' ? 'grace-accordion-title grace-current' : 'grace-accordion-title']" id="grace-accordion-2" @tap="changeAccordion">
				成为寄养家庭
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-down" v-if="accordionActive == 'grace-accordion-2'"></text>
				<text class="grace-list-imgs-arrow grace-iconfont icon-arrow-up" wx:else></text>
			</view>
			<view class="grace-accordion-body" v-if="accordionActive == 'grace-accordion-2'">
			<view class="grace-form">
					<form @submit="formSubmit">
						<view class="grace-items">
							<view class="grace-label">姓名</view>
							<input type="text" class="input" name="name"></input>
						</view>
						<view class="grace-items">
							<view class="grace-label">性别</view>
							<view class="grace-form-r">
								<picker @change="bindPickerChange" :value="genderIndex" :range="gender" name="gender">
									<text>{{gender[genderIndex]}}</text>
								</picker>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label">出生年月</view>
							<view class="grace-form-r">
								<picker @change="bindDateChange" :value="dateValue" mode="date" name="bd" start="2018-01-01" end="2019-01-01">
									<text>{{dateValue}}</text>
								</picker>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label">自动保存</view>
							<view class="grace-form-r"><switch checked /></view>
						</view>
						<view class="grace-items">
							<view class="grace-label">个人爱好</view>
							<view class="grace-label-x">
								<checkbox-group name="aihao">
									<label><checkbox value="1"></checkbox>读书</label>
									<label><checkbox value="2"></checkbox>运动</label>
									<label><checkbox value="3"></checkbox>音乐</label>
									<label><checkbox value="4"></checkbox>书法</label>
									<label><checkbox value="5"></checkbox>旅行</label>
									<label><checkbox value="6"></checkbox>其他</label>
								</checkbox-group>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label">单项选择</view>
							<view class="grace-label-y">
								<radio-group name="danxuan">
									<label><radio value="1"></radio>小学</label>
									<label><radio value="2"></radio>大学</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-items grace-noborder">
							<view class="grace-label">个人介绍</view>
							<view class="grace-form-r">
								<textarea placeholder="说点什么吧....." name="desc"></textarea>
							</view>
						</view>
						<view style="padding:22upx 0;">
							<button formType="submit" type="primary" style="width:100%;">提交</button>
						</view>
					</form>
				</view>
			</view>
			</view>
		</view>
	</view>
		<!-- 发布需求end-->
</template>

<script>
	export default {
		data() {
			return {
				genderIndex: 0,
				gender : ['男', '女'],
				dateValue : "请选择",
				accordionActive: "grace-accordion-1",
			};
		},
		methods: {
			formSubmit : function(e){
				wx.showToast({title:'请观察控制台', icon:'none'});
				console.log(JSON.stringify(e.detail.value));
			},
			changeAccordion : function(e){
				var accordionIndex = e.currentTarget.id;
				if (this.accordionActive == accordionIndex){accordionIndex = '';}
				this.accordionActive = accordionIndex;
			},
		}
	}
</script>

<style>

</style>
