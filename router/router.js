import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Main from '~/pages/main'
import Timeline from '~/pages/timeline'
import Home from '~/pages/home'
import PostCreate from '~/pages/post.create'
import PostRead from '~/pages/post.read'
import PostUpdate from '~/pages/post.update'
import PostDraft from '~/pages/post.draft'
import PostDraftUpdate from '~/pages/post.draft.update'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      // 루트(인증에 따른 분기용)
      {
        path: '/',
        component: Index,
        name: 'index'
      },
      // 로그인 페이지
      {
        path: '/cyMain',
        component: Main,
        name: 'main'
      },
      // 타임라인 페이지
      {
        path: '/timeline',
        component: Timeline,
        name: 'timeline'
      },
      // 마이홈
      {
        path: '/home/new'
      },
      // 마이홈
      {
        path: '/home/(new)?/:homeId',
        component: Home,
        name: 'home'
      },
      // 포스트 쓰기
      {
        path: '/home/(new)?/:homeId/post/create',
        component: PostCreate,
        name: 'post-create'
      },
      // 포스트 상세보기
      {
        path: '/home/(new)?/:homeId/post/:postId',
        component: PostRead,
        name: 'post-read'
      },
      // TODO:포스트 편집(수정)하기
      {
        path: '/home/(new)?/:homeId/post/:postId/update',
        component: PostUpdate,
        name: 'post-update'
      },
      // 포스트 임시저장 목록
      {
        path: '/home/(new)?/:homeId/draft',
        component: PostDraft,
        name: 'post-draft'
      },
      // 포스트 임시저장 수정
      {
        path: '/home/(new)?/:homeId/post/:postId/draft',
        component: PostDraftUpdate,
        name: 'post-draft-update'
      }
    ]
  })
}
