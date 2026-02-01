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
            { text: 'Application Feedback / Blacklist', link: '/en/auth/results' },
          ]
        }
      ],
      '/en/download/': [
        {
          text: 'Main Package',
          collapsed: true,
          items: [
            { text: 'v1.2-hotfix-1 (Latest)', link: '/en/download/main/v1.2-hotfix-1' },
            { text: 'v1.1-hotfix-1', link: '/en/download/main/v1.1-hotfix-1' },
          ]
        },
        {
          text: 'Traffic Signs Package',
          collapsed: true,
          items: [
            { text: 'v0.1 (Latest)', link: '/en/download/tsp/v0.1' },
            { text: 'v0.0.3+internal-test-3', link: '/en/download/tsp/v0.0.3+internal-test-3' },
          ]
        },
        /*{
          text: 'Mod (Suspend Publication)',
          collapsed: true,
          items: [
            { text: 'v0.1', link: '/en/download/mod/v0.1' },
          ]
        }*/
      ]
    },

    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>' }, link: 'mailto:gbt@gteh.top' },
      { icon: 'github', link: '//github.com/Minecraft-GBT' },
      { icon: 'discord', link: '//discord.com/invite/U2sykwpTT4' },
      { icon: { svg: '<svg width="512" height="514" viewBox="0 0 512 514" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M503.16 323.56C514.55 281.47 515.32 235.91 503.2 190.76C466.57 54.2299 326.04 -26.8001 189.33 9.77991C83.8101 38.0199 11.3899 128.07 0.689941 230.47H43.99C54.29 147.33 113.74 74.7298 199.75 51.7098C306.05 23.2598 415.13 80.6699 453.17 181.38L411.03 192.65C391.64 145.8 352.57 111.45 306.3 96.8198L298.56 140.66C335.09 154.13 364.72 184.5 375.56 224.91C391.36 283.8 361.94 344.14 308.56 369.17L320.09 412.16C390.25 383.21 432.4 310.3 422.43 235.14L464.41 223.91C468.91 252.62 467.35 281.16 460.55 308.07L503.16 323.56Z" /><path d="M321.99 504.22C185.27 540.8 44.7501 459.77 8.11011 323.24C3.84011 307.31 1.17 291.33 0 275.46H43.27C44.36 287.37 46.4699 299.35 49.6799 311.29C53.0399 323.8 57.45 335.75 62.79 347.07L101.38 323.92C98.1299 316.42 95.39 308.6 93.21 300.47C69.17 210.87 122.41 118.77 212.13 94.7601C229.13 90.2101 246.23 88.4401 262.93 89.1501L255.19 133C244.73 133.05 234.11 134.42 223.53 137.25C157.31 154.98 118.01 222.95 135.75 289.09C136.85 293.16 138.13 297.13 139.59 300.99L188.94 271.38L174.07 231.95L220.67 184.08L279.57 171.39L296.62 192.38L269.47 219.88L245.79 227.33L228.87 244.72L237.16 267.79C237.16 267.79 253.95 285.63 253.98 285.64L277.7 279.33L294.58 260.79L331.44 249.12L342.42 273.82L304.39 320.45L240.66 340.63L212.08 308.81L162.26 338.7C187.8 367.78 226.2 383.93 266.01 380.56L277.54 423.55C218.13 431.41 160.1 406.82 124.05 361.64L85.6399 384.68C136.25 451.17 223.84 484.11 309.61 461.16C371.35 444.64 419.4 402.56 445.42 349.38L488.06 364.88C457.17 431.16 398.22 483.82 321.99 504.22Z"/></svg>' }, link: '//modrinth.com/collection/7UUBTVX2' },
      { icon: { svg: '<svg viewBox="0 0 32 32"><path d="M23.9074 12.0181C23.9074 12.0181 30.0327 11.0522 31 8.23523H21.6168V6H1L3.53975 8.94699V11.9664C3.53975 11.9664 9.94812 11.6332 12.427 13.5129C15.8202 16.6579 8.61065 20.9092 8.61065 20.9092L7.37439 25C9.30758 23.1593 12.9921 20.7781 19.7474 20.8929C17.1767 21.7053 14.5917 22.9743 12.5794 25H26.2354L24.9494 20.9092C24.9494 20.9092 15.0519 15.0732 23.9074 12.0184V12.0181Z" fill="currentColor"></path></svg>' }, link: '//www.curseforge.com/minecraft/texture-packs/gbt', ariaLabel: 'Resource Pack (Main)' },
      // { icon: { svg: '<svg viewBox="0 0 32 32"><path d="M23.9074 12.0181C23.9074 12.0181 30.0327 11.0522 31 8.23523H21.6168V6H1L3.53975 8.94699V11.9664C3.53975 11.9664 9.94812 11.6332 12.427 13.5129C15.8202 16.6579 8.61065 20.9092 8.61065 20.9092L7.37439 25C9.30758 23.1593 12.9921 20.7781 19.7474 20.8929C17.1767 21.7053 14.5917 22.9743 12.5794 25H26.2354L24.9494 20.9092C24.9494 20.9092 15.0519 15.0732 23.9074 12.0184V12.0181Z" fill="currentColor"></path></svg>' }, link: '//www.curseforge.com/minecraft/mc-mods/', ariaLabel: 'Mod' },
      // { icon: { svg : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg>' }, link: '//sponsor.gteh.top' },
    ],

    footer: {
      message: 'GBT Series Pack, Focused on Signage',
      copyright: 'The English version is translated by Translation Software and Artifical Intelligence.<br>If there is a conflict between the English content and the Chinese content, the Chinese content shall prevail.<br>Unless otherwise noted, the content on this site follows the <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans" target="_blank">CC-BY-NC 4.0 International</a> License.<br>Page View: <span id="busuanzi_value_site_pv" class="font-bold">--</span>, Unique Visitor: <span id="busuanzi_value_site_uv" class="font-bold">--</span><br>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.'
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