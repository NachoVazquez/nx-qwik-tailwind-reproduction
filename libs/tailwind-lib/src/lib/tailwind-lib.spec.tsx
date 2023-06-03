import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { TailwindLib } from './tailwind-lib';

test(`[TailwindLib Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<TailwindLib />);
  expect(screen.innerHTML).toContain('TailwindLib works!');
});
