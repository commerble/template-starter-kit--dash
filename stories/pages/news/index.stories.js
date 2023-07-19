import components from '../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/News',
  argTypes: {
    last: { control: 'boolean' },
  },
}

export const Default = {
  name: '/news - any items',
  render(args) {
    return render(args, null, components);
  },
}

export const LastPage = {
  name: '/news - last page',
  render(args) {
    return render(args, null, components);
  },
  args: {
    last: true
  }
}
