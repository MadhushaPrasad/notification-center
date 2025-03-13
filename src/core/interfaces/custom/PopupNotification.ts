import NotificationCenter from './../NotificationCenter';
import NotificationOptions from './../models/NotificationOptions';

export default interface PopupNotification extends NotificationCenter {
  showPopup(options: NotificationOptions, resolve?: (value: boolean) => void): void

  success(options: NotificationOptions): Promise<boolean>;
  error(options: NotificationOptions): Promise<boolean>;
  warning(options: NotificationOptions): Promise<boolean>;
  show(options: NotificationOptions): Promise<boolean>;
}
