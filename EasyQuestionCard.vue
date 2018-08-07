<template>
<div>
    <easy-icon type="warning" size=28></easy-icon>

    <easy-alert title="您的手机因欠费已停机" desc="the number you dialed has out of service."></easy-alert>

    <easy-badge dot><icon type="warn" size="40" class="weui-flex__item" /></easy-badge>
    
    
    <i class="iconfont icon-error" ></i>
    <easy-panel title="easypanel"></easy-panel>
    <div class="quest-summary">
        <div>关于什么问题</div>
        <div>问题的激励机制</div>
    </div>
    <div class="quest-info">
        <div>题目</div>
        <div>题目详情</div>
    </div>
    <div class="user-info">
        <div class="user-avatar">
            <EasyAvatar size="small" shape="square">A</EasyAvatar>
        </div>
        <div class="user-core-info">
            <div class="user-background">用户背景信息</div>
            <div class="user-statistics">用户统计信息</div>
        </div>
        <div class="user-follow-btn">关注按钮</div>
        <div class="user-more-btn">更多选项按钮</div>
    </div>

</div>
</template>

<script>
import EasyAvatar from "./EasyAvatar"
import EasyPanel from "./EasyPanel"
import EasyIcon from "./EasyIcon"
import EasyAlert from "./EasyAlert"
import EasyBadge from "./EasyBadge"

export default {
    name: "EasyQuestionCard",
    components: {
        EasyAvatar: EasyAvatar,
        EasyPanel: EasyPanel,
        EasyIcon: EasyIcon,
        EasyAlert: EasyAlert,
        EasyBadge: EasyBadge
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.user-info {
    display: flex
}

.user-avatar {
    width: 60rpx;
    height: 60rpx;
    margin: 0
}

.user-core-info {
    width: 580rpx;
    height: 60rpx;
    margin: 0
}

.user-follow-btn {
    width: 80rpx;
    height: 60rpx;
    margin: 0
}

.user-more-btn {
    width: 40rpx;
    height: 60rpx;
    margin: 0
}

</style>
