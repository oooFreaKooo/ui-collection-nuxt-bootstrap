<!-- components/CardSwiper.vue -->
<template>
    <div class="body">
        <div class="card-groups">
            <div
                v-for="(group, index) in cardGroups"
                :key="index"
                class="card-group"
                :data-index="group.index"
                :data-status="group.status"
            >
                <!-- Cards -->
                <div class="little-card card" />
                <div class="big-card card" />
                <div class="little-card card" />
                <div class="big-card card" />
                <div class="little-card card" />
                <div class="big-card card" />
                <div class="little-card card" />
                <div class="big-card card" />
            </div>
        </div>
        <div class="card-swiper-buttons">
            <button
                id="hate-button"
                @click="handleHateClick"
            >
                <i class="mdi mdi-close" />
            </button>
            <button
                id="love-button"
                @click="handleLoveClick"
            >
                <i class="mdi mdi-heart" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const activeIndex = ref(0)

const cardGroups = reactive([
    {
        index: 0,
        status: 'active',
    },
    {
        index: 1,
        status: 'unknown',
    },
    {
        index: 2,
        status: 'unknown',
    },
])

const groupsLength = cardGroups.length

const handleLoveClick = () => {
    const nextIndex = activeIndex.value + 1 <= groupsLength - 1 ? activeIndex.value + 1 : 0
    const currentGroup = cardGroups[activeIndex.value]
    const nextGroup = cardGroups[nextIndex]

    currentGroup.status = 'after'
    nextGroup.status = 'becoming-active-from-before'

    setTimeout(() => {
        nextGroup.status = 'active'
        activeIndex.value = nextIndex
    })
}

const handleHateClick = () => {
    const nextIndex = activeIndex.value - 1 >= 0 ? activeIndex.value - 1 : groupsLength - 1

    const currentGroup = cardGroups[activeIndex.value]
    const nextGroup = cardGroups[nextIndex]

    currentGroup.status = 'before'
    nextGroup.status = 'becoming-active-from-after'

    setTimeout(() => {
        nextGroup.status = 'active'
        activeIndex.value = nextIndex
    })
}
</script>

<style scoped lang="scss">
.body {
  background-color: rgb(0, 0, 0);
  margin: 0px;
  height: 100vh;
  display: grid;
  place-items: center;
}

.card-groups,
.card-group,
.card {
  aspect-ratio: 5 / 7;
}

.card-groups,
.card-group,
.big-card {
  width: 30vmin;
}

.card-group {
  position: absolute;
  transition: transform 400ms ease;
}

.card-group[data-status="unknown"] {
  transform: scale(0);
  transition: none;
}

.card-group[data-status="active"] {
  transition-delay: 300ms;
}

.card-group[data-status="after"] {
  transform: translateX(50%) scale(0);
}

.card-group[data-status="before"] {
  transform: translateX(-50%) scale(0);
}

.card-group[data-status="becoming-active-from-after"] {
  transform: translateX(50%) scale(0);
  transition: none;
}

.card-group[data-status="becoming-active-from-before"] {
  transform: translateX(-50%) scale(0);
  transition: none;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  position: absolute;
  transition: transform 800ms cubic-bezier(.05, .43, .25, .95);

  background-position: center;
  background-size: cover;
}

.big-card {
  border-radius: 1vmin;
}

.little-card {
  width: 12vmin;
  border-radius: 2vmin;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -1vmin 1vmin 2vmin rgba(0, 0, 0, 0.25);
  pointer-events: none;
}

.big-card:nth-child(2) {
  background-image: url("https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  transform: translateX(-10%) rotate(-1deg);
}

.big-card:nth-child(4) {
  background-image: url("https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  transform: rotate(2deg);
}

.big-card:nth-child(6) {
  background-image: url("https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  transform: translateX(-6%) rotate(-3deg);
}

.big-card:nth-child(8) {
  background-image: url("https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  transform: translate(10%, 3%) rotate(5deg);
}

.card-group[data-index="1"] > .big-card:nth-child(6) {
  background-image: url("https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.card-group[data-index="1"] > .big-card:nth-child(8) {
  background-image: url("https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.card-group[data-index="2"] > .big-card:nth-child(4) {
  background-image: url("https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.card-group[data-index="2"] > .big-card:nth-child(8) {
  background-image: url("https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.little-card:nth-child(1) {
  background-image: url("https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.little-card:nth-child(3) {
  background-image: url("https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.little-card:nth-child(5) {
  background-image: url("https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.little-card:nth-child(7) {
  background-image: url("https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
}

.card-group:hover > .card {
  box-shadow: -2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4);
}

.card-group:hover > .big-card:nth-child(2) {
  transform: translate(-75%, 16%) rotate(-24deg);
}

.card-group:hover > .big-card:nth-child(4) {
  transform: translate(-25%, 8%) rotate(-8deg);
}

.card-group:hover > .big-card:nth-child(6) {
  transform: translate(25%, 8%) rotate(8deg);
}

.card-group:hover > .big-card:nth-child(8) {
  transform: translate(75%, 16%) rotate(24deg);
}

.card-group:hover > .little-card:nth-child(1) {
  transform: translate(200%, -160%) rotate(-15deg);
}

.card-group:hover > .little-card:nth-child(3) {
  transform: translate(160%, 170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(5) {
  transform: translate(-200%, -170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(7) {
  transform: translate(-280%, 140%) rotate(-15deg);
}

.card-swiper-buttons {
  margin-top: 8vmin;
  display: flex;
  justify-content: space-around;
  padding: 0vmin 4vmin;
}

.card-swiper-buttons > button {
  font-size: 2.5vmin;
  border: 0.4vmin solid rgb(200, 200, 200);
  border-radius: 100%;
  color: white;
  background-color: transparent;
  height: 7vmin;
  width: 7vmin;
  display: grid;
  place-items: center;
  cursor: pointer;
}

#love-button, #hate-button {
  padding: 10px 20px;
  font-size: 26px;
  border: 2px solid;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease, background-color 0.3s, color 0.3s;
  position: relative;
  overflow: hidden;
}

#love-button {
  margin-left: 30px;
  color: rgb(33, 150, 243);
  border-color: rgb(33, 150, 243);
}

#hate-button {
  margin-left: 30px;
  color: rgb(244, 67, 54);
  border-color: rgb(244, 67, 54);
}

/* Hover state */
#love-button:hover {
  background-color: rgb(33, 150, 243);
  color: white;
}

#hate-button:hover {
  background-color: rgb(244, 67, 54);
  color: white;
}

/* Active state with scale animation */
#love-button:active, #hate-button:active {
  transform: scale(0.9);
}
</style>
