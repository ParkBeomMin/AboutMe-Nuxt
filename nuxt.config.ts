// https://nuxt.com/docs/api/configuration/nuxt-config
import { isProduction } from 'std-env';
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            google_analytics_id: process.env.google_analytics_id,
            production_mode: isProduction,
        },
    },
    nitro: {
        preset: 'firebase',
    },
    modules: [
        'nuxt-simple-sitemap',
        // Simple usage
        [
            '@nuxtjs/google-adsense',
            {
                id: 'ca-pub7426857657290789',
            },
        ],
    ],
    sitemap: {
        siteUrl: 'https://aboutme2.web.app',
    },
});
