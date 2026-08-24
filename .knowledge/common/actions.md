# Form Actions

Cart templates have several actions driven by POST requests.

A single POST endpoint may handle multiple actions.

The action is selected based on whether the POST payload contains an item with a specific `name`.

Normally, when a submit button is clicked, the browser submits the button's `name` and value if the element has a `name` attribute.

This can be used as follows.

```
@{
    var address = Model;
    var action = address.AddressId == 0 ? AddressCreateUrl() : AddressUrl(address.AddressId);
}
 <form action="@action" method="post">
    @Page.Html.SessionAntiForgeryToken()
   ...
    @if (address.AddressId == 0) {
        <button type="submit" class="btn btn-action btn-large" name="create" value="post">Register</button>  <!-- create action -->
    }
    else {
        <button type="submit" class="btn btn-action btn-large" name="update" value="post">Update</button> <!-- update action -->
        <button type="submit" class="btn btn-danger btn-text" name="delete" value="post">Delete</button> <!-- delete action -->
    }
</form>
```

However, if JavaScript or similar code disables the submit button on click to prevent duplicate submissions, the item with this `name` is not submitted.

In that case, you must manually add the value to a hidden field or similar element.

```
$('body').on('click', '[type="submit"][name]', function(e) {
    const name = $(this).attr('name');
    const value = $(this).val();
    const input = document.createElement('input');
    input.type = "hidden";
    input.name = name,
    input.value = value || name;
    form.append(input);
    form.submit();
})
```

## Templates Defining Multiple Actions

The following templates switch actions using the submit button's `name` for the same POST endpoint. This includes cases where the confirmation and execution screens use the same endpoint.

|                     Template                     |                     POST endpoint                      |                         `name`                          |
| ---------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| `templates/Modd/Member/Account.cshtml`               | `AccountUrl()`                                              | `confirm`                                               |
| `templates/Modd/Member/AccountConfirm.cshtml`        | `AccountUrl()`                                              | `update`                                                |
| `templates/Modd/Member/Account.cshtml`               | `AccountAddressUrl()`                                       | `confirm`                                               |
| `templates/Modd/Member/AccountAddressConfirm.cshtml` | `AccountAddressUrl()`                                       | `update`                                                |
| `templates/Modd/Member/Account.cshtml`               | `UserNameChangeUrl()`                                       | `confirm`                                               |
| `templates/Modd/Member/UserNameConfirm.cshtml`       | `UserNameChangeUrl()`                                       | `update`                                                |
| `templates/Modd/Member/Address.cshtml`               | `AddressCreateUrl()` or `AddressUrl(address.AddressId)` | `create`, `update`, `delete`                            |
| `templates/Modd/Member/Payments.cshtml`              | `Member/Payments`                                           | `create`, `delete`                                      |
| `templates/Modd/Order/History.cshtml`                | `HistoryUrl(cart.OrderId)`                                  | `commit`, `customer`, `shipping`, `delivery`, `payment` |
| `templates/Modd/Order/HistoryCancel.cshtml`          | `HistoryUrl(cart.OrderId)`                                  | `commit`                                                |
| `templates/Modd/Order/HistoryCustomer.cshtml`        | `HistoryUrl(customer.Cart.OrderId)`                         | `customer`                                              |
| `templates/Modd/Order/HistoryDelivery.cshtml`        | `HistoryUrl(delivery.Cart.OrderId)`                         | `delivery`                                              |
| `templates/Modd/Order/HistoryPayment.cshtml`         | `HistoryUrl(payment.Cart.OrderId)`                          | `payment`                                               |
| `templates/Modd/Purchase/Shipping.cshtml`            | `PurchaseShippingUrl(shipping.CartId)`                      | `next`, `next_copy`                                     |
| `templates/Modd/Site/Account.cshtml`                 | `RegisterUrl()`                                             | `confirm`                                               |
| `templates/Modd/Site/AccountConfirm.cshtml`          | `RegisterUrl()`                                             | `create`                                                |
| `templates/Modd/Site/Inquiry.cshtml`                 | `InquiryUrl("contact")`                                     | `confirm`                                               |
| `templates/Modd/Site/InquiryConfirm.cshtml`          | `InquiryUrl("contact")`                                     | `create`                                                |
| `templates/Modd/Site/Recovery.cshtml`                | `RecoveryUrl()`                                             | `request`                                               |
| `templates/Modd/Site/RecoveryUpdate.cshtml`          | `RecoveryUrl((string)Page.ViewData["id"])`                  | `update`                                                |
| `templates/Preview.cshtml`                           | The form's own POST endpoint                                        | `start`, `end`                                          |

Forms related to order history that use `HistoryUrl` also switch the HTTP method with `HttpMethodOverride("put")` or `HttpMethodOverride("delete")`. This does not switch endpoints; it changes the processing condition within the same endpoint.

