<template>
    <div class="messages">
        <div class="header">
			<div class="avatar" :style="`background-image: url('${contact.image}');`"></div>
			<div class="content">
				<h4>{{ contact.name }}</h4>
				<p>Online</p>
			</div>
		</div>
        <div class="content">
            <!-- Message from -->
            <div>
                <div class="user">
                    <div class="avatar" :style="`background-image: url('${contact.image}');`"></div>
                    <span>{{ contact.name }} <i>— Today</i></span>
                </div>
                <div class="message from">
                    <span><box-icon name="check-double" color="white"></box-icon></span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, suscipit quisquam?</p>
                </div>
            </div>
            <!-- /Message from -->
            <!-- Message to -->
            <div class="position-to">
                <div class="user">
                    <span><i>Now — </i>You</span>
                    <div class="avatar" :style="`background-image: url('${contact.image}');`"></div>
                </div>
                <div class="message to">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, suscipit quisquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, suscipit quisquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, suscipit quisquam?</p>
                    <span><box-icon name="check-double" color="white"></box-icon></span>
                </div>
            </div>
            <!-- /Message to -->
        </div>
        <div class="bottom">
            <Transition name="slide-emoji">
                <div class="emojies" v-if="this.emoji">
                    <ul>
                        <li v-for="emoji in emojis" v-bind:key="emoji" @click="this.message += emoji">{{ emoji }}</li>  
                    </ul>
                </div>  
            </Transition>
            <div class="footer">
                <input type="text" v-model="message" :placeholder="`Write message to ${contact.name.split(' ')[0]}`">
                <button class="btn-icon emoji" @click="this.emoji = !this.emoji"><box-icon name="wink-smile" color="#737782"></box-icon></button>
                <button class="btn-primary btn-icon" @click="sendMessage()"><box-icon name="send" color="white"></box-icon></button>
            </div>  
        </div>
    </div>
</template>

<script lang="ts">
import 'boxicons'
import { io } from 'socket.io-client';
import SocketioService from '../../services/socketio.service';

export default {
    name: 'LayoutMessages',
    props: {
        contact: null,
    },
    data () {
        return {
            emoji: false,
            emojis: [
                '😀','💓','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗',
                '😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','👋','🤚','🖐','✋','🖖','👌','🤏','✌️','🤞',
                '🤟','🤘','🤙','👈','👉','👆',
            ],
            message: '',
            socket: io(),
        }
    },
    created () {
        SocketioService.setupSocketConnection();
    },
    mounted () {
        if(SocketioService.socket) {
            SocketioService.socket.emit('subscribe', 10);

            SocketioService.socket.on('conversation', (payload: any) => {
                console.log(payload);
            })
        }
        
    },
    methods: {
        sendMessage() {
            if(SocketioService.socket) {
                SocketioService.socket.emit('sendMessage', {
                    room: 10,
                    text: this.message,
                    date: new Date(),
                });
            }
        }
    }
}
</script>