// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-bootstrap-icons',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/eslint',
        'v-gsap-nuxt',
    ],
    components: {
        dirs: [
            {
                path: '~/components',
                global: true,
                pathPrefix: false,
            },
        ],
    },
    devtools: { enabled: false },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },

    css: [
        '@/assets/scss/main.scss', 'swiper/css', 'vue-code-highlighter/dist/style.css',
    ],
    srcDir: 'src/',
    compatibilityDate: '2024-04-03',

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                      @use "@/assets/scss/settings/variables" as *;
                      @use "@/assets/scss/settings/mixins" as *;
                  `,
                },
            },
        },
        optimizeDeps: {
            include: [
                'swiper', 'swiper/vue', 'swiper/modules',
            ],
        },
    },
    eslint: {
        config: {
            stylistic: true,
        },
    },
    fonts: {
        families: [{ name: 'Roboto Condensed', provider: 'google' }],
    },
    image: {
        format: ['webp'],
        screens: {
            'default': 320,
            'xxs': 480,
            'xs': 576,
            'sm': 768,
            'md': 996,
            'lg': 1200,
            'xl': 1367,
            'xxl': 1600,
            '4k': 1921,
        },
    },
})
