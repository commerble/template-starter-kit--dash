import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';
import renderForm from './form.fn.ejs';

export default {
    title: 'Pages/Site/Activate',
    argTypes: {
        serverError: { control: 'boolean' },
        invalid: { control: 'boolean' },
    },
}

export const Complete = {
    name: '/site/activate/{token}  - complete',
    render(args) {
        return layout({
            title: '新規会員登録 - 登録完了',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Reactivate = {
    name: '/site/activate  - resend activation link',
    render(args) {
        return layout({
            title: 'メールアドレス確認 - 再送',
            body: renderForm(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Send = {
    name: '/site/activate  - resend',
    render(args) {
        return layout({
            title: 'メールアドレス確認 - 再送',
            body: renderForm(args, null, components),
        }, null, components);
    },
    args: {
        send: true
    }
}
