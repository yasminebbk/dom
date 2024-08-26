document.addEventListener('DOMContentLoaded', () => {
    function updateTotalPrice() {
        const totalPriceElement = document.querySelector('.total');
        const cards = document.querySelectorAll('.card-body');

        let total = 0;
        cards.forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            const price = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));
            total += quantity * price;
        });

        totalPriceElement.textContent = `${total} $`;
    }

 
    function handleProductAction(event) {
        if (event.target.matches('.fa-plus-circle, .fa-minus-circle')) {
            const action = event.target.classList.contains('fa-plus-circle') ? 'increment' : 'decrement';
            const card = event.target.closest('.card-body');
            const quantityElement = card.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);

            if (action === 'increment') {
                quantity++;
            } else if (action === 'decrement' && quantity > 0) {
                quantity--;
            }

            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    }

 
    document.querySelector('.list-products').addEventListener('click', handleProductAction);

  
    updateTotalPrice();
});


document.getElementById('like1').addEventListener('click',function(){
    this.classList.toggle('liked');
  })
  document.getElementById('like2').addEventListener('click',function(){
    this.classList.toggle('liked');
  })
  document.getElementById('like3').addEventListener('click',function(){
    this.classList.toggle('liked');
  })


