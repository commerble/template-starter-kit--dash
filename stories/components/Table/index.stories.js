import render from './table.fn.ejs'

export default {
  title: 'Components/Table',
  argTypes: {
    th: { control: 'boolean', name: 'XY Header' }
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render(args);
};

export const Default = Template.bind({});
Default.args = {
};