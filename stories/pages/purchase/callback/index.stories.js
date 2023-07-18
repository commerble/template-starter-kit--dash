
import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/Callback',
  argTypes: {
  },
}

export const Default = {
  name: '/purchase/n/callback - error',
  render(args) {
    return layout({
        title: '決済エラー',
        body: render(args, null, components),
      }, null, components);
  },
  args: {
    external: true,
  }
}