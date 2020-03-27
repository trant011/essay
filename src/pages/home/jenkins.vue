<template>

	<el-container>
		<el-main>
			<div>
				<el-table
				  :data="tableData"
				  stripe
				  style="width: 100%">
				  <el-table-column
				    prop="date"
				    label="cicd配置"
				    width="600">
				  </el-table-column>
				 
				</el-table>
				<p style="font-size: 14px;color: #606266;" >在触发器勾选后会出现的地址：Build when a change is pushed to GitLab. GitLab webhook URL: http://www.wuvvj.com:8080/project/test2</p>
			</div>
			<div style="padding-top: 0.625rem;font-size: 14px;margin: 20px 0;width: 51.25rem;">
				<p style="color: #909399; font-weight: bold;">pipeline:</p>
				<el-input
				  type="textarea"
				  :autosize="{ minRows: 2, maxRows: 15}"
				  placeholder="请输入内容"
				  v-model="text">
				</el-input>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	 import axios from 'axios'
		export default {
	  data() {
	    return {
			text : '',
	      tableData: [{
	        date: 'github、gitlab主要通过webhook功能，每次push后git服务器主动通知Jenkins服务器触发构建，具体如何配置baidu即可',
	       
	      },{
	        date: '如果需要构建的服务器不在Jenkins服务器上，需要配置 slave节点',
	
	      },  {
	        date: 'Jenkins收到通知后，开始执行构建，构建配置可用自由风格或者pipeline',   
	      }, {
			  date:'部署完成后，执行自己的测试脚本或者方法，输出报告',
		  }]
	    }
	  },
	  created(){
	        this.convert();
	      },
	      methods: {
	        convert: function () {
				 axios.get('http://'+window.location.host+":8002/writtingdata").then(res => {
				          this.text = res.data;
				        })
			}
	  
	},
	}
</script>

<style>
</style>
