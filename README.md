# Remix-Vite-Tailwind Minimal Template

Welcome to the **Remix-Vite-Tailwind** minimal template project. This template provides a streamlined starting point with [Remix](https://remix.run/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). It includes only the essential components needed to get started quickly.

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-1.webp" alt="Splash Screen" width="800" /> <p><em>Figure 1: Remix, Vite, & Tailwind - A Minimal Template</em></p> </div> </div>
<br>

## Features

- **Remix** for server-side rendering and routing
- **Vite** for fast bundling and development builds
- **Tailwind CSS** for utility-first styling
- Basic **theme configuration** with customizable colors
- Essential **UI components** for common use cases
- **Responsive design** support

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

To use this template, you can quickly set up a new project using the following commands:

1. Open your terminal and run:

   ```bash
   npx create-remix@latest --template https://github.com/EvanMarie/project-template
   ```

2. Follow the prompts to set up your project (choose TypeScript/JavaScript, project name, etc.).

3. Navigate to your project directory:

   ```bash
   cd your-project-name
   ```

4. Install the dependencies:

   ```bash
   yarn install
   ```

   Or, if using npm:

   ```bash
   npm install
   ```

5. Run the development server:

   ```bash
   yarn dev
   ```

   Or, if using npm:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000`.

---

## Project Structure

This template provides a clean, minimal structure for building Remix applications:

- **`app/`**: The core of the Remix application
  - **`components/`**: Contains basic UI components
  - **`styles.tsx`**: Includes global styles and theme configuration
  - **`tailwind.config.js`**: Tailwind configuration file
- **`public/`**: Static assets such as images and fonts
- **`vite.config.js`**: Configuration file for Vite
- **`package.json`**: Project dependencies and scripts

---

## Customizing the Theme

The template comes with a basic color scheme that you can easily customize in the `tailwind.config.js` file. The theme colors are defined in the `themeColors` object, which you can modify to match your project's needs.

```js
themeColors: {
  100: 'rgba(255, 255, 255, 1)',
  // other colors...
}
```

---

## Responsive Design

The template includes basic responsive design support using Tailwind's utility classes. You can use the predefined breakpoints (`sm`, `md`, `lg`, `xl`) to create responsive layouts:

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">Responsive container</div>
```

---

## Deployment

When you're ready to deploy, build the project:

```bash
yarn build
```

Or, if using npm:

```bash
npm run build
```

This will create a production-ready version in the `dist/` folder.

---

## License

This project is licensed under the MIT License.

---

## Questions or Issues?

If you have any questions or encounter any issues, feel free to open an issue or submit a pull request on GitHub.
