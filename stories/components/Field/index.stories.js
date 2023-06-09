import render from './field.fn.ejs'

export default {
  title: 'Components/Field',
  argTypes: {
    value: { control: 'text', defaultValue:"入力値"},
    text: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
};