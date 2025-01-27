 // Handle the form submission
 document.getElementById('donation-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  // Create an order on the server
  fetch('/create-order', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name,
          mobile,
          email,
          amount
      })
  })
  .then(response => response.json())
  .then(data => {
      const options = {
          key: 'your_razorpay_key_id', // replace with your Razorpay Key ID
          amount: data.amount, // amount in paise
          currency: 'INR',
          name: 'Suvidha Foundation',
          description: 'Clothes Distribution Donation',
          image: 'https://www.example.com/logo.png', // Optional: Add your logo URL
          order_id: data.order_id,
          handler: function(response) {
              // Handle success or failure of the payment
              alert('Payment successful!');
          },
          prefill: {
              name,
              email,
              contact: mobile
          },
          notes: {
              'Name': name,
              'Email': email,
              'Mobile': mobile
          },
          theme: {
              color: '#4CAF50'
          }
      };

      // Open the Razorpay Checkout window
      const razorpay = new Razorpay(options);
      razorpay.open();
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error creating the order. Please try again.');
  });
});