<template>
    <div id="app">
    	<TopNav></TopNav>
    	<div class="page-container" >
    		<keep-alive :include="$store.state.keepAliveViews" :max="5">
            	<router-view />
        	</keep-alive>
    	</div>
    	<div class="left-side-container">
    		
    	</div>
    </div>
</template>

<script>
//载入样式
import './common/sass/frame.scss';
import TopNav from './components/TopNav/TopNav';
import UnderBoard from './components/underBoard/underBoard';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

export default {
  	name: 'App',
  	data () {
  		return {

  		}
  	},
  	components: {TopNav, UnderBoard}
}
</script>

<style>

</style>
