import copyCodeBlock from '@pickra/copy-code-block'
import {render} from './index.js'

export default {
  title: 'Components/Price',
  argTypes: {
    price: { type: 'number' },
    yenMark: { type: 'boolean' },
    tax: { control: { type: 'select', options: ['', 'include', 'notax', 'exclude'] } },
    unit: { control: { type: 'select', options: ['yen', 'point'] } },
    strong: { type: 'boolean' },
    attention: { type: 'boolean' },
    large: { type: 'boolean' },
    del: { type: 'boolean' },
  },
}

const Template = ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};


export const SimplePrice = Template.bind({});
SimplePrice.args = {
  price: 1000,
  yenMark: true,
};
export const LinePrice = Template.bind({});
LinePrice.args = {
  price: 1000,
  tax: 'include',
  unit: 'yen'
};
export const StrongPrice = Template.bind({});
StrongPrice.args = {
  price: 1000,
  tax: 'include',
  unit: 'yen',
  strong: true
};
export const AttentionPrice = Template.bind({});
AttentionPrice.args = {
  price: 1000,
  tax: 'include',
  unit: 'yen',
  attention: true
};
export const SalePrice = Template.bind({});
SalePrice.args = {
  price: 1000,
  tax: 'include',
  unit: 'yen',
  strong: true,
  attention: true
};
export const Point = Template.bind({});
Point.args = {
  price: 1000,
  unit: 'point'
};
