<template>
    <LayoutNavbar />
    <div class="signIn">
        <div class="container">
            <div class="hero">
                <h2>{{ $t('loginPage.hero.title') }} <br><span>AGETOS</span> WEB</h2>
                <p v-html="$t('loginPage.hero.subtitle')"></p>
            </div>
            <Form class="login" @submit="onSubmit">
                <div class="form-group">
                    <div class="form-input-group">
                        <div class="form-input">
                            <Field name="username" type="text" v-model="login" :placeholder="$t('loginPage.inputs.login')"
                                :rules="{ required: true }" />
                            <box-icon name='user'></box-icon>
                        </div>
                        <ErrorMessage name="username" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-input-group">
                        <div class="form-input">
                            <Field name="password" type="password" v-model="password" :placeholder="$t('loginPage.inputs.password')"
                                :rules="{ required: true }" />
                            <box-icon name='key' ></box-icon>
                        </div>
                        <ErrorMessage name="password" />
                    </div>
                    
                    <a href="#">{{ $t('loginPage.inputs.recover') }}</a>
                </div>
                <button class="btn-primary">{{ $t('loginPage.inputs.button') }}</button>
            </Form>
        </div>
    </div>
    <img class="eclipse-brush" src="/src/assets/media/svg/eclipse.svg">
    <img class="eclipse-brush-top" src="/src/assets/media/svg/eclipse-top.svg">
</template>
<script lang="ts">
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import LayoutNavbar from '../components/layouts/Navbar.vue';
import 'boxicons';
import { API_URL } from '../constants';
import axios from 'axios';

defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return 'This field is required';
  }

  return true;
});

defineRule('strong-password', (value: string) => {
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const re = new RegExp(regularExpression);
    if(!re.test(value)) {
        return 'You need a stronger password'
    }
    return true;
});

export default {
    name: 'LoginView',
    components: {
        LayoutNavbar,
        Field,
        Form,
        ErrorMessage
    },
    props: ['status'],
    data () {
        return {
            login: null,
            password: null
        };
    },
    mounted: function() {
        document.body.classList.remove('chat-app');
    },
    methods: {
        onSubmit() {
            let that = this;
            axios.post(`${API_URL}api/login`, {
                username: this.login,
                password: this.password
            }).then((payload) => {
                that.$cookies.set('agetos-token', payload);
                location.reload();
            });
        },
    }
}
</script>