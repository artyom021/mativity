<template>
  <div class="player">
    <IllestWaveform
      :skeleton="false"
      @on-click="clickHandler"
      @on-fetched="fetchedHandler"
      @on-finish="finishHandler"
      @on-init="initHandler"
      @on-pause="(v: boolean) => (playing = v)"
      @on-play="(v: boolean) => (playing = v)"
      @on-ready="readyHandler"
      cursorWidth="0"
      lineWidth="0.1"
      ref="waveformRef"
      v-bind="waveOptions"
    />
  </div>
  <div id="seek">
    <div class="controls-container">
      <SoundIcon class="voice-selection__speaker" />

      <button
        :disabled="!ready"
        :title="playing ? 'Pause' : 'Play'"
        class="player-control"
        v-on:click="handlePlayerControl"
      >
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            v-if="!playing"
            d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
            fill="currentColor"
          />
          <path
            v-else
            d="M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IllestWaveform } from "1llest-waveform-vue";
import type { IllestWaveformProps } from "1llest-waveform-vue";
import { Ref, computed, onMounted, reactive, ref, watchEffect } from "vue";

import ReplayIcon from "@/components/icons/ReplayIcon.vue";
import SoundIcon from "@/components/icons/speakerIcon.vue";
import "1llest-waveform-vue/lib/style.css";
import PageLoader from "@/components/loaders/PageLoader.vue";

const waveOptions = reactive<IllestWaveformProps>({
  url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis-Emmanuel_Jadin_-_Nocturne_No._3_in_G_minor_-_2._Allegro_molto.ogg",
});

const waveformRef = ref<typeof IllestWaveform | null>(null);

onMounted(() => {
  getCurrentTime();
});

const percentComplete = computed(() => {
  const timeStringArray = currentTime.value.split(":");
  const minutesInt = parseInt(timeStringArray[0]) ?? 0;
  const secondsInt = parseInt(timeStringArray[1]) ?? 0;
  const resultInt = minutesInt * 60 + secondsInt;

  const timeStrinDurationgArray = durationTime.value.split(":");
  const minutesIntDuration = parseInt(timeStrinDurationgArray[0]) ?? 0;
  const secondsIntDuartion = parseInt(timeStrinDurationgArray[1]) ?? 0;
  const resultIntDuration = minutesIntDuration * 60 + secondsIntDuartion;

  return (resultInt / resultIntDuration) * 100;
});

const progressStyle = computed(() => {
  return { width: `${percentComplete.value}%` };
});

const dotStyle = computed(() => {
  return { left: `${percentComplete.value - 1}%` };
});

const init = ref(false);
const fetched = ref(false);
const playing = ref(false);
const finished = ref(false);
const ready = ref(false);
const currentTime = ref("0:00");
const durationTime = ref("0:00");

const handlePlayerControl = () => {
  playing.value = !playing.value;
  playing.value ? play() : pause();
};

const initHandler = (v: boolean) => {
  init.value = v;
};

const fetchedHandler = (v: boolean) => {
  fetched.value = v;
};

const readyHandler = (v: boolean) => {
  ready.value = v;
  getDuration();
};

const finishHandler = (v: boolean) => {
  finished.value = v;
};

const clickHandler = (el: Ref<HTMLElement>) => {
  console.log(el);
};

const play = () => {
  waveformRef.value!.play();
};

const pause = () => {
  waveformRef.value!.pause();
};

const getCurrentTime = () => {
  watchEffect(() => {
    const current = waveformRef.value!.getCurrentTime();
    currentTime.value = current;
  });
};

const getDuration = () => {
  const duration = waveformRef.value!.getDuration();
  durationTime.value = duration;
};

const seek = (e) => {
  if (!ready.value) return;

  const bounds = e.target.getBoundingClientRect();
  const seekPos = (e.clientX - bounds.left) / bounds.width;
  console.log(seekPos);
  // currentTime.value = parseInt(durationTime * seekPos);
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";

$player-bg: #fff;
$player-border-color: darken($player-bg, 12%);
$player-link-color: darken($player-bg, 75%);
$player-progress-color: $player-link-color;
$player-text-color: $player-link-color;
$player-timeline-color: $player-border-color;

.player {
  position: relative;
}

.player-timeline {
  position: relative;
  border-radius: 8px;
  background-color: #5f5f5f;
  width: 100%;
  max-width: 100%;
  height: 2px;
  height: 8px;

  .player-progress,
  .player-seeker {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    height: 100%;
  }

  .player-progress {
    z-index: 1;
    background-color: #e9e9e9;
  }

  .player-dot {
    display: inline-block;
    position: relative;
    top: -4px;
    z-index: 9999;
    box-shadow: 1px 1px 4px 1px #000000b2;
    border-radius: 7.5px;
    background-color: $primary-200;
    width: 15px;
    height: 15px;
    content: "";
  }

  .player-seeker {
    z-index: 2;
    cursor: pointer;
    width: 100%;
  }
}

.player-time {
  display: flex;
  justify-content: end;

  .player-time-current {
    padding: 0 0.3125rem;
    font-weight: 700;
  }

  .player-title {
    display: flex;
    flex-grow: 1;
    mask-image: linear-gradient(
      90deg,
      hsla(0, 0, 0, 0) 0%,
      hsla(0, 0, 0, 1) 25%,
      hsla(0, 0, 0, 1) 75%,
      hsla(0, 0, 0, 0) 100%
    );
    max-width: 6rem;
    overflow: hidden;

    p {
      animation: slide-x 10s linear infinite;
      white-space: nowrap;

      @keyframes slide-x {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    }
  }

  .player-time-total {
    opacity: 0.5;
    padding: 0 0.3125rem;
  }
}

.player-volume {
  display: inline-block;
  margin: 0 0 0 0.625rem;
  width: 7.925rem;
  height: 1.1rem;
}

.illest-waveform {
  display: none !important;
}

.player-control {
  display: flex;
  cursor: pointer;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: black;
  padding: 0.4em;
  color: white;
  line-height: 0;
  text-decoration: none;

  > svg {
    width: 1.125rem;
  }
}

.illest-waveform__view {
  display: none;
}

#seek {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.replay-btn {
  cursor: pointer;
}

.controls-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

#illest-waveform {
  top: 95px;
  z-index: 10;
  cursor: pointer;
  height: 50px !important;
}

#illest-waveform > #illest-waveform__view {
  height: 16px !important;
}
</style>
