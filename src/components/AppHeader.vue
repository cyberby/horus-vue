<template>
  <div class="app-header">
    <div class="app-header__content">
      <b-icon v-if="icon" :icon="icon"></b-icon>
      <h2>{{ title }}</h2>
    </div>
    <div class="app-header__buttons">
      <router-link v-if="backRoute" :to="backRoute">
        <b-button type="is-text" icon-left="chevron-left"> Voltar </b-button>
      </router-link>
      <b-button
        v-if="!backRoute && goesBack"
        @click="goBack()"
        type="is-text"
        icon-left="chevron-left"
      >
        Voltar
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    backRoute: Object,
    goesBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 1px inset #e5e5e5;

  &__content {
    display: flex;
    align-items: center;
    color: var(--text-color-medium);

    .icon {
      margin-right: 0.8rem;
    }

    h2 {
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
  }
}
</style>
