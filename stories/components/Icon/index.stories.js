import render from './producticon.fn.ejs'

export default {
  title: 'Components/Icon',
  argTypes: {
    url: { control: 'text', name: 'url - Product専用' },
    small: { control: 'boolean', name: 'small - Product専用' },
  },
  // tags: ['autodocs']
}

const TemplateProductIcon = ({...args }) => {
  return render(args);
};

export const ProductIcon = TemplateProductIcon.bind({});
ProductIcon.args = {
  url: 'https://httpstat.us/404'
}