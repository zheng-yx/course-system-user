<template>
  <!-- 教学准备 -->
  <div style="width:80%; min-height:76vh; margin:0 auto;">
    <!-- 左边菜单 -->
    <div class="left" style="height: 100%">
      <div
        v-for="(item, i) in navData"
        class="div_menu"
        :class="{ div_menu_click: active === i }"
        :key="i"
        @click="$router.push({ path: item.path }), (active = i)"
      >
        <div>{{ item.name }}</div>
      </div>
    </div>
    <!-- 右边内容 -->
    <div class="right">
      <div style="padding-left: 20px;">
        <!-- 当前位置 -->
        <div style="text-align-last: left;">
          <br />
          <p>
            当前位置：<router-link to="/content" style="text-decoration: none;"
              >《网络营销》课程</router-link
            >
            &gt;&gt;
            教学方法与手段 &gt;&gt; 教学准备
          </p>
          <br />
        </div>
        <!-- 内容 -->
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hh",
  data() {
    return {
      active: 0,
      navData: [
        { name: "教学准备", path: "/prepareMain" },
        { name: "教学设计与方法", path: "/methodMain" }
      ],
    };
  }
};
</script>
<style>
</style>
