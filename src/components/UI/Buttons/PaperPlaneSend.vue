<template>
    <div class="container bg-dark d-flex justify-content-center align-items-center main-body">
        <button class="button">
            <span class="default">Send</span>
            <span class="success">
                <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5" />
                </svg>Sent
            </span>
            <svg
                class="trails"
                viewBox="0 0 33 64"
            >
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60" />
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60" />
            </svg>
            <div class="plane">
                <div class="left" />
                <div class="right" />
            </div>
        </button>
    </div>
</template>

<script lang="ts" setup>
onMounted(() => {
    const { to, set, fromTo } = useGSAP()
    const buttons = document.querySelectorAll('.button')

    buttons.forEach((button) => {
        const getVar = (variable: string) => getComputedStyle(button).getPropertyValue(variable)
        button.addEventListener('click', () => {
            if (!button.classList.contains('active')) {
                button.classList.add('active')

                to(button, {
                    keyframes: [
                        {
                            '--left-wing-first-x': 50,
                            '--left-wing-first-y': 100,
                            '--right-wing-second-x': 50,
                            '--right-wing-second-y': 100,
                            'duration': 0.2,
                            onComplete () {
                                set(button, {
                                    '--left-wing-first-y': 0,
                                    '--left-wing-second-x': 40,
                                    '--left-wing-second-y': 100,
                                    '--left-wing-third-x': 0,
                                    '--left-wing-third-y': 100,
                                    '--left-body-third-x': 40,
                                    '--right-wing-first-x': 50,
                                    '--right-wing-first-y': 0,
                                    '--right-wing-second-x': 60,
                                    '--right-wing-second-y': 100,
                                    '--right-wing-third-x': 100,
                                    '--right-wing-third-y': 100,
                                    '--right-body-third-x': 60,
                                })
                            },
                        }, {
                            '--left-wing-third-x': 20,
                            '--left-wing-third-y': 90,
                            '--left-wing-second-y': 90,
                            '--left-body-third-y': 90,
                            '--right-wing-third-x': 80,
                            '--right-wing-third-y': 90,
                            '--right-body-third-y': 90,
                            '--right-wing-second-y': 90,
                            'duration': 0.2,
                        }, {
                            '--rotate': 50,
                            '--left-wing-third-y': 95,
                            '--left-wing-third-x': 27,
                            '--right-body-third-x': 45,
                            '--right-wing-second-x': 45,
                            '--right-wing-third-x': 60,
                            '--right-wing-third-y': 83,
                            'duration': 0.25,
                        }, {
                            '--rotate': 60,
                            '--plane-x': -8,
                            '--plane-y': 40,
                            'duration': 0.2,
                        }, {
                            '--rotate': 40,
                            '--plane-x': 45,
                            '--plane-y': -300,
                            '--plane-opacity': 0,
                            'duration': 0.375,
                            onComplete () {
                                setTimeout(() => {
                                    button.removeAttribute('style')
                                    fromTo(button, {
                                        opacity: 0,
                                        y: -8,
                                    }, {
                                        opacity: 1,
                                        y: 0,
                                        clearProps: true,
                                        duration: 0.3,
                                        onComplete () {
                                            button.classList.remove('active')
                                        },
                                    })
                                }, 1800)
                            },
                        },
                    ],
                })

                to(button, {
                    keyframes: [
                        {
                            '--text-opacity': 0,
                            '--border-radius': 0,
                            '--left-wing-background': getVar('--primary-dark'),
                            '--right-wing-background': getVar('--primary-dark'),
                            'duration': 0.11,
                        }, {
                            '--left-wing-background': getVar('--primary'),
                            '--right-wing-background': getVar('--primary'),
                            'duration': 0.14,
                        }, {
                            '--left-body-background': getVar('--primary-dark'),
                            '--right-body-background': getVar('--primary-darkest'),
                            'duration': 0.25,
                            'delay': 0.1,
                        }, {
                            '--trails-stroke': 171,
                            'duration': 0.22,
                            'delay': 0.22,
                        }, {
                            '--success-opacity': 1,
                            '--success-x': 0,
                            'duration': 0.2,
                            'delay': 0.15,
                        }, {
                            '--success-stroke': 0,
                            'duration': 0.15,
                        },
                    ],
                })
            }
        })
    })
})
</script>

<style scoped lang="scss">
.container {
  height: 50vh;
}

