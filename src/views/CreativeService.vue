<template>
  <div class="poems">
    <div class="poems__title">
      <img :src="require(`@/assets/svg/poems.svg`)" alt="Poems" class="poems__service-img" />
      <div class="poems__service-title">Paraphrasing</div>
    </div>

    <Accordion class="poems__accordion">
      <AccordionTab class="poems__accordion-tab" header="Instructions">
        <span>1. Enter the subject (No more than 300 characters)</span>
        <span>2. Select the style, number and size of stanzas;</span>
        <span>3. Click generate. </span>
      </AccordionTab>
    </Accordion>

    <div class="poems__input">
      <div class="poems__input-title">Themes</div>
      <TreeSelect
        v-model="selectedValue"
        :options="items"
        @update:modelValue="onUpdate"
        placeholder="Select Theme"
        selection-mode="single"
      >
        <template #default="slotProps">
          <span @click="closePanel">{{ slotProps.label }}asd</span>
        </template>
      </TreeSelect>
    </div>

    <div class="p-input-icon-right poems__subject-input">
      <TextArea v-if="generatedCreative" v-model="generatedCreative" auto-resize />
    </div>

    <div class="poems__generation">
      <div class="poems__generation-title">1 Generation</div>
      <div class="poems__generation-value"><img :src="require(`@/assets/svg/curve.svg`)" alt="Price" /> 10</div>
    </div>

    <div @click="onGenerate" class="poems__generate-btn btn-neon">Generate</div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TextArea from "primevue/textarea";
import TreeSelect from "primevue/treeselect";
import { ref } from "vue";

import { useCreativeCreate } from "@/hooks/chatGpt/useCreativeCreate";

const selectedTheme = ref<number>(1);
const generatedCreative = ref<string>();

const items = [
  {
    key: "0",
    label: "Business Ideas",
    selectable: false,
    leaf: true,
    children: [
      {
        key: 1,
        label: "Self-service coffee shop",
        data: 1,
        selectable: true,
      },
    ],
  },
];

const onUpdate = (val: any) => {
  console.log(Object.keys(val)[0]);

  selectedTheme.value = +Object.keys(val)[0];
};

const onGenerate = async () => {
  generatedCreative.value = await useCreativeCreate({ themeId: selectedTheme.value });
};
</script>

<style lang="scss" scoped>
.poems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;

  &__title {
    display: flex;
    flex-direction: column;
    padding-top: 90px;
  }

  &__service-img {
    padding-bottom: 14px;
    height: 50px;
  }

  &__accordion {
    padding-top: 48px;
    padding-bottom: 34px;
    width: 100%;
  }
}
</style>

<style lang="scss">
@import "@/scss/colors.scss";

.poems {
  .p-icon {
    order: 1;
    color: white;
  }

  &__input {
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
    width: 100%;
    height: 74px;
  }

  &__input-title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $grey-1111;
    width: 50%;
    color: white;
  }

  &__input-value {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: rgb(0, 47, 111);
    background: linear-gradient(106deg, rgba(0, 47, 111, 1) 0%, rgba(13, 129, 136, 1) 49%, rgba(0, 47, 111, 1) 100%);
    width: 50%;
  }

  &__subject-input {
    margin-top: 34px;
    width: 100%;
    height: 74px;
    .p-inputtext {
      width: 100%;
      height: 74px;
    }
  }

  &__generation {
    display: flex;
    margin: 34px auto 0;
    width: 50%;
    height: 88px;
  }

  &__generation-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: $primary-1000;
    width: 50%;
    color: white;
    font-weight: 600;
    font-size: 24px;
  }

  &__generation-value {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px solid $primary-1000;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 50%;
    color: $primary-1000;
    font-weight: 600;
    font-size: 24px;
  }

  &__generate-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 45px;
    border: 2px solid $primary-400;
    border-radius: 8px;
    width: 50%;
    height: 88px;
    font-weight: 600;
    font-size: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .p-accordion-header-link {
    display: flex;
    justify-content: space-between;
    background-color: $grey-1111 !important;
  }

  .p-accordion-header-text {
    color: $primary-200;
  }

  .p-accordion-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: $grey-1111 !important;

    span {
      color: white;
    }
  }

  .p-accordion .p-accordion-content {
    border: 1px solid $primary-900;
  }

  .p-accordion .p-accordion-header .p-accordion-header-link {
    border: 1px solid $primary-900;
  }

  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    border-color: $primary-900;
  }

  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: $primary-900;
    background: $primary-900;
  }

  .p-accordion-header .p-highlight {
    border: 1px solid $primary-900;
  }
}

.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
  box-shadow: inset 0 0 0 0.1rem $primary-100 !important;
}

.p-panelmenu .p-panelmenu-header {
  background: linear-gradient(106deg, rgb(0, 47, 111) 0%, rgb(13, 129, 136) 49%, rgb(0, 47, 111) 100%) !important;
  width: 100% !important;
}

.p-treeselect {
  background: rgb(0, 47, 111) !important;
  background: linear-gradient(
    106deg,
    rgba(0, 47, 111, 1) 0%,
    rgba(13, 129, 136, 1) 49%,
    rgba(0, 47, 111, 1) 100%
  ) !important;
  width: 50% !important;
}

.p-treeselect-label-container {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.p-treeselect .p-treeselect-label.p-placeholder,
.p-treenode-label,
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
  color: white !important;
}
.p-tree {
  border: 1px solid black !important;
  background: black !important;
}

.p-treeselect {
  border: 1px solid black !important;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus {
  box-shadow: 0 0 0 0.2rem $primary-200 !important;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
  background: unset !important;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
  background-color: $primary-300 !important;
  color: black !important;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
  background-color: $primary-100 !important;
}

.p-treeselect:not(.p-disabled):hover {
  border-color: $primary-200 !important;
}

.p-treeselect:not(.p-disabled).p-focus {
  box-shadow: 0 0 0 0.2rem $primary-200 !important;
  border-color: $primary-200 !important;
}

.p-tree .p-tree-container .p-treenode:focus > .p-treenode-content {
  box-shadow: inset 0 0 0 0.15rem $primary-200 !important;
}
</style>
