<template>
    <div class="main">
        <v-btn icon color="aliceblue" dark
               @click.stop="drawer = !drawer"
               v-show="!overlay"
               style="position: fixed; left: calc(20px + 1vw); top:calc(20px + 1vw);"
        >
            <v-icon>mdi-widgets-outline</v-icon>
        </v-btn>

        <transition name="ScrollY" mode="out-in">
            <div class="introduction"
                 v-if="introShow&&!overlay"
                 :key="introShow"
                 @click="introShow=!introShow"
            >
                <h1>Hello</h1>
                <h2>My name is Ethan Shao</h2>
                <h3>
                    I am a college student software developer and the creator of this website you are viewing.
                    My main technology stack is frontend technologies.
                    Besides,I'm also interested in backend, Android, algorithmic contests.
                    You can follow me on Github where I mostly upload my project codes.
                </h3>
                <h3>
                    If you happen to speak Chinese, my Chinese name is 邵柏涛 (shào bǎi tāo).
                    You can also find me on Social media under the name shaobaitao.
                </h3>
                <h4 style="text-align: right">January 29, 2021</h4>
            </div>
            <div class="introduction"
                 :key="introShow"
                 v-if="!introShow&&!overlay"
                 @click="introShow=!introShow"
            >
                <h3>
                    Outside of programming, I enjoy PC Games, Movies, TV series and Music, like
                    <i>Kerbal Space Program , Grand Theft Auto V , League of Legends , </i>
                    <i>Marvel movies , Mission impossible , Netflix Dark series </i>
                    and one of my favorite songs is <i>We Don't Talk Anymore.</i>
                </h3>
            </div>
        </transition>

        <transition name="ScrollY">
            <v-footer
                color="rgba(0,0,0,0)"
                padless
                absolute
                v-show="!overlay"
            >
                <v-card flat tile class="text-center" width="100vw" color="rgba(0,0,0,0)">
                    <v-card-text>
                        <v-btn icon v-for="(icon, index) in icons" :key="icon" class="mx-2 white--text">
                            <i :class="icon" @click="socialLinks(index)"></i>
                        </v-btn>
                        <a class="font-weight-black"
                           style="color:aliceblue; display: block; font-size: 0.3em; text-decoration:none;"
                           href="https://beian.miit.gov.cn/">
                            赣ICP备19009243号
                        </a>
                    </v-card-text>
                </v-card>
            </v-footer>
        </transition>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
            color="rgb(12,19,36)"
            overlay-opacity="0.1"
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-icon>mdi-emoticon-kiss-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Ethan Shao</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-item
                    v-for="item in projects"
                    :key="item.title"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title @click="projectLinks(item.link)">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <span>Powered by <br><v-icon>mdi-vuejs</v-icon>Vue.js<v-icon>mdi-vuetify</v-icon>Vuetify.js</span>
                </div>
            </template>
        </v-navigation-drawer>

        <v-overlay :value="overlay" opacity="0">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data: () => ({
        icons: [
            'TaoFonts tao-weibo',
            'TaoFonts tao-bilibili-line',
            'TaoFonts tao-GitHub',
            'TaoFonts tao-netease-cloud-music-line',
            'TaoFonts tao-instagram',
        ],
        iconColorIndex: 1,
        active: true,
        overlay: true,
        introShow: false,
        drawer: null,
        projects: [
            {icon: 'mdi-home-account', title: 'Old homepage/旧主页', link: 'http://shaobaitao.cn/old.php'},
            {icon: 'mdi-book-open-variant', title: 'Blog/博客', link: 'http://shaobaitao.cn/blog'},
            {icon: 'mdi-file-question-outline', title: 'Vue Questionnaire/问卷', link: 'http://vue.shaobaitao.cn'},
            {icon: 'mdi-music', title: 'Vue Player/Vue播放器', link: 'http://shaobaitao.cn/VuePlayer'},
            {icon: 'mdi-music-box', title: 'JS Player/JS播放器', link: 'http://shaobaitao.cn/myplayer'},
            {icon: 'mdi-music-circle', title: 'MK Player/MK播放器', link: 'http://shaobaitao.cn/player'},
            {icon: 'mdi-chess-pawn', title: 'Reversi/黑白棋', link: 'http://shaobaitao.cn/othello'},
            {icon: 'mdi-chess-knight', title: 'Gobang/五子棋', link: 'http://shaobaitao.cn/wuziqi'},
        ],
    }),
    methods: {
        cancelOverlay() {
            setTimeout(() => {
                this.overlay = false
                this.introShow = true
            }, 2000)
        },
        socialLinks(index) {
            switch (index) {
                case 0:
                    window.open('https://weibo.com/u/5020206258')
                    break;
                case 1:
                    window.open('https://space.bilibili.com/391655670')
                    break;
                case 2:
                    window.open('https://github.com/shaobaitao')
                    break;
                case 3:
                    window.open('https://music.163.com/#/user/home?id=376537898')
                    break
                case 4:
                    window.open('https://www.instagram.com/shaobaitao/')
                    break
            }
        },
        projectLinks(link) {
            window.open(link)
        }
    },
    mounted() {
        this.cancelOverlay();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ScrollY-enter-active, .ScrollY-leave-active {
    transition: all 1s ease;
}

.ScrollY-enter {
    transform: translateY(50px);
    opacity: 0;
}

.ScrollY-leave-to {
    transform: translateY(-50px);
    opacity: 0;
}

.main {
    background-image: linear-gradient(#0a0f1f, #0d1325);
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: calc(10px + 0.33vw);
    color: aliceblue;
}

.TaoFonts {
    font-size: 1.6rem;
}

.introduction {
    padding: 5vh 10vw;
    width: 65vw;
    max-width: 1000px;
    text-align: justify;
    text-justify: inter-word;
    cursor: pointer;
}

h1 {
    font-size: 3.5em;
}

h2 {
    font-size: 2em;
}

h3 {
    font-size: 1.3em;
    margin: 20px 0 0;
}

h4 {
    font-size: 1em;
    margin: 40px 0 0;
}

@media screen and (max-width: 1080px) {
    h3 {
        font-size: 1.3em;
    }

    .introduction {
        width: 90vw;
    }
}
</style>
