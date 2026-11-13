<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useData } from 'vitepress'

// twikoojs/twikoo -> docs/.vitepress/theme/Twikoo.vue

const envId = 'https://twikoo.gbt.gteh.top'
const twikooJs = ref(null)
const router = useRouter()
const data = useData()

function initTwikoo () {
  try {
    twikoo.init({
      envId,
      onCommentLoaded: initLightGallery,
      lang: data.lang.value
    })
  } catch (e) {}
}

function initLightGallery () {
  var commentContents = [
    ...document.getElementsByClassName('vp-doc'),
    ...document.getElementsByClassName('tk-content')
  ];
  for (var i = 0; i < commentContents.length; i++) {
    var commentItem = commentContents[i];
    var imgEls = commentItem.getElementsByTagName('img');
    if (imgEls.length > 0) {
      for (var j = 0; j < imgEls.length; j++) {
        var imgEl = imgEls[j];
        if (imgEl.parentElement.tagName === 'A') continue;
        var aEl = document.createElement('a');
        aEl.setAttribute('class', 'tk-lg-link');
        aEl.setAttribute('href', imgEl.getAttribute('src'));
        aEl.setAttribute('data-src', imgEl.getAttribute('src'));
        aEl.appendChild(imgEl.cloneNode(false));
        imgEl.parentNode.insertBefore(aEl, imgEl.nextSibling);
        imgEl.remove();
      }
      lightGallery(commentItem, {
        selector: '.tk-lg-link',
        share: false
      })
    }
  }
}

function initJs () {
  if (twikooJs.value) {
    twikooJs.value.onload = initTwikoo
    router.onAfterRouteChanged = onRoute
  }
}

function onRoute (to) {
  if (to) setTimeout(initTwikoo, 1000)
}

onMounted(() => {
  initTwikoo()
  initJs()
})
</script>

<template>
  <div class="comment-container vp-raw">
    <!-- lightGallery -->
    <link rel="stylesheet" href="https://cdn.jsdmirror.com/npm/lightgallery@3.0.0/css/lightgallery.css" integrity="sha384-KO3b8sbR0Oznu212PKLJUPpbnnF10M/hMPMCIGWYzzmg/JyS5m4Izb7ts3EpeJuw" crossorigin="anonymous">
    <component :is="'script'" src="https://cdn.jsdmirror.com/npm/lightgallery@3.0.0/lightgallery.min.js" integrity="sha384-bihbP2gBgibPxg/ZQ8sjrX7TaLj2xHpSzEQc9p7iUCIfA6L4V7bPWpasE2NGO4rG" crossorigin="anonymous"></component>

    <!-- Twikoo -->
    <div id="twikoo"></div>
    <component :is="'script'" src="https://cdn.jsdmirror.com/npm/twikoo@2.0.17/dist/twikoo.min.js" ref="twikooJs" integrity="sha384-EJPyhbbrkvGsDOBDGqqwgcYL6MJufQJbVC2yq58Qu77AeXzyZy8FQYde04X70ZDF" crossorigin="anonymous"></component>
  </div>
</template>