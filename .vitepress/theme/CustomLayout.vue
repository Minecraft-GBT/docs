<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';
import Twikoo from './Twikoo.vue';

const { frontmatter } = useData()
const { Layout } = DefaultTheme
</script>

<!-- GNU AFFERO GENERAL PUBLIC LICENSE 3.0 -->

<template>
  <Layout>
    <template #doc-before v-if="frontmatter.download">
      <div class="vp-doc external-link-icon-enabled"> 
        <h1 :id="frontmatter.version" tabindex="-1">{{ frontmatter.version }}<span v-if="frontmatter.latest" class="VPBadge tip">最新版本</span> <a class="header-anchor" :href="'#' + frontmatter.version" :aria-label="'Permalink to &quot;' + frontmatter.version + '&quot;'">​</a></h1>
        <div v-if="!frontmatter.latest" class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>这不是最新版本内容。</p></div>
        <p class="icons-flex download-button" style="height: auto; flex-wrap: wrap;">
          <a primary aria-label="Download" :href="frontmatter.base + frontmatter.files[0].link" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"></path></svg> 下载 (OneDrive) </a>
          <a v-if="frontmatter.lanzou" aria-label="Download" :href="frontmatter.lanzou.link" target="_blank" rel="noreferrer"><svg t="1714913353208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4552" id="mx_n_1714913353209" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M0 886.4V748l92-59.2c51.2-32.8 100.8-68 111.2-77.6 9.6-10.4 24.8-41.6 32-68.8C252 480 292.8 423.2 342.4 392c32.8-20.8 44.8-24 97.6-24 43.2 0 70.4 4.8 95.2 16.8 20 8.8 40 14.4 45.6 12s23.2-29.6 40-60.8c44-84 103.2-140 199.2-187.2 70.4-35.2 87.2-40 141.6-43.2l62.4-4V1024H0V886.4z" fill="#FFFEFE" p-id="4553"></path><path d="M0 388.8V0h1024v125.6l-51.2 4c-39.2 3.2-68 12.8-129.6 43.2C748 220 690.4 274.4 644 360.8c-40.8 76-56 82.4-122.4 52.8-28.8-12.8-61.6-21.6-82.4-21.6-73.6 0.8-153.6 78.4-180 173.6-7.2 27.2-20 56.8-28.8 66.4-19.2 20.8-188.8 132-212 139.2L0 776.8v-388z" fill="#FF6500" p-id="4554"></path></svg> 蓝奏云下载 (密码: {{ frontmatter.lanzou.pwd }})</a>
          <a v-if="frontmatter.modrinth" aria-label="Download" :href="frontmatter.modrinth" target="_blank" rel="noreferrer"><svg width="512" height="514" viewBox="0 0 512 514" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M503.16 323.56C514.55 281.47 515.32 235.91 503.2 190.76C466.57 54.2299 326.04 -26.8001 189.33 9.77991C83.8101 38.0199 11.3899 128.07 0.689941 230.47H43.99C54.29 147.33 113.74 74.7298 199.75 51.7098C306.05 23.2598 415.13 80.6699 453.17 181.38L411.03 192.65C391.64 145.8 352.57 111.45 306.3 96.8198L298.56 140.66C335.09 154.13 364.72 184.5 375.56 224.91C391.36 283.8 361.94 344.14 308.56 369.17L320.09 412.16C390.25 383.21 432.4 310.3 422.43 235.14L464.41 223.91C468.91 252.62 467.35 281.16 460.55 308.07L503.16 323.56Z" fill="#00af5c"/><path d="M321.99 504.22C185.27 540.8 44.7501 459.77 8.11011 323.24C3.84011 307.31 1.17 291.33 0 275.46H43.27C44.36 287.37 46.4699 299.35 49.6799 311.29C53.0399 323.8 57.45 335.75 62.79 347.07L101.38 323.92C98.1299 316.42 95.39 308.6 93.21 300.47C69.17 210.87 122.41 118.77 212.13 94.7601C229.13 90.2101 246.23 88.4401 262.93 89.1501L255.19 133C244.73 133.05 234.11 134.42 223.53 137.25C157.31 154.98 118.01 222.95 135.75 289.09C136.85 293.16 138.13 297.13 139.59 300.99L188.94 271.38L174.07 231.95L220.67 184.08L279.57 171.39L296.62 192.38L269.47 219.88L245.79 227.33L228.87 244.72L237.16 267.79C237.16 267.79 253.95 285.63 253.98 285.64L277.7 279.33L294.58 260.79L331.44 249.12L342.42 273.82L304.39 320.45L240.66 340.63L212.08 308.81L162.26 338.7C187.8 367.78 226.2 383.93 266.01 380.56L277.54 423.55C218.13 431.41 160.1 406.82 124.05 361.64L85.6399 384.68C136.25 451.17 223.84 484.11 309.61 461.16C371.35 444.64 419.4 402.56 445.42 349.38L488.06 364.88C457.17 431.16 398.22 483.82 321.99 504.22Z" fill="#00af5c" /></svg> Modrinth </a>
          <a v-if="frontmatter.curseforge" aria-label="Download" :href="frontmatter.curseforge" target="_blank" rel="noreferrer"><svg viewBox="0 0 32 32"><path d="M23.9074 12.0181C23.9074 12.0181 30.0327 11.0522 31 8.23523H21.6168V6H1L3.53975 8.94699V11.9664C3.53975 11.9664 9.94812 11.6332 12.427 13.5129C15.8202 16.6579 8.61065 20.9092 8.61065 20.9092L7.37439 25C9.30758 23.1593 12.9921 20.7781 19.7474 20.8929C17.1767 21.7053 14.5917 22.9743 12.5794 25H26.2354L24.9494 20.9092C24.9494 20.9092 15.0519 15.0732 23.9074 12.0184V12.0181Z" fill="#f16436"></path></svg> CurseForge </a>
        </p>
        <p>版本信息或文件如有错误，请联系 <a href="mailto:gbt@gteh.top">gbt@gteh.top</a> 修改。</p>
        <h2 id="版本信息" tabindex="-1">版本信息 <a class="header-anchor" href="#版本信息" aria-label="Permalink to &quot;版本信息&quot;">​</a></h2>
        <p v-if="frontmatter.channel" class="icons-flex"><b>更新类型</b>：<span :class="'circle circle-' + frontmatter.channel"></span> <span :class="frontmatter.channel"><b>{{ frontmatter.channel }}</b></span></p>
        <p v-if="frontmatter.date"><b>发布日期</b>：{{ frontmatter.date }}</p>
        <p v-if="frontmatter.loaders" class="icons-flex loader-icon"><b>加载方式</b>：<p v-for="loader in frontmatter.loaders">
          <span v-if="loader == 'fabric'"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"></path></svg>Fabric</span>
          <span v-else-if="loader == 'forge'"><svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>Forge</span>
          <span v-else-if="loader == 'quilt'"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24"><defs><path id="quilt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>Quilt</span>
          <span v-else-if="loader == 'neoforge'"><svg version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"></path><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"></path><path d="m3.6 15.8h-1.7m18.5 0h1.7"></path><path d="m3.2 12.1h-1.7m19.3 0h1.8"></path><path d="m8.1 12.7v1.6m7.8-1.6v1.6"></path><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"></path><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"></path><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"></path><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"></path></g></svg>NeoForge</span>
          <span v-else-if="loader == 'rift'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.7 6.6v10.8l9.3 5.3 9.3-5.3V6.6L12 1.3zm0 0L12 12m9.3-5.4L12 12m0 10.7V12"></path></svg>Rift</span>
          <span v-else class="loader-icon">{{ loader }}</span></p>
        </p>
        <p v-if="frontmatter.dep"><b>前置模组</b>：<span v-for="dep in frontmatter.dep">
          <span style="margin-right: 12px;">{{ dep }}</span>
        </span></p>
        <h2 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h2>
      </div>
    </template>
    <template #doc-footer-before v-if="frontmatter.download">
      <div class="vp-doc external-link-icon-enabled">
        <h2 id="文件列表" tabindex="-1">文件列表 <a class="header-anchor" href="#文件列表" aria-label="Permalink to &quot;文件列表&quot;">​</a></h2>
        <p>点击文件名以下载。(OneDrive 下载渠道)</p>
        <div v-for="file in frontmatter.files">
          <p><a :href="frontmatter.base + file.link" target="_blank" rel="noreferrer">{{ file.name }}</a> ({{ file.size }})<span v-if="file.primary"> (主要文件)</span></p>
        </div>
      </div>
    </template>
    <template #home-features-after>
      <div id="twikoo-c" class="home-comment-container">
        <Twikoo></Twikoo>
      </div>
    </template>
    <template #doc-after>
      <Twikoo></Twikoo>
    </template>
  </Layout>
