<template>
    <div class="main-body bg-dark">
        <div class="wrap">
            <div
                ref="caardShadow"
                class="caard-shadow"
            />
            <div
                ref="caard"
                class="caard"
            >
                <div class="caard-front">
                    <div
                        ref="caardTitle"
                        class="caard-title"
                    >
                        3D perspective title
                    </div>
                    <div
                        ref="caardSubtitle"
                        class="caard-subtitle"
                    >
                        3D perspective subtitle
                    </div>
                    <div
                        ref="caardShine"
                        class="caard-shine"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Refs for elements
const caard = ref<HTMLElement | null>(null)
const caardTitle = ref<HTMLElement | null>(null)
const caardSubtitle = ref<HTMLElement | null>(null)
const caardShine = ref<HTMLElement | null>(null)
const caardShadow = ref<HTMLElement | null>(null)

onMounted(async () => {
    await nextTick()
    if (!caard.value || !caardTitle.value || !caardSubtitle.value || !caardShine.value || !caardShadow.value) {
        return
    }

    const currentMousePos = { x: 0, y: 0 }
    const mouseFromCenter = { x: 0, y: 0 }

    document.addEventListener('mousemove', (event) => {
        if (!caard.value || !caardShine.value || !caardShadow.value || !caardTitle.value || !caardSubtitle.value) {
            return // Skip if any element is null
        }

        const wHeight = window.innerHeight
        const wWidth = window.innerWidth

        currentMousePos.x = event.pageX
        currentMousePos.y = event.pageY
        mouseFromCenter.x = currentMousePos.x - wWidth / 2
        mouseFromCenter.y = currentMousePos.y - wHeight / 2

        const around1 = `${-1 * (currentMousePos.y * 100 / wHeight * 0.2 - 10)}deg`
        const around2 = `${1 * (currentMousePos.x * 100 / wWidth * 0.2 - 10)}deg`
        const trans1 = `${currentMousePos.x * 100 / wHeight * 0.3}px`
        const trans2 = `${currentMousePos.y * 100 / wHeight * 0.3}px`
        const dy = event.pageY - wHeight / 2
        const dx = event.pageX - wWidth / 2
        const theta = Math.atan2(dy, dx)
        const angle = theta * 180 / Math.PI - 90
        const mousePositionX = (currentMousePos.x / wWidth) * 100
        const mousePositionY = 50 + (currentMousePos.y / wHeight) * 10

        // Update styles
        caardShine.value.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${(currentMousePos.y / wHeight) * 0.7}) 0%,rgba(255,255,255, 0) 80%)`
        caard.value.style.transform = `translate3d(${trans1}, ${trans2}, 0) scale(1) rotateX(${around1}) rotateY(${around2})`
        caard.value.style.backgroundPosition = `${mousePositionX}% ${mousePositionY}%`
        caardShadow.value.style.transform = `scale(0.9, 0.9) translateX(${mouseFromCenter.x * -0.02 + 12}px) translateY(${mouseFromCenter.y * -0.02 + 12}px) scale(1.0) rotateY(${(mouseFromCenter.x / 25) * 0.5}deg) rotateX(${mouseFromCenter.y / -25}deg)`
        caardTitle.value.style.transform = `translateX(${(mouseFromCenter.x / 25) * 0.7}px) translateY(${(mouseFromCenter.y / 25) * 1.65}px)`
        caardSubtitle.value.style.transform = `translateX(${(mouseFromCenter.x / 25) * 0.5}px) translateY(${(mouseFromCenter.y / 25) * 1.15}px) translateZ(60px)`
    })
})
</script>

<style scoped lang="scss">
$clip: -0px;

.main-body {
  --background-color: var(--color-background, #fff);
  --text-color: var(--color-text, #fff);
  --accent-color: var(--color-accent, rgba(255, 255, 255, 0.1));
  --shadow-color: var(--color-shadow, rgba(0, 0, 0, 0.5));
  --caard-shadow-color: var(--color-caard-shadow, rgba(0, 0, 0, 0.4));
  --shine-color: var(--color-shine, rgba(255, 255, 255, 0.1));
  height: 50vh;
  transform-style: preserve-3d;
  perspective: 800px;
  background: inherit;
}

.wrap {
  position: absolute;
  perspective: 600px;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.caard-shadow,
.caard {
  margin: 0 auto;
  margin-top: 100px;
  width: 300px;
  height: 450px;
  z-index: 1;
  position: absolute;
  border-radius: 10px;
  top: $clip;
  bottom: $clip;
  left: $clip;
  right: $clip;
}

.caard {
  background: var(--background-color) url('https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?fit=crop&fm=jpg&h=950&q=80&w=1925')
    50% 50%;
  background-size: 450%;
}

.caard-shine {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  z-index: 1;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    var(--shine-color) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  z-index: -1;
}

.caard-shadow {
  top: 10px;
  transform-style: preserve-3d;
  transform: translateZ(40px);
  z-index: -1;
  background: var(--caard-shadow-color);
  transform: scale(0.5, 0.5);
  box-shadow: 0 0 25px 10px var(--shadow-color);
}

.caard-front,
.caard-title,
.caard-subtitle {
  position: absolute;
  color: var(--text-color);
  transform-style: preserve-3d;
}

.caard-front {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.1); // Assuming a subtle overlay
}

.caard-title {
  font-weight: 700;
  text-align: left;
  left: 30px;
  bottom: 140px;
  font-size: 35px;
  line-height: 30px;
  text-shadow: 0 5px 8px var(--shadow-color);
  transform: translateZ(0px);
  overflow: hidden;
  margin: 0;
  width: 80%;
}

.caard-subtitle {
  font-weight: normal;
  text-align: left;
  left: 30px;
  width: 80%;
  bottom: 80px;
  font-size: 25px;
  line-height: 20px;
  text-shadow: 0 3px 6px var(--caard-shadow-color);
  transform: translateZ(0px);
}
</style>
