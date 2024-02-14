import { ChangeEvent, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { CheckboxList } from "./CheckboxList";

const meta: Meta<typeof CheckboxList> = {
  title: "UI/CheckboxList",
  component: CheckboxList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CheckboxList>;

export const Primary: Story = {
  render: () => {
    const manuf: [string, number][] = [["Tresemme", 3], ["Synergetic", 2], ["Consly", 4], ["iDento", 1]]
    const filteredManuf = ["Tresemme"];

    const [checkedManuf, setCheckedManuf] = useState<string[]>(filteredManuf); const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const find = checkedManuf.find(item => item === e.target.value);
      if (find) {
        setCheckedManuf(state => state.filter(item => item !== find))
      } else {
        setCheckedManuf(state => { return [...state, e.target.value] })
      }
    };
    return (<CheckboxList manufShow={manuf} checkedManuf={checkedManuf} change={onChangeHandler} />)
  }
};
