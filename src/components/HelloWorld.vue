<template>
    <div class="main">
        <div class="introduction">
            <h1>Hello</h1>
            <h2>My name is Ethan Shao and born on November 1, 2000</h2>
            <h3>
                I am a college student software developer and the creator of this website you are viewing.
                My main technology stack is frontend technologies.
                Besides,I'm also interested in back end, Android, algorithmic contests.
                You can follow me on Github where I mostly upload my project codes.
            </h3>
            <h3>
                If you happen to speak Chinese, my Chinese name is 邵柏涛 (shào bǎi tāo).
                You can also find me on Social media and the links is at the bottom of the page.
            </h3>
            <h3>
                Outside of programming, I enjoy PC Games, Movies, TV series and Music, like
                <i>Kerbal Space Program , Grand Theft Auto V , League of Legends , </i>
                <i>Marvel movies , Mission impossible , Netflix Dark series </i>
                and one of my favorite songs is <i>We Don't Talk Anymore</i>
            </h3>
            <h4>January 29, 2021</h4>
        </div>
        <v-bottom-navigation
            v-model="iconColorIndex"
            :input-value="active"
            :color="getColor"
            background-color="rgba(0,0,0,0)"
            dark
            change="change"
        >
            <v-btn>
                <span>Weibo</span>
                <i class="TaoFonts tao-weibo"></i>
            </v-btn>
            <v-btn>
                <span>Bilibili</span>
                <i class="TaoFonts tao-bilibili-line"></i>
            </v-btn>
            <v-btn>
                <span>GitHub</span>
                <i class="TaoFonts tao-GitHub"></i>
            </v-btn>

            <v-btn>
                <span>NetEase</span>
                <i class="TaoFonts tao-netease-cloud-music-line"></i>
            </v-btn>
            <v-btn>
                <span>Instagram</span>
                <i class="TaoFonts tao-instagram"></i>
            </v-btn>

        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data: () => ({
        iconColorIndex: 2,
        active:true,
    }),
    methods:{
        change(e){
            console.log(e)
        }
    },
    computed: {
        getColor () {
            switch (this.iconColorIndex) {
                case 0: return 'rgba(230,22,45,1)'
                case 1: return 'rgba(251,114,153,1)'
                case 2: return ''
                case 3: return 'rgba(230,0,38,1)'
                case 4: return 'rgba(216,50,160,1)'
                default: return 'green darken-2'
            }
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    background-image: linear-gradient(#0a0f1f, #0d1325);
    background-position: center;
    background-attachment:fixed;

    margin: 0 auto;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: calc(10px + 0.33vw);
    color: aliceblue;
}
.TaoFonts{
    font-size: 1.6rem;
}
.introduction {
    padding: 5vh 10vw;
    width: 65vw;
}
.v-bottom-navigation{
    position: fixed;
    bottom: 0;
}
.v-item-group.v-bottom-navigation{
    box-shadow: none;
}
.v-item-group.v-bottom-navigation .v-btn{
    max-width: 80px;
}
h1{
    font-size: 3.5em;
}
h2{
    font-size: 2em;
}
h3 {
    font-size: 1.3em;
    margin: 40px 0 0;
}
h4 {
    font-size: 1em;
    margin: 40px 0 0;
}

@media screen and (max-width: 1080px) {
    .main {
        background-size: auto 100%;
    }
    h3{
        font-size: 1.5em;
    }
    .introduction {
        width: 80vw;
    }
    .v-bottom-navigation{
        position: static;
        box-shadow: none;

    }
}
</style>
