import NotificationCenter from './../NotificationCenter';
import NotificationOptions from './../models/NotificationOptions';

export default interface ToastNotification extends NotificationCenter{
  showNotification(options: NotificationOptions): void;
}
