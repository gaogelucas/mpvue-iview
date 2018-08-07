<template>
<view class="i-class i-alert" :class="['i-alert-'+type, {'i-alert-with-icon':showIcon, 'i-alert-with-desc': desc}]" v-if="!closed">
    <view v-if="showIcon" class="i-alert-icon">
        <easy-icon type="info" v-if="type === 'info'" :size="descSize"></easy-icon>
        <easy-icon type="success" v-if="type === 'success'" :size="descSize"></easy-icon>
        <easy-icon type="warning" v-if="type === 'warning'" :size="descSize"></easy-icon>
        <easy-icon type="error" v-if="type === 'error'" :size="descSize"></easy-icon>
    </view>
    {{title}}
    <view class="i-alert-desc">
        {{desc}}
    </view>
    <view class="i-alert-close" v-if="closable" @tap="handleTap">
        <easy-icon type="close"></easy-icon>
    </view>
</view>
</template>

<script>
import EasyIcon from "./EasyIcon"

export default {
    name: "EasyAlert",
    components: {
        EasyIcon: EasyIcon
    },
    props: {
        //info, success, warning, error
        type: {
            type: String,
            default: "info"
        },
        closable: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: "Alert"
        },
        desc: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            closed: false
        }
    },
    computed: {
        descSize() {
            return this.desc?24:16
        }
    },
    methods: {
        handleTap() {
            this.setData({
                closed: !this.closed,
            });
            this.$emit('close');
        },

    }
};
</script>

<style scoped>
.i-alert {
    position: relative;
    margin: 10px;
    padding: 8px 48px 8px 16px;
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
    background: #f7f7f7;
    color: #495060
}

.i-alert.i-alert-with-icon {
    padding: 8px 48px 8px 38px
}

.i-alert-info {
    color: #fff;
    background: #2db7f5
}

.i-alert-success {
    color: #fff;
    background: #19be6b
}

.i-alert-warning {
    color: #fff;
    background: #f90
}

.i-alert-error {
    color: #fff;
    background: #ed3f14
}

.i-alert-icon {
    position: absolute;
    left: 16px;
}

.i-alert-desc {
    font-size: 12px
}

.i-alert-with-desc {
    padding: 16px;
    position: relative
}

.i-alert-with-desc.i-alert-with-icon {
    padding: 16px 16px 16px 69px
}

.i-alert-with-desc .i-alert-icon {
    top: 50%;
    left: 24px;
    margin-top: -21px;
    font-size: 28px
}

.i-alert-close {
    font-size: 12px;
    position: absolute;
    right: 16px;
    top: 8px;
    overflow: hidden;
    cursor: pointer
}
</style>
