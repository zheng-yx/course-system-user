<template>
  <div style="background-color:white;">
    <!-- 导航 -->
    <div id="index">
      <!-- 顶部 -->
      <div class="topBox">
        <!-- 顶部顶栏 -->
        <div class="borderBottom">
          <div class="container">
            <div class="languageBox"><a href="#">加入收藏</a></div>
            <div class="languageBox"><router-link to="/content">首页</router-link></div>
            <div class="languageBox"><a href="#">招生代码 12668</a></div>
          </div>
        </div>
        <!-- 顶部图片栏 -->
        <div class="container">
          <div class="row">
            <!-- <div class="col-xs-12 col-sm-6 col-md-8 logo">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-2">
              <div class="address" />
            </div> -->
          </div>
        </div>
      </div>
      <nav class="navbar navbar-static-top navbar-default">
        <div class="container-fluid container">
          <!-- 导航栏浮现 -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li @click="closeNav"><router-link to="/content">首页</router-link></li>
              <li class="dropdown">
                <router-link to="/planningMain" class="dropdown-toggle" data-toggle="dropdown">课程建设与改革</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified nav" role="menu">
                  <li @click="closeNav"><router-link to="/planningMain">建设规划</router-link></li>
                  <li @click="closeNav"><router-link to="/reformMain">教学改革</router-link></li>
                </ul>
              </li>

              <li class="dropdown">
                <router-link to="/teacherMain" class="dropdown-toggle" data-toggle="dropdown">教学团队</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified" role="menu">
                  <li @click="closeNav"><router-link to="/teacherMain">主讲教师</router-link></li>
                  <li @click="closeNav"><router-link to="/teamMain">师资队伍</router-link></li>
                  <li @click="closeNav"><router-link to="/cultivateMain">师资培养</router-link></li>
                  <li @click="closeNav"><router-link to="/studyMain">科研教研</router-link></li>
                  <li @click="closeNav"><router-link to="/activityMain">教研活动</router-link></li>
                </ul>
              </li>

              <li class="dropdown">
                <router-link to="/introduceMain" class="dropdown-toggle" data-toggle="dropdown">教学内容</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified" role="menu">
                  <li @click="closeNav"><router-link to="/introduceMain">课程介绍</router-link></li>
                  <li @click="closeNav"><router-link to="/outlineMain">课程大纲</router-link></li>
                  <li @click="closeNav"><router-link to="/scheduleMain">授课进度表</router-link></li>
                  <li @click="closeNav"><router-link to="/planMain">教案</router-link></li>
                  <li @click="closeNav"><router-link to="/PPTMain">PPT</router-link></li>
                  <li @click="closeNav"><router-link to="/videoMain">授课视频</router-link></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/exerciseMain" class="dropdown-toggle" data-toggle="dropdown">教学条件</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified" role="menu">
                  <li @click="closeNav"><router-link to="exerciseMain">课程练习</router-link></li>
                  <li @click="closeNav"><router-link to="bookMain">教程参考书</router-link></li>
                  <li @click="closeNav"><router-link to="resourceMain">网络资源</router-link></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/prepareMain" class="dropdown-toggle" data-toggle="dropdown">教学方法与手段</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified" role="menu">
                  <li @click="closeNav"><router-link to="/prepareMain">教学准备</router-link></li>
                  <li @click="closeNav"><router-link to="/methodMain">教学设计与方法</router-link></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/softwareMain" class="dropdown-toggle" data-toggle="dropdown">实训教学</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified" role="menu">
                  <li @click="closeNav"><router-link to="/softwareMain">课程实训软件</router-link></li>
                  <li @click="closeNav"><router-link to="/instructorMain">实训指导书</router-link></li>
                  <li @click="closeNav"><router-link to="/achievementMain">学生实训成果</router-link></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/dataMain" class="dropdown-toggle" data-toggle="dropdown">教学效果</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"></a>
                <ul class="dropdown-menu nav-justified" role="menu">
                  <li @click="closeNav"><router-link to="/dataMain">学生评教效果资料</router-link></li>
                  <li @click="closeNav"><router-link to="/awardMain">学生比赛奖励等</router-link></li>
                  <li @click="closeNav"><router-link to="/teacherAwardMain">教师获奖</router-link></li>
                  <li @click="closeNav"><router-link to="/teachingResultsMain">教学成果</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- 内容 -->
    <router-view />
    <!-- 底部 -->
    <div class="footer bottomBox">
      <div class="row frow" style="margin-left:10%;">
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <span class="footerTitle">网络营销</span>
          <p class="copyright-text">Copyright &copy;&nbsp;&nbsp;广州理工学院 </p>
        </div>
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h5>联系方式</h5>
          <ul>
            <span class="glyphicon glyphicon-map-marker mrg" />
            <li class="address-icon">地址: 广州市白云区太和镇兴太三路638号<br></li>
            <span class="glyphicon glyphicon-envelope mrg" />
            <li class="email-icon">邮编：510540</li>
          </ul>
        </div>
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h5>网络资源</h5>
          <ul>
            <span class="glyphicon glyphicon-cloud-download mrg" />
            <li class="address-icon">
              <router-link to="resourceMain">
                网络资源
              </router-link>
              <br>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h5>访问统计</h5>
          {{ count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/styles/insidePage.scss'
import './css/bootstrap.css'
import './css/style.css'
import './css/online.css'
import ContentArea from './content'
import myJs from './js/index'
export default {
  name: 'Index',
  components: {
    ContentArea
  },
  data() {
    return {
      count: 0
    }
  },
  created () {
    this.$get('/count').then((r) => {
      this.count = r.data.data
    })
  },
  mounted() {
    myJs.chadisplay()
  },
  methods: {
    //关闭导航栏
    closeNav() {
      document.querySelector(".navbar-toggle").click();
    }
  }
}
</script>
<style lang="scss" scoped>
  .topBox {
    background: url(./images/head.jpg);
    background-size:80% 100%;
    background-repeat:no-repeat;
    background-position: center center;
    height: 145px;
    background-color: white;
  }
  .bottomBox {
    background: url(./images/bottom2.png);
    background-size:100% 100%;
    width: 1020px;
    margin:0 auto;
    background-repeat:no-repeat;
    background-position: center center;
    // height: 145px;
    background-color: white;
  }
  .footerTitle {
    margin-right:50px;
  }
  
 @media screen and (max-width: 767px) {
  .navbar-nav li {
    background-color: rgb(235, 235, 235);
    padding: 10px 0;
    :visited {
      background-color: #333333;
    }
    a {
      color: #333333;
      span {
        padding-top: 10px;
      }
    }
  }
 }
</style>
