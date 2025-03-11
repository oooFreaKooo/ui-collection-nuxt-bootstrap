<template>
    <div class="container bg-dark d-flex justify-content-center align-items-center position-relative">
        <div
            class="toggle-wrapper on"
            onclick="this.classList.toggle('off'); this.classList.toggle('on')"
        >
            <div class="toggle">
                <div class="detail" />
                <div class="detail" />
                <div class="detail" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    animationDuration: {
        type: String,
        default: '0.2s',
    },
})
</script>

<style scoped>
.container {
  height: 50vh;
}

.toggle-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 280px;
    height: 80px;
    border-radius: 100px;
    background: rgb(7, 7, 7);
    cursor: pointer;
    transition: box-shadow 0.4s ease;
}
@media screen and (max-width: 500px) {
  .toggle-wrapper {
    width: 50vw;
    height: 16vw;
  }
}
.toggle-wrapper.on {
    box-shadow:
    -2px -2px 4px 4px rgba(7, 7, 7, 0.5),
    -8px 0 4px 4px rgba(7, 7, 7, 0.5),
    -8px 0 3px 1px rgba(0, 255, 0, 0.2),
    4px 0 4px 4px rgba(7, 7, 7, 1),
    -3px 5px 3px 0 rgb(79 81 79),
    8px 3px 2px 0 rgb(79 81 79),
    inset 0 0 3px 1px rgba(0, 255, 0, 0.5),
    inset 0 0 24px 0 rgba(0, 255, 0, 0.5);
}
.toggle-wrapper.off {
    box-shadow:
    -2px -2px 4px 4px rgba(7, 7, 7, 0.5),
    -8px 0 4px 4px rgba(7, 7, 7, 0.5),
    8px 0 3px 1px rgba(255, 0, 0, 0.2),
    4px 0 4px 4px rgba(7, 7, 7, 1),
    -3px 5px 3px 0 rgb(79 81 79),
    8px 3px 2px 0 rgb(79 81 79),
    inset 0 0 3px 1px rgba(255, 0, 0, 0.5),
    inset 0 0 14px 0 rgba(255, 0, 0, 0.5);
}
.toggle {
    width: 60%;
    height: 100%;
    background:linear-gradient(35deg, rgb(16 15 16) 0%, rgb(32 31 32) 100%);
    border-radius: 100px;
    position: absolute;
    transition: all v-bind('animationDuration') ease-in;
}
.on .toggle{
    right: 0;
    box-shadow:
    0px 8px 8px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 3px 0 rgba(0, 0, 0, 1),
    inset 0 3px 2px 0 rgba(79, 81, 79, 0.5),
    inset -2px 0px 3px 0 rgba(0, 0, 0, 1),/* rgba(255, 0, 0, 0.5) accent - dark when on */
    inset 2px 0px 3px 0 rgba(0, 255, 0, 0.5),/* rgba(0, 255, 0, 0.1) accent - dark when off */
    inset 0 0 0 0 rgba(0,0,0,0);
}
.off .toggle{
    right: 40%;
    box-shadow:
    0px 8px 8px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 3px 0 rgba(0, 0, 0, 1),
    inset 0 3px 2px 0 rgba(79, 81, 79, 0.5),
    inset -2px 0px 3px 0 rgba(255, 0, 0, 0.5),/* rgba(255, 0, 0, 0.5) accent - dark when on */
    inset 2px 0px 3px 0 rgba(0, 0, 0, 1),/* rgba(0, 255, 0, 0.1) accent - dark when off */
    inset 0 0 0 0 rgba(0,0,0,0);
}
.detail {
    height: 30%;
    width: 4px;
    border-radius: 10px;
    box-shadow: -1px 1px 2px 0 rgba(0, 0, 0, 1),
    inset 1px -1px 2px 0 rgba(0, 0, 0, 1),
    inset -1px -1px 2px 0 rgba(0, 0, 0, 1),
    inset 0px -2px 2px 0 rgba(0, 0, 0, 1),
    inset 0px 2px 2px 0 rgb(79 81 79),
    inset 1px -1px 4px 0 rgb(79 81 79);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
.detail:nth-child(1) {
    left: 10%;
}
.detail:nth-child(2) {
    right: 10%;
}
</style>
