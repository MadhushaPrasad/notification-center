# NotificationCenter

NotificationCenter is a lightweight JavaScript library for displaying beautiful, customizable notifications powered by **Tailwind CSS**.

## 🚀 Features
- Supports **Success, Warning, and Error** notifications.
- Uses **Tailwind CSS** for styling.
- **Positioning support** using Tailwind utility classes.
- **Auto-dismiss** after a set duration.
- **Smooth animations** and transitions.
- **Lightweight** and easy to integrate.

## 📦 Installation
Install via NPM:
```sh
npm install #
```

Or via Yarn:
```sh
yarn add #
```

## 📌 Usage
### 1️⃣ Import the library in your project:
```js
import { NotificationCenter } from "notification-center-tailwind";

const notify = new NotificationCenter();
```

### 2️⃣ Display Notifications
You can trigger notifications using:
```js
notify.success({
  title: "Success!",
  text: "Your action was successful!",
  position: "top-3 right-3"
});

notify.warning({
  title: "Warning!",
  text: "Please be careful.",
  position: "top-3 left-3"
});

notify.error({
  title: "Error!",
  text: "Something went wrong!",
  position: "bottom-3 left-3"
});
```

### 3️⃣ Example with Buttons
```html
<button class="bg-green-500 p-3 border-1 border-gray outline-none text-white cursor-pointer"
  onclick="notify.success({title: 'Success!', text: 'Your action was successful!', position: 'top-3 right-3'})">
  Show Success Notification
</button>

<button class="bg-yellow-500 p-3 border-1 border-gray outline-none text-white cursor-pointer"
  onclick="notify.warning({title: 'Warning!', text: 'This is a warning message.', position: 'top-3 left-3'})">
  Show Warning Notification
</button>

<button class="bg-red-500 p-3 border-1 border-gray outline-none text-white cursor-pointer"
  onclick="notify.error({title: 'Error!', text: 'Something went wrong!', position: 'bottom-3 left-3'})">
  Show Error Notification
</button>
```

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

## ⚙️ API Reference
### `showNotification(options)`
Displays a notification with the specified options.
```js
notify.showNotification({
  title: "Custom Notification",
  text: "This is a custom notification!",
  type: "success", // success | warning | error
  duration: 3000, // in milliseconds
  position: "top-3 right-3" // Tailwind classes
});
```

### `success(options)`, `warning(options)`, `error(options)`
Shortcut methods for common notifications.

### License

This package is licensed under the [MIT License](https://github.com/MadhushaPrasad/notification-center/blob/main/LICENSE)
