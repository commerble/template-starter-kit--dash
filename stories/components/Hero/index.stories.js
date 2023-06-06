import {render} from './index.js'

export default {
  title: 'Components/Hero',
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    lead: { control: 'text'  },
    action: { control: 'text' },
    notfound: { control: 'boolean' },
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
  src: 'https://commerble.blob.core.windows.net/corporate/images/AdobeStock_244795496.webp',
  title: 'タイトルタイトルタイトル',
  lead: 'リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文',
  action: 'アクション' 
};