import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderForm from './index.fn.ejs';
import renderConfirm from './confirm.fn.ejs';

export default {
    title: 'Pages/Member/Account',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/account',
    render(args) {
        return layout({
            title: '会員情報編集',
            body: renderForm(args, null, components),
        }, null, components);
    },
    args: {
        zipSearched: false,
        zipSelected: false,
    }
}

export const Confirm = {
    name: '/member/account - confirm',
    render(args) {
        return layout({
            title: '会員情報編集 - 確認',
            body: renderConfirm(args, null, components),
        }, null, components);
    },
    args: {
    }
}
