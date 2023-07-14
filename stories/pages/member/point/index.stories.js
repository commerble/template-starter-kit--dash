import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/Point',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Confirm = {
    name: '/member/point',
    render(args) {
        return layout({
            title: 'マイページ - ポイント情報',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
