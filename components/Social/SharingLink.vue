<template>
  <div>
    <div class="flex gap-4">
      <div v-for="(social, index) in socialMedias" :key="index">
        <div class="tooltip" :data-tip="social.tooltipMessage">
          <ShareNetwork :network="social.name" :url="url">
            <component
              :is="social.Icon"
              class="text-black hover:text-blue-600 transition-colors"
            />
          </ShareNetwork>
        </div>
      </div>

      <div>
        <div class="tooltip" data-tip="Copiar link">
          <button @click="copyText">
            <SVGIconLink
              class="text-black hover:text-gray-500 transition-colors"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGIconFB from '../SVG/Icon/FB.vue';
import SVGIconTwitter from '../SVG/Icon/Twitter.vue';

const { url } = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const socialMedias = reactive([
  {
    name: 'facebook',
    Icon: SVGIconFB,
    tooltipMessage: 'Compartir en Facebook',
  },
  {
    name: 'twitter',
    Icon: SVGIconTwitter,
    tooltipMessage: 'Compartir en Twitter',
  },
]);

const textToCopy = url;

function copyText() {
  navigator.clipboard.writeText(textToCopy);
}
</script>
