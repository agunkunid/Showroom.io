let slideIndex = 0;
showslide();

function showslide() {
  let i;
  let slides = document.getElementsByClassName('slide');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showslide, 5000);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbynsUQALQhvOYE1wQwM0xMNMXNSGQWqaDjgNk-4_BCTMxG0sKRB_F0QMriorZPSslXDeQ/exec';
const form = document.forms['form-penjualan'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol di submit kirim
  // tampilkan tombol loading hilangkang tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    // ketika tombol di submit kirim
    // tampilkan tombol loading hilangkang tombol kirim
    .then((response) => {
      console.log('Success!', response);
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
      // reset form
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
