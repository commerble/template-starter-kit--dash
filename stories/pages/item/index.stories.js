import components from '../components';
import render from './index.fn.ejs';

export default {
  title: 'Pages/Item',
  argTypes: {
    color: { control: 'boolean' },
    size: { control: 'boolean' },
  },
}

export const Default = {
  name: '/item',
  render(args) {
    return render(args, null, components)
  },
  args: {
    color: false,
    size: false,
  }
}

export const Color = {
  name: '/item  - color',
  render(args) {
    return render(args, null, components)
  },
  args: {
    color: true,
    size: false,
  }
}

export const Size = {
  name: '/item  - size',
  render(args) {
    return render(args, null, components)
  },
  args: {
    color: false,
    size: true,
  }
}

export const ColorSize = {
  name: '/item  - color x size',
  render(args) {
    return render(args, null, components)
  },
  args: {
    color: true,
    size: true,
  }
}