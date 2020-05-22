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
			<Input type="text" />
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
	}
}
</script>