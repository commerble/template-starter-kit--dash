import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/AccountAddress',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Confirm = {
    name: '/member/accountaddress',
    render(args) {
        return layout({
            title: '会員住所編集 - 確認',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
