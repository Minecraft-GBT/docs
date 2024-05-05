<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';


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
        <p><a :href="frontmatter.files[0].link" target="_blank" rel="noreferrer">立即下载 (OneDrive)</a></p>
        <p v-if="frontmatter.lanzou"><a :href="frontmatter.lanzou.link" target="_blank" rel="noreferrer">蓝奏云下载</a> (密码: {{ frontmatter.lanzou.pwd }})</p>
        <p v-if="frontmatter.curseforge"><a :href="frontmatter.curseforge" target="_blank" rel="noreferrer">CurseForge 下载</a></p>
        <p v-if="frontmatter.modrinth"><a :href="frontmatter.modrinth" target="_blank" rel="noreferrer">Modrinth 下载</a></p>
        <h2 id="版本信息" tabindex="-1">版本信息 <a class="header-anchor" href="#版本信息" aria-label="Permalink to &quot;版本信息&quot;">​</a></h2>
        <p v-if="frontmatter.channel" class="icons-flex"><b>更新类型</b>：<span :class="'circle circle-' + frontmatter.channel"></span> <span :class="frontmatter.channel"><b>{{ frontmatter.channel }}</b></span></p>
        <p v-if="frontmatter.date"><b>发布日期</b>：{{ frontmatter.date }}</p>
        <p v-if="frontmatter.loaders" class="icons-flex loader-icon"><b>加载方式</b>：<p v-for="loader in frontmatter.loaders">
          <span v-if="loader == 'fabric'"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"></path></svg>Fabric</span>
          <span v-else-if="loader == 'forge'"><svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>Forge</span>
          <span v-else-if="loader == 'quilt'"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24"><defs><path id="quilt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>Quilt</span>
          <span v-else-if="loader == 'neoforge'"><svg version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"></path><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"></path><path d="m3.6 15.8h-1.7m18.5 0h1.7"></path><path d="m3.2 12.1h-1.7m19.3 0h1.8"></path><path d="m8.1 12.7v1.6m7.8-1.6v1.6"></path><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"></path><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"></path><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"></path><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"></path></g></svg>NeoForge</span>
          <span v-else-if="loader == 'rift'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.7 6.6v10.8l9.3 5.3 9.3-5.3V6.6L12 1.3zm0 0L12 12m9.3-5.4L12 12m0 10.7V12"></path></svg>Rift</span>
          <span v-else-if="loader == 'liteloader'"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none"></rect><path d="m3.924 21.537s3.561-1.111 8.076-6.365c2.544-2.959 2.311-1.986 4-4.172" fill="none" stroke="currentColor" stroke-width="2px"></path><path d="m7.778 19s1.208-0.48 4.222 0c2.283 0.364 6.037-4.602 6.825-6.702 1.939-5.165 0.894-10.431 0.894-10.431s-4.277 4.936-6.855 7.133c-5.105 4.352-6.509 11-6.509 11" fill="none" stroke="currentColor" stroke-width="2px"></path></svg>LiteLoader</span>
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
          <p><a :href="file.link" target="_blank" rel="noreferrer">{{ file.name }}</a> ({{ file.size }})<span v-if="file.primary"> (主要文件)</span></p>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.vp-doc .icons-flex {
  display: flex;
  height: 20px;
  align-items: center;
}
.vp-doc p.loader-icon svg {
  height: 1em;
  width: 1rem;
  margin-right: .2rem;
  color: var(--vp-c-text-2);
  display: inline;
}
.vp-doc p.loader-icon span {
  align-items: center;
  display: flex;
  color: var(--vp-c-text-2);
  margin-right: 12px;
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
</style>