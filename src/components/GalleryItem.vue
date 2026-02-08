<template>
    <div>
        <h1>What I'm working on</h1>
        <ul>
            <li class="montserrat-text">
                Computer Graphics with WebGL
                <!-- <img src="../assets/pandanotfound.png" alt=""> -->
            </li>
            <li class="montserrat-text">
                <RouterLink to="/log">
                DCC Capstone Project
                <!-- <img src="../assets/dcclogo.png" alt="">-->
                </RouterLink>
            </li>
        </ul>
        <h1>Stuff I've made</h1>
        <ul>
            <li class="montserrat-text">
                Thing 1
            </li>
            <li class="montserrat-text">
                Thing 2
            </li>
            <li class="montserrat-text">
                Thing 3
            </li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        display: flex;
        flex-wrap: none;
        flex-direction: row;
        padding: 0;
        list-style:none;
        height: 25vw;
        width: 100%;
        padding: 20px 0 20px;
    }
    li {
        display: flexbox;
        flex-grow: 1;
        height: 100%;
        margin: auto;
        background-image: url("/pandanotfound.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>