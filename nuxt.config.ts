// https://nuxt.com/docs/api/configuration/nuxt-config
import { isProduction } from 'std-env';
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            google_analytics_id: process.env.google_analytics_id,
            production_mode: isProduction,
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://aboutme2.web.app',
        },
    },
    nitro: {
        preset: 'firebase',
    },
    modules: ['nuxt-simple-sitemap'],
});
