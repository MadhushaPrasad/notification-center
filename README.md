# Notification Center (v1.0.7)

Notification Center is a lightweight JavaScript library for displaying beautiful, customizable notifications powered by **Tailwind CSS**.

## 🚀 Features

- Supports **Success, Warning, and Error** notifications.
- Uses **Tailwind CSS** for styling.
- **Positioning support** using Tailwind utility classes.
- **Custom classes support** → now you can add your own classes for notification containers.
- **Auto-dismiss** after a set duration.
- **Smooth animations** and transitions.
- **Lightweight** and easy to integrate.
- Supports **Toast notifications**
- Supports **Dialog notifications** as popups.

## 📦 Installation

Install via NPM:

```sh
npm install @madhusha_99/notification-center
```

## Customizable Options

Below are the customizable options for notifications:

| Option               | Type      | Description                                       |
| -------------------- | --------- | ------------------------------------------------- |
| `title`              | `string`  | The title of the notification                     |
| `titleColor`         | `string`  | Color of the title text                           |
| `text`               | `string`  | The content of the notification                   |
| `textColor`          | `string`  | Color of the text content                         |
| `class`              | `string`  | Custom CSS/Tailwind class for the container (NEW) |
| `type`               | `string`  | Notification type (`success`, `error`, `warning`) |
| `toast`              | `boolean` | Whether it should be a toast notification         |
| `position`           | `string`  | Tailwind-based position (`top-3 right-3`, etc.)   |
| `duration`           | `number`  | Display duration (ms)                             |
| `icon`               | `string`  | Custom icon (SVG/HTML). If omitted, uses defaults |
| `alertColor`         | `string`  | Base color (affects border & background)          |
| `alertWidth`         | `string`  | Width of the notification                         |
| `alertHeight`        | `string`  | Height of the notification                        |
| `showCloseButton`    | `boolean` | Show a close button                               |
| `showCancelButton`   | `boolean` | Show a cancel button (dialogs)                    |
| `showConfirmButton`  | `boolean` | Show a confirm button (dialogs)                   |
| `confirmButtonText`  | `string`  | Confirm button text                               |
| `cancelButtonText`   | `string`  | Cancel button text                                |
| `confirmButtonColor` | `string`  | Confirm button background color                   |
| `cancelButtonColor`  | `string`  | Cancel button background color                    |
| `confirmButtonClass` | `string`  | Custom class for confirm button                   |
| `cancelButtonClass`  | `string`  | Custom class for cancel button                    |

## 📌 Usage

## 📦 Importing and Initializing

You can import `Toast` and `Dialog` in two ways, depending on your preference and project structure.

### Option 1: Import from a Single Entry Point

Import both components from the main module:

```ts
import { Toast, Dialog } from '@madhusha_99/notification-center';
```

> This approach is simple and keeps your imports organized in one place.

---

### Option 2: Import Individual Components

Import each component separately if you prefer modular imports:

```ts
import Toast from '@madhusha_99/notification-center/core/Toast';
import Dialog from '@madhusha_99/notification-center/core/Dialog';
```

> Useful for selective imports and potentially better tree-shaking in certain build setups.

---

### Global Initialization

To initialize notifications globally, add the following setup:

```typescript
import { Toast, Dialog } from '@madhusha_99/notification-center';

declare global {
  interface Window {
    notify: Toast; // you can use global variable name as you want
    dialog: Dialog;
  }
}

window.notify = new Toast();
window.dialog = new Dialog();
```

## or

```javascript
import { Toast, Dialog } from '@madhusha_99/notification-center';

window.notify = new Toast(); // you can use global variable name as you want
window.dialog = new Dialog();
```

### Single Instance Initialization

To use notifications without global initialization, you can create individual instances:

```typescript
import { Toast, Dialog } from '@madhusha_99/notification-center';

const notify = new Toast(); //you can use constable variable name as you want
const dialog = new Dialog();
```

---

### Displaying Notifications

#### Toast Notification

![toast-notification](https://github.com/user-attachments/assets/0fe73695-f60d-499a-bfa7-dec22ce26038)

You can trigger notifications using:

```js
notify.show({
  title: "Success!",
  text: "Your action was successful.",
  type: "success",
  duration: 3000
});

notify.warning({
  title: "Warning!",
  text: "Please be careful.",
  position: "top-3 right-3",
  type: "warning",
  duration: 3000
});

notify.error({
  title: "Error!",
  text: "Something went wrong!",
  position: "top-3 right-3",
  type: "error",
  duration: 3000
});

notify.show({
  title: "Error!",
  text: "Something went wrong!",
  class: "fixed top-3 right-3 bg-red-50 !border-red-400 border-l-4 rounded-md shadow-md !p-4 flex items-center transition-all transform translate-x-full opacity-0 w-80 lg:w-100",
  position: "top-3 right-3",
  type: "error",
  duration: 3000
});
```

#### Dialog Notification

### Light mode

![dialog-notification-light-mode](https://github.com/user-attachments/assets/2d123c65-837b-4c1b-bc74-b934d04b6198)

### Dark mode

![dialog-notification-dark-mode](https://github.com/user-attachments/assets/f01fc065-cd41-42ad-aa6a-e21a5a55fe22)

```typescript
dialog.show({
  title: "Are you sure?",
  text: "This action cannot be undone.",
  showCancelButton: true,
  confirmButtonText: "Yes, proceed",
  cancelButtonText: "Cancel"
});
```

---

### Handling User Actions with Promises

![Handling User Actions with Promises](https://github.com/user-attachments/assets/6c1bad87-92a4-43f3-bf96-0ae74beb3d8f)

The `dialog.show()` method returns a Promise, allowing you to handle user actions asynchronously like a true tech geek! 🚀

```typescript
dialog.show({
  title: "Confirm Action",
  text: "Are you sure you want to proceed?",
  showConfirmButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  cancelButtonText: "No"
}).then((result) => {
  if (result) {
    console.log("User confirmed the action!");
  } else {
    console.log("User canceled the action.");
  }
});
```

---

### 3️⃣ Example with Buttons

```html
<button class="bg-green-500 p-3 border-1 border-gray outline-none text-white cursor-pointer"
  onclick="notify.success({title: 'Success!', text: 'Your action was successful!', position: 'top-3 right-3', duration: 3000})">
  Show Success Notification
</button>

<button class="bg-yellow-500 p-3 border-1 border-gray outline-none text-white cursor-pointer"
  onclick="notify.warning({title: 'Warning!', text: 'This is a warning message.', position: 'top-3 left-3', duration: 3000})">
  Show Warning Notification
</button>

<button class="bg-red-500 p-3 border-1 border-gray outline-none text-white cursor-pointer"
  onclick="notify.error({title: 'Error!', text: 'Something went wrong!', position: 'bottom-3 left-3', duration: 3000})">
  Show Error Notification
</button>
```

---

## 🎨 Tailwind CSS Integration

This package **requires Tailwind CSS** to work properly. Ensure Tailwind is included in your project:

1. Install Tailwind CSS:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. Add Tailwind to your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Use Tailwind classes for positioning notifications:

- `top-3 right-3` → Top Right
- `top-3 left-3` → Top Left
- `bottom-3 right-3` → Bottom Right
- `bottom-3 left-3` → Bottom Left

---

### Using Tailwind CSS CDN

If you prefer using Tailwind without NPM, include the following in your HTML:

```html
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
```

### `success(options)`, `warning(options)`, `error(options)`

Shortcut methods for common notifications.

---

### License

This package is licensed under the  MIT License - see the [LICENSE](https://github.com/MadhushaPrasad/notification-center/blob/main/LICENSE) file for details.
