import type { MessageApiInjection } from 'naive-ui';

export {};

declare global {
    interface Window {
        message: MessageApiInjection,
    }
}