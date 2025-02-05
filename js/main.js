
function getSeat(id) {
    const seat = document.getElementById(id)
    const totalSeats = getTextValueId('total-seats')
    const remainingSeats = parseInt(totalSeats) - 1;
    setValueById('total-seats', remainingSeats)
    const purchaseSeats = getTextValueId('purchase-seats')
    if (parseInt(purchaseSeats) === 4) {
        setTimeout(function() {
            document.getElementById('warning-toast').classList.remove('hidden');
          }, 100);
          setTimeout(function(){
            document.getElementById('warning-toast').classList.add('hidden');
          }, 3000)
        return
    }
    const totalPurchase = parseInt(purchaseSeats) + 1
    setValueById('purchase-seats', totalPurchase)
    if(totalPurchase === 4){
        const applyBtn = document.getElementById('apply-btn')
        applyBtn.removeAttribute('disabled', false)
    }
    // 
    const seatDetails = document.getElementById('seats-details-container')
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    p1.innerText = seat.innerText
    p2.innerText = 'Economy'
    p3.innerText = '550'
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.classList.add('display-flex')
    // div.classList.add('')
    seatDetails.appendChild(div)
    const totalPrice = totalPurchase * 550;
    setValueById('total-price', totalPrice)
    setValueById('grand-total', totalPrice)
    activePurchaseBtn()

    seat.setAttribute('disabled', false)


}

let giveDiscount = false
function discountCoupon(){
    const couponText = document.getElementById('coupon-text')
    const couponValue = couponText.value
    if(giveDiscount){
        return
    }
    if(couponValue === 'NEW15' && giveDiscount === false){
        const total = getTextValueId('total-price')
        const devide = parseInt(total) / 100;
        const p = document.createElement('p')
        p.innerText ='BDT' + (devide * 15)
        document.getElementById('total-discount').appendChild(p)
        const discounted = devide * 85;
        setValueById('grand-total', discounted)
        giveDiscount = true
        couponText.value = ''
        document.getElementById('apply-coupon-container').classList.add('flex')
        document.getElementById('total-discount').classList.remove('hidden')
        document.getElementById('total-discount').classList.add('flex')
    }
    else if(couponValue === 'couple20'){
        const total = getTextValueId('total-price')
        const devide = parseInt(total) / 100;
        const p = document.createElement('p')
        p.innerText ="BDT " +(devide * 20)
        document.getElementById('total-discount').appendChild(p)
        const discounted = devide * 80;
        setValueById('grand-total', discounted)
        giveDiscount = true
        couponText.value = ''
        document.getElementById('apply-coupon-container').classList.add('hidden')
        document.getElementById('total-discount').classList.remove('hidden')
        document.getElementById('total-discount').classList.add('flex')
    }
    else{
        setTimeout(function() {
            document.querySelector('#toast').classList.remove('hidden');
          }, 100);
          setTimeout(function(){
            document.querySelector('#toast').classList.add('hidden');
          }, 3000)
    }
}

document.getElementById('number-input').addEventListener('keyup', function(){
    activePurchaseBtn()
})
function activePurchaseBtn(){
    const getInputNum = document.getElementById('number-input')
    const getInputValue = getInputNum.value
    const purchaseSeats = getTextValueId('purchase-seats')
    const purchaseBtn = document.getElementById('confirm-purchase-btn')
    if(getInputValue.length < 12 && parseInt(purchaseSeats) > 0 && getInputValue.length > 10){
        purchaseBtn.removeAttribute('disabled', false)
    }
    else{
        purchaseBtn.setAttribute('disabled', false)
    }
}
document.getElementById('confirm-purchase-btn').addEventListener('click', function(){
    const successContainer = document.getElementById('success-container')
    successContainer.classList.replace('hidden', 'flex')
    document.getElementById('main-container').classList.add('hidden')
    document.getElementById('header-container').classList.add('hidden')
    document.getElementById('footer-container').classList.add('hidden')
})

function getTextValueId(id) {
    const element = document.getElementById(id)
    const text = element.innerText
    return text
}
function setValueById(id, value) {
    const element = document.getElementById(id)
    element.innerText = value
}