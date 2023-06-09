import product from './tile.product.fn.ejs';
import article from './tile.article.fn.ejs';
import price from '../Price/price.fn.ejs';

export default {
  title: 'Components/Tile',
  argTypes: {
    columns : { control: { type: 'select'}, options: [2,3,4,5] },
    items: { control: 'number' },
  },
  tags: ['autodocs']
}

function find(path, args) {
  if (path === 'price') {
      return price(args);
  }
  throw new Error('not supported');
}

const Template = (render) => {
  return ({...args}) => `<div class="content">${render(args, null, find)}</div>`
};

export const Product = Template(product).bind({});
Product.args = {
  columns: 4,
  items: 8
};

export const Article = Template(article).bind({});
Article.args = {
  columns: 3,
  items: 6
};
