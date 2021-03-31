import copyCodeBlock from '@pickra/copy-code-block'
import {render as shipping} from './shipping.js'
import {render as payment} from './payment.js'
import {render as confirm} from './confirm.js'

export default {
  title: 'Pages/Purchase',
  argTypes: {
    customer: { control: { type: 'select', options:['guest','member(no address)', 'member'] }, name: 'customer (only shipping)', defaultValue: 'guest' },
    delivery: { control: 'boolean', name: 'delivery (only shipping)' },
    deliveryDate: { control: 'boolean', name: 'delivery (only payment)', defaultValue: true },
    deliveryHourRange: { control: 'boolean', name: 'delivery (only payment)', defaultValue: true },
    external: { control: 'boolean', name: 'external (only confirm)', defaultValue: true },
  },
}

export const Shipping = ({...args}) => { 
  const html = shipping(args);
  return html + '<hr>' + copyCodeBlock(html) 
}

export const Payment = ({...args}) => { 
  const html = payment(args);
  return html + '<hr>' + copyCodeBlock(html) 
}

export const Confirm = ({...args}) => { 
  const html = confirm(args);
  return html + '<hr>' + copyCodeBlock(html) 
}