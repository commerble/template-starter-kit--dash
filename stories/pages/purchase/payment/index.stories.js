
import components from '../../components';
import render from './index.fn.ejs'

export default {
  title: 'Pages/Purchase/Payment',
  argTypes: {
    canDeliveryDate: { control: 'boolean' },
    canDeliveryHourRange: { control: 'boolean' },
  },
}

export const Default = {
  name: '/purchase/n/payment',
  render(args) {
    return render(args, null, components);
  },
  args: {
    canDeliveryDate: true,
    canDeliveryHourRange: true,
  }
}

export const MailDelivery = {
  name: '/purchase/n/payment - mail delivery',
  render(args) {
    return render(args, null, components);
  },
  args: {
    canDeliveryDate: false,
    canDeliveryHourRange: false,
  }
}
