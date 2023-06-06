
import {render} from './index.js'

export default {
  title: 'Components/Badge',
  argTypes: {
    removal: { control: 'boolean' },
    icon: { 
      options: ['', 'font', 'img'],
      control: { type: 'select' },
    },
    img: { control: 'text' },
    notfound: { control: 'boolean'},
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render(args);
};

export const Default = Template.bind({})
Default.args = {
  img: 'https://via.placeholder.com/32x32?text=icon'
}

export const FontIcon = Template.bind({})
FontIcon.args = {
  icon:'font'
}