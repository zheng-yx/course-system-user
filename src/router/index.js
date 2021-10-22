import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Index from '@/views/index/index'
import db from '@/utils/localstorage'
import request from '@/utils/request'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 课程建设规划与改革
import planningMain from '@/views/courcePlanningAndReform/planningMain'
import planningData from '@/views/courcePlanningAndReform/planningData'

import reformMain from '@/views/courcePlanningAndReform/reformMain'
import reformData from '@/views/courcePlanningAndReform/reformData'
//教学团队
import teacherMain from '@/views/teachingTeam/teacherMain'
import teacherData from '@/views/teachingTeam/teacherData'

import teamMain from '@/views/teachingTeam/teamMain'
import teamData from '@/views/teachingTeam/teamData'

import studyMain from '@/views/teachingTeam/studyMain'
import studyData from '@/views/teachingTeam/studyData'

import cultivateMain from '@/views/teachingTeam/cultivateMain'
import cultivateData from '@/views/teachingTeam/cultivateData'

import activityMain from '@/views/teachingTeam/activityMain'
import activityData from '@/views/teachingTeam/activityData'
//教学内容
import introduceMain from '@/views/teachingContent/introduceMain'
import introduceData from '@/views/teachingContent/introduceData'

import outlineMain from '@/views/teachingContent/outlineMain'
import outlineData from '@/views/teachingContent/outlineData'

import planMain from '@/views/teachingContent/planMain'
import planData from '@/views/teachingContent/planData'

import PPTMain from '@/views/teachingContent/PPTMain'
import PPTData from '@/views/teachingContent/PPTData'

import scheduleMain from '@/views/teachingContent/scheduleMain'
import scheduleData from '@/views/teachingContent/scheduleData'

import videoMain from '@/views/teachingContent/videoMain'
//教学条件
import exerciseMain from '@/views/teachingCondtion/exerciseMain'
import exerciseData from '@/views/teachingCondtion/exerciseData'

import bookMain from '@/views/teachingCondtion/bookMain'
import bookData from '@/views/teachingCondtion/bookData'

import resourceMain from '@/views/teachingCondtion/resourceMain'
import resourceData from '@/views/teachingCondtion/resourceData'
//方法与手段
import methodMain from '@/views/teachingMethods/methodMain'
import methodData from '@/views/teachingMethods/methodData'

import prepareMain from '@/views/teachingMethods/prepareMain'
import prepareData from '@/views/teachingMethods/prepareData'
//实训教学
import softwareMain from '@/views/practicalTeaching/softwareMain'
import softwareData from '@/views/practicalTeaching/softwareData'

import instructorMain from '@/views/practicalTeaching/instructorMain'
import instructorData from '@/views/practicalTeaching/instructorData'

import achievementMain from '@/views/practicalTeaching/achievementMain'
import achievementData from '@/views/practicalTeaching/achievementData'
//教学效果
import dataMain from '@/views/teachingEffect/dataMain'
import dataData from '@/views/teachingEffect/dataData'

import awardMain from '@/views/teachingEffect/awardMain'
import awardData from '@/views/teachingEffect/awardData'

import teacherAwardMain from '@/views/teachingEffect/teacherAwardMain'
import teacherAwardData from '@/views/teachingEffect/teacherAwardData'

import teachingResultsMain from '@/views/teachingEffect/teachingResultsMain'
import teachingResultsData from '@/views/teachingEffect/teachingResultsData'

import Content from '@/views/index/content'
import index from '@/views/index/index'
// 登录页
import Login from '@/views/login/index'


Vue.use(Router)

