import {User, Message} from "@/helpers/types";

function pick<T>(arr: T[], i: number) {
    return arr[i % arr.length];
}

const sampleTexts = [
    "Hey! What's up?",
    "Haha 😂 that's classic",
    "On my way — 10 mins",
    "Bro, check this out",
    "Sent the file. lemme know",
    "Nice! Love it.",
    "Can you review this?",
    "Let's meet tomorrow.",
    "Working on the project now",
    "Amazing 😍",
    "Haha stoppp",
    "Done ✅",
    "I'll call you after class",
    "Do you have the link?",
    "Whoa that's fire 🔥",
    "Thanks!",
    "No problem",
    "Lol",
    "See you soon",
    "Okay, noted",
    "That explains it",
    "Reply when free",
    "Saved it",
    "Perfect 👍",
    "Nice shot 📸"
];

const sampleImages = [
    "/images/user-1.jpg",
    "/images/user-2.jpg",
    "/images/user-3.jpg",
    "/images/user-2.jpg",
    "/images/user-3.jpg"
];

const reactionEmojis = ["😊", "😂", "🔥", "👍", "😮"];

function makeTimestamp(i: number) {
    // rotate between Today, Yesterday, and weekday times
    const r = i % 7;
    if (i < 6) return `Today ${9 + (i % 12)}:${(i * 3) % 60}`; // Today times
    if (i < 12) return `Yesterday ${8 + (i % 11)}:${(i * 7) % 60}`;
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return `${pick(weekdays, i)} ${7 + (i % 10)}:${(i * 11) % 60}`;
}

let globalMessageId = 1000;

// Build N messages for a conversation between convUser and main user
export function buildMessagesForConversation(convUser: User, convWith: User, count = 50) : Message[] {
    const msgs: Message[] = [];
    for (let i = 0; i < count; i++) {
        const incomingFromConvUser = i % 2 === 0; // alternate sender
        const sender = incomingFromConvUser ? convUser : convWith;
        const receiver = incomingFromConvUser ? convWith : convUser;

        // choose message type with some probability
        const r = i % 10;
        const msg: Message = {
            id: ++globalMessageId,
            senderId: sender,
            receiverId: receiver,
            content: "",
            timestamp: makeTimestamp(i),
            isRead: !incomingFromConvUser || (i % 7 !== 0), // some unread for variety
            type: 'text'
        };

        if (r === 2) {
            // image message
            msg.type = 'image';
            msg.content = "Sent a photo";
            msg.imageUrl = pick(sampleImages, i);
            if (i % 5 === 0) msg.isRead = false;
        } else if (r === 4) {
            // reaction
            msg.type = 'reaction';
            msg.content = pick(reactionEmojis, i);
        } else if (r === 7) {
            // story reply
            msg.type = 'story-reply';
            msg.content = "Mentioned you in their story";
            msg.storyReply = {
                storyOwner: `@${pick([convUser.username, convWith.username], i)}`,
                storyImage: pick(sampleImages, i)
            };
        } else {
            // normal text
            msg.type = 'text';
            msg.content = pick(sampleTexts, i);
        }

        msgs.push(msg);
    }
    return msgs;
}
