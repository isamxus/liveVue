<template>
    <div id="app">
        <keep-alive :include="$store.state.keepAliveViews" :max="5">
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
//载入样式
import './common/sass/frame.scss';


export default {
  name: 'App'
}
</script>

<style>

</style>
