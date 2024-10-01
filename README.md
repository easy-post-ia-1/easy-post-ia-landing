# Easy Post IA Landing

This project is based on the Astro framework using the `basics` template and serves as the landing page for Easy Post IA. You can find the project on GitHub at [Easy Post IA Landing](https://github.com/easy-post-ia-1/easy-post-ia-landing/organization).

## 🚀 Project Structure

Inside your Astro project, you'll find the following files and directories:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

- **`src/components/`**: Place Astro/React/Vue/Svelte/Preact components here.
- **`src/layouts/`**: Contains layout components for reusability across pages.
- **`src/pages/`**: `.astro` or `.md` files in this directory are mapped to routes.
- **`public/`**: Store static assets like images or fonts here.

## 🧞 Commands

All commands are run from the root of the project via terminal:

| Command                   | Action                                    |
| :------------------------ | :---------------------------------------- |
| `npm install`             | Installs dependencies                     |
| `npm run dev`             | Starts the dev server at `localhost:4321` |
| `npm run build`           | Builds the site to the `./dist/` folder   |
| `npm run preview`         | Previews your build locally               |
| `npm run astro ...`       | Run Astro CLI commands like `astro add`   |
| `npm run astro -- --help` | Get help using the Astro CLI              |

## ⚙️ Project Setup

1. Clone the project:

   ```sh
   git clone https://github.com/easy-post-ia-1/easy-post-ia-landing.git
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

## 🌐 Deployment

When ready for production, build the project using:

```sh
npm run build
```

The production files will be generated in the `./dist/` folder. Deploy the contents of this folder to a static hosting provider of your choice.

## 📚 Documentation & Support

For more details on Astro, consult the [official documentation](https://docs.astro.build) or engage with the community on the [Astro Discord server](https://astro.build/chat).
