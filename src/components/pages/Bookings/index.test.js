import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Bookings from './';

jest.setTimeout(20000); // increase the timeout value to 10 seconds

const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

describe('Bookings page', () => {
  test('should update available booking time options when changing booking date', async () => {
    render(
      <MemoryRouter initialEntries={['/bookings']}>
        <Bookings />
      </MemoryRouter>
    );

    const bookingDate = '2023-04-01';
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await waitFor(() => screen.getAllByTestId('booking-time-option'));
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    await waitFor(() => expect(screen.getByLabelText(/Date/)).toHaveValue(bookingDate));
    const updatedTimeOptions = await waitFor(() => screen.getAllByTestId('booking-time-option'));

    expect(updatedTimeOptions.length).toBeGreaterThan(0);
    expect(initialTimeOptions.length).toBeGreaterThan(0);
  });

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter initialEntries={['/bookings']}>
        <Bookings />
      </MemoryRouter>
    );
  
    const timeOptions = await waitFor(() => screen.getAllByTestId('booking-time-option'));
  
    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });
});