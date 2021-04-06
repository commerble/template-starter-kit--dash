import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Pages/Search',
  argTypes: {
    empty: { control: 'boolean' },
    facetGroupActive: { control: 'boolean', defaultValue: true },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
};