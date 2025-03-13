import NotificationOptions from '../interfaces/models/NotificationOptions';

export default interface NotificationCenter {
  closeNotification(notification: HTMLElement): void;

  success(options: NotificationOptions): void;
  error(options: NotificationOptions): void;
  warning(options: NotificationOptions): void;
}
