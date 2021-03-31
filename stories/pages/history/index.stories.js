import copyCodeBlock from '@pickra/copy-code-block'
import html from './index.html'

export default {
  title: 'Pages/History',
  argTypes: {
  },
}

const Template = ({...args }) => {
  return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
};