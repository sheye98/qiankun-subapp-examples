<template>
  <div class="hello" id="helloWolrld">
    <h1>QianKun Subapp</h1>
    <h3>{{ projectId }}</h3>
    <button @click="sendFlag">发送更新信号</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    projectId() {
      return this.$root.$data.projectId
    }
  },
  methods: {
    sendFlag() {
      if (this.$root.$data.setGlobalState) {
        this.$root.$data.setGlobalState({
          flag: 'update',
        });
        console.log('已发送更新信号到主应用');
      }
    }
  },
  mounted() {
    console.log('HelloWorld组件获取到的projectId:', this.projectId)
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
