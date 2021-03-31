import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Field',
  argTypes: {
    value: { control: 'text', defaultValue:"入力値"},
    text: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
};