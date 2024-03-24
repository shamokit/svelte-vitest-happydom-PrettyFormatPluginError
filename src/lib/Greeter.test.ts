import { render, screen, fireEvent, cleanup } from '@testing-library/svelte';
import { expect, test, describe, beforeEach } from 'vitest';
import Greeter from './Greeter.test.svelte';

beforeEach(cleanup);
describe('Greeter.svelte', async () => {
	test('Has Name', async () => {
		const { debug } = render(Greeter, { name: 'Svelte' });

		debug();
		const button = screen.getByRole('button', { name: 'Svelte' });
		expect(button).toBeInTheDocument();

		const a = screen.getByRole('link', { name: 'Svelte' });
		expect(a).toBeInTheDocument();

		await fireEvent.click(button);

		const changedButton = screen.getByRole('button', { name: 'Renamed' });
		expect(changedButton).toBeInTheDocument();

		const changedA = screen.getByRole('link', { name: 'Renamed' });
		expect(changedA).toBeInTheDocument();
	});
	test('No Name', async () => {
		render(Greeter, { name: '' });

		const button = screen.getByRole('button', { name: 'No Name' });
		expect(button).toBeInTheDocument();

		const a = screen.getByRole('link', { name: 'No Name' });
		expect(a).toBeInTheDocument();

		await fireEvent.click(button);

		const changedButton = screen.getByRole('button', { name: 'Renamed' });
		expect(changedButton).toBeInTheDocument();

		const changedA = screen.getByRole('link', { name: 'Renamed' });
		expect(changedA).toBeInTheDocument();
	});
});
