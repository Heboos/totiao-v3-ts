<script setup lang="ts">
import redirect from './utils/request'
redirect.get('homr')
</script>

<template>
<div>
  <h1>移动端头条</h1>
  <van-button>默认按钮</van-button>
</div>
</template>

<style>
.van-button{
  width: 300px;
  height: 500px;
}
</style>
