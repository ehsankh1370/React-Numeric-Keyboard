import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { NumericKeyboard } from '../src/NumericKeyboard';

describe('testing UI of the keyboard', () => {
  it('should render 1 to 9 numbers if keyboard is open', () => {
    const { getByText, queryByText } = render(<NumericKeyboard isOpen />);
    expect(getByText('5')).toBeDefined();

    expect(queryByText('10')).not.toBeInTheDocument();
  });
  it('should not render viewable keyboard item if isOpen props is false', () => {
    const { queryByText } = render(<NumericKeyboard isOpen={false} />);
    expect(queryByText('5')).toBeFalsy();
  });
  it('should accept custom class when provided', () => {
    const { container } = render(<NumericKeyboard isOpen className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
  it('should render custom backspace icon if provided', () => {
    const { queryByText } = render(
      <NumericKeyboard isOpen backSpaceIcon="my-custom-back" />
    );
    expect(queryByText('my-custom-back')).toBeInTheDocument();
  });
  it('should render custom left icon if provided', () => {
    const { queryByText } = render(
      <NumericKeyboard isOpen leftIcon="my-left-icon" />
    );
    expect(queryByText('my-left-icon')).toBeInTheDocument();
  });
});

describe('testing functionality of the keyboard', () => {
  it('should change value by clicking on the keyboard items', () => {
    const { getByText, getByAltText } = render(
      <NumericKeyboard isOpen onChange={onChange} />
    );
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByAltText('Backspace'));
    fireEvent.click(getByText('9'));
    function onChange({ value }: { value: string }) {
      waitFor(() => {
        expect(value).toBe('129');
      });
    }
  });
  it('keyboard should not be clickable if keyboard is disabled', () => {
    let values;
    const { getByText, rerender } = render(
      <NumericKeyboard isOpen onChange={onChange} isKeyboardDisabled={false} />
    );
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('4'));
    rerender(
      <NumericKeyboard isOpen onChange={onChange} isKeyboardDisabled={true} />
    );
    fireEvent.click(getByText('9'));
    function onChange({ value }: { value: string }) {
      values = value;
    }
    expect(values).toBe('54');
    expect(values).not.toBe('549');
  });
});

describe('snapshot test', () => {
  it('to match snapshot', () => {
    const { container } = render(<NumericKeyboard isOpen />);
    expect(container).toMatchSnapshot();
  });
});
