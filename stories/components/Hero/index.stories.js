import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Hero',
  argTypes: {
    src: { control: 'text', defaultValue: 'https://commerble.blob.core.windows.net/corporate/images/AdobeStock_244795496.webp' },
    title: { control: 'text', defaultValue: 'タイトルタイトルタイトル' },
    lead: { control: 'text', defaultValue: 'リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文' },
    action: { control: 'text', defaultValue: 'アクション' },
    notfound: { control: 'boolean' },
  },
}

const Template = ({...args }) => {
    const html = render({...args});
    return html + '<hr>' + copyCodeBlock(html)
};

export const Default = Template.bind({});
Default.args = {
};