import copyCodeBlock from '@pickra/copy-code-block'
import {renderProduct,renderArticle} from './index.js'

export default {
  title: 'Components/Tile',
  argTypes: {
  },
}

const Template = render => ({...args }) => {
  const html = render(args);
  return html + '<hr>' + copyCodeBlock(html)
};

export const Product = Template(renderProduct).bind({});
Product.args = {
};

export const Article = Template(renderArticle).bind({});
Article.args = {
};
