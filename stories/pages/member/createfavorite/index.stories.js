import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/CreateFavorite',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/createfavorite',
    render(args) {
        return layout({
            title: 'お気に入り - 登録確認',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
