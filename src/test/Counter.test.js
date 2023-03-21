import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import {Counter} from '../index';

describe('Counter Component', () => {
  it('should render with initial value 0', () => {
    // const { getByTestId } =
     render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue.textContent).toBe('0');
  });

  it('should increment counter when clicking increment button', () => {
    // const { getByTestId } = 
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementBtn);

    expect(counterValue.textContent).toBe('1');
  });

  it('should decrement counter when clicking decrement button', () => {
    // const { getByTestId } = 
    render(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementBtn);

    expect(counterValue.textContent).toBe('-1');
  });
});