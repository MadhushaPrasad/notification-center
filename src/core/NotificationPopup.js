export class NotificationPopup {
  constructor() {
    this.alertContainer = document.createElement("div");
    this.alertContainer.className =
      "fixed inset-0 flex justify-center bg-zinc-950/15 dark:bg-zinc-950/50 px-2 sm:px-6 lg:px-8 py-2 sm:py-8 lg:py-16 w-screen overflow-y-auto transition duration-100 hidden";
    document.body.appendChild(this.alertContainer);
  }

  showPopup({ title = "Notification", message = "", type = "success", duration = 3000 }) {
    const colors = {
      success: "bg-green-600",
      warning: "bg-yellow-600",
      error: "bg-red-600",
    };
    const color = colors[type] || "bg-gray-600";

    const confirmation = true

    // Create alert dialog
    const alertDialog = document.createElement("div");
    alertDialog.className =
      "fixed inset-0 pt-6 sm:pt-0 w-screen overflow-y-auto flex justify-center items-center";
    alertDialog.innerHTML = `
      <div class="bg-white dark:bg-zinc-900 shadow-lg p-8 sm:p-6 rounded-2xl ring-1 ring-zinc-950/10 dark:ring-white/10 w-full sm:max-w-md">
        <h2 class="font-semibold text-zinc-950 dark:text-white sm:text-sm text-base text-center">${title}</h2>
        <p class="mt-2 text-gray-700 dark:text-white text-center">${message}</p>
        <div class="flex justify-center mt-6 ${confirmation? 'block': 'hidden'}">
          <button class="${color} px-4 py-2 rounded-md text-white cursor-pointer" id="closeAlert">OK</button>
        </div>
      </div>
    `;

    this.alertContainer.innerHTML = "";
    this.alertContainer.appendChild(alertDialog);
    this.alertContainer.classList.remove("hidden");

    // Close alert on button click
    document.getElementById("closeAlert").addEventListener("click", () => {
      this.closePopup();
    });

    // Auto close after duration
    setTimeout(() => {
      this.closePopup();
    }, duration);
  }

  closePopup() {
    this.alertContainer.classList.add("hidden");
  }

  success({ title = "Success!", message = "Operation completed successfully.", duration = 3000 }) {
    this.showPopup({ title, message, type: "success", duration });
  }

  error({ title = "Error!", message = "Something went wrong.", duration = 3000 }) {
    this.showPopup({ title, message, type: "error", duration });
  }

  warning({ title = "Warning!", message = "Please be careful.", duration = 3000 }) {
    this.showPopup({ title, message, type: "warning", duration });
  }
}
