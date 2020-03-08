<template>
  <div>
  <Row type="flex" justify="center" style="margin-top: 10px">
    <Col span="16">
      <d-player :options="options" ref="player" @play="onPlay"></d-player>
    </Col>
  </Row>
  <Row type="flex" justify="center" style="margin: 10px 10px 0px ;height:100%" >
    <Col span="14" >
      <Input v-model="value"   placeholder="*.M3U8/MP4">
        <Select v-model="type" slot="prepend" style="width:100px">
          <Option value="hls" selected>HLS</Option>
          <Option value="normal">Normal</Option>
        </Select>
      </Input>
    </Col>
    <Col span="2">
      <Button  type="primary" @click="movie(value)" long>加载</Button>
    </Col>
  </Row>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  name: 'movie',
  components: {
    'd-player': VueDPlayer
  },
  data () {
    return {
      head: '雨果互动娱乐',
      footer: '2011-2016 &copy; WhatsHugo',
      options: {
        video: {
          url: 'http://live.zdmcloud.com/cn/tomorrow_arrival/tomorrow_arrival.m3u8',
          type: 'hls'
        },
        preload: 'auto',
        autoplay: false,
        contextmenu: [
          {
            text: 'GitHub',
            link: 'https://github.com/MoePlayer/vue-dplayer'
          }
        ]
      },
      value: '',
      type: 'hls',
      player: null
    }
  },
  mounted () {
    const player = this.player = this.$refs.player.dp
    player.play()
    setTimeout(() => {
      player.pause()
    }, 2000)
  },
  methods: {
    onPlay: function () {
      console.log('play callback')
    },
    play: function () {
      const player = this.$refs.player.dp
      player.play()
    },
    movie: function (v) {
      console.log('load movie:' + v)
      this.switchHandle(v, this.type)
    },
    switchHandle (url, type) {
      if (url == null || url.trim().length === 0) {
        alert('url undefined!')
        return
      }
      this.player.switchVideo({
        url: url,
        type: type
      })
      this.play()
    }
  }
}
</script>

<style scoped>
</style>
