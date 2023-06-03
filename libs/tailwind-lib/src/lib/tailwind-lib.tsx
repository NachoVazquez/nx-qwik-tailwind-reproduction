import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './tailwind-lib.css?inline';

export const TailwindLib = component$(() => {
  useStylesScoped$(styles);

  return <>TailwindLib works!</>;
});
