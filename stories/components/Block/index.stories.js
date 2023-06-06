import {render} from './index.js'

export default {
  title: 'Components/Block',
  argTypes: {
    direction: { 
      options: ['vertical', 'horizontal'],
      control: { type: 'select'},
    },
    end: { 
      options: ['', 'left', 'right'],
      control: { type: 'select' },
    },
    wrap: { type: 'boolean' },
    full1: { type: 'boolean', name: 'full for Button1' },
    full2: { type: 'boolean', name: 'full for Button2' },
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render(args);
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