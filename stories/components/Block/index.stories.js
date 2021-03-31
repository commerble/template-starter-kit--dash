import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Block',
  argTypes: {
    direction: { 
      control: { type: 'select', options: ['vertical', 'horizontal'] },
    },
    end: { 
      control: { type: 'select', options: ['', 'left', 'right'] },
    },
    wrap: { type: 'boolean' },
    full1: { type: 'boolean', name: 'full for Button1' },
    full2: { type: 'boolean', name: 'full for Button2' },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical'
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal'
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true,
};