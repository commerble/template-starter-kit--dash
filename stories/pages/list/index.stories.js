import components from '../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/List',
  argTypes: {
    empty: { control: 'boolean' },
    last: { control: 'boolean' },
  },
}

export const Default = {
  name: '/list - any items',
  render(args) {
    return render(args, null, components);
  },
}

export const LastPage = {
  name: '/list - last page',
  render(args) {
    return render(args, null, components);
  },
  args: {
    last: true
  }
}

export const Empty = {
  name: '/list - empty',
  render(args) {
    return render(args, null, components);
  },
  args: {
    empty: true
  }
}