import render from './messagebox.fn.ejs'

export default {
  title: 'Components/MessageBox',
  argTypes: {
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render(args);
};

export const Default = Template.bind({});
Default.args = {
};