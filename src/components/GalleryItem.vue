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
                <a class="unstyled" href="https://ichiu.itch.io/light-it-up" target="_blank">
                    UMD 2025 GameJam
                    <img src="https://img.itch.zone/aW1nLzI0MjI2MTY3LnBuZw==/347x500/1r0gKN.png" alt="">
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
        height: 100%;
        border-radius: 10%;
    }
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0 5% 2% 5%;

    }
    a:hover {
        background-color: rgba( 1 1 1 / 0.1);
        border-radius: 10%;
    }
</style>