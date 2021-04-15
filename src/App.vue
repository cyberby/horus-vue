<template>
  <div id="app">
    <div class="dashboard-layout">
    <section class="router-container custom-scroll">
<!--    <Contacts/>-->
      <router-view  />
    </section>
      </div>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style lang="scss">
@import 'styles/_global.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}
div.dashboard-layout {
  display: flex;
  height: 100vh;
  background: var(--color-secondary);

  section.menu-container {
    height: 100vh;
    background: var(--color-secondary);

    .sidebar-content {
      height: 100vh;
      box-shadow: 0 2px 16px -4px rgba(0, 0, 0, 0.5);
      background: var(--color-secondary);

      .logo-ctn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f9f9f9;
        margin-bottom: 15px;
        padding: 1.8rem 0;

        div {
          width: 140px;
        }
      }

      .fixed-menu {
        background: #f9f9f9;
      }

      .menu-label {
        padding-left: 0.6rem;
        color: #fff;
      }

      div.router-link-active {
        > li a {
          background: #fff;
          color: #000;
          font-weight: 600;
        }
      }

      div a:hover {
        background: var(--color-primary);
      }

      li a {
        padding: 0.8rem;
        color: #fff;
        span:first-child {
          margin-right: 0.5rem;
        }
      }
    }
  }

  section.router-container {
    flex: 1;
    height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
    background: #f9f9f9;
    padding: 1.4rem;
  }
}

@media only screen and (max-width: 1280px) {
  div.dashboard-layout {
    section.menu-container {
      direction: rtl;

      overflow: auto;
      .menu-label {
        direction: ltr;
      }
      .menu-list {
        direction: ltr;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--color-primary);
      }

      &::-webkit-scrollbar {
        width: 8px;

        background-color: #f7f5f5;
      }

      .sidebar-content {
        height: 110vh;

        .pin {
          top: 2vh;
        }
      }
    }
  }
}
</style>
