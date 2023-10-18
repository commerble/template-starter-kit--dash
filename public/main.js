if (window.$) {
    $.fn.showRecalc = function() {
        $('[name=recalc]').removeClass('hide').siblings().addClass('hide');
    }

    $.fn.toZenkaku = function() {
        $(this).val(($(this).val() || '').replace(/[A-Za-z0-9&\(\)\- ]/g, function (s) {
            return s === ' ' ? '　' : String.fromCharCode(s.charCodeAt(0) + 65248);
        }));
    }

    $.fn.removeSpace = function() {
        $(this).val(($(this).val() || '').replace(/\s/g, ''));
    }

    $.fn.validateForce = function() {
        $(this).closest('form').validate().element(this);
    }

    $.fn.changePaymentDetail = function() {
        const value = $(this).val();
        const $target = $('[name="OrderCustomer.PaymentDetail"]');
        $target.val($target.attr('data-' + value.toLowerCase()));
    }
    $.fn.openAccordion = function() {
        const value = $(this).val();
        const $target = $('[data-accordion="' + value + '"]');
        $target.siblings('.field-note').addClass('hide');
        $target.removeClass('hide');
    }

    $.fn.togglePasswordMask = function () {
        const show = $(this).attr('data-show');
        const hide = $(this).attr('data-hide');
        $(this).text($(this).text() == show ? hide : show);
        $(this).siblings('input').each(function(i,input){
            input.type = input.type == 'password' ? 'text' : 'password';
        })
    }

    $.fn.selectAddress = function () {
        const id = $(this).val();
        const addr = JSON.parse($('#member-addresses').html()).find(a => a.AddressId+"" == id);
            
        if(addr == null)
            return;
            
        $('#DeliveryOrderAddress_Recipientfirstname').val(addr.Recipientfirstname || '');
        $('#DeliveryOrderAddress_Recipientlastname').val(addr.Recipientlastname || '');
        $('#DeliveryOrderAddress_Recipientfirstnamekana').val(addr.Recipientfirstnamekana || '');
        $('#DeliveryOrderAddress_Recipientlastnamekana').val(addr.Recipientlastnamekana || '');
        $('#DeliveryOrderAddress_ZipCode').val(addr.ZipCode || '');
        $('#DeliveryOrderAddress_Pref').val(addr.Pref || '');
        $('#DeliveryOrderAddress_City').val(addr.City || '');
        $('#DeliveryOrderAddress_Street').val(addr.Street || '');
        $('#DeliveryOrderAddress_Building').val(addr.Building || '');
        $('#DeliveryOrderAddress_Tel').val(addr.Tel || '');
    }

    $.fn.backToCheckPoint = function () {
        window.backToCheckPoint();
    }

    $('body').on('click', 'a[data-gtm]', function(e) {
        if (window.google_tag_manager) {
            e.preventDefault();
        }
        const href = $(this).attr('href');
        const json = $(this).attr('data-gtm');
        const data = JSON.parse(json);
        pushDataLayer(data).finally(function() {
            document.location = href;
        });
    })

    $('body').on('click', '[type="submit"][data-gtm]', function(e) {
        if (window.google_tag_manager) {
            e.preventDefault();
        }
        const name = $(this).attr('name');
        const value = $(this).val();
        const form = $(this).closest('form');
        const json = $(this).attr('data-gtm');
        const data = JSON.parse(json);
        pushDataLayer(data).finally(function() {
            const input = document.createElement('input');
            input.type = "hidden";
            input.name = name,
            input.value = value;
            form.append(input);
            form.submit();
        });
    })

    $('body').on('click', '[type="submit"][data-gtm-radio]', function(e) {
        const radio = $(this).attr('data-gtm-radio');
        const checked = $('[name="' + radio + '"]:checked');
        if (checked.length > 0) {
            if (window.google_tag_manager) {
                e.preventDefault();
            }
            const name = $(this).attr('name');
            const value = $(this).val();
            const form = $(this).closest('form');
            const json = checked.attr('data-gtm');
            const data = JSON.parse(json);
            pushDataLayer(data).finally(function() {
                const input = document.createElement('input');
                input.type = "hidden";
                input.name = name,
                input.value = value;
                form.append(input);
                form.submit();
            });
        }
    })

    $('link[rel=stylesheet][media=print]').each(function(i, el) { el.media = 'all'; });

    $(window).on('DOMContentLoaded', function(e){setup(document.body)});
    $(document.body).on('DOMNodeInserted', function(e){setup(e.target)});
}