const constRouter = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index,
    redirect: '/content',
    children: [
      {
        path: '/content',
        name: 'content',
        component: Content
      },
      // 课程建设规划与改革
      // planning
      {
        path: '/planningMain',
        name: 'planningMain',
        redirect: '/planningData',
        component: planningMain,
        children: [
          {
            path: '/planningData/:id',
            name: 'planningDataOnly',
            component: planningData
          },
          {
            path: '/planningData',
            name: 'planningDataAll',
            component: planningData
          },
        ]
      },
      // reform
      {
        path: '/reformMain',
        name: 'reformMain',
        redirect: '/reformData',
        component: reformMain,
        children: [{
            path: '/reformData/:id',
            name: 'reformDataOnly',
            component: reformData
          },
          {
            path: '/reformData',
            name: 'reformDataAll',
            component: reformData
          },
        ]
      },
      // 教学团队
      // teacher
      {
        path: '/teacherMain',
        name: 'teacherMain',
        redirect: '/teacherData',
        component: teacherMain,
        children: [
          {
            path: '/teacherData/:id',
            name: 'teacherDataOnly',
            component: teacherData
          },
          {
            path: '/teacherData',
            name: 'teacherDataAll',
            component: teacherData
          },
        ]
      },
      // team
      {
        path: '/teamMain',
        name: 'teamMain',
        redirect: '/teamData',
        component: teamMain,
        children: [
          {
            path: '/teamData/:id',
            name: 'teamDataOnly',
            component: teamData
          },
          {
            path: '/teamData',
            name: 'teamDataAll',
            component: teamData
          },
        ]
      },
      // cultivate
      {
        path: '/cultivateMain',
        name: 'cultivateMain',
        redirect: '/cultivateData',
        component: cultivateMain,
        children: [{
            path: '/cultivateData/:id',
            name: 'cultivateDataOnly',
            component: cultivateData
          },
          {
            path: '/cultivateData',
            name: 'cultivateDataAll',
            component: cultivateData
          },
        ]
      },
      // study
      {
        path: '/studyMain',
        name: 'studyMain',
        redirect: '/studyData',
        component: studyMain,
        children: [{
            path: '/studyData/:id',
            name: 'studyDataOnly',
            component: studyData
          },
          {
            path: '/studyData',
            name: 'studyDataAll',
            component: studyData
          },
        ]
      },
      // activity
      {
        path: '/activityMain',
        name: 'activityMain',
        redirect: '/activityData',
        component: activityMain,
        children: [{
            path: '/activityData/:id',
            name: 'activityDataOnly',
            component: activityData
          },
          {
            path: '/activityData',
            name: 'activityDataAll',
            component: activityData
          },
        ]
      },
      // 教学内容
      // introduce
      {
        path: '/introduceMain',
        name: 'introduceMain',
        redirect: '/introduceData',
        component: introduceMain,
        children: [{
            path: '/introduceData/:id',
            name: 'introduceDataOnly',
            component: introduceData
          },
          {
            path: '/introduceData',
            name: 'introduceDataAll',
            component: introduceData
          },
        ]
      },
      // outline
      {
        path: '/outlineMain',
        name: 'outlineMain',
        redirect: '/outlineData',
        component: outlineMain,
        children: [{
            path: '/outlineData/:id',
            name: 'outlineDataOnly',
            component: outlineData
          },
          {
            path: '/outlineData',
            name: 'outlineDataAll',
            component: outlineData
          },
        ]
      },
      // schedule
      {
        path: '/scheduleMain',
        name: 'scheduleMain',
        redirect: '/scheduleData',
        component: scheduleMain,
        children: [{
            path: '/scheduleData/:id',
            name: 'scheduleDataOnly',
            component: scheduleData
          },
          {
            path: '/scheduleData',
            name: 'scheduleDataAll',
            component: scheduleData
          },
        ]
      },
      // plan
      {
        path: '/planMain',
        name: 'planMain',
        redirect: '/planData',
        component: planMain,
        children: [{
            path: '/planData/:id',
            name: 'planDataOnly',
            component: planData
          },
          {
            path: '/planData',
            name: 'planDataAll',
            component: planData
          },
        ]
      },
      // PPT
      {
        path: '/PPTMain',
        name: 'PPTMain',
        redirect: '/PPTData',
        component: PPTMain,
        children: [{
            path: '/PPTData/:id',
            name: 'PPTDataOnly',
            component: PPTData
          },
          {
            path: '/PPTData',
            name: 'PPTDataAll',
            component: PPTData
          },
        ]
      },
      // video
      {
        path: '/videoMain',
        name: 'videoMain',
        component: videoMain
      },
      // 教学条件
      // exercise
      {
        path: '/exerciseMain',
        name: 'exerciseMain',
        redirect: '/exerciseData',
        component: exerciseMain,
        children: [{
            path: '/exerciseData/:id',
            name: 'exerciseDataOnly',
            component: exerciseData
          },
          {
            path: '/exerciseData',
            name: 'exerciseDataAll',
            component: exerciseData
          },
        ]
      },
      // book
      {
        path: '/bookMain',
        name: 'bookMain',
        redirect: '/bookData',
        component: bookMain,
        children: [{
            path: '/bookData/:id',
            name: 'bookDataOnly',
            component: bookData
          },
          {
            path: '/bookData',
            name: 'bookDataAll',
            component: bookData
          },
        ]
      },
      // resource
      {
        path: '/resourceMain',
        name: 'resourceMain',
        redirect: '/resourceData',
        component: resourceMain,
        children: [{
            path: '/resourceData/:id',
            name: 'resourceDataOnly',
            component: resourceData
          },
          {
            path: '/resourceData',
            name: 'resourceDataAll',
            component: resourceData
          },
        ]
      },
      // 方法与手段
      // prepare
      {
        path: '/prepareMain',
        name: 'prepareMain',
        redirect: '/prepareData',
        component: prepareMain,
        children: [{
            path: '/prepareData/:id',
            name: 'prepareDataOnly',
            component: prepareData
          },
          {
            path: '/prepareData',
            name: 'prepareDataAll',
            component: prepareData
          },
        ]
      },
      // method
      {
        path: '/methodMain',
        name: 'methodMain',
        redirect: '/methodData',
        component: methodMain,
        children: [{
            path: '/methodData/:id',
            name: 'methodDataOnly',
            component: methodData
          },
          {
            path: '/methodData',
            name: 'methodDataAll',
            component: methodData
          },
        ]
      },
      // 实训教学
      // software
      {
        path: '/softwareMain',
        name: 'softwareMain',
        redirect: '/softwareData',
        component: softwareMain,
        children: [{
            path: '/softwareData/:id',
            name: 'softwareDataOnly',
            component: softwareData
          },
          {
            path: '/softwareData',
            name: 'softwareDataAll',
            component: softwareData
          },
        ]
      },
      // instructor
      {
        path: '/instructorMain',
        name: 'instructorMain',
        redirect: '/instructorData',
        component: instructorMain,
        children: [{
            path: '/instructorData/:id',
            name: 'instructorDataOnly',
            component: instructorData
          },
          {
            path: '/instructorData',
            name: 'instructorDataAll',
            component: instructorData
          },
        ]
      },
      // achievement
      {
        path: '/achievementMain',
        name: 'achievementMain',
        redirect: '/achievementData',
        component: achievementMain,
        children: [{
            path: '/achievementData/:id',
            name: 'achievementDataOnly',
            component: achievementData
          },
          {
            path: '/achievementData',
            name: 'achievementDataAll',
            component: achievementData
          },
        ]
      },
      // 教学效果
      // data
      {
        path: '/dataMain',
        name: 'dataMain',
        redirect: '/dataData',
        component: dataMain,
        children: [{
            path: '/dataData/:id',
            name: 'dataDataOnly',
            component: dataData
          },
          {
            path: '/dataData',
            name: 'dataDataAll',
            component: dataData
          },
        ]
      },
      // award
      {
        path: '/awardMain',
        name: 'awardMain',
        redirect: '/awardData',
        component: awardMain,
        children: [{
            path: '/awardData/:id',
            name: 'awardDataOnly',
            component: awardData
          },
          {
            path: '/awardData',
            name: 'awardDataAll',
            component: awardData
          },
        ]
      },
      // teacherAward
      {
        path: '/teacherAwardMain',
        name: 'teacherAwardMain',
        redirect: '/teacherAwardData',
        component: teacherAwardMain,
        children: [{
            path: '/teacherAwardData/:id',
            name: 'teacherAwardDataOnly',
            component: teacherAwardData
          },
          {
            path: '/teacherAwardData',
            name: 'teacherAwardDataAll',
            component: teacherAwardData
          },
        ]
      },
      // teachingResults
      {
        path: '/teachingResultsMain',
        name: 'teachingResultsMain',
        redirect: '/teachingResultsData',
        component: teachingResultsMain,
        children: [{
            path: '/teachingResultsData/:id',
            name: 'teachingResultsDataOnly',
            component: teachingResultsData
          },
          {
            path: '/teachingResultsData',
            name: 'teachingResultsDataAll',
            component: teachingResultsData
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error-page/404'], resolve),
    hidden: true
  },
  {
    path: '/error',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '404',
        component: (resolve) => require(['@/views/error-page/404'], resolve),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  }

]
const router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constRouter
})

const whiteList = ['/login']
export default router
