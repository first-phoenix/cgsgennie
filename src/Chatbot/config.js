import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import StartBtn from './components/StartBtn';
import data from './data';
import DipslayImage from './components/DipslayImage';
import UserAvatar from './components/UserAvatar';

const botName = 'CGS Gennie';
const userName = 'Jane';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hi ${userName} – My name is Gennie, here to help you find people, documents, data, departments in a structured and summarized format – how can I help you?​`, {
        widget: "startBtn"
    })],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />,
    },
    state: {
        checker: null,
        data,
        userData: {
            name: "",
            age: "",
            category: "",
            product: {
                name: "",
                link: "",
                imageUrl: ""
            }
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "image",
            widgetFunc: (props) => <DipslayImage {...props} />,
        },
    ]
};

export default config;