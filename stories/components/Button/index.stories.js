import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    color: {
      control: { type: 'select', options: ['', 'primary', 'action', 'danger'] },
    },
    style: {
      control: { type: 'select', options: ['', 'ghost', 'text'] },
    },
    size: {
      control: { type: 'select', options: ['', 'small', 'large'] },
    },
    next: { control: 'boolean' },
    prev: { control: 'boolean' },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
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