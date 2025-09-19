// Fungsi untuk mengelola preloader
function handlePreloader() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        preloader.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 1500); 
}
// Fungsi untuk mengaplikasikan mode gelap
function applyDarkMode(isDark) {
    const body = document.body;
    const profileImage = document.getElementById('profileImage');
    if (isDark) {
        body.classList.add('dark-mode');
        profileImage.src = './img/logo_white.png';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        profileImage.src = './img/logo_black.png';
        localStorage.setItem('theme', 'light');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (savedTheme === 'dark') {
        applyDarkMode(true);
        darkModeToggle.checked = true;
    } else {
        applyDarkMode(false);
        darkModeToggle.checked = false;
    }
    darkModeToggle.addEventListener('change', (event) => {
        applyDarkMode(event.target.checked);
    });
    
    const frameCountSlider = document.getElementById('frameCount');
    const frameCountValue = document.getElementById('frameCountValue');
    frameCountSlider.addEventListener('input', (event) => {
        frameCountValue.textContent = event.target.value;
    });
});
window.onload = handlePreloader;
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}
function calculatePrice() {
    const frameCountSlider = document.getElementById('frameCount');
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    resultDiv.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
    setTimeout(() => {
        const frameCount = parseInt(frameCountSlider.value, 10);
        const renderEngine = document.getElementById('renderEngine').value;
        const resolution = document.getElementById('resolution').value;
        const totalPriceP = document.getElementById('totalPrice');
        const totalTimeP = document.getElementById('totalTime');
        const pricePerFrame = framePrices[renderEngine][resolution];
        const totalPrice = pricePerFrame * frameCount;
        totalPriceP.textContent = formatRupiah(totalPrice);
        totalTimeP.textContent = "Waktu rendering akan bervariasi.";
        loadingDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');
    }, 1000);
}

  const subscribeBtn = document.getElementById("subscribeBtn");
  const subscribeModal = document.getElementById("subscribeModal");
  const closeModal = document.getElementById("closeModal");

  // buka modal saat tombol subscribe ditekan
  subscribeBtn.addEventListener("click", () => {
    subscribeModal.classList.remove("hidden");
  });

  // tutup modal saat tombol X ditekan
  closeModal.addEventListener("click", () => {
    subscribeModal.classList.add("hidden");
  });

  // tutup modal saat klik area gelap di luar popup
  subscribeModal.addEventListener("click", (e) => {
    if (e.target === subscribeModal) {
      subscribeModal.classList.add("hidden");
    }
  });