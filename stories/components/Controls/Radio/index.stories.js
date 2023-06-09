import render from './index.js'

export default {
  title: 'Components/Controls/Radio',
  argTypes: {
    wrap: { control: 'boolean' },
    required: { control: { type: 'select' }, options: ['', 'optional', 'required'] },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true
};