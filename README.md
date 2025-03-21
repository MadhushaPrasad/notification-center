# Notification Center

Notification Center is a lightweight JavaScript library for displaying beautiful, customizable notifications powered by **Tailwind CSS**.

## 🚀 Features

- Supports **Success, Warning, and Error** notifications.
- Uses **Tailwind CSS** for styling.
- **Positioning support** using Tailwind utility classes.
- **Auto-dismiss** after a set duration.
- **Smooth animations** and transitions.
- **Lightweight** and easy to integrate.
- Supports **Toast notifications**
- Supports **Dialog notifications** as popups.

## 📦 Installation

Install via NPM:

```sh
npm install #
```

Or via Yarn:

```sh
yarn add #
```

## Customizable Options

Below are the customizable options for notifications:

| Option               | Type      | Description |
|----------------------|----------|-------------|
| `title`             | `string`  | The title of the notification |
| `titleColor`        | `string`  | Color of the title text |
| `text`              | `string`  | The content of the notification |
| `textColor`         | `string`  | Color of the text content |
| `type`              | `string`  | Notification type (e.g., success, error, warning) |
| `toast`             | `boolean` | Whether the notification should be a toast |
| `position`          | `string`  | Position of the notification (e.g., top-right, bottom-left) |
| `duration`          | `number`  | Duration the notification is displayed (in milliseconds) |
| `icon`              | `string`  | Icon to be displayed in the notification |
| `alertColor`        | `string`  | Background color of the alert |
| `alertWidth`        | `string`  | Width of the alert box |
| `alertHeight`       | `string`  | Height of the alert box |
| `showCloseButton`   | `boolean` | Whether to show a close button |
| `showCancelButton`  | `boolean` | Whether to show a cancel button |
| `showConfirmButton` | `boolean` | Whether to show a confirm button |
| `confirmButtonText` | `string`  | Text for the confirm button |
| `cancelButtonText`  | `string`  | Text for the cancel button |
| `confirmButtonColor`| `string`  | Background color of the confirm button |
| `cancelButtonColor` | `string`  | Background color of the cancel button |
| `confirmButtonClass`| `string`  | Custom CSS class for the confirm button |
| `cancelButtonClass` | `string`  | Custom CSS class for the cancel button |

## 📌 Usage

## 📦 Importing and Initializing

You can import `Toast` and `Dialog` in two ways, depending on your preference and project structure.

### Option 1: Import from a Single Entry Point

Import both components from the main module:

```ts
import { Toast, Dialog } from './core';
```

> This approach is simple and keeps your imports organized in one place.

---

### Option 2: Import Individual Components

Import each component separately if you prefer modular imports:

```ts
import Toast from './core/Toast';
import Dialog from './core/Dialog';
```

> Useful for selective imports and potentially better tree-shaking in certain build setups.

---

### Global Initialization

To initialize notifications globally, add the following setup:

```typescript
import { Toast, Dialog } from './core';

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
import { Toast, Dialog } from './core';

window.notify = new Toast(); // you can use global variable name as you want
window.dialog = new Dialog();
```

### Single Instance Initialization

To use notifications without global initialization, you can create individual instances:

```typescript
import { Toast, Dialog } from './core';

const notify = new Toast(); //you can use constable variable name as you want
const dialog = new Dialog();
```

---

### Displaying Notifications

#### Toast Notification

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
  position: "top-3 right-3"
  type: "warning",
  duration: 3000
});

notify.error({
  title: "Error!",
  text: "Something went wrong!",
  position: "top-3 right-3"
  type: "error",
  duration: 3000
});
```

#### Dialog Notification

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
