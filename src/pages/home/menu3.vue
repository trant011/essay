<template>

	<el-container>


		<el-main>
			<div>



				<el-radio style="margin-left: 8px" v-model="radio" label="a" @change="setai()">安卓</el-radio>
				<el-radio v-model="radio" label="i" @change="setai()">iOS</el-radio>
				<br>
				<input type="checkbox" v-model="checkAll" @click="checkall">
				<label>全局 ad</label>
				<el-input v-model='ad0' size="mini" type="text" placeholder="ad" @keyup.native="refesh('ad',$event)" style="width: 100px;padding: 10px;height:30px;margin: 5px;"></el-input>
				<label>gameId</label>
				<el-input v-model='gameId0' size="mini" placeholder="gameId" style="width: 100px;padding: 10px;height:30px;margin: 5px;"
				 type="text" name="" @keyup.native="refesh('gameId',$event)"></el-input>

				<label>channel</label>
				<el-input v-model='channel0' size="mini" placeholder="channel" style="width: 100px;padding: 10px;height:30px;margin: 5px;"
				 type="text" name="" @keyup.native="refesh('channel',$event)"></el-input>

				<el-button size="mini" type="primary" @click="newuuid">刷新uuid/ip/uid/order</el-button>

				<el-date-picker size="mini" v-model="value1" type="datetime" placeholder="选择日期时间" @change="changeTime" id="ti"
				 style="width: 190px;"></el-date-picker>

				<div v-for="(topic,index) in topic_list">
					<input type="checkbox" :name="index" :value="index" v-model="events">
					<!-- <label for="topic.event"></label> -->

					<el-button size="mini" type="primary" plain @click="showCont(index)" style="font-size: 13px;vertical-align:middle;padding: 10px;width: 80px;margin:2px">{{topic.event}}</el-button>
					<el-button size="mini" type="primary" class="el-icon-plus" @click="add(index)" style="padding: 10px;vertical-align:middle;background: #fff;color: #409EFF;"></el-button>
					<!-- <span type="primary" class="el-icon-circle-plus-outline is-circle" style="font-size:24px;vertical-align:middle;cursor:pointer;color:#409EFF;"  @click="add(index)"></span> -->
					<div v-for="(vals,keys) in topic" v-if="keys!='hightlight'">
						<div v-if="topic.hightlight">
							<table v-if="typeof(vals) == 'object'">
								<tr v-for="val1,key1 in vals">
									<td style="width: 130px">{{key1}} </td>
									<td><input type="text" name="val1" :value="val1" @change="inputchange(index,key1,key1)" :id="index+key1+key1"
										 style="width: 250px"></td>
								</tr>
							</table>
							<table v-else>
								<tr>
									<td style="width: 130px">{{keys}} </td>
									<td><input type="text" name="vals" :value="vals" @change="inputchange(index,keys,'')" :id="index+keys" style="width: 250px"></td>
								</tr>
							</table>
						</div>

					</div>

				</div>
				<br>
				<el-button type="primary" :loading="load" @click="senddata" style="margin-left: 140px">发送数据</el-button>
				</el-tab-pane>


			</div>

			</div>
		</el-main>
	</el-container>
</template>

