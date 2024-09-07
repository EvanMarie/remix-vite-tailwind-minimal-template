# Remix-Vite-Tailwind Template

Welcome to the **Remix-Vite-Tailwind** template project. This template is designed to streamline the development process with a powerful stack that includes [Remix](https://remix.run/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). The template also includes a variety of pre-built and customizable UI components that are easily integrated and adaptable for any project. For my template with more extensive custom components, go to [this repository](https://github.com/EvanMarie/remix-vite-tailwind), and you can see the deployed version of the more extensive launchpad [here](https://remix-template.darkviolet.ai). You can easily incorporate any of the more extensive components in this project as well. These components include parallax pages, snap scroll components, extensive animation components, and much more.

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-1.webp" alt="Splash Screen" width="800" /> <p><em>Figure 1: Remix, Vite, & Tailwind - A Project Launchpad - splash screen</em></p> </div> </div>
<br>

## Features

- **Remix** for server-side rendering and routing.
- **Vite** for fast bundling and development builds.
- **Tailwind CSS** for utility-first styling.
- A collection of **custom components** ready for easy integration.
- Pre-configured **theme** with customizable colors, typography, and layout options.
- Components built with **Framer Motion** for animations and transitions.
- **Fully responsive** design and components, built with scalability in mind.
- **TypeScript support** for improved developer experience and type safety.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

To use this template, you can quickly set up a new project using the following commands:

1. Open your terminal and run:

   ```bash
   npx create-remix@latest --template https://github.com/EvanMarie/minimal-template
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

This template provides a modular and scalable structure for building Remix applications. Below is an overview of the main files and folders:

- **`app/`**: The core of the Remix application.
  - **`components/`**: Contains reusable UI components.
  - **`buildingBlockComponents/`**: Holds all the custom design elements such as modals, buttons, accordions, etc.
  - **`routes/`**: Contains all the route components for your application.
  - **`styles/`**: Includes global styles and Tailwind CSS configuration.
  - **`utils/`**: Utility functions and helper modules.
  - **`styles.tsx`**: Includes global styles, including the `themeColors` object.
- **`public/`**: Static assets such as images and fonts.
- **`vite.config.js`**: Configuration file for Vite.
- **`package.json`**: Defines the project's dependencies and scripts.
- **`tsconfig.json`**: TypeScript configuration file (if using TypeScript).

---

## Custom Components

This template comes with a collection of pre-built components designed to be customizable and reusable. Some of the main components include:

### Key Components

- **Accordion**: A collapsible UI element for displaying content in sections.
- **Modal**: A pop-up container for dialogs or large content displays.
- **Button**: A customizable button component with built-in hover and active states.
- **ExpandableImage**: A component that displays an image in a small container with an expand icon. When clicked, the image opens in a larger modal view.
- **Toast**: A small, temporary notification used for feedback.
- **Tooltip**: Provides additional context or instructions when hovering over an element.
- **Form**: A reusable form component with built-in validation and error handling.
- **Card**: A versatile container for displaying content in a structured manner.
- **Navbar**: A customizable navigation component for your application.

For a complete list of components, explore the **`buildingBlockComponents`** directory.

### How to Use

Each component can be easily imported and customized. For example:

```tsx
import { Modal } from "~/components/Modal";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <p>Your modal content here</p>
    </Modal>
  );
};
```

You can customize each component through props or by modifying the pre-configured styles in **`styles.tsx`**.

---

## Customizing the Theme

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-2.webp" alt="Splash Screen" width="800" /> <p><em>Figure 2: Remix, Vite, & Tailwind - A Project Launchpad - customizing</em></p> </div> </div>
<br>

### Color Scheme

The template comes with a predefined color scheme, but you can easily customize it by editing the `themeColors` object located in **`tailwind.config.js`**.

1. Open the `tailwind.config.js` file.
2. Locate the `themeColors` object.
3. Replace the RGBA values with your desired color scheme.

For example, to change the color for `colors[100]`:

```js
themeColors: {
  100: 'rgba(255, 255, 255, 1)',
  // other colors...
}
```

Once you update the colors, you can easily replace all instances of a specific color in the `themeColors` object by using the **`ctl(cmd)+F`** function and replacing the RGBA value throughout the project.

After updating the color scheme, make sure to copy the modified `themeColors` object to **`styles.tsx`** for consistency throughout your application.

### Typography

You can customize the typography settings in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      // Add more custom fonts here
    },
    fontSize: {
      // Customize font sizes
    },
  },
},
```

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-3.webp" alt="Splash Screen" width="800" /> <p><em>Figure 3: Remix, Vite, & Tailwind - A Project Launchpad - building block components</em></p> </div> </div>
<br>

