window.onload = () => {
  document.querySelector('#calc').onclick = calculateTip;
}
function calculateTip() {
  let amount = document.querySelector('#inp1').value;
  let tip = document.querySelector('button').value;
  let persons = document.querySelector('#inp2').value;
  console.log(tip)
  if (amount === "") {
    alert('enter some valid amount');
    return;
  }
  if (persons === "1") {
    document.querySelector('#rupees1').style.display = "none";
  }
  else {
    document.querySelector('#rupees1').style.display = 'block';
  }
  let total = (amount * tip) / persons;
  console.log(total)
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  console.log(total);
  // document.querySelector('#rupees1').style.display = 'block';
  document.querySelector('#rupees1').innerHTML = total;

  let tp = amount / persons;
  tp = tp.toFixed(2);
  console.log(tp)
  // document.querySelector('#rupees2').style.display = 'block';
  document.querySelector('#rupees2').innerHTML = tp;
}