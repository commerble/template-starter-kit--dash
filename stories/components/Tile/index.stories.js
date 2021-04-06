import copyCodeBlock from '@pickra/copy-code-block'
import {renderProduct,renderArticle} from './index.js'

export default {
  title: 'Components/Tile',
  argTypes: {
    columns : { control: { type: 'select', options: [2,3,4,5]}, defaultValue: 8},
    items: { control: 'number', defaultValue: 6},
  },
}

const Template = render => ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Product = Template(renderProduct).bind({});
Product.args = {
  columns: 4,
  items: 8
};

export const Article = Template(renderArticle).bind({});
Article.args = {
  columns: 3,
  items: 6
};