function setup(root) {
    $('[ic-action],[ic-get-from],[ic-post-to],[ic-put-to]', root).each(function(i, el) {
        let event = el.constructor == HTMLButtonElement || el.constructor == HTMLAnchorElement ? 'click'
                : el.constructor == HTMLSelectElement ? 'change'
                : el.constructor == HTMLTextAreaElement ? 'input'
                : null;

        if (el.constructor == HTMLInputElement) {
            event = el.type == 'checkbox' || el.type == 'radio' ? 'change' : 'input'
        }

        if (el.hasAttribute('ic-trigger-on')) {
            event = el.getAttribute('ic-trigger-on');
        }

        const target = el.hasAttribute('ic-target') ? $(el.getAttribute('ic-target')) : $(el);
        const action = el.getAttribute('ic-action') || '';

        const parse = function(text, left, right) {
            left = left || '';
            right = right || '';
            return JSON.parse(left + text.replace(/'/g, '"') + right);
        }

        const exec = function() {
            action.split(';').filter(op => !!op).forEach(function(op){
                const coron = op.indexOf(':');
                if (coron == -1) {
                    target[op]();
                } 
                else {
                    const method = op.substring(0, coron);
                    const parameters = parse(op.substring(coron + 1), '[', ']');
                    target[method].apply(target, parameters)
                }
            })
            if (el.hasAttribute('ic-get-from')) {
                const src = el.getAttribute('ic-get-from');
                if (src.startsWith('#')) {
                    target.replaceWith($(src).html())
                }
            }
            if (el.hasAttribute('ic-post-to')) {
                const src = el.getAttribute('ic-post-to');
                const data = new FormData(target.closest('form').get(0));
                if (el.hasAttribute('ic-include')) {
                    Object.entries(parse(el.getAttribute('ic-include'))).forEach(function(kv) {
                        data.append(kv[0], kv[1]);
                    });
                }
                $.ajax({
                    method: 'post',
                    url: src,
                    data: data,
                    contentType: false,
                    processData: false
                }).then(function(html){
                    target.empty().append(html);
                })
            }
            if (el.hasAttribute('ic-put-to')) {
                const src = el.getAttribute('ic-put-to');
                const data = new FormData(target.closest('form').get(0));
                data.append('_method', 'put');
                if (el.hasAttribute('ic-include')) {
                    Object.entries(parse(el.getAttribute('ic-include'))).forEach(function(kv) {
                        data.append(kv[0], kv[1]);
                    });
                }
                $.ajax({
                    method: 'post',
                    url: src,
                    data: data,
                    contentType: false,
                    processData: false
                }).then(function(html){
                    target.empty().append(html);
                })
            }
        }

        if (event == 'load') {
            exec();
        }
        else {
            $(el).on(event, exec);
        }
    })
}

function pushDataLayer() {
    const data = Array.from(arguments);
    if (!window.google_tag_manager) {
        return Promise.resolve();
    }
    window.dataLayer = window.dataLayer || [];
    return new Promise(function(resolveAll, reject) {
        let timeoutId = setTimeout(reject, 3000);
        Promise.all(data.map(function(arg){
            return new Promise(function(resolve) {
                window.dataLayer.push(Object.assign(arg, {
                    eventCallback: resolve
                }))
            });
        })).then(function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
                resolveAll();
            }
        }).catch(reject);
    })
}

window.backToCheckPoint = function() {
    const url = decodeURIComponent(document.cookie.split(';').filter(str => str.startsWith('checkpoint')).map(str => str.substring('checkpoint='.length))[0] || '')
    const root = document.querySelector('meta[name=x-root]').content;
    location = url ? url : root;
}

window.updateCheckPoint = function() {
    const root = document.querySelector('meta[name=x-root]').content;
    document.cookie = 'checkpoint=' + encodeURIComponent(location.href) + ';path=' + root + ';samesite=Strict'; 
}