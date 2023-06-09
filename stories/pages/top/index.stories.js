
import components from '../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Top',
  argTypes: {
  },
}

const Template = ({...args }) => {
  return render(args, null, components);
};

export const Default = Template.bind({});
Default.args = {
};