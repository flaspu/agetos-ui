<template>
    <div class="chat" :class="{ 'toggled': this.sidebar.toggle }" @click="this.sidebar.toggleSidebar()">
        <div class="chatScreens" :class="{ 'loading': this.sidebar.toggle }">
            <Transition name="fade">
                <LayoutMessages v-if="this.sidebar.contacts.filter(x => x.active == true).length > 0" :contact="this.sidebar.contacts.find(x => x.active == true)" />
                <WelcomeScreen v-else />
            </Transition>
        </div>
    </div>
</template>

<script>
import WelcomeScreen from '../WelcomeScreen.vue';
import LayoutMessages from '../layouts/Messages.vue';

import { useSidebar } from '../../stores/sidebar';

export default {
    name: 'LayoutChat',
    components: {
        WelcomeScreen,
        LayoutMessages
    },
    data () {
        return {
            sidebar: useSidebar(),
        }
    }
}
</script>