<script>
	import axios from 'axios'
	export default {

		name: '',
		data() {
			return {
				checkAll: true,
				isIndeterminate: true,
				i: 6,
				radio: "a",
				events: [0, 1, 2, 3, 4, 5, 6, 7, 8],
				pickerOptions1: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value2: '',
				value3: '',
				ad0: '',
				gameId0: '',
				channel0: '',
				// event:["view","startApp","startSDK","login","createRole","order"],
				topic_list: '',
				load: false,
				topic_lists: {
					"a": [{
							"ad": 5263,
							"clientDateTime": 1542680654000,
							"data": {
								"channel": 465,
								"creative": 622,
								"sid": ""
							},
							"event": "view",
							"gameId": 58,
							"ip": "219.136.58.235",
							"serverDateTime": 1542680654000,
							"uid": 0,
							"uuid": "4989D24B-8FB0-410B-9187-10EE2BDA36D4",
							"hightlight": false
						},
						{
							"ad": 5263,
							"clientDateTime": 1542680654000,
							"data": {
								"channel": 465,
								"creative": 622,
								"sid": ""
							},
							"event": "download",
							"gameId": 58,
							"ip": "219.136.58.235",
							"serverDateTime": 1542680654000,
							"uid": 0,
							"uuid": "4989D24B-8FB0-410B-9187-10EE2BDA36D4",
							"hightlight": false
						},
						{
							"gameId": "58",
							"ad": "5466",
							"data": {
								"gameVersion": "",
								"sdkVersion": "1.0",
								"brand": ""
							},
							"ip": "117.136.58.95",
							"appKey": "",
							"event": "startApp",
							"uuid": "864752030796875",
							"clientDateTime": "1542680652000",
							"serverDateTime": "1542680652000",
							"newVersion": "",
							"hightlight": false
						},
						{
							"gameId": "58",
							"ad": "5466",
							"data": {
								"gameVersion": "",
								"sdkVersion": "1.0",
								"brand": ""
							},
							"ip": "117.136.58.95",
							"appKey": "",
							"event": "startSDK",
							"uuid": "864752030796875",
							"clientDateTime": "1542680653000",
							"serverDateTime": "1542680653000",
							"newVersion": "",
							"hightlight": false
						},
						{
							"gameId": "58",
							"ad": "5466",
							"data": {
								"gameVersion": "",
								"sdkVersion": "1.0",
								"brand": ""
							},
							"ip": "117.136.58.95",
							"appKey": "",
							"event": "hotStart",
							"uuid": "864752030796875",
							"clientDateTime": "1542680653000",
							"serverDateTime": "1542680653000",
							"newVersion": "",
							"hightlight": false
						},
						{
							"gameId": "58",
							"ad": "5466",
							"data": {
								"gameVersion": "",
								"sdkVersion": "1.0",
								"brand": ""
							},
							"ip": "117.136.58.95",
							"appKey": "",
							"event": "hotEnd",
							"uuid": "864752030796875",
							"clientDateTime": "1542680653000",
							"serverDateTime": "1542680653000",
							"newVersion": "",
							"hightlight": false
						},
						{
							"gameId": "58",
							"uid": "20299448",
							"ad": "5466",
							"data": {
								"deviceId": "864752030796875",
								"account": "20299448"
							},
							"ip": "117.136.58.95",
							"appKey": "",
							"event": "login",
							"uuid": "864752030796875",
							"clientDateTime": "1542680653000",
							"serverDateTime": "1542680653000",
							"hightlight": false
						},
						{
							"gameId": "58",
							"uid": "20164771",
							"ad": "4888",
							"data": {
								"deviceId": "866342033393454",
								"account": "20164771"
							},
							"ip": "116.23.155.251",
							"appKey": "",
							"event": "createRole",
							"uuid": "866342033393454",
							"clientDateTime": "1542167089000",
							"serverDateTime": "1542167089000",
							"hightlight": false
						},
						{
							"gameId": "58",
							"uid": "20158185",
							"data": {
								"uid": "20158185",
								"game": "58",
								"orderNO": "1530135201581851542125041",
								"payType": "1",
								"money": 1000,
								"time": 1542125051000
							},
							"event": "order",
							"uuid": "868227033466996",
							"clientDateTime": "1542125051000",
							"serverDateTime": "1542125051000",
							"hightlight": false
						},
					],


					"i": [{
							"ad": 1241,
							"clientDateTime": 1541926772000,
							"data": {
								"channel": 83,
								"creative": 36
							},
							"event": "view",
							"gameId": 100,
							"ip": "26.110.199.156",
							"serverDateTime": 1541926772000,
							"uid": 0,
							"uuid": "0F4F521F-7CAB-49C1-A6C7-D3B697995CE1",
							"hightlight": false
						},

						{
							"ad": 892,
							"clientDateTime": 1541942382000,
							"data": {
								"channel": 18,
								"creative": 0
							},
							"event": "download",
							"gameId": 20,
							"ip": "223.146.135.168",
							"serverDateTime": 1541942382000,
							"uid": 0,
							"uuid": "D2E83F6D-77A0-4E82-9C72-79A207C2F246",
							"hightlight": false
						},

						{
							"gameId": "100",
							"uid": 123,
							"data": {
								"gameVersion": "",
								"sdkVersion": "1.0",
								"brand": ""
							},
							"ip": "26.110.199.156",
							"appKey": "",
							"event": "startApp",
							"uuid": "0F4F521F-7CAB-49C1-A6C7-D3B697995CE1",
							"clientDateTime": "1541928417000",
							"serverDateTime": "1541928417000",
							"hightlight": false
						},

						{
							"gameId": "100",
							"uid": 123,
							"ad": "",
							"data": {
								"gameVersion": "",
								"sdkVersion": "",
								"brand": ""
							},
							"ip": "26.110.199.156",
							"appKey": "",
							"event": "startSDK",
							"uuid": "0F4F521F-7CAB-49C1-A6C7-D3B697995CE1",
							"clientDateTime": "1541928390000",
							"serverDateTime": "1541928390000",
							"hightlight": false
						},

						{
							"gameId": "100",
							"ad": "1241",
							"data": {
								"gameVersion": "",
								"sdkVersion": "",
								"brand": ""
							},
							"ip": "115.153.138.254",
							"appKey": "",
							"event": "hotStart",
							"uuid": "0C619B22-A0B6-433E-84AF-26755F02EECA",
							"clientDateTime": "1541928418000",
							"serverDateTime": "1541928418000",
							"hightlight": false
						},

						{
							"gameId": "20",
							"ad": "",
							"data": {
								"gameVersion": "",
								"sdkVersion": "",
								"brand": ""
							},
							"ip": "117.136.85.70",
							"appKey": "",
							"event": "hotEnd",
							"uuid": "24AA5BE8-3506-415F-9919-BA8B6B001FE6",
							"clientDateTime": "1541926745000",
							"serverDateTime": "1541926745000",
							"hightlight": false
						},

						{
							"gameId": "20",
							"uid": "20885649",
							"data": {
								"deviceId": "1197B60B-E6AE-4A85-9739-94F1F0ED9488",
								"account": "20885649"
							},
							"ip": "220.176.159.4",
							"appKey": "",
							"event": "register",
							"uuid": "1197B60B-E6AE-4A85-9739-94F1F0ED9488",
							"clientDateTime": "1541928424000",
							"serverDateTime": "1541928424000",
							"hightlight": false
						},

						{
							"gameId": "20",
							"uid": "18002894",
							"data": {
								"deviceId": "A7D4D1F5-AA4A-4FCA-AFCB-BC7A60A1D660",
								"account": "18002894"
							},
							"ip": "58.55.199.155",
							"appKey": "",
							"event": "login",
							"uuid": "A7D4D1F5-AA4A-4FCA-AFCB-BC7A60A1D660",
							"clientDateTime": "1541928407000",
							"serverDateTime": "1541928407000",
							"hightlight": false
						},

						{
							"gameId": "20",
							"uid": "20885587",
							"data": {
								"deviceId": "75284401-15A4-4EDC-8FEB-8807B344ECDF",
								"account": "20885587"
							},
							"ip": "180.171.233.206",
							"appKey": "",
							"event": "createRole",
							"uuid": "75284401-15A4-4EDC-8FEB-8807B344ECDF",
							"clientDateTime": "1541928393000",
							"serverDateTime": "1541928393000",
							"hightlight": false
						},


						{
							"gameId": "20",
							"uid": "20454363",
							"data": {
								"uid": "20454363",
								"game": "20",
								"orderNO": "1359135204543631541928500",
								"payType": "1",
								"money": 2500,
								"time": 1541928530000
							},
							"ip": "127.0.0.1",
							"event": "order",
							"uuid": "ios",
							"clientDateTime": "1541928530000",
							"serverDateTime": "1541928530000",
							"hightlight": false
						},
					]

				}
			}
		},
		mounted() {
			this.topic_list = this.topic_lists[this.radio];
			this.newuuid();
			this.value1 = new Date();

			this.changeTime();
			let ads, gameids, channels;
			ads = this.getCookie('ad');
			gameids = this.getCookie('gameId');
			channels = this.getCookie('channel');

			if (ads) {
				console.log('dsad', ads)
				this.ad0 = ads;

				this.refesh1('ad', this.ad0);
			}
			if (gameids) {

				this.gameId0 = gameids;

				this.refesh1('gameId', gameids);
			}
			if (channels) {

				this.channel0 = channels;
				this.refesh1('channel', channels);
			}

		},


		methods: {

			refesh1: function(key, va) {
				for (let x in this.topic_list) {
					if (this.topic_list[x].hasOwnProperty(key)) {
						this.topic_list[x][key] = va;
					}
					if (this.topic_list[x]["data"].hasOwnProperty(key)) {
						this.topic_list[x]["data"][key] = va;
					}

				}

				// this.setCookie(key, va.target.value, 7);
			},

			refesh: function(key, val) {

				// let ue = document.getElementById(val).value;
				for (let x in this.topic_list) {
					if (this.topic_list[x].hasOwnProperty(key)) {
						this.topic_list[x][key] = val.target.value;
					}
					if (this.topic_list[x]["data"].hasOwnProperty(key)) {
						this.topic_list[x]["data"][key] = val.target.value;
					}

				}
				this.setCookie(key, val.target.value, 7);

			},


			getCookie: function(cname) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				//         console.log("获取cookie,现在循环")
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					//           console.log(c)
					while (c.charAt(0) == ' ') c = c.substring(1);
					if (c.indexOf(name) != -1) {
						return c.substring(name.length, c.length);
					}
				}
				return "";
			},


			setCookie: function(cname, cvalue, exdays) {
				var d = new Date();
				d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				//         console.info(cname + "=" + cvalue + "; " + expires);
				document.cookie = cname + "=" + cvalue + "; " + expires;
				//         console.info(document.cookie);
			},


			senddata: function() {
				var sendata = {};
				// console.log("1112");
				for (let x in this.events) {
					sendata[this.events[x]] = this.topic_list[this.events[x]];
				}

				sendata = JSON.stringify(sendata);
				// console.log(sendata);
				this.load = true;
				axios.get('/?' + this.radio, sendata).then((res) => {
					console.log(res.data);
					this.$message({
					          message: '发送成功',
					          type: 'success'
					        })
					setTimeout(function() {
						this.load = false;
					}, 3000);
					this.load = false;
				});
			},


			showCont: function(index) {
				if (this.topic_list[index].hightlight == true) {
					this.topic_list[index].hightlight = false;
				} else {
					this.topic_list[index].hightlight = true;
				}
			},

			add: function(index) {
				var newdata = JSON.parse(JSON.stringify(this.topic_list[index]));
				var oldevent = newdata["event"];
				newdata["event"] = oldevent + this.i;
				this.topic_list.push(newdata);
				this.events.push(this.i);
				this.i++;
			},
			inputchange: function(index, keys, co) {
				var ids = index + keys + co;
				// console.log(ids);
				var newval = document.getElementById(ids).value;
				// console.log(index,keys,newval);
				if (co) {
					this.topic_list[index]['data'][keys] = newval;
				} else {
					this.topic_list[index][keys] = newval;
				}
			},


			guid: function() {
				function S4() {
					return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
				}
				return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
			},
			newuuid: function() {
				var uuid = this.guid();
				var ip = Math.ceil(Math.random() * 100) + "." + Math.ceil(Math.random() * 100) + "." + Math.ceil(Math.random() *
					100) + "." + Math.ceil(Math.random() * 100);
				var uid = Math.ceil(Math.random() * 10000000);
				for (let x in this.topic_list) {
					if (this.topic_list[x].hasOwnProperty("uuid")) {
						this.topic_list[x]["uuid"] = uuid;
					}
					if (this.topic_list[x].hasOwnProperty("ip")) {
						this.topic_list[x]["ip"] = ip;
					}
					if (this.topic_list[x].hasOwnProperty("uid")) {
						this.topic_list[x]["uid"] = uid;
					}
					if (this.topic_list[x]["data"].hasOwnProperty("uid")) {
						this.topic_list[x]["data"]["uid"] = uid;
					}
					if (this.topic_list[x]["data"].hasOwnProperty("orderNO")) {
						this.topic_list[x]["data"]["orderNO"] = uid + "" + uid + uid;
					}
				};
			},



			checkall: function() {
				if (this.checkAll) {
					this.checkAll = false;
					this.events = [];
				} else {
					this.checkAll = true;
					this.events = [];
					for (let x = 0; x < this.topic_list.length; x++) {
						this.events.push(x);
					}
				}
			},
			eventCount: function(value) {
				let checkedCount = value.length;
				this.checkAll = this.events.length === this.topic_list.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.topic_list.length;
				// if(this.events.length===this.topic_list.length){
				//   this.checkAll=true;
				// }else{
				//   this.checkAll=false;
				// }

			},

			changeTime: function() {
				var eventdate = this.value1;
				// console.log(eventdate);
				// eventdate =parseInt(Date.parse(new Date(eventdate.replace(/-/g, "/"))));
				for (let x in this.events) {
					this.topic_list[x]["serverDateTime"] = this.topic_list[x]["clientDateTime"] = eventdate + parseInt(x);
				}
			},

			setai: function() {
				// console.log("223");
				this.topic_list = this.topic_lists[this.radio];
				this.events = [];
				for (let x = 0; x < this.topic_list.length; x++) {
					this.events.push(x);
				}
				this.i = this.topic_list.length;
			},


		}
	};
</script>


<style scoped>
</style>
