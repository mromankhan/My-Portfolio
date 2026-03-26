# Install Next.js

 Install Next.js with Create Next App

Create a new project
npx create-next-app@latest
On installation, you'll see the following prompts:
 
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
 
Copy
Start the app
cd my-app
npm run dev











# Install Tailwind CSS

Install Tailwind CSS with Next.js (v3 and v4)

Tailwind CSS v4 Installation
Create your project
npx create-next-app@latest my-project --typescript --eslint
cd my-project
Install Tailwind CSS
npm install tailwindcss @tailwindcss/postcss @tailwindcss/cli
Create your CSS file
Create a new CSS file (e.g., app/globals.css) and add the Tailwind import:

app/globals.css
@import "tailwindcss";
 
@theme inline {
  /* Configure your theme variables here */
  --font-display: "Inter", "sans-serif";
  --color-primary-500: oklch(0.84 0.18 117.33);
  --spacing: 0.25rem;
}
Copy
Configure PostCSS
Update your PostCSS configuration:

postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

Copy
Select Language
Start your build process
npm run dev
Start using Tailwind
app/page.tsx
export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

Copy
Select Language
Tailwind CSS v3 Installation (Legacy)
Create your project
npx create-next-app@latest my-project --typescript --eslint
cd my-project
Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure your template paths
tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Copy
Select Language
Add the Tailwind directives to your CSS
globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
Copy
Start your build process
npm run dev
Start using Tailwind
index.tsx
export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

Copy
Select Language
Key Differences in v4
CSS-First Configuration: Theme configuration is now done in CSS using the @theme inline directive instead of tailwind.config.js
New Import Syntax: Use @import "tailwindcss" instead of the three @tailwind directives
Package Changes:
PostCSS plugin is now @tailwindcss/postcss
CLI is now @tailwindcss/cli
Native CSS Cascade Layers: Uses real CSS @layer instead of Tailwind's custom implementation
CSS Variables: All design tokens are available as CSS variables (e.g., --color-blue-500, --font-sans)
For more advanced configuration options in v4, you can:

/* Custom utilities */
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}
 
/* Custom variants */
@variant dark (&:where(.dark, .dark *));
 
/* Add plugins */
@plugin "@tailwindcss/typography";







# Add Utilities

Commonly used utilities for using Aceternity UI

Install dependencies
npm i motion clsx tailwind-merge
Copy
Add util file
lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

Copy
Select Language
Next.js 15 and React 19 Framer Motion Fix
if you're using Next.js 15 and React 19, you'll need to the following changes in order to use framer motion (which is now motion), since framer motion is not compatible with React 19 yet.

 
 "dependencies": {
    "framer-motion": "^12.0.0-alpha.1",
    "next": "15.0.3",
    "react": "19.0.0-rc-66855b96-20241106",
    "react-dom": "19.0.0-rc-66855b96-20241106",
    "tailwind-merge": "^2.5.5"
  },
  "overrides": {
    "framer-motion": {
      "react": "19.0.0-rc-66855b96-20241106",
      "react-dom": "19.0.0-rc-66855b96-20241106"
    }
  },
 
Copy
if you're using motion instead of framer-motion, you can make the following changes:

 
 "dependencies": {
    "motion": "^12.0.0-alpha.1",
    "next": "15.0.3",
    "react": "19.0.0-rc-66855b96-20241106",
    "react-dom": "19.0.0-rc-66855b96-20241106",
    "tailwind-merge": "^2.5.5"
  },
  "overrides": {
    "motion": {
      "react": "19.0.0-rc-66855b96-20241106",
      "react-dom": "19.0.0-rc-66855b96-20241106"
    }
  },
 



 # CLI

 Installing Aceternity UI with the Shadcn CLI

Initialization
Use the init command to initialize configuration and dependencies for a new project.

The init command installs dependencies, adds the cn util, configures tailwind.config.js, and CSS variables for the project.

npm
pnpm
yarn
bun
bash npx shadcn@latest init
You will be asked a few questions to configure components.json:

Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
Copy
Options
Usage: shadcn init [options] [components...]
 
initialize your project and install dependencies
 
Arguments:
  components         the components to add or a url to the component.
 
Options:
  -d, --defaults    use default values i.e new-york, zinc and css variables. (default: false)
  -f, --force       force overwrite of existing components.json. (default: false)
  -y, --yes         skip confirmation prompt. (default: false)
  -c, --cwd <cwd>   the working directory. defaults to the current directory.
  -h, --help       display help for command
Copy
add
Use the add command to add components and dependencies to your project.

npm
pnpm
yarn
bun
bash npx shadcn@latest add [component]

Options
Usage: shadcn add [options] [components...]
 
add a component to your project
 
Arguments:
  components         the components to add or a url to the component.
 
Options:
  -y, --yes          skip confirmation prompt. (default: false)
  -o, --overwrite    overwrite existing files. (default: false)
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -p, --path <path>  the path to add the component to.
  -h, --help         display help for command
Copy
Monorepo
In a monorepo, you can specify the path to your workspace with the -c or --cwd option.

npm
pnpm
yarn
bun
bash npx shadcn@latest init -c ./apps/www

or

npm
pnpm
yarn
bun
bash npx shadcn@latest add alert-dialog -c ./apps/www

Installation through CLI
You can install Aceternity UI components through the CLI. Use the following command structure:

npm
pnpm
yarn
bun
bash npx shadcn@latest add https://ui.aceternity.com/registry/[component].json

Adds a new component to your project.

npm
pnpm
yarn
bun
bash npx shadcn@latest add https://ui.aceternity.com/registry/bento-grid.json

Shadcn CLI 3.0
You can now have namespaced registries with ShadCN CLI 3.0.

Edit components.json file
Edit your components.json file and add the following code:

components.json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
Copy
To install any component, use the following command:

npm
pnpm
yarn
bun
bash npx shadcn@latest add @aceternity/[component]

Example:

npm
pnpm
yarn
bun
bash npx shadcn@latest add @aceternity/3d-marquee

Search and Discovery
You can search, view, and discover components from registries before installing them.

View
View items from the registry before installing:

npm
pnpm
yarn
bun
bash npx shadcn@latest view @aceternity

Search
Search items from registries:

npm
pnpm
yarn
bun
bash npx shadcn@latest search @aceternity -q "card"

List
List all items from a registry:

npm
pnpm
yarn
bun
bash npx shadcn@latest list @aceternity

Preview components before installing them. Search across multiple registries. See the code and all dependencies upfront.

MCP Server
The shadcn MCP Server allows AI assistants to interact with items from registries. You can browse available components, search for specific ones, and install them directly into your project using natural language.

For example, you can ask an AI assistant to "Build a landing page using components from the Aceternity registry" or "Find me a login form from the Aceternity registry".

Add the Aceternity registry to your project's components.json file.

components.json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
Copy
Add the MCP server to your project:

npm
pnpm
yarn
bun
bash npx shadcn@latest mcp init
Registries are configured in your project's components.json file.

Configure for AI Assistants
Cursor
Claude Desktop
VS Code
bash npx shadcn@latest mcp init --client cursor