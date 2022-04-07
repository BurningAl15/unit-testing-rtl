import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './index';

describe("Counter Tests", () => {
  it('elements show in the component', () => {
    const { getByTestId } = render(<Counter />);
    const plus = getByTestId('plus');
    const count = getByTestId('count');
    const minus = getByTestId('minus');
    const reset = getByTestId('reset');

    expect(plus).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(minus).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
  });

  it('pressing plus grows the value of count', () => {
    const { getByTestId } = render(<Counter />);
    const plus = getByTestId('plus');
    const count = getByTestId('count');
    const minus = getByTestId('minus');
    const reset = getByTestId('reset');

    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    expect(count.textContent).toEqual('3');
  });

  it('pressing minus grows the value of count', () => {
    const { getByTestId } = render(<Counter />);
    const plus = getByTestId('plus');
    const count = getByTestId('count');
    const minus = getByTestId('minus');
    const reset = getByTestId('reset');

    fireEvent.click(minus);
    fireEvent.click(minus);
    fireEvent.click(minus);
    expect(count.textContent).toEqual('-3');
  });

  it('pressing minus grows the value of count', () => {
    const { getByTestId } = render(<Counter />);
    const plus = getByTestId('plus');
    const count = getByTestId('count');
    const minus = getByTestId('minus');
    const reset = getByTestId('reset');

    for (let i = 0; i < 50; i++) {
      fireEvent.click(plus);
    }
    fireEvent.click(reset)
    expect(count.textContent).toEqual('0');
  });
})
