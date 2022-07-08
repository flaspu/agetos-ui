import { createRouter, createWebHistory } from 'vue-router';
import { useUser } from './stores/user';
import { API_URL } from './constants';

import Chat from './pages/Chat.vue';
import Login from './pages/Login.vue';
import Branding from './pages/Branding.vue';

import axios from 'axios';

function getCookie(name: string, cookies: string): string | null {
	const nameLenPlus = (name.length + 1);
	return cookies
		.split(';')
		.map(c => c.trim())
		.filter(cookie => {
			return cookie.substring(0, nameLenPlus) === `${name}=`;
		})
		.map(cookie => {
			return decodeURIComponent(cookie.substring(nameLenPlus));
		})[0] || null;
}

const routes = [
    { 
        name: 'chat',
        path: '/', 
        component: Chat, 
        // @ts-ignore
        beforeEnter: (to, from, next) => {
            const token = JSON.parse(getCookie('agetos-token', document.cookie) || '[]');
            if(token) {
                const user = useUser();
                axios.get(`${API_URL}api/auth/me`, {
                    headers: {
                        Authorization: 'Bearer ' + token.data
                    }
                }).then((res) => {
                    user.$state = res.data;
                    console.log(res.data);
                    next();
                }).catch((e) => {
                    next({
                        name: 'login'
                    });
                });
            }
        },
        props: true,
    },
    { 
        name: 'login', 
        path: '/login', 
        component: Login,
        // @ts-ignore
        beforeEnter: (to, from, next) => {
            const token = JSON.parse(getCookie('agetos-token', document.cookie) || '[]');
            if(token) {
                const user = useUser();
                axios.get(`${API_URL}api/auth/me`, {
                    headers: {
                        Authorization: 'Bearer ' + token.data
                    }
                }).then((res) => {
                    user.$state = res.data;
                    next({
                        name: 'chat',
                    });
                }).catch(() => {
                    next();
                });
            } else {
                next();
            }
        }
    },
    { name: 'branding', path: '/branding', component: Branding },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;