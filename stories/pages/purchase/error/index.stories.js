
import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/Error',
  argTypes: {
  },
}

export const Default = {
  name: '/purchase/n/ - error',
  render(args) {
    return layout({
        title: 'カート - エラー',
        body: render(args, null, components),
      }, null, components);
  },
  args: {
    external: true,
  }
}