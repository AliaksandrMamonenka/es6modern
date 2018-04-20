document.getElementById('loan-form').addEventListener('submit', function(e) {
  //loader
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(function() {
    document.getElementById('results').style.display = 'block';

    document.getElementById('loading').style.display = 'none';
  }, 2000);

  // main
  console.log('submit');
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const calcAmount = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value) / 100 / 12;
  const calcPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calcInterest, calcPayments);
  const monthly = calcAmount * x * calcInterest / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calcPayments).toFixed(2);
    totalInterest.value = (monthly * calcPayments - calcAmount).toFixed(2);
  } else {
    showError('Pleaase check your numbers');
  }

  e.preventDefault();
});

function showError(message) {
  const errorBlock = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorBlock.className = 'alert alert-danger';
  errorBlock.appendChild(document.createTextNode(message));

  card.insertBefore(errorBlock, heading);

  // clear error

  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}
