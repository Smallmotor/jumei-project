<template>
<div>
    <mu-appbar id="gg">
        <mu-icon-button icon="gavel" slot="left"/>
        <mu-text-field icon="search" class="appbar-search-field"  slot="default" hintText="请输入搜索内容" fullWidth/>
        <mu-icon-button icon="speaker_notes" slot="right"/>
    </mu-appbar>

    <div id="gk">
        <mu-flexbox :gutter=0>

            <mu-flexbox-item class="flex-demo">
            特卖
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo" basis="40px">
            极速免税店
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo" >
            母婴
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
            轻奢
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
            服饰
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
            鞋包
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
            食品
            </mu-flexbox-item>
            
        </mu-flexbox>
    </div>

</div>

</template>
<script>
    export default{
        name:"sousuo"
    }
</script>
<style lang="less">
#gg{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
}
#gg .appbar-search-field{
    min-height: 0.3rem;
}
#gg .mu-text-field-icon{
    top:0.05rem;
}
#gg .mu-text-field-input{
      border:0;
  }
#gg .mu-text-field-line{
    display: none;
}
#gg .mu-text-field-focus-line{
    display: none;
}
.appbar-search-field{
    background: #ccc;
    border-radius:0.3rem; 
   
    color: #FFF;
    margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
  .mu-text-field-content{
      margin: 0;
      padding:0;
      height: 0.2rem;
  }
  
}
#gk{
    margin-top: 0.6rem;
}

.flex-demo {
  height: 32px;
  text-align: center;
  line-height: 32px;
  margin-bottom: 0.1rem;
}
</style>