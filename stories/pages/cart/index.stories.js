import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Pages/Cart',
  argTypes: {
    items: { control: 'number', defaultValue: 2 },
    error: { control: 'boolean' },
    campaign: { control: 'boolean', defaultValue: true },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
};