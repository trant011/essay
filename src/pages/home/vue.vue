<template>
	<el-container>


	    <el-main>
	<div >

  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="vue2.6安装方法"
      width="600">
    </el-table-column>
   
  </el-table>
		<div class="el-divider el-divider--horizontal"></div>
		<div>
			<p style="color: rgb(144, 147, 153); font-weight: bold;">vue ui</p>
			<p style="line-height:23px;padding-right: 0.625rem;font-size: 0.875rem;color: #606266;">最近发现vueui比HBUILD要流畅很多，还提供了可视化的操作界面，界面如下</p>
			<img src="../../assets/vueui.png" />
		</div>
		<div class="el-divider el-divider--horizontal"></div>
<p style="color: rgb(144, 147, 153); font-weight: bold;">
	vue多页面配置：
</p >
<p style="color: rgb(144, 147, 153); font-weight: bold;">vue.config.js配置</p>
<p style="line-height:23px;padding-right: 0.625rem;font-size: 0.875rem;color: #606266;">module.exports = {  <br />
  // 选项   <br />
	// pubilcPath:'./', <br />
	lintOnSave: false, <br />
	devServer: {  <br />
		port: 8079, <br />
		index: 'index.html', <br />
		overlay: { <br />
				warnings: false, <br />
				errors: false <br />
		}, <br />
	}, <br />
	pages: { <br />
		index: { <br />
    	entry: 'src/pages/index/index.js',                  //页面的入口文件 <br />
     	template: 'public/index.html',                   //页面的模板文件 <br />
     	filename: 'index.html'                           //页面的出口名称，即build生成的文件名称 <br />
	  }, <br />
	  login: { <br />
     entry: 'src/pages/home/home.js', <br />
     template: 'public/home.html', <br />
     filename: 'home.html', <br />
	  }, <br />
  }, <br />
	
	css: { <br />
		extract: false <br />
	}, <br />
	
}</p>
<p style="line-height:23px;padding-right: 0.625rem;font-size: 0.875rem;color: #606266;"> 然后通过src/pages/index/index.js文件引入router的js文件配置router</p>
<div class="el-divider el-divider--horizontal"></div>
<p style="color: rgb(144, 147, 153); font-weight: bold;">父子组件传递：props、$ref、$emit</p>
<p v-for= "txt in chld" style="line-height:23px;padding-right: 0.625rem;font-size: 0.875rem;color: #606266;">
	{{txt}}
</p>

	</div>

	    </el-main>
	  </el-container>
</template>

<script>

	export default {
    data() {
      return {
        tableData: [{
          date: '1.先安装nodejs,官网下载即可',
         
        }, {
          date: '2.# 最新稳定版$ npm install vue',   
        }, {
          date: '3.npm install -g @vue/cli OR  yarn global add @vue/cli',

        }, {
          date: '4.快速原型开发	npm install -g @vue/cli-service-global',

        },{
        	date:'5.通过 vue ui创建、管理、添加组件和项目',
        }],
		chld: ["<!-- 父组件 -->",' <child v-bind:message="msg"  ref="msg1"  @getMsg="showMsg()"></child>',
		"import Child from '../components/child.vue'","components: {Child},"," msg: '我是子组件！'","this.$refs.msg1.getMessage('我是子组件一！')","<!-- 子组件 -->"," <h3>{{message}}</h3>"," props: ['message']...methods:..getMessage(m)...",
		" this.$emit('getMsg', '我是父组件！')",
		"<!-- $set ,$nextTick-->",
		"this.$set(this.obj,key,value)",
		"$nextTick监听到DOM更新后，调用回调函数"],
      }
	  
    }
  }
</script>

<style>

</style>
