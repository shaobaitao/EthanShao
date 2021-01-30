<template>
    <div class="main">
        <v-btn icon color="aliceblue" dark @click.stop="drawer = !drawer"
               style="position: fixed; left: calc(20px + 1vw); top:calc(20px + 1vw);"
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <transition name="ScrollYReverse">
            <div class="introduction" v-show="!overlay">
                <h1>Hello</h1>
                <h2>My name is Ethan Shao</h2>
                <h3>
                    I am a college student software developer and the creator of this website you are viewing.
                    My main technology stack is frontend technologies.
                    Besides,I'm also interested in back end, Android, algorithmic contests.
                    You can follow me on Github where I mostly upload my project codes.
                </h3>
<!--                <h3>-->
<!--                    If you happen to speak Chinese, my Chinese name is 邵柏涛 (shào bǎi tāo).-->
<!--                    You can also find me on Social media and the links is at the bottom of the page.-->
<!--                </h3>-->
<!--                <h3>-->
<!--                    Outside of programming, I enjoy PC Games, Movies, TV series and Music, like-->
<!--                    <i>Kerbal Space Program , Grand Theft Auto V , League of Legends , </i>-->
<!--                    <i>Marvel movies , Mission impossible , Netflix Dark series </i>-->
<!--                    and one of my favorite songs is <i>We Don't Talk Anymore</i>-->
<!--                </h3>-->
                <h4 style="text-align: right">January 29, 2021</h4>

            </div>
        </transition>
        <transition name="ScrollY">
            <v-bottom-navigation
                v-show="!overlay"
                v-model="iconColorIndex"
                :input-value="active"
                :color="getColor"
                background-color="rgba(0,0,0,0)"
                dark
            >
                <v-btn @click="socialLinks(0)">
                    <span>Weibo</span>
                    <i class="TaoFonts tao-weibo"></i>
                </v-btn>
                <v-btn @click="socialLinks(1)">
                    <span>GitHub</span>
                    <i class="TaoFonts tao-GitHub"></i>
                </v-btn>
                <v-btn @click="socialLinks(2)">
                    <span>Bilibili</span>
                    <i class="TaoFonts tao-bilibili-line"></i>
                </v-btn>
            </v-bottom-navigation>
        </transition>
            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary

            >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
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
        iconColorIndex: 1,
        active: true,
        overlay: true,
        drawer: null,
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard' },
            { title: 'About', icon: 'mdi-forum' },
        ],
    }),
    watch:{

    },
    methods: {
        change(e) {
            console.log(e)
        },
        cancelOverlay() {
            setTimeout(() => {
                this.overlay = false
            }, 2000)
        },
        socialLinks(index){
            switch (index) {
                case 0:
                    window.open('https://weibo.com/u/5020206258')
                    break;
                case 1:
                    window.open('https://github.com/shaobaitao')
                    break;
                case 2:
                    window.open('https://space.bilibili.com/391655670')
                    break;
            }
        }
    },
    mounted() {
        this.cancelOverlay();
    },
    computed: {
        getColor() {
            switch (this.iconColorIndex) {
                case 0:
                    return 'rgba(230,22,45,1)'
                case 1:
                    return ''
                case 2:
                    return 'rgba(251,114,153,1)'
                default:
                    return ''
            }
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ScrollY-enter-active {
    transition: all 1s ease;
}

.ScrollY-enter {
    transform: translateY(50px);
    opacity: 0;
}

.ScrollYReverse-enter-active {
    transition: all 1s ease;
}

.ScrollYReverse-enter {
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
    text-align:justify;
    text-justify:inter-word;

}

.v-bottom-navigation {
    position: fixed;
    bottom: 0;
}

.v-item-group.v-bottom-navigation {
    box-shadow: none;
}

h1 {
    font-size: 3.5em;
}

h2 {
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
    h3 {
        font-size: 1.5em;
    }

    .introduction {
        width: 90vw;
    }

    .v-bottom-navigation {
        position: static;
        box-shadow: none;
    }
}
</style>
