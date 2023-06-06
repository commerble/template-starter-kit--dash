import {renderProduct,renderArticle} from './index.js'

export default {
  title: 'Components/Tile',
  argTypes: {
    columns : { control: { type: 'select'}, options: [2,3,4,5] },
    items: { control: 'number' },
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render(args);
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
