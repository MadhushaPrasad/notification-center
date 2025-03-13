import { Toast, Dialog  } from './core'

declare global {
  interface Window {
	notify: Toast;
  dialog: Dialog;
  }
}

window.notify = new Toast();
window.dialog = new Dialog();