</template>

<style>
.vp-doc .icons-flex {
  display: flex;
  height: 20px;
  align-items: center;
}
.vp-doc p.loader-icon {
  svg {
    height: 1em;
    width: 1rem;
    margin-right: .2rem;
    color: var(--vp-c-text-2);
    display: inline;
  }
  span {
    align-items: center;
    display: flex;
    color: var(--vp-c-text-2);
    margin-right: 12px;
  }
}
.vp-doc span.Alpha {
  color: var(--update-channel-alpha);
}
.vp-doc span.Beta {
  color: var(--update-channel-beta);
}
.vp-doc span.Release {
  color: var(--update-channel-release);
}
.vp-doc span.circle-Alpha {
  background-color: var(--update-channel-alpha);
}
.vp-doc span.circle-Beta {
  background-color: var(--update-channel-beta);
}
.vp-doc span.circle-Release {
  background-color: var(--update-channel-release);
}
.vp-doc span.circle {
  border-radius: 50%;
  display: inline-block;
  height: .5rem;
  margin-right: .3rem;
  width: .5rem;
}
.vp-doc .download-button {
  a {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: fit-content;
    margin: 0 10px 10px 0;
    padding: .5rem 1rem;
    text-decoration: none;
    width: fit-content;
    border-radius: .75rem;
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
    transition: color .25s,border-color .25s,background-color .25s;
    svg {
      height: 1.1rem;
      margin-right: .5rem;
      width: 1.1rem;
    }
  }
  a:hover {
    background-color: var(--vp-button-alt-hover-bg);
  }
  a[primary] {
    color: var(--vp-button-brand-text);
    background-color: var(--vp-c-indigo-3);
  }
  a[primary]:hover {
    background-color: var(--vp-c-indigo-2);
  }
}
:root {
  --update-channel-alpha: #cb2245;
  --update-channel-beta: #e08325;
  --update-channel-release: #00af5c;
}
.dark {
  --update-channel-alpha: #ff496e;
  --update-channel-beta: #ffa347;
  --update-channel-release: #1bd96a;
}

.VPHome {
  margin-bottom: 0 !important;
}

.home-comment-container {
  position: relative;
  margin-top: 64px;
  padding: 0 24px;
  .twikoo {
    margin-bottom: 128px;
  }
  .comment-container {
    margin: 0 auto;
    max-width: 1152px;
  }
}

@media (min-width: 640px) {
  .home-comment-container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .home-comment-container {
    padding: 0 64px;
  }
}

.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>