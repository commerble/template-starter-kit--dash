import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Image',
  argTypes: {
    src: { control: 'text' },
    ratio: { control: { type: 'select', options: ['', 'square', 'golden', '4x3'] } },
    notfound: { control: 'boolean' },
    wrap: { control: 'boolean' },
    wrapWidth: { control: 'number', defaultValue: 500 },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/400x200?text=Image",
  wrap: true,
};

export const Square = Template.bind({});
Square.args = {
  src: "https://via.placeholder.com/270x270?text=Square",
  ratio: 'square',
  wrap: true,
};

export const Golden = Template.bind({});
Golden.args = {
  src: "https://via.placeholder.com/320x198?text=Golden",
  ratio: 'golden',
  wrap: true,
};

export const Aspect4x3 = Template.bind({});
Aspect4x3.args = {
  src: "https://via.placeholder.com/320x240?text=4x3",
  ratio: '4x3',
  wrap: true,
};