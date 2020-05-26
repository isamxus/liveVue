import Vue from 'vue'
import vuex from 'vuex';
import store from './stores';
import App from './App'
import axios from 'axios';
import router from './router'
import { Urls } from './common/script/config';	
import Utils from './common/script/utils';
import './common/sass/app.scss';

Vue.config.productionTip = false

//引用iview库
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

//使用vuex管理状态
Vue.use(vuex);

//初始化富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//import ImageResize from 'quill-image-resize-module'; 

Vue.use(VueQuillEditor, {
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['image']
        ],
        imageResize: {
            displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
        }
    },
    placeholder: '请输入内容...'
});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//全局引用script
global.axios = axios;
global.Urls = Urls;
global.Utils = Utils;

/* eslint-disable no-new */
let vm = {};
ready();
function ready(){
    vm = new Vue({
        el: '#app'
        ,router
        ,store
        ,template: '<App/>'
        ,components:{App}
        ,data: {}
    });

    //设置REM
    document.body.onresize = function(){
        /**
            支持自适应式设置
            document.getElementsByTagName('html')[0].style.fontSize = (document.body.clientWidth / 100) * 6.25 + 'px';
        */
        document.getElementsByTagName('html')[0].style.fontSize = '20px';
    }
    document.body.onresize();
}

router.beforeEach((to, from, next) => {
    next();
})

axios.interceptors.response.use(response=>{
    return response;
},error=>{
    return Promise.reject(error);
});