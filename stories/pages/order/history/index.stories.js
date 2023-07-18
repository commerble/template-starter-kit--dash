import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderList from './list.fn.ejs'
import renderItem from './item.fn.ejs'
import renderCancel from './item.cancel.fn.ejs'
import renderShipping from './item.shipping.fn.ejs'
import renderPayment from './item.payment.fn.ejs'
import renderCustomer from './item.customer.fn.ejs'
import renderDelivery from './item.delivery.fn.ejs'

export default {
  title: 'Pages/Order/History',
  argTypes: {
  }
}

export const Default = {
    name: '/order/history - any items',
    render(args) {
      return layout({
        title: '購入履歴',
        body: renderList(args, null, components),
      }, null, components);
    },
    args: {
    }
}

export const LastPage = {
  name: '/order/history - last page',
  render(args) {
    return layout({
      title: '購入履歴',
      body: renderList(args, null, components),
    }, null, components);
  },
  args: {
    lastPage: true
  }
}

export const Complete = {
  name: '/order/history - complete',
  description: '受注を変更しました',
  render(args) {
    return layout({
      title: '購入履歴',
      body: renderList(args, null, components),
    }, null, components);
  },
  args: {
    message: true,
  }
}

export const Empty = {
  name: '/order/history - empty',
  render(args) {
    return layout({
      title: '購入履歴',
      body: renderList(args, null, components),
    }, null, components);
  },
  args: {
    empty: true,
  }
}

export const Item = {
  name: '/order/history/{orderId}',
  render(args) {
    return layout({
      title: '購入履歴',
      body: renderItem(args, null, components),
    }, null, components);
  },
  args: {
    campaign: false,
  }
}

export const Changed = {
  name: '/order/history/{orderId} - has changes',
  render(args) {
    return layout({
      title: '購入履歴',
      body: renderItem(args, null, components),
    }, null, components);
  },
  args: {
    campaign: false,
    hasChanges: true,
  }
}

export const Customer = {
  name: '/order/history/{orderId} - customer',
  render(args) {
    return layout({
      title: '注文編集 - お客様情報',
      body: renderCustomer(args, null, components),
    }, null, components);
  },
  args: {
  }
}

export const Shipping = {
  name: '/order/historyshipping/{orderId}',
  render(args) {
    return layout({
      title: '注文編集 - お届け先',
      body: renderShipping(args, null, components),
    }, null, components);
  },
  args: {
    isGuest: false,
    zipSearched: false,
    zipSelected: false,
  }
}

export const Delivery = {
  name: '/order/history/{orderId} - delivery',
  render(args) {
    return layout({
      title: '注文編集 - お届け日時',
      body: renderDelivery(args, null, components),
    }, null, components);
  },
  args: {
    canSpecifyDeliveryDate: true,
    canSpecifyDeliveryTime: true,
  }
}

export const Payment = {
  name: '/order/history/{orderId} - payment',
  render(args) {
    return layout({
      title: '注文編集 - お支払い方法',
      body: renderPayment(args, null, components),
    }, null, components);
  },
  args: {
  }
}

export const Cancel = {
  name: '/order/historycancel/{orderId}',
  render(args) {
    return layout({
      title: '注文キャンセル',
      body: renderCancel(args, null, components),
    }, null, components);
  },
  args: {
    canCancel: true,
    isGuest: false,
  }
}