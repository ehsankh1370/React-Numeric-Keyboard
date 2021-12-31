import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import NumbericKeyboard from 'components/numberic-keyboard';

describe('testing UI of the keyboard', () => {
  it('should render 1 to 9 numbers if keyboard is open', () => {
    const { getByText, queryByText } = render(<NumbericKeyboard isOpen />);
    expect(getByText('5')).toBeDefined();

    expect(queryByText('10')).not.toBeInTheDocument();
  });
  it('should not render viewable keyboard item if isOpen props is false', () => {
    const { queryByText } = render(<NumbericKeyboard isOpen={false} />);
    expect(queryByText('5')).not.toHaveValue('5');
  });
  it('should accept custom class when provided', () => {
    const { container } = render(
      <NumbericKeyboard isOpen className="custom" />,
    );
    expect(container.firstChild).toHaveClass('custom');
  });
  it('should render custom backspace icon if provided', () => {
    const { queryByText } = render(
      <NumbericKeyboard isOpen backSpaceIcon="my-custom-back" />,
    );
    expect(queryByText('my-custom-back')).toBeInTheDocument();
  });
  it('should render custom left icon if provided', () => {
    const { queryByText } = render(
      <NumbericKeyboard isOpen leftIcon="my-left-icon" />,
    );
    expect(queryByText('my-left-icon')).toBeInTheDocument();
  });
});

describe('testing functionality of the keyboard', () => {
  it('should change value by clicking on the keyboard items', () => {
    const { getByText, getByAltText } = render(
      <NumbericKeyboard isOpen onChange={onChange} />,
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
      <NumbericKeyboard
        isOpen
        onChange={onChange}
        isKeyboardDisabled={false}
      />,
    );
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('4'));
    rerender(
      <NumbericKeyboard isOpen onChange={onChange} isKeyboardDisabled={true} />,
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
    const { container } = render(<NumbericKeyboard isOpen />);
    expect(container).toMatchSnapshot();
  });
});
