
import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/External',
  argTypes: {
  },
}

export const Default = {
  name: '/purchase/n/external/{orderId}',
  render(args) {
    return layout({
        title: 'お支払いのご案内',
        body: render(args, null, components),
      }, null, components);
  },
  args: {
    external: true,
  }
}