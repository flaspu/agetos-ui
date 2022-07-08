<template>
    <div class="message" :class="{ 'active': this.active }">
        <div class="avatar" :style="`background-image: url('${this.image}');`"></div>
        <div class="content">
          <h4>{{ this.name }}</h4>
          <p>{{ this.customStatus }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SidebarContact',
    props: {
        image: String,
        active: Boolean,
        customStatus: String,
        name: String,
    },
}
</script>