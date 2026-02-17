  <template>
    <div class="Cover">   
        <h1 class="nametag montserrat-title">Andrew Hu</h1>   
        <h1 class="about montserrat-text">Computer Science and Immersive Media Design Student at the University of Maryland</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

function fadeAbout(element: HTMLElement) {
  const scrollPosition = window.scrollY;
  const threshold = 80;
  const opacity = 1.0 - scrollPosition / threshold
  element.style.opacity = opacity.toString();
  // console.log(`Scroll Position: ${scrollPosition}, Threshold: ${threshold}, Opacity: ${opacity}`);
}

onMounted(() => {
    const about = document.querySelector('.about') as HTMLElement;
    fadeAbout(about);

    window.addEventListener('scroll', fadeAbout.bind(null, about));
});


</script>

<style scoped>
.Cover {
  height: 100vh;
}

.nametag {
  position: sticky;
  font-size: 10vw;
  top: 30vh;
}

.about {
  font-size: 5vw;
  margin-top: 30vh;
}
@media screen and (min-width: 800px) {
  .about {
    font-size: 40px; 
  }
  .nametag {
    font-size: 80px;
  }
}

</style>