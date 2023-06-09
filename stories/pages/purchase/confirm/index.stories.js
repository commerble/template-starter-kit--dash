
import components from '../../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/Confirm',
  argTypes: {
    external: { control: 'boolean' },
  },
}

export const Default = {
  name: '/purchase/n/payment',
  render(args) {
    return render(args, null, components);
  },
  args: {
    external: true,
  }
}

export const ExternalPayment = {
  name: '/purchase/n/payment - external payment',
  render(args) {
    return render(args, null, components);
  },
  args: {
    external: false,
  }
}
