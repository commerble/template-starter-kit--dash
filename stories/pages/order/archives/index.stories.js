import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderList from './list.fn.ejs'

export default {
    title: 'Pages/Order/Archives',
    argTypes: {
    }
}

export const Default = {
    name: '/order/archives - any items',
    render(args) {
        return layout({
            title: '注文履歴',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const LastPage = {
    name: '/order/archives - last page',
    render(args) {
        return layout({
            title: '注文履歴',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        lastPage: true
    }
}

export const Empty = {
    name: '/order/archives - empty',
    render(args) {
        return layout({
            title: '注文履歴',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        empty: true,
    }
}