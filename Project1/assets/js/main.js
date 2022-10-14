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
var verify = document.getElementById('status_button');
var statusCheck = document.getElementById('status_check');
var transferList = document.getElementById('transfer_list');
var placeholderText = document.getElementById('placeholder');
const input = document.querySelector('file_input');

function StatusButtonClick(){
    var parsed1 = input1.value.toLowerCase();
    var parsed2 = input2.value.toLowerCase();
    var parsed3 = input3.value.toLowerCase();
    var parsed4 = input4.value.toLowerCase();
    
    if(parsed1 == "icecream" || parsed1 == "grapes" || parsed1 == "salmon" || parsed1 == "flowers")
    {
        console.log(parsed1);
        item1.textContent = input1.value + ' - In Stock';
    }
    else
    {
        item1.textContent = input1.value + ' - Not in Stock';
    }
    
    if(parsed2 == "icecream" || parsed2 == "grapes" || parsed2 == "salmon" || parsed2 == "flowers")
    {
        item2.textContent = input2.value + ' - In Stock';
    }
    else
    {
        item2.textContent = input2.value + ' - Not Available';
    }
    
    if(parsed3 == "icecream" || parsed3 == "grapes" || parsed3 == "salmon" || parsed3 == "flowers")
    {
        item3.textContent = input3.value + ' - In Stock';
    }
    else
    {
        item3.textContent = input3.value + ' - Not Available';
    }
    
    if(parsed4 == "icecream" || parsed4 == "grapes" || parsed4 == "salmon" || parsed4 == "flowers")
    {
        item4.textContent = input4.value + ' - In Stock';
    }
    else
    {
        item4.textContent = input4.value + ' - Not Available';
    }

    status_check.textContent = 'Status: Checked';
}

function TriggerPlaceholder(){
    placeholderText.textContent = "Placeholder triggered! Sending imaginary items to list...";
}

//Navigation Page
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');


function ChangeColor(imageNumber){
    if(imageNumber.style.borderColor == "black")
    {
        imageNumber.style.borderColor = "green";
    }
    else
    {
        imageNumber.style.borderColor = "black";
    }
    
}


//Shopping Cart Page
var p = document.getElementById('coupon_list');
var applyCoupon = document.getElementById('apply_coupon');
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

function ApplyCoupon(){
    console.log("clicked apply coupon");
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
function PayButton(){
    console.log("clicked pay coupon");
    switch(paymentMethod.textContent)
        {
            case 'Credit':
                payStatus.textContent = "Transaction Complete! :) Leave Cart at Checkout.";
                alert("Thank you for using Smart Cart! Have a good day!");
                break;
            case 'Cash':
                payStatus.textContent = "Transaction Complete!:) Leave Cart at Checkout.";
                alert("Thank you for using Smart Cart! Have a good day!");
                break;
            case 'PayPal':
                payStatus.textContent = "Transaction Complete! :) Leave Cart at Checkout.";
                alert("Thank you for using Smart Cart! Have a good day!");
                break;
            default:
                alert("Error: Please select Payment Option on secondary device.");
        }
}

function CreditChoice()
{
    paymentMethod.textContent = 'Credit';
}
function CashChoice()
{
    paymentMethod.textContent = 'Cash';
}
function PayPalChoice()
{
    paymentMethod.textContent = 'PayPal';
}

