import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Controls/Radio',
  argTypes: {
    wrap: { control: 'boolean' },
    required: { control: { type: 'select', options: ['', 'optional', 'required'] } },
    disabled: { control: 'boolean' },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true
};