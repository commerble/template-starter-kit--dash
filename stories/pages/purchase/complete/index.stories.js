
import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/Complete',
  argTypes: {
  },
}

export const Default = {
  name: '/purchase/n/complete/{orderId}',
  render(args) {
    return layout({
        title: '注文完了',
        body: render(args, null, components),
      }, null, components);
  },
  args: {
    external: true,
  }
}