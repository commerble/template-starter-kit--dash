import copyCodeBlock from '@pickra/copy-code-block'
import {renderIcon, renderProductIcon} from './index.js'

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: {
      control: { type: 'select', options: ['cart', 'user', 'heart'] },
    },
    url: { control: 'text', name: 'url - Product専用' },
    small: { control: 'boolean', name: 'small - Product専用' },
  },
}

const Template = ({...args }) => {
  const html = renderIcon(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Cart = Template.bind({});
Cart.args = {
  icon: 'cart'
};

export const User = Template.bind({});
User.args = {
  icon: 'user'
};

export const Heart = Template.bind({});
Heart.args = {
  icon: 'heart'
};


const TemplateProductIcon = ({...args }) => {
  const html = renderProductIcon(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Product = TemplateProductIcon.bind({});
Product.args = {
  url: 'https://httpstat.us/404'
}