<template>
    <div class="_application">
        <LayoutSidebar />
        <LayoutChat />
    </div>
</template>
<script lang="ts">
import LayoutSidebar from '../components/layouts/Sidebar.vue';
import LayoutChat from '../components/layouts/Chat.vue';
import { useMessage } from 'naive-ui';

import '../assets/less/styles.less';

export default {
    name: 'ChatView',
    components: {
        LayoutSidebar,
        LayoutChat
    },
    beforeCreate: function() {
        document.body.className = 'chat-app';
    },
    setup () {
        const message = useMessage();
        window.message = message;
    }
}
</script>