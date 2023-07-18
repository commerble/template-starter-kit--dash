import components from '../components';
import layout from '../layout.fn.ejs';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Page',
  argTypes: {
  }
}

export const Default = {
    name: '汎用ページ',
    render(args) {
      return layout({
        title: '汎用ページ',
        body: render(args, null, components),
      }, null, components);
    },
    args: {
        hero: 'https://fakeimg.pl/1920x600/?text=Hero Image',
        relateProducts: true,
        relateArticles: true,
    }
}
