import components from '../../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Order/History',
  argTypes: {
    message: { control: 'boolean' },
    empty: { control: 'boolean' },
    lastPage: { control: 'boolean' },
  }
}

export const Default = {
    name: '/order/history - any items',
    render(args) {
      return render(args, null, components);
    },
    args: {
    }
}

export const LastPage = {
  name: '/order/history - last page',
  render(args) {
    return render(args, null, components);
  },
  args: {
    lastPage: true
  }
}

export const HasMessage = {
  name: '/order/cart - has messages',
  description: '受注変更が完了した際時',
  render(args) {
    return render(args, null, components);
  },
  args: {
    message: true,
  }
}

export const Empty = {
  name: '/order/cart - empty',
  render(args) {
    return render(args, null, components);
  },
  args: {
    empty: true,
  }
}