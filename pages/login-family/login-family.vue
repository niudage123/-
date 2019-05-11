<template>
	<view class="fos_index">
		<view class="banner">
			<processBar :proBar="proBar"></processBar>
		</view>
		<!-- process 1-1-0 -->
		<view class="banner" v-if="proBar[0]==1&&proBar[1]==1">
			<text class="login_tit">房屋信息</text>
			<text class="login_sum" style="margin-bottom: 40upx;">家庭简介将展示在您的首页</text>
			<view class="input_row">
				<input type="text" value="" placeholder='*家庭昵称' />
			</view>
			<view class="input_row">
				<text class="input_tit">*家庭简介</text>
				<view class="textarea_bg">
					<textarea class="login_textarea" value="介绍您提供的服务，让大家知道您和毛孩儿们的互动日常，以及您向寄养主人反馈爱宠讯息的频率等，这样会有更多关注，提高您的信任值哦！如果您有希望寄养的毛孩儿们注意的，也请写在这里！" placeholder="" />				
				</view>
			</view>
			<view class="input_row">
				<input type="text" value="" placeholder='*房屋所在地区' />
			</view>
			<view class="input_row">
				<input type="text" value="" placeholder='*房屋详细地址' />
			</view>
			<view class="input_row" style="display: FLEX;justify-content: space-between;    align-items: start;">
				<text class="input_tit" >*房屋类型</text>
				<view class="tabs" id="fwlx">
					<text class="tab"  data-fwlx="0" @click="chooseTag" :class="fwlx=='0'?'cur':''">居民楼</text>
					<text class="tab" data-fwlx="1" @click="chooseTag" :class="fwlx=='1'?'cur':''">平房</text>
					<text class="tab" data-fwlx="2" @click="chooseTag" :class="fwlx=='2'?'cur':''">别墅</text>
				</view>
			</view>
			<text class="input_tit">*户型及房屋面积</text>
			<view class="input_row" style="border-bottom: none; margin-top: 16upx;   display: FLEX;justify-content: space-between;line-height:52upx;color:rgba(142,133,133,1);">
				<view style=" display: FLEX;">
					<picker data-pick='index' @change="bindPickerChange" :value="index" :range="array" class="input_pick">
						<view class="uni-input">{{array[index]}}</view>
					</picker>室
					<picker data-pick='index2' @change="bindPickerChange" :value="index2" :range="array2" class="input_pick" style="margin-left: 36upx;">
						<view class="uni-input">{{array2[index2]}}</view>
					</picker>厅
				</view>
				<view style="display: flex;">
					<input type="text" value="" placeholder='' class="input_pick" />㎡
				</view>
			</view>
			<text class="input_tit">*家庭配套设施</text>
			<view class="input_row" style="display: FLEX;justify-content: space-between;    align-items: start;border-bottom: none;">
				<view class="tabs" style="" id="ptss">
					<text class="tab" data-ptss="fbyt" @click="chooseTags" :class="ptss.fbyt=='1'?'cur':''">封闭阳台</text>
					<text class="tab" data-ptss="fbyz" @click="chooseTags" :class="ptss.fbyz=='1'?'cur':''">封闭院子</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">空调</text>
					<text class="tab" data-ptss="nq" @click="chooseTags" :class="ptss.nq=='1'?'cur':''">暖气</text>
					<text class="tab" data-ptss="dt" @click="chooseTags" :class="ptss.dt=='1'?'cur':''">电梯</text>
					<text class="tab" data-ptss="hb" @click="chooseTags" :class="ptss.hb=='1'?'cur':''">海边</text>
					<text class="tab" data-ptss="xqhy" @click="chooseTags" :class="ptss.xqhy=='1'?'cur':''">小区花园</text>
				</view>
			</view>
			<text class="input_tit">*家中是否有专供宠物活动的区域</text>
			<view class="input_row" style="display: FLEX;justify-content: space-between;    align-items: start;border-bottom: none;">
				<view class="tabs" style="width: 100%;height: 90upx;    justify-content: center;">
					<text class="tab" data-isarea='0' @click="chooseTag" :class="isarea=='0'?'cur':''">是</text>
					<text class="tab" data-isarea='1' @click="chooseTag" :class="isarea=='1'?'cur':''">否</text>
				</view>
			</view>
		</view>
		<!-- process 1-1-0 -->
		<!-- process 1-2-0 -->
		<view class="banner"  v-if="proBar[0]==1&&proBar[1]==2">
			<text class="login_tit">家庭详情</text>
			<text class="login_sum" style="margin-bottom: 40upx;">完善家庭信息方便宠爸宠妈筛选哦</text>
			<view class="input_row" style="display: FLEX;justify-content: space-between;border: none;">
				<text class="input_tit" style="color: #000000;" >*家庭成员人数</text>
				<view class="inp_renshu" style="display: flex;width: 100px;">
					<view class="input_des" style="width: 20px;height: 20px;border: 2px solid #E0DBDA;border-radius: 50%; display: flex;    justify-content: center;
					align-items: center;">
						<view style="width: 10px;height: 2px; background-color: #E0DBDA;"></view>
					</view>
					<input type="number" min="1" max="10" value="" placeholder='' class="input_pick" style="margin: 0 4upx;    text-align: CENTER;" />
					<view class="input_add" style="width: 40upx;height: 40upx;display:block; position:relative;">
					</view>
				</view>
				
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;">
				<text class="input_tit" style="color: #000000;" >*是否有老人（65岁以上）</text>
				<view class="input_check">
					<switch style="width: 40px ;height: 20px;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;">
				<text class="input_tit" style="color: #000000;" >*是否有儿童（12岁以下）</text>
				<view class="input_check">
					<switch style="width: 40px ;height: 20px;" color='#F39319' />
				</view>
			</view>
			<text class="input_tit" style="color: #000000;" >*请添加您的家庭图片(4-9张)</text>
			<text class="login_sum" style="margin-bottom: 40upx;">附上多个房间不同角度的照片将获得更高曝光</text>
			<view class="com_imgs">
				<img class="com_img" @click="add_img" src="../../static/add_img.png">
				<img class="com_img" v-for="src in imgs" :src="src.url" :key="src.title" :preview="src.preview" :preview-text="src.title" >
			</view>
		</view>
		<!-- process 1-2-0 -->
		<!-- process 2-0-0 -->
		<view class="banner"  v-if="proBar[0]==2">
			<text class="login_tit">基础日价</text>
			<text class="login_sum" style="margin-bottom: 40upx;">请设置默认价格，特殊日价格请在‘寄养日历’修改默认日价不会覆盖特殊日价</text>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >小型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >中型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >大型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >猫</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<text class="login_tit">增值服务</text>
			
		</view>
		<view class="input_tab"   v-if="proBar[0]==2">
			<text class="input_tit" style="color: #000000;" >洗澡</text>
			<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
				<view style="display: FLEX;align-items: center;"   v-if="switch_tab[0]"><input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;"  />/次</view>
				<switch style="margin-left: 20upx;" color='#F39319' @change="input_switch" data-tab='0'/>
			</view>
		</view>
		<view class="banner"  v-if="switch_tab[0]&&proBar[0]==2">
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >小型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >中型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >大型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >猫</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
		</view>
		<view class="input_tab"   v-if="proBar[0]==2">
			<text class="input_tit" style="color: #000000;" >接送</text>
			<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
				<view style="display: FLEX;align-items: center;"   v-if="switch_tab[1]"><input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/次</view>
				<switch style="margin-left: 20upx;" color='#F39319' @change="input_switch" data-tab='1' />
			</view>
		</view>
		<view class="banner"  v-if="switch_tab[1]&&proBar[0]==2">
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >小型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >中型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >大型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >猫</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
		</view>
		<view class="input_tab"   v-if="proBar[0]==2">
			<text class="input_tit" style="color: #000000;" >美容</text>
			<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
				<view style="display: FLEX;align-items: center;"   v-if="switch_tab[2]"><input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/次</view>
				<switch style="margin-left: 20upx;" color='#F39319' @change="input_switch" data-tab='2' />
			</view>
		</view>
		<view class="banner" v-if="switch_tab[2]&&proBar[0]==2">
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >小型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >中型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >大型犬</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >猫</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 0px;" />/晚
					<switch style="margin-left: 20upx;" color='#F39319' />
				</view>
			</view>
		</view>
		<view class="banner"  v-if="proBar[0]==2">
			<text class="login_tit">长住优惠</text>
			<text class="login_sum" style="margin-bottom: 40upx;">若您开通长住优惠(订单总额折扣)，将在家庭详情页拥有 专属标识</text>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >≥7天</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 20upx;" />折
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >≥15天</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 20upx;" />折
				</view>
			</view>
			<view class="input_row"  style="display: FLEX;justify-content: space-between;border: none;    margin-bottom: 20upx;">
				<text class="input_tit" style="color: #000000;" >≥30天</text>
				<view class="input_check" style="display: FLEX;justify-content: center;align-items: center;">
					<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 20upx;" />折
				</view>
			</view>
			<text class="login_tit" style="margin-bottom: 40upx;">附加信息</text>
			<view class="input_row" style="display: FLEX;justify-content: space-between;border: none;    align-items: center;">
				<view style="display: flex;flex-direction: column;">
					<text class="input_tit" style="color: #000000;" >*您可在本平台接受宠物上限是</text>
					<text class="login_sum" style="margin-top: 0upx;">(不包含您自己的宠物在内)</text>
				</view>
				<view class="inp_renshu" style="display: flex;width: 280upx;">
					<view class="input_des" style="width: 20px;height: 20px;border: 2px solid #E0DBDA;border-radius: 50%; display: flex;    justify-content: center;
					align-items: center;">
						<view style="width: 10px;height: 2px; background-color: #E0DBDA;"></view>
					</view>
					<input type="number" min="1" max="10" value="" placeholder='' class="input_pick" style="margin: 0 4upx;    text-align: CENTER;" />
					<view class="input_add" style="width: 40upx;height: 40upx;display:block; position:relative;">
					</view>/晚
				</view>
			</view>
			<view class="input_row" style="border: none;">
				<text class="input_tit" style="color: #000000;" >*您家中允许宠物接触的区域？</text>
				<view class="tabs" style="width: 100%;height: 100upx;justify-content: space-around;" id="ptss">
					<text class="tab" data-ptss="fbyt" @click="chooseTags" :class="ptss.fbyt=='1'?'cur':''">卧室</text>
					<text class="tab" data-ptss="fbyz" @click="chooseTags" :class="ptss.fbyz=='1'?'cur':''">沙发</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
				</view>
			</view>
			<view class="input_row" style="border: none;">
				<text class="input_tit" style="color: #000000;" >您遛狗的时常和频率分别是？</text>
				<view style="display: flex;justify-content: space-around;">
					<view style="display: FLEX;justify-content: center;align-items: center;">
						<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 20upx;" />次／天
					</view>
					<view style="display: FLEX;justify-content: center;align-items: center;">
						<input type="text" value="" placeholder='' class="input_pick" style="margin-right: 20upx;" />小时／次
					</view>
				</view>
			</view>
			
			<text class="input_tit" style="color: #000000;">您家中能够提供的可供宠物使用的物品？</text>
			<text class="login_sum" style="margin-top: 0upx;margin-bottom: 40upx;">未提到的请在家庭简介中补充说明哦</text>
			<view class="input_row" style="border: none;">
				<view class="tabs" style="width: 100%;justify-content: start;" id="ptss">
					<text class="tab" data-ptss="fbyt" @click="chooseTags" :class="ptss.fbyt=='1'?'cur':''">卧室</text>
					<text class="tab" data-ptss="fbyz" @click="chooseTags" :class="ptss.fbyz=='1'?'cur':''">沙发</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="fbyt" @click="chooseTags" :class="ptss.fbyt=='1'?'cur':''">卧室</text>
					<text class="tab" data-ptss="fbyz" @click="chooseTags" :class="ptss.fbyz=='1'?'cur':''">沙发</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="fbyt" @click="chooseTags" :class="ptss.fbyt=='1'?'cur':''">卧室</text>
					<text class="tab" data-ptss="fbyz" @click="chooseTags" :class="ptss.fbyz=='1'?'cur':''">沙发</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="fbyt" @click="chooseTags" :class="ptss.fbyt=='1'?'cur':''">卧室</text>
					<text class="tab" data-ptss="fbyz" @click="chooseTags" :class="ptss.fbyz=='1'?'cur':''">沙发</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
					<text class="tab" data-ptss="kt" @click="chooseTags" :class="ptss.kt=='1'?'cur':''">床</text>
				</view>
			</view>
		</view>
		<!-- process 2-0-0 -->
		<!-- process 3-0-1 -->
		<view class="banner"  v-if="proBar[0]==3&&proBar[2]==1">
			<view class="input_row" style="border: none;">
				<view class="tx">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png"  class="tx_img"></image>	
				</view>
				<text style="font-size: 24upx;display: flex;justify-content: CENTER;">微信呢称</text>
			</view>
			<text class="login_tit" style="margin-bottom: 40upx;">个人信息</text>
			<view class="input_row" style=" display: flex;">
				<view class="input_tit" style="color: #000000;">
					*手机号
				</view>
				<input type="text" value="" placeholder='' />
			</view>
			<view class="input_row" style="border: none;">
				<view class="input_tit" style="color: #000000;">
					养宠经验
				</view>
				<view class="login_sum" style="margin-top: 0;">
					请添加您养过的宠物，即使TA现在已经不在了
				</view>
			</view>
			<view class="input_row" style="border: none;">
				<view class="add_pets" v-for="(pet, key) in pets" :key="key">
					<picker data-pick='index' @change="bindPickerChange" :value="pet.kind" :range="pets_kind" class="input_pick">
						<view class="uni-input">{{pets_kind[pet.kind]}}</view>
					</picker>
					<picker data-pick='index' @change="bindPickerChange" :value="pet.year" :range="pets_year" class="input_pick">
						<view class="uni-input">{{pets_year[pet.year]}}</view>
					</picker>
					<view class="input_des" @click="pet_des(key)" style="width: 20px;height: 20px;border: 2px solid #000;border-radius: 50%; display: flex;    justify-content: center;
					align-items: center;">
						<view style="width: 10px;height: 2px; background-color: #000;"></view>
					</view>
				</view>
				<view class="add_pets">
					<picker data-pick='add_pet-kind' @change="bindPickerChange" :value="index" :range="pets_kind" class="input_pick">
						<view class="uni-input">{{pets_kind[add_pet.kind]}}</view>
					</picker>
					<picker data-pick='add_pet-year' @change="bindPickerChange" :value="index" :range="pets_year" class="input_pick">
						<view class="uni-input">{{pets_year[add_pet.year]}}</view>
					</picker>
					<view class="input_add input_add_black" @click="pet_add" style="width: 40upx;height: 40upx;display:block; position:relative;">
					</view>
				</view>
			</view>
		</view>
		<!-- process 3-0-1 -->
		<!-- process 3-0-2 -->
		<view class="banner"  v-if="proBar[0]==3&&proBar[2]==2">
			<text class="login_tit">我的宠物</text>
			<view class="login_sum" style="margin-bottom: 40upx;">请务必如实添加您所有的现有宠物，若无则继</view>
			<view class="pet_cards">
				<view class="pet_card" v-for="(pet, key) in pets_card" :key='key' >
					<view class="tx">
						<image :src=pet.tx  class="tx_img"></image>	
					</view>
					<view class="sum_m">
						<text class="cw_nick">{{pet.nick}}</text>
						<view class="cw_others">
							<text class="cw_other">{{pet.sex}}</text>
							<text class="cw_other">{{pet.age}}</text>
							<text class="cw_other">{{pet.kind}}</text>
						</view>
					</view>
					<view class="sum_r">
						<image src="../../static/familydetail/card.png" style="width: 40upx;height: 30upx;" @click="reviseCard(key)"></image>
						<image src="../../static/familydetail/health.png" style="width: 32upx;height: 34upx;" @click="delateCard(key)"></image>
					</view>
				</view>
				
			</view>
			<addPet :petDetail="add_pet_detail"  v-if="is_add_pet" @sendmsg="sddPet_msg" id="petDetail"></addPet>
			<view class="add_pet_detail" @click="addPetDetail"   v-if="is_add_pet==false" >
				＋添加更多宠物
			</view>
		</view>
		<!-- process 3-0-2 -->
		<view class="input_row" style=" justify-content: center;display: flex;flex-wrap: wrap;"   v-if="is_add_pet==false">
			<!-- <navigator url="../login-family/login-family?v=2"> -->
				<view class="input_btn cur" @click="save_btn">保存并继续</view>
			<!-- </navigator> -->
			<view class="input_btn">保存并退出</view>
		</view>

		
	</view>
