<template>
    <LayoutNavbar />
    <div class="branding">
        <div class="container">
            <div class="section">
                <div class="title">
                    <h4>Branding</h4>
                    <img src="/src/assets/media/branding/light_letter.png" alt="Branding">
                </div>
                <p>We’re a playful and fun brand that doesn't take ourselves too seriously. That said, we're keen on keeping things quality. If you're gonna use our art for something please keep it tasteful and send it our way for approval.</p>
            </div>
            <div class="section">
                <div class="title">
                    <h4>Our logo</h4>
                </div>
                <p>Please do not edit, change or disort Agetos’ logo.</p>
            </div>
        </div>
    </div>
</template>
<script>
import LayoutNavbar from '../components/layouts/Navbar.vue';

export default {
    name: 'BrandingView',
    components: {
        LayoutNavbar
    }
}
</script>