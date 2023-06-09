
import components from '../../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/Shipping',
  argTypes: {
    customer: { control: { type: 'select' }, options:['guest','member(no address)', 'member'] },
    delivery: { control: 'boolean' },
  },
}

export const Default = {
  name: '/purchase/n/shipping - guest',
  render(args) {
    return render(args, null, components);
  },
  args: {
    customer: 'guest',
    delivery: false,
  }
}

export const OtherDest = {
  name: '/purchase/n/shipping - other destination',
  render(args) {
    return render(args, null, components);
  },
  args: {
    customer: 'guest',
    delivery: true,
  }
}

export const MemberFirst = {
  name: '/purchase/n/shipping - member first buy',
  render(args) {
    return render(args, null, components);
  },
  args: {
    customer: 'member(no address)',
    delivery: false,
  }
}

export const Member = {
  name: '/purchase/n/shipping - member',
  render(args) {
    return render(args, null, components);
  },
  args: {
    customer: 'member',
    delivery: false,
  }
}