</template>

<script>
	import processBar from "../../components/processBar.vue";
	import addPet from "../../components/addpetDetail.vue";
	
	export default {
		data() {
			return {
				
				proBar:[3,0,2],  //简化为数组 三个字节，1 主进度条 2-3 副进度条
				array: ['1', '2', '3'],
				array2: ['1', '2', '3', '4'],
				index: 0,
				index2: 0,
				isarea:'0',
				fwlx:'0',
				ptss:{
					fbyt:1,
					fbyz:0,
					kt:0,
					nq:0,
					dt:0,
					hb:0,
					xqhy:0
				},
				imgs: [],
				switch_tab:[false,false,false],
				pets_kind:['品类','猫','狗'],
				pets_year:['1年','2年','3年及以上'],
				pets:[{kind:2,year:2}],
				add_pet:{kind:0,year:0},
				pets_card:[],
				add_pet_detail:{},
				is_add_pet:false, //添加按钮的显示
				input_data:[
					
				]
			}
		},
		methods:{
			bindPickerChange: function(e) {
				//console.log( e)
				if(e.currentTarget.dataset.pick=="add_pet-kind"){
					this.add_pet.kind=e.target.value;
				}else if(e.currentTarget.dataset.pick=="add_pet-year"){
					this.add_pet.year=e.target.value;
				}else{
					this[e.target.dataset.pick] = e.target.value;
					e.target.dataset.pick =  e.target.value;
				}
				
				console.log(this.add_pet);
			},
			chooseTag:function(e){
				let dataset =e.target.dataset ; 
				for (var key in dataset) ;
				//console.log(dataset[key]);
				this[key]=dataset[key];
			},
			chooseTags:function(e){
				
				let dataset =e.target.dataset ; 
				for (var key in dataset) ;
				this[key][dataset[key]]==0?this[key][dataset[key]]=1:this[key][dataset[key]]=0;

			},
			goBack:function(){
				this.$router.push("/pages/fosterage/fosterage")
			},
			add_img:function(){
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: '/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					}
				});
			},
			save_btn:function(e){
				var pro_arr = [[1,1,0],[1,2,0],[2,0,0],[3,0,1],[3,0,2],[3,0,3],[4,0,0],[1,1,0]];
				for (var i = 0; i < pro_arr.length-1; i++) {
					if(pro_arr[i].join()==this.proBar.join()){
						this.proBar=pro_arr[i+1];
						console.log(this.proBar);
						return;
					};
					
					console.log(this.proBar);
					//break;
				}
			},
			input_switch:function(e){
				console.log(this.switch_tab);
				//this.switch_tab[e.target.dataset.tab]=e.target.value;
				this.$set(this.switch_tab,  e.target.dataset.tab,  e.target.value);
				//this.switch_tab[e]==false?this.switch_tab[e]=true:this.switch_tab[e]=false;
				console.log(this.switch_tab);
			},
			pet_des:function(e){
				//console.log(e);
				
				this.pets.splice(e,1);
				//console.log(this.pets);
			},
			pet_add:function(e){
				//console.log(e);
				if(this.add_pet.kind==0){
					alert('请选择品类');
				}else{
					//console.log(this.pets);
					this.pets.push( JSON.parse(JSON.stringify(this.add_pet)));
					//console.log(this.pets);
					this.add_pet.kind=0;
					this.add_pet.year=0;
				}
			},
			addPetDetail:function(e){
				this.is_add_pet=true;
				console.log();
			},
			sddPet_msg:function(e){  //获取组件提交的信息 放到card里
				console.log(e);
				if(e.key==-1){
					this.pets_card.push( JSON.parse(JSON.stringify(e)));
				}else{
					this.pets_card.splice(e.key,1,JSON.parse(JSON.stringify(e)));
				}
				
				this.is_add_pet=false;
			},
			reviseCard:function(e){  //修改card 应该先获取接口得到内容后 提交给数组 add_pet_detail 
				console.log(e);
				//获取接口后
				this.add_pet_detail.tx='http://dpic.tiankong.com/87/r6/QJ8711689601.jpg';
				this.add_pet_detail.nick='猫咪';
				this.add_pet_detail.age='1岁';
				this.add_pet_detail.kind='猪';
				this.add_pet_detail.key=e;
				//console.log(this.add_pet_detail);
				this.addPetDetail();
			},
			delateCard:function(e){ //删除card 后期应该请求接口，目前只是数组删除了
				this.pets_card.splice(e,1);
			},
		},
		onLoad(e){
			console.log(e);
			console.log(this.$router);
			
			//可以获取到 后退也传来的参数，在这里进行接口请求
		},
		onBackPress(options) {  
			console.log(options);
			// uni.navigateTo ({
			// 	url:'../login-family/login-family?v=333'
			// });
			uni.navigateTo ({
			 	url:'../login-family/login-family?v=333'
			 });
        },
		watch:{
			proBar:{
				handler(val,oldVal){
				
				if(val[0]==1&&val[1]==2){
					console.log(this.$preview);
					let testarr = [{
					  url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
					  title: '图片1',
					  preview: '1'
					},
					{
					  url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg',
					  title: '图片2',
					  preview: '1'
					},
					{
					  url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg',
					  title: '图片3',
					  preview: '1'
					}];
					this.imgs=[];
					this.imgs.push(testarr[0]);this.imgs.push(testarr[1]);this.imgs.push(testarr[2]);
					console.log(this.imgs);
					this.$previewRefresh();
				}
				console.log( val, oldVal);
				},
				deep:true
			}
		},
		components:{
			processBar,
			addPet
		},
	}
