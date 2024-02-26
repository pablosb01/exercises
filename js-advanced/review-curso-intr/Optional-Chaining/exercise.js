const order = {
  customer: "Pablo",
  address: "JAM",
  city: "Oviedo",
};

if (!order?.city) {
  console.log('City is required');
} else {
  console.log(`City is ${order.city}`);
}
