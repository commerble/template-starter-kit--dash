import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderList from './list.fn.ejs';
import renderItem from './item.fn.ejs';

export default {
    title: 'Pages/Member/Favorites',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/favorites',
    render(args) {
        return layout({
            title: 'お気に入り',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Last = {
    name: '/member/favorites - last',
    render(args) {
        return layout({
            title: 'お気に入り',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        last: true
    }
}

export const Empty = {
    name: '/member/favorites - empty',
    render(args) {
        return layout({
            title: 'お気に入り',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        empty: true
    }
}

export const Complete = {
    name: '/member/favorites - complete',
    render(args) {
        return layout({
            title: 'お気に入り',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        complete: true
    }
}

export const Item = {
    name: '/member/favorites/{productid}',
    render(args) {
        return layout({
            title: 'お気に入り - 登録削除',
            body: renderItem(args, null, components),
        }, null, components);
    },
    args: {
        empty: true
    }
}