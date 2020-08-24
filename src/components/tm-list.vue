<template>
  <ul class="tm-list">
    <li
      v-for="(item, index) in tmList"
      :key="index"
    >
      <div class="cell">
        <p>工作组：</p>
        <p>{{item.unitname}}</p>
      </div>
      <div class="cell">
        <p>时段名称：</p>
        <p>{{item.timename}}</p>
      </div>
      <div class="cell">
        <p>巡检时段：</p>
        <p>{{item.begintime}}-{{item.endtime}}</p>
      </div>
      <div class="cell">
        <p>是否跨天：</p>
        <p>{{item.patroltype ? '是' : '否'}}</p>
      </div>
      <i
        class="cubeic-more"
        @click.stop="onOpenModal(item)"
        v-if="resources.indexOf(22) > -1"
      ></i>
    </li>
  </ul>
</template>

<script>
let stg = window.sessionStorage

export default {
  name: 'tm-list',
  props: {
    tmList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      resources: []
    }
  },
  created () {
    this.resources = stg.getItem('resources') ? JSON.parse(stg.getItem('resources')) : []
  },
  methods: {
    onOpenModal (item) {
      this.$emit('onOpenModal', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tm-list {
    li {
      background #fff
      box-sizing border-box
      border-radius 5px
      padding 15px
      position relative
      box-shadow 0px 0px 10px rgba(0, 0, 0, 0.05)
      border 1px solid #E4E4E4
      .cell {
        display flex
        align-items flex-start
        justify-content flex-start
        p {
          font-size 14px
          color #888
          line-height 18px
        }
        p:first-child {
          flex 0 0 74px
          width 74px
        }
      }
      i {
        position absolute
        right 0
        top 0
        padding 10px
        color #888
        transform rotate(90deg)
      }
      .cell + .cell {
        margin-top 10px
      }
    }
    li + li {
      margin-top 10px
    }
  }
</style>
