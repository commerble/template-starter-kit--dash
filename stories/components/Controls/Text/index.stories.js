import render from './index.js'

export default {
  title: 'Components/Controls/Text',
  argTypes: {
    wrap: { control: 'boolean' },
    required: { control: { type: 'select' }, options: ['', 'optional', 'required'] },
    type: { control: { type: 'select' }, options: ['text', 'email', 'tel', 'url', 'number', 'datetime-local', 'date', 'week', 'time'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    size: { control: 'number' },
    placeholder: { control: 'text', defaultValue: '' },
    note: { control: 'text', defaultValue: '' }
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};

export const Default = Template.bind({});
Default.args = {
  type: 'text'
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true,
  type: 'text'
};