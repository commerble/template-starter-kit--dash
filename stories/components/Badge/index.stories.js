import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Badge',
  argTypes: {
    removal: { control: 'boolean' },
    icon: { 
      control: { type: 'select', options: ['', 'font', 'img'] },
    },
    img: { control: 'text', defaultValue: 'https://via.placeholder.com/32x32?text=icon'},
    notfound: { control: 'boolean'},
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({})
Default.args = {
}

export const FontIcon = Template.bind({})
FontIcon.args = {
  icon:'font'
}