<template>
  <!-- 教学成果 -->
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
            教学效果 &gt;&gt; 教学成果
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
      active: 3,
      navData: [
        { name: "学生评教效果资料", path: "/dataMain" },
        { name: "学生比赛奖励等", path: "/awardMain" },
        { name: "教师获奖", path: "/teacherAwardMain" },
        { name: "教学成果", path: "/teachingResultsMain" }
      ],
    };
  }
};
</script>
<style>
</style>
