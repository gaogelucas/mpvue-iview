<template>
<view class="i-class iconfont" :class="[iconType, custom]" :style="{'font-size': size + 'px'}">
</view>
</template>

<script>
export default {
    name: "EasyIcon",
    props: {
        type: {
            type: String,
            default: 'success'
        },
        custom: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 14
        },
    },
    data () {
        return {

        }
    },
    computed: {
        iconType () {
            return this.type ? "icon-"+this.type : ""
        }
    }

};
</script>

<style scoped>

/* 直接取在iconfont下载CSS，在App.vue中全局引入，注意要替换 .iconfont */

</style>
