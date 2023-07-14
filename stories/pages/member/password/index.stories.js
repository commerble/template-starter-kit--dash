import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/Password',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/password',
    render(args) {
        return layout({
            title: 'パスワード変更',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
