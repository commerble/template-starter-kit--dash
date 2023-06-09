import render from './button.fn.ejs'

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    color: {
      options: ['', 'primary', 'action', 'danger'],
      control: { type: 'select' },
    },
    style: {
      options: ['', 'ghost', 'text'],
      control: { type: 'select' },
    },
    size: {
      options: ['', 'small', 'large'],
      control: { type: 'select' },
    },
    next: { control: 'boolean' },
    prev: { control: 'boolean' },
  },
  tags: ['autodocs'],
}

const Template = ({...args }) => {
  return render(args);
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  color: 'primary',
};

export const Action = Template.bind({});
Action.args = {
  label: 'Button',
  color: 'action',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  color: 'danger',
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Button',
  color: 'primary',
  style: 'ghost'
};

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  color: 'primary',
  style: 'text'
};

export const Next = Template.bind({});
Next.args = {
  label: 'Next',
  next: true
};

export const Prev = Template.bind({});
Prev.args = {
  label: 'Prev',
  prev: true
};