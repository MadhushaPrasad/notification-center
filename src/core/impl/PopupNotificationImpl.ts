import PopupNotification from "./../interfaces/custom/PopupNotification";
import NotificationOptions from "./../interfaces/models/NotificationOptions";


export default class PopupNotificationImpl implements PopupNotification {
  alertContainer: HTMLDivElement;
  icons: { success: string; warning: string; error: string; };
  colors: { success: string; warning: string; error: string; };


  constructor() {
    this.alertContainer = document.createElement("div");
    this.alertContainer.className = "fixed inset-0 flex justify-center bg-zinc-950/15 dark:bg-zinc-950/50 px-2 sm:px-6 lg:px-8 py-2 sm:py-8 lg:py-16 w-screen overflow-y-auto transition duration-100 hidden";
    document.body.appendChild(this.alertContainer);

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
  showPopup(options: NotificationOptions, resolve?: (value: boolean) => void): void {
    const color = (options.alertColor ?? this.colors[options.type as keyof typeof this.colors]) || "gray"

    const titleColor = (options.titleColor ?? color) || "gray";
    const textColor = (options.textColor ?? color) || "gray";

    const confirmButtonColor = (options.confirmButtonColor ?? color) || "gray";
    const cancelButtonColor = (options.cancelButtonColor ?? color) || "gray";

    const icon = (options.icon && options.icon.length > 7) ? options.icon : (this.icons[options.type as keyof typeof this.colors] ?? this.icons[options.icon as keyof typeof this.colors]) || '';

    // Create alert dialog
    const alertDialog = document.createElement("div");
    alertDialog.className =
      "fixed inset-0 pt-6 sm:pt-0 w-screen overflow-y-auto flex justify-center items-center transition duration-100";
    alertDialog.innerHTML = `
      <div class="fixed flex flex-col justify-center items-center ${options.position} bg-${options.alertColor ? options.alertColor + '-50' : 'white'} dark:bg-${options.alertColor ?? 'zinc'}-900 !border-${options.alertColor ?? 'zinc'}-400 shadow-lg p-8 sm:p-6 rounded-xl ring-1 ring-${options.alertColor ?? 'zinc'}-950/10 dark:ring-${options.alertColor ?? 'white'}/10 ${options.alertWidth ?? 'w-full sm:max-w-md'} ${options.alertHeight ?? 'h-fit'}">
        <div class="flex justify-center">${icon}</div>
        <h2 class="px-4 py-2 font-semibold text-${titleColor}-800 dark:text-white sm:text-sm text-base text-center">${options.title}</h2>
        <p class="mt-2 text-${textColor}-700 dark:text-white text-center">${options.text}</p>
        <div class="flex justify-center mt-5 ${options.showConfirmButton ? 'block' : 'hidden'}">
        ${options.showCancelButton ?
        `
        <div class="flex justify-center items-center p-2 w-full gap-3">
          <button class="bg-${cancelButtonColor === "gray" ? "red" : cancelButtonColor}-600 px-4 py-2 rounded-md text-white cursor-pointer" id="btnCancel">${options.cancelButtonText ?? 'Cancel'}</button>
          <button class="bg-${confirmButtonColor}-600 px-4 py-2 rounded-md text-white cursor-pointer" id="btnOK">${options.confirmButtonText ?? 'OK'}</button>
        </div>
        `
        : `<button class="bg-${color}-600 px-4 py-2 rounded-md text-white cursor-pointer" id="btnDefaultOK">${options.confirmButtonText ?? 'OK'}</button>`
      }
        </div>
      </div>
    `;

    this.alertContainer.innerHTML = "";
    this.alertContainer.appendChild(alertDialog);
    this.alertContainer.classList.remove("hidden");

    // Close alert on button click
    document.getElementById("btnCancel")?.addEventListener("click", () => {
      this.closeNotification(this.alertContainer);
      resolve?.(false);
    });

    document.getElementById("btnOK")?.addEventListener("click", () => {
      this.closeNotification(this.alertContainer);
      resolve?.(true);
    });

    document.getElementById("btnDefaultOK")?.addEventListener("click", () => {
      this.closeNotification(this.alertContainer);
      resolve?.(true);
    });

    const alertContainerDiv = this.alertContainer;

    // Auto close after duration
    setTimeout(() => {
      this.closeNotification(alertContainerDiv);
    }, options.duration);
  }

  closeNotification(notification: HTMLElement): void {
    notification.classList.add("hidden");
  }

  success(options: NotificationOptions):  Promise<boolean> {
    return new Promise((resolve) => {
      options.type = "success";
      this.showPopup(options, resolve);
    });
  }

  error(options: NotificationOptions): Promise<boolean> {
    return new Promise((resolve) => {
      options.type = "error";
      this.showPopup(options, resolve);
    });
  }
  
  warning(options: NotificationOptions): Promise<boolean> {
    return new Promise((resolve) => {
      options.type = "warning";
      this.showPopup(options, resolve);
    });
  }
  
  show(options: NotificationOptions): Promise<boolean> {
    return new Promise((resolve) => {
      options.type = undefined;
      this.showPopup(options, resolve);
    });
  }
}
