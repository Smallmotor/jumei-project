<template>
    <div>
        
        <dh></dh>
        <sousuo></sousuo>
        <yt></yt>
        <jz></jz>
        
    </div> 
</template>

<script>
    import dh from '../DH/daohang'
    import sousuo from './sousuo'
    import yt from './YT'
    import jz from './JZ'
   

    export default{
        name:'home',
        components:{
            dh,
            sousuo,
            yt,
            jz
        }
    }
</script>