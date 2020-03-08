<template>
  <div id="app" class="layout">
    <Layout style="height: 100vh">
      <Header :style="{position: 'fixed', width: '100%',color:'white',textAlign:'center'}">
        {{head}}
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#white', minHeight: '500px'}">
         <router-view/>
      </Content>
      <Footer class="layout-footer-center">{{footer}}</Footer>
    </Layout>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      head: '雨果互动娱乐',
      footer: '2018-2020 &copy; WhatsHugo'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-footer-center{
  text-align: center;
}
</style>