## Building Blocks Overview

In the **`buildingBlocks`** directory, you will find components that are ready to use. Here's a brief overview:

- **Button**: Pre-styled button component with hover and click interactions.
- **ExpandableImage**: Allows users to expand images in a modal for a larger view.
- **Accordion**: Displays content in expandable sections for easier content management.
- **Form**: A customizable form component with built-in validation.
- **Card**: A versatile container for displaying content in a structured manner.
- **Navbar**: A customizable navigation component for your application.

To use these components, simply import them into your project and customize as needed. For example:

```tsx
import { Button } from "~/buildingBlocks/Button";

const MyComponent = () => {
  return (
    <Button onClick={() => console.log("Button clicked!")}>Click me</Button>
  );
};
```

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-4.webp" alt="Splash Screen" width="800" /> <p><em>Figure 4: Remix, Vite, & Tailwind - A Project Launchpad - colors</em></p> </div> </div>
<br>

## Responsive Design

All components are fully responsive and adjust based on the screen size. Tailwind's responsive utilities are used throughout the project to ensure that layouts work across devices. The template includes predefined breakpoints like `sm`, `md`, `lg`, and `xl` to adjust padding, margins, and layouts.

For example:

```tsx
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
  Responsive container
</div>
```

You can also create custom responsive utilities in your `tailwind.config.js` file:

```js
theme: {
  extend: {
    screens: {
      '2xl': '1536px',
      // Add more custom breakpoints here
    },
  },
},
```

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-5.webp" alt="Splash Screen" width="800" /> <p><em>Figure 5: Remix, Vite, & Tailwind - A Project Launchpad - complex backgrounds</em></p> </div> </div>
<br>

## Animations

This template leverages **Framer Motion** for smooth, built-in animations. Components like the `Accordion` and `ExpandableImage` already come with animated transitions, but you can easily add motion effects to any component by wrapping elements with the `motion.div` or other `motion` tags.

Example:

```tsx
import { motion } from "framer-motion";

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      Animated content
    </motion.div>
  );
};
```

You can also create reusable animation variants:

```tsx
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedList = ({ items }) => {
  return (
    <motion.ul initial="hidden" animate="visible">
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={fadeInUpVariants}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
```

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-6.webp" alt="Splash Screen" width="800" /> <p><em>Figure 6: Remix, Vite, & Tailwind - A Project Launchpad - buttons, transitions, and text shadows</em></p> </div> </div>
<br>

## Deployment

When you're ready to deploy, you can build the project by running the following command:

```bash
yarn build
```

Or, if using npm:

```bash
npm run build
```

This will output a production-ready version of your project in the `dist/` folder, optimized and ready for deployment.

### Deployment Platforms

You can deploy your Remix application to various platforms. Here are a few popular options:

1. **Vercel**: Offers seamless integration with Remix. [Deploy to Vercel](https://vercel.com/guides/deploying-remix-with-vercel)

2. **Netlify**: Another great option for Remix apps. [Deploy to Netlify](https://docs.netlify.com/integrations/frameworks/remix/)

3. **Fly.io**: A platform that's well-suited for Remix applications. [Deploy to Fly.io](https://fly.io/docs/getting-started/remix/)

4. **AWS**: For more control over your infrastructure. [Deploy to AWS](https://aws.amazon.com/getting-started/hands-on/deploy-remix-app/)

Choose the platform that best fits your needs and follow their respective deployment guides.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/minimal-template/minimal-template-7.webp" alt="Splash Screen" width="800" /> <p><em>Figure 7: Remix, Vite, & Tailwind - A Project Launchpad - text strokes</em></p> </div> </div>
<br>

## Conclusion

This **Remix-Vite-Tailwind** template provides a highly customizable, modular foundation for building scalable web applications. With its collection of reusable components, flexible theming, and support for responsive design and animations, this template is a great starting point for any project.

### Next Steps

1. Explore the `buildingBlockComponents` directory to familiarize yourself with the available components.
2. Customize the theme colors in `tailwind.config.js` to match your brand.
3. Start building your pages in the `routes` directory.
4. Leverage Remix's data loading capabilities for server-side rendering and API integration.
5. Experiment with Framer Motion to add engaging animations to your UI.

Remember to refer to the official documentation for [Remix](https://remix.run/docs/en/main), [Vite](https://vitejs.dev/guide/), and [Tailwind CSS](https://tailwindcss.com/docs) for more advanced usage and best practices.

---

<br>
<div style="display: flex; justify-content: center; width: 100%;"> <div style="text-align: center;"> <img src=" https://mhejreuxaxxodkdlf
