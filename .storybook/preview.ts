import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import { setupWorker, rest } from 'msw'

//mock for /api/hello --> see home.stories.tsx
if(typeof global.process === "undefined"){
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({name: 'Erick Vargas'}))
    })
  )
  worker.start()
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
