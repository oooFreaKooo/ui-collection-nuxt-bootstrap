<template>
    <div class="main-body">
        <button
            id="button"
            type="button"
            class="border-0"
            @click="toggleAnimation"
        >
            <svg
                id="svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                :class="{ 'svg-scale': isAnimating }"
            >
                <g>
                    <path
                        v-if="!isFilled"
                        id="heart"
                        :class="{ 'fill-animation': isAnimating }"
                        fill="currentColor"
                        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    />
                    <path
                        v-if="isFilled"
                        id="x"
                        style="visibility: hidden;"
                        fill="currentColor"
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                    <path
                        v-if="isFilled"
                        id="heart-filled"
                        :class="{ 'opacity-animation': isAnimating }"
                        fill="rgb(249, 24, 128)"
                        d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    />
                </g>
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
const isFilled = ref(false)
const isAnimating = ref(false)

const toggleAnimation = () => {
    isAnimating.value = true
    isFilled.value = !isFilled.value

    // Reset animation state after animation duration
    setTimeout(() => {
        isAnimating.value = false
    }, 500) // Match the CSS animation duration
}
</script>

<style scoped>
#button {
  color: currentColor;
  width: 60px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.svg-scale {
  animation: scale-animation 0.5s ease forwards;
}

.fill-animation {
  fill: rgb(249, 24, 128);
  transition: fill 0.25s ease;
}

.opacity-animation {
  opacity: 1;
  transition: opacity 0.25s ease;
}

@keyframes scale-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
