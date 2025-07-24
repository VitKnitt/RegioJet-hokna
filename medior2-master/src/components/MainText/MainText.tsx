import { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import styles from './MainText.module.css';

const markdown = `
## How to use this application

You see navigation on this page. You can use it to navigate to other pages. Other pages are [Article list](./articles/1) only. You can use it to see articles of any user.

We are using best map web application in the world. You can see it on [Mapy.cz](https://mapy.cz). You can use it to see where is user from.

This page is build with [Next.js](https://nextjs.org/), [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/). You can use it to build your own application too.
`;

const MainText = (): ReactElement => (
  <Markdown
    options={{
      overrides: {
        a: {
          component: 'span',
          props: {
            className: styles.link,
          },
        },
        h2: {
          component: 'h2',
        },
        p: {
          component: 'p',
        },
      },
    }}
  >
    {markdown}
  </Markdown>
);

export default MainText;
