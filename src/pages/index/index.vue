<template>
  <div id="app">
	  
    <!-- <img src="./assets/logo.png"  border-radius: 10px;> -->
    <div>
		
		<el-container> 
		<el-header style="font-size: 20px;background: #409EFF;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);height: 50px;">
			<div style="padding-top: 10px;">
			      <span style="font-weight: bold;  color: floralwhite;">随手笔记</span></div>
		</el-header>
		</el-container>
		
		<el-container style="height: 500px;"> 
		
		<el-main style='box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);'>
			
			<div  style="padding: 60px;background: #eeeeee;width: 31.25rem; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);margin-left: 30%;margin-top: 3%;">
				<p style="text-align: center;">用户登录</p>
			<el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			 <el-form-item label="用户名" prop="name">
			   <el-input v-model="ruleForm.name"></el-input>
			 </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
			  </el-form-item>
			
			
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left: 83%;">提交</el-button>
			   
			  </el-form-item>
			</el-form>
	
			</div>
			
		</el-main>
			
		</el-container>
			
   
    </div>
     <span style="position:absolute;bottom:0;width:100%;height:100px;font-size:12px;color:#9bb5c9;    text-align:center;">Copyright@2020 版权所有 wuvvj.com,All Rights Reserved 
 <a  href="http://www.beian.miit.gov.cn/" target="_blank">沪ICP备19004266号-1 </a></span>
  </div>
</template>

 <script>
	 export default {
	     data() {
			var checkName = (rule, value, callback) => {
			        if (!value) {
			          return callback(new Error('用户名不能为空'));
			        }
			    
					 else {
			             callback();
			            }
			       
			      };
			      var validatePass = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请输入密码'));
			        } 
					else {
			      
			          callback();
			        }
			      };
			    
			      return {
			        ruleForm: {
			          pass: '',
			         
					  name:''
			        },
			        rules: {
			          pass: [
			            { validator: validatePass, trigger: 'blur' }
			          ],
			        
					  name:[
						   { validator: checkName, trigger: 'blur' }
					  ],
			       
			        }
			      };
			    },
			    methods: {
			      submitForm(formName) {
			        this.$refs[formName].validate((valid) => {
			          if (valid) {
						
			            console.log( this.ruleForm);
						window.location.href='home.html#/docker';
						// window.location.href = "http://"+window.location.host+ "/home.html";
			          } else {
			            console.log('error submit!!');
			            return false;
			          }
			        });
			      },
			      resetForm(formName) {
			        this.$refs[formName].resetFields();
			      }
			    },
				}
 </script>

<style>
#app,body {
	margin: 0px;
	padding: 0px;
	height: 100%;
/*  font-family: Helvetica, sans-serif;
  text-align: center; */
}
</style>
