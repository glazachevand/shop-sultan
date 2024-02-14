import { render, screen } from '@testing-library/react';

import { CheckboxList } from './CheckboxList';

describe('CheckboxList.test', () => {
  const change = jest.fn();

  test('Test checkboxList', () => {
    const manufShow: [string, number][] = [["Tresemme", 3], ["Synergetic", 2], ["Consly", 4], ["iDento", 1]]
    render(<CheckboxList
      manufShow={manufShow}
      checkedManuf={["Synergetic"]}
      change={change} />
    );
    expect(screen.getByTestId('checkboxList')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')[0]).toHaveClass('input');
    expect(screen.getByDisplayValue(/Synergetic/)).toBeChecked();
  });
});