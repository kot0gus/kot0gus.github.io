const checkboxes = document.querySelectorAll('.option');
const sectionsInput = document.getElementById('sections');
const priceBreakdown = document.getElementById('price-breakdown');
const subtotalField = document.getElementById('subtotal');
const vatField = document.getElementById('vat');
const totalField = document.getElementById('total');

function calculate() {
  let subtotal = 0;
  priceBreakdown.innerHTML = '';

    const sections = parseInt(sectionsInput.value) || 0;
    const sectionPrice = sections * 50;
    subtotal += sectionPrice;
    priceBreakdown.innerHTML += `<tr><td>Sadaļu skaits (${sections})</td><td>${sectionPrice} €</td></tr>`;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const price = parseInt(cb.dataset.price);
        const label = cb.parentElement.textContent.trim();
        subtotal += price;
        priceBreakdown.innerHTML += `<tr><td>${label}</td><td>${price} €</td></tr>`;
      }
    });

    const vat = subtotal * 0.21;
    const total = subtotal + vat;

    subtotalField.textContent = `${subtotal} €`;
    vatField.textContent = `${vat.toFixed(2)} €`;
    totalField.textContent = `${total.toFixed(2)} €`;
  }

  checkboxes.forEach(cb => cb.addEventListener('change', calculate));
  sectionsInput.addEventListener('input', calculate);
  
  calculate();
