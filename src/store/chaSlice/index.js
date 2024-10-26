import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { marked } from "marked";
import DOMPurify from 'dompurify';

const initData = {
    data: [],
}

const ChatSlice = createSlice ({
    name:'chat',
    initialState:initData,
    reducers:{
        addChat:(state, action) => {
            state.data.push({
                id:uuidv4(),
                title: 'chat',
                messages:[]
            })
        },
        addMessage: (state, action) => {
            const {idchat , userMess, botMess} = action.payload;
            const chat = state.data.find((chat) => chat.id === idchat);
            
            if(chat) {
                const messageFormat = marked.parse(botMess);
                const safechat = DOMPurify.sanitize(messageFormat);
                const newMessage= [
                    ...chat.messages,
                    {id:uuidv4(), text:userMess, isBot:false },
                    {id:uuidv4(), text:safechat, isBot:true },           
                ];
                chat.messages = newMessage;
                state.data = [...state.data];
            }
        },
        removeChat : (state, action) => {
            state.data = state.data.filter((chat) => chat.id !== action.payload)
        },
    },
})

export const {addChat ,removeChat, addMessage, setNameChat} = ChatSlice.actions;

export default ChatSlice.reducer;