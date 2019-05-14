// 순수 사전
const dict = {
  cyworld: { ko: '싸이월드', en: 'CyWORLD' },
  post: { ko: '게시물', en: 'post' },
  publish: { ko: '게시', en: 'publish' },
  cancel: { ko: '취소', en: 'Cancel' },
  draft: { ko: '임시', en: 'Draft' },
  save: { ko: '저장', en: 'Save' },
  comment: { ko: '댓글', en: 'comment' },
  reply: { ko: '답글', en: 'reply' },
  write: { ko: '쓰기', en: 'write' },
  login: { ko: '로그인', en: 'LOGIN' },
  logout: { ko: '로그아웃', en: 'LOGOUT' }
}

// 사용처 (사전 순수 참조 또는 조합참조 또는 어휘추가)
export const messages = {
  button: {
    login: {
      ko: dict.login.ko,
      en: dict.login.en
    },
    logout: {
      ko: dict.logout.ko,
      en: dict.logout.en
    },
    publish: {
      ko: dict.publish.ko,
      en: dict.publish.en
    },
    cancel: {
      ko: dict.cancel.ko,
      en: dict.cancel.en
    },
    saveDraft: {
      ko: `${dict.draft.ko} ${dict.save.ko}`,
      en: `${dict.save.en} ${dict.draft.en}`
    },
    inputReply: {
      ko: `${dict.reply.ko} ${dict.write.ko}`,
      en: dict.reply.en
    }
  },
  placeholder: {
    comment: {
      ko: `${dict.comment.ko}을 입력해 보세요.`,
      en: `${dict.write.en} a ${dict.comment.en}`
    }
  }
}
