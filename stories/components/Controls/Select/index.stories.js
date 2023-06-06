import {render} from './index.js'

export default {
  title: 'Components/Controls/Select',
  argTypes: {
    wrap: { control: 'boolean' },
    required: { control: { type: 'select' }, options: ['', 'optional', 'required'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' }
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
};

export const Date = Template.bind({});
Date.args = {
  date: true
};


export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true
};