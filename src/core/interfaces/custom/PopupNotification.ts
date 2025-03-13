import NotificationCenter from './../NotificationCenter';
import NotificationOptions from './../models/NotificationOptions';

export default interface PopupNotification extends NotificationCenter{
  showPopup(options: NotificationOptions): void;
}
