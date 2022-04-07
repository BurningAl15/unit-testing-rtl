import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe("App Tests",()=>{
  test('renders learn react link', () => {
    const { getByTestId } = render(<App />);
    const image = getByTestId('image');
    expect(image).toBeInTheDocument();
  });
})
