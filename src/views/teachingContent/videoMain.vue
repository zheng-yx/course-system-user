<template>
  <!-- 授课视频 -->
  <div style="width:80%; min-height:76vh; margin:0 auto;">
    <!-- 左边菜单 -->
    <div class="left" style="height: 100%">
      <div
        v-for="(item, i) in navData"
        :key="i"
        class="div_menu"
        :class="{ div_menu_click: active === i }"
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
          <br>
          <p>
            当前位置：<router-link
              to="/content"
              style="text-decoration: none;"
            >《网络营销》课程</router-link>
            &gt;&gt;
            教学内容 &gt;&gt; 授课视频
          </p>
          <br>
        </div>
        <!-- 内容 -->
        <div class="video" :class="{videoShow: videoShow}">
          <div id="videoDiv">
            <video id="videoplayer" controls preload name="media" width="100%" height="100%">
              <source :src="videoSrc">
            </video>
          </div>
          <div id="videomessage">
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <a id="home-tab" class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">简介</a>
              </li>
              <li class="nav-item" role="presentation">
                <a id="profile-tab" class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">详细</a>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div id="home" class="tab-pane active" role="tabpanel" aria-labelledby="home-tab">
                <h4>
                  课程名称：{{ this.choosedVideo.name }}
                </h4>
                <h5>
                  授课老师：{{ this.choosedVideo.teacher }}
                </h5>
                <h5>
                  课程简介：{{ this.choosedVideo.detail }}
                </h5>
              </div>
              <div id="profile" class="tab-pane" role="tabpanel" aria-labelledby="profile-tab">
                <h4>
                  MORE
                </h4>
                <h5>
                  {{ this.choosedVideo.more }}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div id="accordionExample" class="accordion" :class="{ videoChapterFar: videoShow, videoChapterClose: !videoShow }">
          <div v-for="(v, i) in videoChapter" :key="i" class="card panel panel-default">
            <template v-if="i === 0">
              <div class="card-header panel-heading">
                <h2 class="mb-0 panel-title">
                  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#' + 'collapse' + i" aria-expanded="true" :aria-controls="i">
                    第 {{ i + 1 }} 章 {{ v.name }}
                  </button>
                </h2>
              </div>
              <div :id="'collapse' + i" class="collapse show panel-body" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <ul>
                    <li v-for="(value, j) in videoDepository" :key="j" class="courselink" @click="chooseVideo(value)">
                      <template v-if="value.kid === v.kid">
                        <template v-if="value.image !== null">
                          <img class="coursepic" :src="value.image">
                        </template>
                        <template v-else>
                          <img class="coursepic" src="@/views/teachingContent/pic/coursepic.jpg">
                        </template>
                        <h5 class="coursetitle">{{ value.name }}</h5>
                      </template>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card panel-default">
                <div class="card-header panel-heading">
                  <h2 class="mb-0 panel-title">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" :data-target="'#' + 'collapse' + i" aria-expanded="false" :aria-controls="i">
                      第 {{ i + 1 }} 章 {{ v.name }}
                    </button>
                  </h2>
                </div>
                <div :id="'collapse' + i" class="collapse panel-body" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <ul>
                      <li v-for="(value, j) in videoDepository" :key="j" class="courselink" @click="chooseVideo(value)">
                        <template v-if="value.kid === v.kid">
                          <template v-if="value.image !== null">
                            <img class="coursepic" :src="value.image">
                          </template>
                          <template v-else>
                            <img class="coursepic" src="@/views/teachingContent/pic/coursepic.jpg">
                          </template>
                          <h5 class="coursetitle">{{ value.name }}</h5>
                        </template>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hh',
  data() {
    return {
      active: 5,
      navData: [
        { name: '课程介绍', path: '/introduceMain' },
        { name: '课程大纲', path: '/outlineMain' },
        { name: '授课进度表', path: '/scheduleMain' },
        { name: '教案', path: '/planMain' },
        { name: 'PPT', path: '/PPTMain' },
        { name: '授课视频', path: '/videoMain' }
      ],
      videoSrc: '',
      videoChapter: [],
      videoChapterNums: 0,
      videoDepository: [],
      choosedVideo: {},
      //显示视频
      videoShow: false
    }
  },
  created() {
    this.$get('/coursecatalog').then(r => {
      const data1 = r.data.data
      this.videoChapter = data1
      for (var i = 0; i < data1.length; i++) {
        this.videoChapterNums = data1.length
        if (data1[i].kid !== '' || data1[i].kid !== null) {
          const params = {
            state: 2,
            kId: data1[i].kid,
            pageNum: 1,
            pageSize: 100
          }
          this.$get('/video/list', {
            ...params
          }).then(r => {
            const data2 = r.data.data.rows
            for (var j = 0; j < data2.length; j++) {
              this.videoDepository.push(data2[j])
            }
          })
        }
      }
      this.loading = false
    })
  },
  methods: {
    chooseVideo(value) {
      this.videoShow = true
      this.choosedVideo = value
      this.videoSrc = value.url
      const player = document.querySelector('#videoplayer')
      player.src = this.videoSrc
      player.play()
    }
  }
}
</script>
<style lang="scss" scoped>
  ul {
    list-style: none;
  }
  #videoDiv {
    width: 55%;
    height: 50%;
    float: left;
    position: relative;
    margin: 0 20px 20px 0;
  }
  #videomessage {
    width: 40%;
    height: 50%;
    float: left;
    position: relative;
  }
  .video-js .vjs-big-play-button{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    left: 55% !important;
    top: 45%;
  }
  .courselink {
    float: left;
    right: 10px;
    position: relative;
  }
  .coursepic {
      width: 200px;
      height: 120px;
      margin: 0 0 10px 10px;
      border: 1px solid gray;
  }
  .coursetitle {
    position: absolute;
    bottom: 12px;
    font-size: 12px;
    background-color: #33CCCC;
    padding: 7px 5px;
    font-weight: 700;
    float: left;
    left: 10px;
  }

  #myTabContent {
    border: 1px solid #ddd;
    background-color: rgb(235, 235, 235);
    padding: 18px 25px 10px;
    h4 {
      font-size: 16px;
      font-weight: 700;
      color: #565555;
      margin: 0 0 15px;
    }
    h5 {
      font-size: 14px;
      color: #565555;
      line-height: 24px;
    }
  }
  .home .btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 10px;
    cursor: pointer;
  }
  #myTab .active {
    background-color: rgb(235, 235, 235);
  }
  .panel-heading {
    background-color: rgb(235, 235, 235);
  }
  .panel-body {
    background-color: rgb(240, 240, 240);
  }
  .video {
    display: none;
  }
  .videoShow {
    display: inline;
  }
  .videoChapterFar {
    margin-top: 30%;
  }
  .videoChapterClose {
    margin-top: 5%;
  }
  @media screen and (max-width: 1065px) {
    #videoDiv {
      width: 100%;
      height: 50%;
      float: left;
      position: relative;
      margin-right: 20px;
      
    }
    #videomessage {
      width: 100%;
      height: 50%;
      float: none;
      margin: 0 20px 20px 0;
    }
    #accordionExample {
      margin-top: 5%;
    }
  }
</style>