</script>

<style>
	.login_tit{
		background:url(../../static/logos/f-info.png) no-repeat left;
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
		border-bottom:2upx solid #FAF8F7 ;
		margin-bottom: 50upx;
	}
	.input_tit{
		color: #8E8585;
		font-size: 28upx;
		line-height: 56upx;
	}
	.textarea_bg{
		width:100%;
		height:200upx;
		background:rgba(250,248,247,1);
		border-radius:10upx;
		margin-top: 20upx;
		display: FLEX;
		justify-content: space-around;
		align-items: center;
	}
	.login_textarea{
		font-size:24upx;
		color:rgba(142,133,133,1);
		height: 140upx;
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
 .input_add{border-radius:50px;-webkit-border-radius:50px;-moz-border-radius:50px; border:4upx solid #E0DBDA; width:32px; height:32px;}

.input_add:before, .input_add:after{content:''; height:4upx; width:20upx; display:block; background:#E0DBDA; border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px; position:absolute; top:18upx; left:10upx;}

.input_add:after{height:20upx; width:4upx; top:10upx; left:18upx;}
.input_add_black{
	border-color: #000000;
}
.input_add_black:before,.input_add_black:after{
	background:#000;
}
.com_imgs{
	margin-bottom: 40upx;
	display: flex;
	    overflow: auto;
		width: 100%;
}
.com_img{
	width: 210upx;
	height: 210upx;
	border-radius: 10upx;
	margin-right: 10px;
}
.input_tab{
	width:670upx;
	box-shadow:0px 2px 4px 0px rgba(0,0,0,0.04);
	border:1px solid rgba(250,248,247,1);
	display: flex;
	justify-content: space-between;
	height: 88upx;
    align-items: center;
	margin-top: 20upx;
	padding: 0 40upx;
	margin-bottom: 10upx;

}
.input_tab .input_tit{
	font-weight: bold;
}
/* 301 */
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
.add_pets{
	display: flex;
	justify-content: space-around;
	margin-bottom: 20upx;
}
.add_pet_detail{
	 width: 100%;
    text-align: center;
    height: 100px;
    line-height: 100px;
    font-size: 18px;
}
.pet_cards{
	width: 100%;
}
.pet_card{
	width:670upx;
	height: 160upx;
    padding: 20upx 0;
	box-shadow:0px 0px 24upx 0px rgba(0,0,0,0.05);
	border-radius:10upx;
	display: FLEX;
	margin-bottom: 40upx;
}
.pet_card .tx{
	 flex-direction: column;
    margin-left: 20px;
    height: 100%;
    width: 100px;
	    
}
.sum_m{
	width: 340upx;
	color: black;
    height: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
}
.cw_nick{font-size: 36upx;}
.cw_other{
	padding-right: 60upx;
}
.sum_r{
	    width: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
	
}
</style>
