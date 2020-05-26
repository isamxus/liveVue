<style lang="scss">
    @import './sass/TopNav';
</style>

<template>
	<div class="top-nav-container">
		<Menu mode="horizontal" :theme="theme" :style="{width: width}">
			<template v-for="(item, index) in TopNavList">
				<MenuItem :name="index" :key="item.name">
                	{{ item.title }}
            	</MenuItem>
			</template>
		</Menu>
		<div class="search-box">
			<Input type="text">
				<Icon :style="{cursor: 'pointer'}" type="ios-search" slot="suffix" />
			</Input>
		</div>
		<div class="right-tool-bar">
			<div class="icon-item">
				<Icon type="md-heart-outline" size="24" />
				<span>关注</span>
			</div>
			<div class="icon-item">
				<Icon type="md-heart-outline" size="24" />
				<span>历史</span>
			</div>
		</div>
	</div>
</template>

<script>
import Action from './action/TopNav';
import { TopNavList } from '../../common/script/config';
export default {
	props:{
    	theme: {
    		type: String,
    		default: 'light'
    	},
    	width: {
    		type: String,
    		default: '16rem'
    	}
    },
	data () {
		return {
			
		}
	},
	computed: {
		TopNavList () {
			return TopNavList;
		}
	},
	methods: {

	}
}
</script>