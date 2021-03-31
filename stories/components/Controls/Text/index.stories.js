import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Controls/Text',
  argTypes: {
    wrap: { control: 'boolean' },
    required: { control: { type: 'select', options: ['', 'optional', 'required'] } },
    type: { control: { type: 'select', options: ['text', 'email', 'tel', 'url', 'number', 'datetime-local', 'date', 'week', 'time'] } },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    size: { control: 'number' },
    placeholder: { control: 'text', defaultValue: '' },
    note: { control: 'text', defaultValue: '' }
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
  type: 'text'
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true,
  type: 'text'
};