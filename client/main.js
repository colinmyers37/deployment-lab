
let homeCards = document.querySelector('.home-cards')



const purchase = evt => {
    if (evt.target.classList.contains('purchase-btn')) {
     alert("Added to your cart!")
    } else {
        alert("Please press the button to add the item to your cart")
    }
}








homeCards.addEventListener('click', purchase)