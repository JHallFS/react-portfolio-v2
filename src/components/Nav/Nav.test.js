import { unmountComponentAtNode, render } from "react-dom";
import { act } from 'react-dom/test-utils';

import Nav from './index.js';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with Test', () => {
	act(() => {
		render(<Nav />, container);
	});
	expect(container.textContent).toBe('Test');
});
