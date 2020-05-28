<template>
    <div id="home">
        <component v-bind:is="contpl" v-if="contpl"></component>
    </div>
</template>

<script type="text/javascript">
    export default {
        name:'Dynamic',

        props:['cpname'],

        data:function() {
            return {
                rendertpl:null,
                tpl:''
            }
        },

        watch:{
            "cpname":function(){
                this.tpl = this.cpname;
                this.init();
            }
        },

        computed:{
            loadertpl(){
                return () => import('@/pages/home/'+this.tpl+'/')
            }
        },

        methods:{
            init:function(){
                const self = this;
                self.loadertpl().then(()=>{
                    // 动态加载模板
                    self.rendertpl  = ()=>self.loadertpl();
                }).catch(()=>{
                    // 模板不存在404时处理
					console.log("404")
//                     self.rendertpl  = ()=>import('@//components/library/public/404/');
                })
            },
        },

        mounted(){
            this.init();
        },
    }
</script>
