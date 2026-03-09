<template>
    <div>
        <h1>What I'm working on</h1>
        <ul>
            <li class="montserrat-text">
                <RouterLink class="unstyled" to="/log">
                DCC Capstone Project
                <img src="https://dcc.umd.edu/wp-content/uploads/2018/09/cropped-DCC-Star-favicon.png" alt="">
                </RouterLink>
            </li>
        </ul>
        <h1>What I've worked on</h1>
        <ul>
            <li class="montserrat-text">
                <a class="unstyled" href="https://panda248.itch.io/all-you-can-eat-sushi" target="_blank">
                    Ctrl-Alt-DMV 2026 GameJam
                    <img src="https://img.itch.zone/aW1nLzI1ODg1NzQwLnBuZw==/315x250%23c/q1J5FK.png" alt="">
                </a>
            </li>
            <li class="montserrat-text">
                <a class="unstyled" href="https://ichiu.itch.io/light-it-up" target="_blank">
                    UMD Fall 2025 GameJam
                    <img src="https://img.itch.zone/aW1nLzI0MjI2MTY3LnBuZw==/315x250%23c/xdSmNB.png " alt="">
                </a>
            </li>
            <li class="montserrat-text">
                <a class="unstyled" href="https://www.kennedy-center.org/whats-on/explore-by-genre/exhibits/2024-2025/wave-from-space-to-ocean/" target="_blank">
                    Wave: From Space to Ocean
                    <img src="https://www.kennedy-center.org/globalassets/whats-on/festivals-and-series/earth-to-space/exhibits/wave_gallery_1.jpg" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        display: flex;
        flex-wrap: none;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        list-style: none;
        height: 25vw;
        width: 100%;
        margin: 20px 0 20px;
    }
    li {
        display: flexbox;
        flex-grow: 0;
        height: 100%;
        margin: auto;
        /* background-image: url("/pandanotfound.png"); */
        /* background-position: center;
        background-size: contain;
        background-repeat: no-repeat; */
    }
    img {
        height: 90%;
        width: 100%;
        border-radius: 10%;
        object-fit: cover;
    }
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0 2% 2% 2%;

    }
    a:hover {
        background-color: rgba( 1 1 1 / 0.1);
        border-radius: 10%;
    }
</style>