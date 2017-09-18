<template>
    <mu-paper id="boxDH">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item  title="首页" icon="home" to="home"/>
            <mu-bottom-nav-item  title="名品特卖" icon="local_offer" to="/tm"/>
            <mu-bottom-nav-item  title="直播社区" icon="favorite" to="zb"/>
            <mu-bottom-nav-item  title="购物车" icon="local_grocery_store" to="gw"/>
            <mu-bottom-nav-item  title="我的" icon="perm_identity" to="me"/>
        </mu-bottom-nav>
    </mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '1'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
      
    }
  }
}
</script>
<style>
a{
    background: #fff;
}
#boxDH{
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
#boxDH .mu-buttom-item{
    min-width: 0.5rem;
}
#boxDH .router-link-exact-active{
    color:pink;
}
.mu-bottom-nav{
    background: #fff;
}
</style>
