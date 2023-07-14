import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderList from './list.fn.ejs';
import renderItem from './item.fn.ejs';

export default {
    title: 'Pages/Member/Addresses',
    argTypes: {
        serverError: { control: 'boolean' }
    },
}

export const Index = {
    name: '/member/addresses',
    render(args) {
        return layout({
            title: 'お届け先',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Empty = {
    name: '/member/addresses - empty',
    render(args) {
        return layout({
            title: 'お届け先',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        empty: true
    }   
}

export const Complete = {
    name: '/member/addresses - complete',
    render(args) {
        return layout({
            title: 'お届け先',
            body: renderList(args, null, components),
        }, null, components);
    },
    args: {
        complete: true
    }
}

export const Edit = {
    name: '/member/addresses/{addressId}',
    render(args) {
        return layout({
            title: 'お届け先登録',
            body: renderItem(args, null, components),
        }, null, components);
    },
    args: {
        create: false,
        zipSearched: false,
        zipSelected: false,
    }
}

export const Create = {
    name: '/member/createaddress',
    render(args) {
        return layout({
            title: 'お届け先登録',
            body: renderItem(args, null, components),
        }, null, components);
    },
    args: {
        create: true,
        zipSearched: false,
        zipSelected: false,
    }
}