import { render as renderGHeader } from '../../components/Gheader/index'
import { render as renderGFooter } from '../../components/Gfooter/index'
import { render as renderGNav } from '../../components/Gnav/index'

export const render = ({

}) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>top</title>
</head>
<body>
    ${renderGHeader({})}
    ${renderGNav({})}
    <section class="section content">
        <h1 class="h-border">ご注文履歴</h1>
        <table class="table">
            <caption>これまでにお客様がオンラインストアで購入された履歴の一覧です。</caption>
            <thead>
                <tr>
                    <th>ご注文日時</th>
                    <th>ご注文番号</th>
                    <th>ご注文状況</th>
                    <th>お支払方法</th>
                    <th>合計金額</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td data-title="ご注文日時">2021/03/05 18:03</td>
                    <td data-title="ご注文番号">55</td>
                    <td data-title="ご注文状況">注文完了</td>
                    <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>
                    <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>
                    <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>
                </tr>

                <tr>
                    <td data-title="ご注文日時">2021/03/05 18:03</td>
                    <td data-title="ご注文番号">55</td>
                    <td data-title="ご注文状況">注文完了</td>
                    <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>
                    <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>
                    <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>
                </tr>

                <tr>
                    <td data-title="ご注文日時">2021/03/05 18:03</td>
                    <td data-title="ご注文番号">55</td>
                    <td data-title="ご注文状況">注文完了</td>
                    <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>
                    <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>
                    <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>
                </tr>

                <tr>
                    <td data-title="ご注文日時">2021/03/05 18:03</td>
                    <td data-title="ご注文番号">55</td>
                    <td data-title="ご注文状況">注文完了</td>
                    <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>
                    <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>
                    <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>
                </tr>
                
            </tbody>
        </table>
        <dvi class="block block-vertical">
            <a href="#next" class="btn btn-primary btn-text btn-next">次のページ</a>
        </dvi>
        <hr>
        <dvi class="block block-horizontal">
            <a href="#2021" class="btn btn-primary btn-text">2021年</a>
            <a href="#2020" class="btn btn-primary btn-text">2020年</a>
            <a href="#2019" class="btn btn-primary btn-text">2019年</a>
            <a href="#archive" class="btn btn-primary btn-text">さらに前のご注文</a>
        </dvi>
    </section>
    ${renderGFooter({})}
</body>
</html>`
}