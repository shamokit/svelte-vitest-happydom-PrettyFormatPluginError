import { render, screen, fireEvent, cleanup } from '@testing-library/svelte';
import { expect, test, describe, beforeEach } from 'vitest';
import Buttons from './Buttons.svelte';

beforeEach(cleanup);
describe('Buttons.svelte', async () => {
	test('two buttons', async () => {
		render(Buttons, {
			name: 'Svelte',
			count: 2,
		});

		const button = screen.getByRole('button', { name: 'Svelte' });
		expect(button).toBeInTheDocument();

		// PrettyFormatPluginError occurs when I write a test that intentionally fails.
		const changedButton = screen.getByRole('button', { name: 'zzzz' });
		expect(changedButton).toBeInTheDocument();
	});
});
