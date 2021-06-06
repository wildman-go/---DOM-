<template>
    <li>
        <slot name="pre-icon" :value="value"></slot>
        <span v-if="!del">{{title}}</span>
        <span v-else style="text-decoration: line-through ;">{{title}}</span>
        <slot name="suf-icon">后置图标默认值</slot>
        <button v-show="!del" @click="handleClick">删除</button>
    </li>
</template>

<script>

export default {
    name: "TodoItem",
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false,
        },//提供默认值
    },
    data: function(){
        return {
            value: Math.random(),
        }
    },
    methods: {
        handleClick(){
            console.log("点击删除按钮");
            this.$emit('delete', this.title);
        }
    },
}
</script>
