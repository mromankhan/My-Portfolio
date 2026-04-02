MCP Server
Model Context Protocol (MCP) is an open standard that enables AI assistants to securely connect to external data sources and tools.

React Bits encourages the use of the shadcn MCP server to browse, search, and install components using natural language.

Quick Start
Registries are configured in your project's components.json file, where you should first add the @react-bits registry:


{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
Then, from the options below, select your client & set up the shadcn MCP server.

Claude Code Logo
Claude Code
Cursor Logo
Cursor
VS Code Logo
VS Code
Run this in your project:


npx shadcn@latest mcp init --client claude
Restart Claude Code and try prompts like:

Show me all the available backgrounds from the React Bits registry
Add the Dither background from React Bits to the page, make it purple
Add a new section which fades in on scroll using FadeContent from React Bits
Tip: Use /mcp in Claude Code to debug the MCP server.

Learn more
To learn more about using the shadcn MCP server, including manual setup for different clients, please visit the official documentation:

ui.shadcn.com/docs/mcp


















Installation
Using components is very straightforward, anyone can do it.

Pick The Method
You can keep it simple and copy code directly from the documentation, or you can use CLI commands to install components into your project.

Click the cards below to change your preferred method.

Manual
CLI
Steps
Use a one-time command to pull any component directly into your project.

React Bits supports two CLI installation methods: shadcn and jsrepo. Pick whichever you prefer – they both fetch the same component source.

Installation
Below are example commands for the SplitText component. Replace placeholders to fit your stack.

shadcn

npx shadcn@latest add https://reactbits.dev/r/<Component>-<LANG>-<STYLE>
<LANGUAGE> + <STYLE> combinations:

JS-CSS - JavaScript + Plain CSS
JS-TW - JavaScript + Tailwind
TS-CSS - TypeScript + Plain CSS
TS-TW - TypeScript + Tailwind
jsrepo

npx jsrepo@latest add https://reactbits.dev/r/<Component>-<LANG>-<STYLE>
<VARIANT> options:

default - JavaScript + Plain CSS
tailwind - JavaScript + Tailwind
ts/default - TypeScript + Plain CSS
ts/tailwind - TypeScript + Tailwind
Tip: You can run these with other package managers (pnpm, yarn, bun) - just swap the prefix (e.g. pnpm dlx or yarn instead of npx).

That's all!
From here on, it's all about how you integrate the component into your project. The code is yours to play around with - modify styling, functionalities, anything goes!