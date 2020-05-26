<template>
	<el-container>
		<el-main>
			<div >
			<p>sql查询</p>
			<!-- <hr style="height:5px;border:none;border-top:5px ridge green;" /> -->
		<div class="el-divider el-divider--horizontal"></div>
		 <textarea 
		 ref="mycode" class="codesql" v-model="code" >
		 </textarea>
			
</div>
		</el-main>
	</el-container>
</template>

<script>
	//  :value="curCode"
	// :options="cmOptions"
	// class="code"
	// import {
	// 	codemirror
	// } from 'vue-codemirror'
	
	import 'codemirror/theme/ambiance.css'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/addon/hint/show-hint.css'
	 
	let CodeMirror = require('codemirror/lib/codemirror')
	require('codemirror/addon/edit/matchbrackets')
	require('codemirror/addon/selection/active-line')
	require('codemirror/mode/sql/sql')
	require('codemirror/addon/hint/show-hint')
	require('codemirror/addon/hint/sql-hint')


	export default {
		data() {
			return {
				code:'',
				formData: {
					queryText: ''
				},
				cmOptions: {
					tabSize: 4,
					styleActiveLine: true,
					lineNumbers: true,
					line: true,
					mode: 'text/x-mysql',
					theme: 'solarized light'
				},

				//		
				curCode: '',
				// cmOptions:{
				//     value:'',
				//      mode:"text/javascript",
				//     theme: "ambiance",
				//     readOnly:true,
				//  }
			}
		},


		components: {
			CodeMirror
		},
		mounted() {
			debugger
			let mime = 'text/x-mariadb'
			    let theme = 'ambiance'//设置主题，不设置的会使用默认主题
			    let editor = CodeMirror.fromTextArea(this.$refs.mycode, {
			      mode: mime, // 选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
			      indentWithTabs: true,
			      smartIndent: true,
			      lineNumbers: true,
			      matchBrackets: true,
			      // theme: theme,
			      // autofocus: true,
			      // extraKeys: { Ctrl: 'autocomplete' }, // 自定义快捷键
			      hintOptions: {
			      	　// 当匹配只有一项的时候是否自动补全
　　　　　　　　　　　　completeSingle: false,
			        // 自定义提示选项
			        tables: {
			          users: ['name', 'score', 'birthDate'],
			          countries: ['name', 'population', 'size']
			        }
			      }
			    })
			    // 代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
			    editor.on('inputRead', function () {
			      editor.showHint();
				 
			    })
		},
		computed: {
			
			// codemirror() {
			// 	return this.$refs.mycode.codemirror
			// }

			//   this.editor = CodeMirror.fromTextArea(this.$refs.mycode, {
			//        mode:"text/javascript",
			//        theme: "ambiance",
			//        readOnly:true,
			//  }),
		},
		methods: {

			// showSQL(val) {
			// 	this.formData.queryText = val ? val : ''
			// },
			// onCmReady(cm) {
			// 	this.codemirror.setSize("-webkit-fill-available", "auto")
			// },
			// onCmFocus(cm) {
			// 	// console.log('the editor is focus!', cm)
			// },
			// onCmCodeChange(newCode) {
			// 	// console.log('this is new code', newCode)
			// 	this.formData.queryText = newCode
			// 	this.$emit('codeChange', this.formData.queryText)
			// }

		}
	}
</script>


<style >
.codesql {
  font-size: 11pt;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	
}
.CodeMirror {
	background: antiquewhite;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.cm-s-default{
	width: 56.25rem;
	height: 9.375rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	
	
}
</style>
