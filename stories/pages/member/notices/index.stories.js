import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderList from './list.fn.ejs';
import renderItem from './item.fn.ejs';

export default {
    title: 'Pages/Member/Notices',
    argTypes: {
        serverError: { control: 'boolean' }
    },
}

export const Index = {
    name: '/member/notices',
    render(args) {
        return layout({
            title: '次回入荷予約',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Last = {
    name: '/member/notices - last',
    render(args) {
        return layout({
            title: '次回入荷予約',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        last: true
    }
}

export const Empty = {
    name: '/member/notices - empty',
    render(args) {
        return layout({
            title: '次回入荷予約',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        empty: true
    }
}

export const Complete = {
    name: '/member/notices - complete',
    render(args) {
        return layout({
            title: '次回入荷予約',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        complete: true
    }
}

export const Item = {
    name: '/member/notices/{requestid}',
    render(args) {
        return layout({
            title: '次回入荷予約 - キャンセル',
            body: renderItem(args, null, components),
        }, null, components);
    },
    args: {
        empty: true
    }
}