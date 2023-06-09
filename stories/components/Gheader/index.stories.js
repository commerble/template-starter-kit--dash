import render from './gheader.fn.ejs'

export default {
  title: 'Components/GlobalHeader',
  argTypes: {
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
};