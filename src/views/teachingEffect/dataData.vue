<template>
  <!-- 内容 -->
  <div>
    <template v-if="this.$route.params.id === undefined">
      <div style="width: 100%;">
        <!-- 标题、时间 -->
        <router-link
          :to="{ path: '/dataData/' + value.id }"
          class="fontStyle news_title"
          v-for="(value, i) in list"
          :key="i"
        >
          <span class="glyphicon glyphicon-menu-right"></span> &nbsp;
          {{ value.title }}
          <span class="news_time">
            {{ value.createTime }}
          </span>
        </router-link>
      </div>

      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="pagination.page"
        :limit.sync="pagination.count"
        @pagination="search"
        class="pagination"
      />
    </template>
    <template v-else>
      <div style="width: 100%;">
        <template v-if="articleType === 1">
          <pre v-html="str" class="insidePagePre">{{ str }}</pre>
        </template>
        <template v-else>
          <p><iframe width="100%" height="600" :src="str"></iframe></p>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
export default {
  components: { Pagination },
  name: "hh",
  data() {
    return {
      //分页用
      total: 0,
      pagination: {
        page: 1,
        count: 10
      },
      state: 2,
      catalog: 61,
      queryParams: {},
      sort: {},

      str: ``,
      list: [],
      //判断文章类型是图文还是文件
      articleType: 0,
      //获取屏幕宽度
      windowWidth: 0
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    search() {
      this.fetch({
        ...this.queryParams,
        ...this.sort
      });
    },
    fetch(params = {}) {
      this.loading = true;
      this.getWindowWidth();
      if (this.windowWidth < 480) {
        this.pagination.count = 14;
      }
      if (this.$route.params.id === undefined) {
        params.page = this.pagination.page;
        params.count = this.pagination.count;
        params.catalog = this.catalog;
        params.state = 2;
        this.$get("/selectArticleMessageByPage", {
          ...params
        }).then(r => {
          const data = r.data.data.rows;
          this.total = r.data.data.total;
          this.list = data;
          for (var i = 0; i < this.list.length; i++) {
            if (this.windowWidth < 480) {
              this.list[i].createTime = "";
              continue;
            }
            if (
              this.list[i].createTime !== "" ||
              this.list[i].createTime !== null
            ) {
              this.list[i].createTime = this.list[i].createTime.substring(
                0,
                10
              );
            }
          }
          this.loading = false;
        });
      } else {
        this.$get("/queryArticleContent", {
          articleId: this.$route.params.id
        }).then(r => {
          const data = r.data;
          this.articleType = data.sort;
          this.str = data.content;
          this.loading = false;
        });
      }
    },
    //获取屏幕宽度
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>
<style></style>
