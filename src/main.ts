import { Toast } from './core'

declare global {
  interface Window {
	notify: Toast;
  }
}

window.notify = new Toast();
