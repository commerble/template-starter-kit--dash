import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';
import renderConfirm from './confirm.fn.ejs';

export default {
    title: 'Pages/Site/Inquiry',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Form = {
    name: '/site/inquiry',
    render(args) {
        return layout({
            title: 'お問い合わせ',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Confirm = {
    name: '/site/inquiry/{viewmodel}',
    render(args) {
        return layout({
            title: 'お問い合わせ - 確認',
            body: renderConfirm(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Send = {
    name: '/site/inquiry - sent',
    render(args) {
        return layout({
            title: 'お問い合わせ',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
        send: true
    }
}