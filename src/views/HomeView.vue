<template>
  <div class="content">
    <div class="head">
      <h1>歡迎來到聲量點擊器</h1>
      <span class="subtitle">這是一個為了幫助OOO賺取網路聲量的小遊戲</span>
      <div class="action">
        <router-link to="/game">
          <button class="btn btn-main">+1450</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
<style scoped>
    .content {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-around;
      height: calc(100% - 20px);
      height: 100%;
      text-align: center;
    }

    .subtitle {
      color: #193441;
    }

    .action {
      padding: 50px 0px;
    }
</style>