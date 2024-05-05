import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "GBT",
  description: "GBT 系列包及其配套模组官方网站",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
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
            { text: '道路交通标志包 (暂缓发布)', link: '/intro/road' },
            { text: '模组 (主模组) (暂缓发布)', link: '/intro/mod' },
            { text: '模组 (MTR 附属) (暂缓发布)', link: '/intro/mod-mtr' }
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
          text: '道路交通标志包 (暂缓发布)',
          collapsed: true,
          items: [
            { text: 'v1.0', link: '/download/traffic-signs/v1.0' }
          ]
        },
        {
          text: '模组 (主模组) (暂缓发布)',
          collapsed: true,
          items: [
            { text: 'v0.1', link: '/download/mod/v0.1' }
          ]
        },
        {
          text: '模组 (MTR 附属) (暂缓发布)',
          collapsed: true,
          items: [
            { text: 'v0.1', link: '/download/mod-mtr/v0.1' }
          ]
        }
      ]
    },

    head: [
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-L28WC1421R' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L28WC1421R');`
      ]
    ],

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

    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>' }, link: 'mailto:gbt@gteh.top' },
      { icon: 'github', link: '//github.com/Minecraft-GBT' },
      { icon: { svg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="96px" height="96px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><image id="image0" width="96" height="96" x="0" y="0" xlink:href="data:image/png;base64,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" /></svg>' }, link: '//www.mtrbbs.top/thread-6274-1-1.html' }
    ],

    footer: {
      message: 'GBT 系列包，专注指示牌',
      copyright: '如无特别提示，本站内容均遵循<a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans" target="_blank">知识共享-署名-非商业性使用 4.0 国际</a>协议'
    },

    cleanUrls: true,
    ignoreDeadLinks: true,

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
    externalLinkIcon: true
  }
})