.button {
  --primary: #F6F8FF;
  --primary-dark: #D1D6EE;
  --primary-darkest: #8A91B4;
  --shadow: #{rgba(#000, .3)};
  --text: #362A89;
  --text-opacity: 1;
  --success: #EEECFF;
  --success-x: -12;
  --success-stroke: 14;
  --success-opacity: 0;
  --border-radius: 7;
  --overflow: hidden;
  --x: 0;
  --y: 0;
  --rotate: 0;
  --plane-x: 0;
  --plane-y: 0;
  --plane-opacity: 1;
  --trails: #{rgba(#fff, .15)};
  --trails-stroke: 57;
  --left-wing-background: var(--primary);
  --left-wing-first-x: 0;
  --left-wing-first-y: 0;
  --left-wing-second-x: 50;
  --left-wing-second-y: 0;
  --left-wing-third-x: 0;
  --left-wing-third-y: 100;
  --left-body-background: var(--primary);
  --left-body-first-x: 51;
  --left-body-first-y: 0;
  --left-body-second-x: 51;
  --left-body-second-y: 100;
  --left-body-third-x: 0;
  --left-body-third-y: 100;
  --right-wing-background: var(--primary);
  --right-wing-first-x: 49;
  --right-wing-first-y: 0;
  --right-wing-second-x: 100;
  --right-wing-second-y: 0;
  --right-wing-third-x: 100;
  --right-wing-third-y: 100;
  --right-body-background: var(--primary);
  --right-body-first-x: 49;
  --right-body-first-y: 0;
  --right-body-second-x: 49;
  --right-body-second-y: 100;
  --right-body-third-x: 100;
  --right-body-third-y: 100;
  display: block;
  cursor: pointer;
  position: relative;
  border: 0;
  padding: 8px 0;
  min-width: 100px;
  text-align: center;
  margin: 0;
  line-height: 24px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  background: none;
  outline: none;
  color: var(--text);
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  .plane,
  .trails {
    pointer-events: none;
    position: absolute;
  }
  .plane {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    filter: drop-shadow(0 3px 6px var(--shadow));
    transform:  translate(calc(var(--x) * 1px), calc(var(--y) * 1px)) rotate(calc(var(--rotate) * 1deg)) translateZ(0);
    .left,
    .right {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: var(--plane-opacity);
      transform: translate(calc(var(--plane-x) * 1px), calc(var(--plane-y) * 1px)) translateZ(0);
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: calc(var(--border-radius) * 1px);
        transform: translate(var(--part-x, .4%), var(--part-y, 0)) translateZ(0);
        z-index: var(--z-index, 2);
        background: var(--background, var(--left-wing-background));
        clip-path: polygon(calc(var(--first-x, var(--left-wing-first-x)) * 1%) calc(var(--first-y, var(--left-wing-first-y)) * 1%), calc(var(--second-x, var(--left-wing-second-x)) * 1%) calc(var(--second-y, var(--left-wing-second-y)) * 1%), calc(var(--third-x, var(--left-wing-third-x)) * 1%) calc(var(--third-y, var(--left-wing-third-y)) * 1%));
      }
    }
    .left:after {
      --part-x: -1%;
      --z-index: 1;
      --background: var(--left-body-background);
      --first-x: var(--left-body-first-x);
      --first-y: var(--left-body-first-y);
      --second-x: var(--left-body-second-x);
      --second-y: var(--left-body-second-y);
      --third-x: var(--left-body-third-x);
      --third-y: var(--left-body-third-y);
    }
    .right:before {
      --part-x: -1%;
      --z-index: 2;
      --background: var(--right-wing-background);
      --first-x: var(--right-wing-first-x);
      --first-y: var(--right-wing-first-y);
      --second-x: var(--right-wing-second-x);
      --second-y: var(--right-wing-second-y);
      --third-x: var(--right-wing-third-x);
      --third-y: var(--right-wing-third-y);
    }
    .right:after {
      --part-x: 0;
      --z-index: 1;
      --background: var(--right-body-background);
      --first-x: var(--right-body-first-x);
      --first-y: var(--right-body-first-y);
      --second-x: var(--right-body-second-x);
      --second-y: var(--right-body-second-y);
      --third-x: var(--right-body-third-x);
      --third-y: var(--right-body-third-y);
    }
  }
  .trails {
    display: block;
    width: 33px;
    height: 64px;
    top: -4px;
    left: 16px;
    fill: none;
    stroke: var(--trails);
    stroke-linecap: round;
    stroke-width: 2;
    stroke-dasharray: 57px;
    stroke-dashoffset: calc(var(--trails-stroke) * 1px);
    transform: rotate(68deg) translateZ(0);
  }
  span {
    display: block;
    position: relative;
    z-index: 4;
    opacity: var(--text-opacity);
    &.success {
      z-index: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: 8px;
      transform: translateX(calc(var(--success-x) * 1px)) translateZ(0);
      opacity: var(--success-opacity);
      color: var(--success);
      svg {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 16px;
        margin: 4px 8px 0 0;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 14px;
        stroke: var(--success);
        stroke-dashoffset: calc(var(--success-stroke) * 1px)
      }
    }
  }
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
    box-sizing: inherit;
  }
}
</style>
