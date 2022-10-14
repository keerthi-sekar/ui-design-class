//Javascript file

const items = ["Icecream", "Grapes", "Salmon", "Flowers"];

//Shopping List Page
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');

var item1 = document.getElementById('1');
var item2 = document.getElementById('2');
var item3 = document.getElementById('3');
var item4 = document.getElementById('4');
var fileInput = document.getElementById('file_input');
var verify = document.getElementById('status_button');
var statusCheck = document.getElementById('status_check');
var transferList = document.getElementById('transfer_list');

verify.onclick = function(){
    //making assumption that all items are in stock in list for concept
    item1.textContent = input1.value + ' - In Stock';
    item2.textContent = input2.value + ' - In Stock';
    item3.textContent = input3.value + ' - In Stock';
    item4.textContent = input4.value + ' - In Stock';
    status_check.textContent = 'Status: Checked';
}

//Shopping Cart Page
var p = document.getElementById('coupon_list');
var applyCoupon = document.getElementById('set_coupon');
var txt = document.getElementById('coupon_code');
var preTotal = document.getElementById('total_value'); 
var finalTotal = document.getElementById('final_total');
var errorHandler = document.getElementById('error_handler');
var paymentMethod = document.getElementById('payment_method');
var payStatus = document.getElementById('pay_status');
var payButton = document.getElementById('pay_button');

//svg elements
var credit = document.getElementById('credit');
var cash = document.getElementById('cash');
var paypal = document.getElementById('paypal');

applyCoupon.onclick = function(){
    if(txt.value != 'HAD22')
    {
        errorHandler.textContent = 'Error: Item Not In Cart';
        finalTotal.textContent = preTotal.textContent;
    }
    else
    {
        p.textContent = txt.value;
        errorHandler.textContent = '\n';
        finalTotal.textContent = '$54.50';
    }
};
payButton.onclick = function(){
    switch(paymentMethod.textContent)
        {
            case 'Credit':
                payStatus.textContent = "Transaction Complete!";
                alert("Thank you for using Smart Cart! Have a good day!");
                break;
            case 'Cash':
                payStatus.textContent = "Transaction Complete!";
                alert("Thank you for using Smart Cart! Have a good day!");
                break;
            case 'PayPal':
                payStatus.textContent = "Transaction Complete!";
                alert("Thank you for using Smart Cart! Have a good day!");
                break;
            default:
                alert("Error: Please select Payment Option on secondary device.");
        }
}

credit.onclick = function()
{
    paymentMethod.textContent = 'Credit';
}
cash.onclick = function()
{
    paymentMethod.textContent = 'Cash';
}
paypal.onclick = function()
{
    paymentMethod.textContent = 'PayPal';
}

