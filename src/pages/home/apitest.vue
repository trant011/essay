

<style>
</style>
<template>
	<el-main style="background-color: #f1f2f7;">
		<p style="font-size: 18px;color: #606266;" >冒烟测试</p>
		<div v-for="dic in data">
			<div style="margin: 0.3125rem;">
			<el-input v-model="dic.url" placeholder="url" style="width: 70%;" ></el-input>
			<el-select v-model="dic.value"   style="width: 15%;margin-left: 0.625rem;">
			    <el-option
			      v-for="item in dic.meth"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
		</div>
		<div style="margin: 0.3125rem;">
			<el-input v-model="dic.req" placeholder="请求数据"  style="width: 70%;"></el-input>
			<el-button type="primary" style="margin-left: 0.625rem;" @click="test(dic)">test</el-button>
			<p v-for="res in dic.res" style="font: 1rem;color: #2C3E50;">{{res}}</p>
			</div>
		<div class="el-divider el-divider--horizontal"></div>
		</div>
	</el-main>
</template>

<script>
	export default {
		data() {
			return {
				
				data: [{
				value:'post',
				url:'http://adapi.mg3721.com/account/changeNick',
				req:"{'uid': 100417949, 'nick': 'a40819', 'token': '5251515002fbe65d4ee299cd95d8a8ad', 'sign': 'f949f8add757ec1d9f3ccbafdd55a229'}",
				res:["{'ret': 0, 'msg': 'ok', 'data': []}"],
				meth:[{
				       value: 'post',
				          label: 'post'
				        }, {
				          value: 'get',
				          label: 'get'
				        }]},
				{
					value:'get',
				url:'http://adapi.mg3721.com/account/changeNick',
				req:"{'uid': 100417949, 'nick': 'a40819', 'token': '5251515002fbe65d4ee299cd95d8a8ad', 'sign': 'f949f8add757ec1d9f3ccbafdd55a229'}",
				res:["{'ret': 0, 'msg': 'ok', 'data': []}"],
				meth:[{
				       value: 'post',
				          label: 'post'
				        }, {
				          value: 'get',
				          label: 'get'
				        }]},
				{
					value:'post',
				url:'http://adapi.mg3721.com/account/changeNick',
				req:"{'uid': 100417949, 'nick': 'a40819', 'token': '5251515002fbe65d4ee299cd95d8a8ad', 'sign': 'f949f8add757ec1d9f3ccbafdd55a229'}",
				res:["{'ret': 0, 'msg': 'ok', 'data': []}"],
				meth:[{
				       value: 'post',
				          label: 'post'
				        }, {
				          value: 'get',
				          label: 'get'
				        }]},
				],
			
			}
		},
		methods: {
			test:function(data){
				// console.log(data.url,data.req);
				data.res.push("{'ret': 0, 'msg': 'ok', 'data': []}");
			}
		}
	}
</script>
<style>
</style>
