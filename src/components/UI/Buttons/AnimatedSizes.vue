<template>
    <div class="container bg-dark d-flex justify-content-center align-items-center">
        <button
            v-for="(size, index) in sizeClasses"
            :key="index"
            :class="{ active: activeIndex === index }"
            @click="toggleAnimation(index)"
        >
            <span
                class="span1 text-uppercase"
                :class="[
                    activeIndex === index ? 'scaleOut' : 'scaleIn',
                ]"
            >{{ size }}</span>
            <span
                class="span2 text-uppercase"
                :class="[
                    activeIndex === index ? 'scaleOut' : 'scaleIn',
                ]"
            >{{ size }}</span>
        </button>
    </div>
</template>

<script setup lang="ts">
const activeIndex = ref<number | null>(null)

const toggleAnimation = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index
}

const sizeClasses = [
    'xs', 's', 'm', 'l', 'xl', 'xxl',
]
</script>

<style scoped>
.container {
  height: 50vh;
}

button {
  margin: 0 10px;
  cursor: pointer;
  background-color: #ffffff;
  border: 3px solid #ffffff;
  padding: 0;
  font-size: 2rem;
  font-weight: bold;
  width: 4rem;
  height: 2.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease-in, transform 0.3s ease;
}

button.active {
  transform: scale(1.1);
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}

.span1 {
  color: #000000;
  transform: scale(1);
}

.span1.scaleIn {
  transform: scale(50);
}

/* Specific translations for different sizes */
button:nth-child(1) .span1.scaleIn {  /* xs */
  transform: scale(50) translate(14%, 1.9%);
}

button:nth-child(2) .span1.scaleIn {  /* s */
  transform: scale(50) translate(5%, 1.9%);
}

button:nth-child(3) .span1.scaleIn {  /* m */
  transform: scale(50) translate(0%, -20%);
}

button:nth-child(4) .span1.scaleIn {  /* l */
  transform: scale(50) translate(5%, 1.9%);
}

button:nth-child(5) .span1.scaleIn {  /* xl */
  transform: scale(50) translate(16%, 1.9%);
}

button:nth-child(6) .span1.scaleIn {  /* xxl */
  transform: scale(50) translate(0%, 1.9%);
}

.span1.scaleOut {
  transform: scale(1);
}

.span2 {
  color: #ffffff;
  transform: scale(1);
}

.span2.scaleIn {
  transform: scale(1);
}

.span2.scaleOut {
  transform: scale(0);
}
</style>
