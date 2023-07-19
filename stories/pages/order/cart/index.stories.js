import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Order/Cart',
  argTypes: {
    items: { control: 'number' },
    error: { control: 'boolean' },
    campaign: { control: 'boolean' },
  }
}

export const Default = {
    name: '/order/cart - any items',
    render(args) {
      return layout({
        title: 'カート',
        body: render(args, null, components)
      }, null, components);
    },
    args: {
      items: 2,
    }
}

export const HasError = {
  name: '/order/cart - error',
  render(args) {
    return layout({
      title: 'カート',
      body: render(args, null, components)
    }, null, components);
  },
  args: {
    items: 2,
    error: true,
  }
}

export const Campaign = {
  name: '/order/cart - campaign',
  render(args) {
    return layout({
      title: 'カート',
      body: render(args, null, components)
    }, null, components);
  },
  args: {
    items: 2,
    campaign: true, 
  }
}

export const Empty = {
  name: '/order/cart - empty',
  render(args) {
    return layout({
      title: 'カート',
      body: render(args, null, components)
    }, null, components);
  },
  args: {
    items: 0,
  }
}