import render from './carousel.fn.ejs'

export default {
  title: 'Components/Carousel',
  argTypes: {
    notfound: { control: 'boolean' },
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
    return render({...args});
};

export const Default = Template.bind({});
Default.args = {
};