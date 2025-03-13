import ToastNotification from "./../interfaces/custom/ToastNotification";
import NotificationOptions from "./../interfaces/models/NotificationOptions";

export default class ToastNotificationImpl implements ToastNotification {
  icons: { success: string; warning: string; error: string; };
  colors: { success: string; warning: string; error: string; };

  constructor() {
    this.icons = {
      success: `<svg class="size-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd" />
          </svg>`,
      warning: `<svg class="size-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clip-rule="evenodd" />
          </svg>`,
      error: `<svg class="size-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                  clip-rule="evenodd" />
          </svg>`,
    };

    this.colors = {
      success: "green",
      warning: "yellow",
      error: "red",
    };

  }

  showNotification(options: NotificationOptions): void {
    const color = (options.alertColor ?? this.colors[options.type as keyof typeof this.colors]) || "gray"

    const icon = (options.icon && options.icon.length > 7) ? options.icon : (this.icons[options.type as keyof typeof this.colors] ?? this.icons[options.icon as keyof typeof this.colors]) || '';

    // Start create toast notification
    const notification = document.createElement("div");
    notification.className = `fixed ${options.position} bg-${color}-50 !border-${color}-400 border-l-4 rounded-md shadow-md !p-4 flex items-center transition-all transform translate-x-full opacity-0 ${options.alertWidth ?? 'w-80 lg:w-100'} ${options.alertHeight ?? 'h-fit'}`;
    notification.innerHTML = `
          <div class="shrink-0">${icon}</div>
          <div class="ml-3">
              <h3 class="font-medium text-${color}-800 text-sm">${options.title}</h3>
              <div class="mt-2 text-${color}-700 text-sm">${options.text}</div>
          </div>
          <div class="ml-auto pl-3">
              <button class="text-${color}-800 hover:text-${color}-900 cursor-pointer">&times;</button>
          </div>
      `;

    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.remove("translate-x-full", "opacity-0");
      notification.classList.add("translate-x-0", "opacity-100");
    }, 100);

    notification.querySelector("button")?.addEventListener("click", () => {
      this.closeNotification(notification);
    });

    setTimeout(() => {
      this.closeNotification(notification);
    }, options.duration);

    // End create toast notification
  }

  closeNotification(notification: HTMLDivElement): void {
    notification.classList.remove("translate-x-0", "opacity-100");
    notification.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => notification.remove(), 500);
  }
  success(options: NotificationOptions): void {
    options.type = "success";
    this.showNotification(options);
  }
  error(options: NotificationOptions): void {
    options.type = "error";
    this.showNotification(options);
  }
  warning(options: NotificationOptions): void {
    options.type = "warning";
    this.showNotification(options);
  }

  show(options: NotificationOptions): void {
    options.type = undefined;
    this.showNotification(options);
  }
}
