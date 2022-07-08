<template>
    <div class="navigation">
        <div class="container">
            <div class="brand">
                <img src="/src/assets/media/branding/primary_logo.png">
            </div>
            <button class="btn-mobile" @click="toggle = !toggle">
                <box-icon name="menu" v-if="!toggle" color="#77798B"></box-icon>
                <box-icon name="x" v-else color="#77798B"></box-icon>
            </button>
            <ul :class="{ 'toggle-mobile': toggle }">
                <li><a href="#">{{ $t("navbar.branding") }}</a></li>
                <li><a href="#">{{ $t("navbar.support") }}</a></li>
                <li>
                    <a href="#" @click="multiLanguage = !multiLanguage" class="multi-language">
                        <img :src="`/src/assets/media/flags/${this.locale}.png`" :alt="this.locales[this.locale]"> <a href="#">{{ this.locales[this.locale] }}</a>
                    </a>
                    <Transition name="fade-in-top">
                        <div class="dropdown" v-if="multiLanguage">
                            <ul>
                                <li v-for="locale in Object.keys(this.locales)" v-bind:key="locale">
                                    <a href="#" @click="onChangeLanguage(locale)">
                                        <img :src="`/src/assets/media/flags/${locale}.png`" :alt="this.locales[locale]"> 
                                        {{ this.locales[locale] }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Transition>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import 'boxicons';

export default {
    name: 'LayoutNavbar',
    data () {
        return {
            toggle: false,
            multiLanguage: false,
            locales: {
                'ro-RO': 'Română',
                'en-UK': 'English'
            },
            locale: this.$lang.options.locale
        }; 
    },
    methods: {
        onChangeLanguage (locale) {
            this.$lang.changeLocale(locale);
            this.locale = locale;
        }
    }
}
</script>