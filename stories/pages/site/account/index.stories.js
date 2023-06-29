import components from '../../components';
import layout from '../../layout.fn.ejs';
import renderForm from './form.fn.ejs';
import renderConfirm from './confirm.fn.ejs';
import renderComplete1 from './complete1.fn.ejs';
import renderComplete2 from './complete2.fn.ejs';

export default {
    title: 'Pages/Site/Account',
    argTypes: {
        serverError: { control: 'boolean' },
        invalid: { control: 'boolean' },
    },
}

export const Form = {
    name: '/site/account --- form',
    render(args) {
        return layout({
            title: '新規会員登録',
            body: renderForm(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Confirm = {
    name: '/site/account --- confirm',
    render(args) {
        return layout({
            title: '新規会員登録 - 確認',
            body: renderConfirm(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Complete = {
    name: '/site/accountcomplete  - complete',
    render(args) {
        return layout({
            title: '新規会員登録 - 登録完了',
            body: renderComplete1(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const NeedActivation = {
    name: '/site/accountcomplete  - activation needed',
    render(args) {
        return layout({
            title: '新規会員登録 - 本人確認',
            body: renderComplete2(args, null, components),
        }, null, components);
    },
    args: {
    }
}