import NotificationCenter from './../NotificationCenter';
import NotificationOptions from './../models/NotificationOptions';

export default interface ToastNotification extends NotificationCenter {
  showNotification(options: NotificationOptions): void;

  success(options: NotificationOptions): void;
  error(options: NotificationOptions): void;
  warning(options: NotificationOptions): void;
  show(options: NotificationOptions): void;
}
