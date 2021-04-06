const when = (condition, text) => condition ? text : ''
export const render = ({
    active,
}) => {
    return `<h2 class="h-underline">カテゴリ</h2>
<ul class="facet">
    <li class="facet-group ${when(active, 'active')}">
        <a href="javascript:void(0)">
            カテゴリグループA
            <ul>
                <li class="facet-item"><label><input type="checkbox"><span class="text"><i class="facet-icon icon-dash-heart"></i>カテゴリ1</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text"><i class="facet-icon icon-dash-heart"></i>カテゴリ2</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text"><i class="facet-icon icon-dash-heart"></i>カテゴリ3</span></label></li>
            </ul>
        </a>
    </li>
    <li class="facet-group ${when(active, 'active')}">
        <a href="javascript:void(0)">
            カテゴリグループB
            <ul>
                <li class="facet-item"><label><input type="checkbox"><span class="text"><i class="facet-icon icon-dash-heart"></i>カテゴリ4</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text"><i class="facet-icon icon-dash-heart"></i>カテゴリ5</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text"><i class="facet-icon icon-dash-heart"></i>カテゴリ6</span></label></li>
            </ul>
        </a>
    </li>
</ul>
<hr>
<h2 class="h-underline">タグ</h2>
<ul class="facet">
    <li class="facet-item"><label><input type="checkbox"><span class="text">タグ1</span></label></li>
    <li class="facet-item"><label><input type="checkbox"><span class="text">タグ2</span></label></li>
    <li class="facet-item"><label><input type="checkbox"><span class="text">タグ3</span></label></li>
    <li class="facet-group ${when(active, 'active')}">
        <a href="javascript:void(0)">
            タググループA
            <ul>
                <li class="facet-item"><label><input type="checkbox"><span class="text">タグ4</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text">タグ5</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text">タグ6</span></label></li>
            </ul>
        </a>
    </li>
    <li class="facet-group ${when(active, 'active')}">
        <a href="javascript:void(0)">
            タググループB
            <ul>
                <li class="facet-item"><label><input type="checkbox"><span class="text">タグ7</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text">タグ8</span></label></li>
                <li class="facet-item"><label><input type="checkbox"><span class="text">タグ9</span></label></li>
            </ul>
        </a>
    </li>
</ul>
<hr>
<h2 class="h-underline">並び順</h2>
<ul class="facet">
    <li class="facet-item"><label><input type="radio" name="sort"><span class="text">人気順</span></label></li>
    <li class="facet-item"><label><input type="radio" name="sort"><span class="text">新しい順</span></label></li>
    <li class="facet-item"><label><input type="radio" name="sort"><span class="text">古い順</span></label></li>
</ul>`
}