import Pusher from 'pusher-js';

export function toPusherKey(key) {
    return key.replace(/:/g, '__')
}

export const pusherClient = new Pusher(
    import.meta.env.VITE_PUSHER_APP_KEY,
    {
        cluster: 'us3',
    }
)