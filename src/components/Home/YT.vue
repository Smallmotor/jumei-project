<template>
<div>
  <mu-flexbox>
    <mu-flexbox-item class="flex-demo f">
      1
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo f">
      2
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo f">
      3
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo f">
      4
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo f">
      5
    </mu-flexbox-item>
  </mu-flexbox>

  <mu-flexbox >
    <mu-flexbox-item class="flex-demo f fd">
      10
    </mu-flexbox-item>
  </mu-flexbox>
  <mu-flexbox>
    <mu-flexbox-item class="flex-demo f ">
      10
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo f">
      10
    </mu-flexbox-item>
  </mu-flexbox>
  <mu-flexbox >
    <mu-flexbox-item class="flex-demo f fd">
      10
    </mu-flexbox-item>
  </mu-flexbox>
  <mu-flexbox >
    <mu-flexbox-item class="flex-demo f">
      10
    </mu-flexbox-item>
  </mu-flexbox>
</div>
</template>
<script>
    export default{
        name:"yt"
    }
</script>
<style lang="less">
.mt8 {
  margin-top: 8px;
}
.f {
  height: 32px;
  background: paleturquoise;
  text-align: center;
  line-height: 32px;
}
.fd{
  height:1rem;
}
</style>