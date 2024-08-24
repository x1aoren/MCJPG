import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '成员服', link: '/' },
  { text: '组织规则', link: '/rules/' },
  {
    text: '我们的团队',
    link: '/structure/',
  },
  { text: '社区论坛', link:'https://bbs.mcjpg.org/'},
  { text: '状态监测', link: 'https://status.mcjpg.org/' },
  {
    text: "友情链接",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "笨蛋开服指南", link: "https://yizhan.wiki/NitWikit/" },
                { text: "风梨影视", link: "https://v.flweb.cn/" }
              ]
  }
]
