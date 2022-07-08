<template>
	<div class="sidebar" :class="{ 'toggled': this.sidebar.toggle }">
		<div class="topbar" @click="this.sidebar.toggleSidebar()">
			<div class="avatar" style="background-image: url('/src/assets/media/memoji/Memoji-03.png');"></div>
			<div class="content">
				<h4>{{ this.user.username }}</h4>
				<p>{{ this.user.customStatus }}</p>
			</div>
		</div>
		<div class="contacts">
			<div class="header">
				<h4 class="title">{{ $t('sidebar.contacts') }}</h4>
				<span>{{ $t('sidebar.messages') }}</span>
			</div>
			<SidebarContact 
				v-for="contact in this.sidebar.contacts" 
				v-bind:key="contact" 
				:name="contact.name" 
				:customStatus="contact.customStatus" 
				:active="contact.active" 
				:image="contact.image" 
				@click="sidebar.selectContact(contact)"
			/>
		</div>
		<div class="footer">
			<div class="content">
				<button class="btn-primary">{{ $t('sidebar.addContact') }}</button>
				<n-tooltip trigger="hover" placement="left">
					<template #trigger>
						<button class="logout" @click="logout"><box-icon name="log-out-circle"></box-icon></button>
					</template>
					Logout
				</n-tooltip>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import axios from 'axios';

import SidebarContact from '../sidebar/Contact.vue';
import { NTooltip, useMessage } from 'naive-ui'
import { useSidebar } from '../../stores/sidebar';
import { useUser } from '../../stores/user';


export default {
	name: 'LayoutSidebar',
	components: {
		SidebarContact,
		NTooltip
	},
	data () {
		return {
			sidebar: useSidebar(),
			user: useUser().$state,
		}
	},
	mounted () {
		this.sidebar.contacts = this.user.contacts;
	},
	methods: {
		logout() {
			this.$cookies.remove('agetos-token');
			this.$router.push('login');
			window.message.success("You have been successfully logged out.");
		}
	}
}
</script>