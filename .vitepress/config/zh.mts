import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh',
  description: "GBT 系列包及其配套模组官方网站",

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/intro/' },
      { text: '下载', link: '/download/' },
      { text: '授权', link: '/auth/' },
      { text: '更新', link: '/update' },
      { text: '鸣谢', link: '/thanks' }
    ],

    sidebar: {
      '/intro/': [
        {
          text: '介绍',
          items: [
            { text: '主包', link: '/intro/' },
            { text: '道路交通标志包', link: '/intro/tsp' },
            { text: '模组 (暂缓发布)', link: '/intro/mod' }
          ]
        }
      ],
      '/auth/': [
        {
          text: '授权',
          items: [
            { text: '申请', link: '/auth/' },
            { text: '申请反馈 / 黑名单', link: '/auth/subscribe' }
          ]
        }
      ],
      '/download/': [
        {
          text: '主包',
          collapsed: true,
          items: [
            { text: 'v1.2-hotfix-1 (最新)', link: '/download/main/v1.2-hotfix-1' },
            { text: 'v1.1-hotfix-1', link: '/download/main/v1.1-hotfix-1' }
          ]
        },
        {
          text: '道路交通标志包',
          collapsed: true,
          items: [
            { text: 'v0.1 (最新)', link: '/download/tsp/v0.1' }
          ]
        },
        {
          text: '模组 (暂缓发布)',
          collapsed: true,
          items: [
            { text: 'v0.1', link: '/download/mod/v0.1' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    footer: {
      message: 'GBT 系列包，专注指示牌',
      copyright: '如无特别提示，本站内容均遵循<a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans" target="_blank">知识共享-署名-非商业性使用 4.0 国际</a>协议<br>非 MINECRAFT 官方服务。未经 MOJANG 或 MICROSOFT 批准，也不与 MOJANG 或 MICROSOFT 关联。'
    },

    editLink: {
      pattern: '//github.com/Minecraft-GBT/docs/edit/main/:path',
      text: '在 GitHub 上编辑本页'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },
    notFound: {
      title: '页面已丢失',
      quote: '谁把你带到这来了？',
      linkLabel: '返回主页',
      linkText: '返回主页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  }
})