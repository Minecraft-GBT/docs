import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  description: "Official website for GBT series packages and mod",

  themeConfig: {
    nav: [
      { text: 'Homepage', link: '/en/' },
      { text: 'Introduction', link: '/en/intro/' },
      { text: 'Download', link: '/en/download/' },
      { text: 'Authentication', link: '/en/auth/' },
      { text: 'Update', link: '/en/update' },
      { text: 'Thanks', link: '/en/thanks' }
    ],

    sidebar: {
      '/en/intro/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Main Package', link: '/en/intro/' },
            { text: 'Traffic Signs Package', link: '/en/intro/tsp' },
            { text: 'Mod (Suspend Publication)', link: '/en/intro/mod' }
          ]
        }
      ],
      '/en/auth/': [
        {
          text: 'Authentication',
          items: [
            { text: 'Application', link: '/en/auth/' },
            { text: 'Application Feedback / Blacklist', link: '/en/auth/subscribe' }
          ]
        }
      ],
      '/en/download/': [
        {
          text: 'Main Package',
          collapsed: true,
          items: [
            { text: 'v1.2-hotfix-1 (Latest)', link: '/en/download/main/v1.2-hotfix-1' },
            { text: 'v1.1-hotfix-1', link: '/en/download/main/v1.1-hotfix-1' }
          ]
        },
        {
          text: 'Traffic Signs Package',
          collapsed: true,
          items: [
            { text: 'v0.1 (Latest)', link: '/en/download/tsp/v0.1' }
          ]
        },
        {
          text: 'Mod (Suspend Publication)',
          collapsed: true,
          items: [
            { text: 'v0.1', link: '/en/download/mod/v0.1' }
          ]
        }
      ]
    },

    footer: {
      message: 'GBT Series Pack, Focused on Signage',
      copyright: 'The English version is translated by Baidu Translate and Microsoft Copilot.<br>If there is a conflict between the English content and the Chinese content, the Chinese content shall prevail.<br>Unless otherwise noted, the content on this site follows the <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans" target="_blank">CC-BY-NC 4.0 International</a> License.<br>Total visits: <span id="busuanzi_value_site_pv" class="font-bold">--</span>, Total number of visitors: <span id="busuanzi_value_site_uv" class="font-bold">--</span><br>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.'
    },

    editLink: {
      pattern: '//github.com/Minecraft-GBT/docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})