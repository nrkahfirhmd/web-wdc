var kabupaten_kota = document.querySelector('#kabkot');
var penduduk = document.querySelector('#pend');
var pulau = document.querySelector('#pul')

document.addEventListener('DOMContentLoaded', function() {
    var i = 0, j = 0, k = 0;

    function formatNumberWithDot(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function animateKabupatenKota() {
        if (i <= 22) {
            kabupaten_kota.textContent = i;
            i++;
            setTimeout(animateKabupatenKota, 100); 
        }
    }

    function animatePenduduk() {
        if (j <= 5466000) {
            penduduk.textContent = formatNumberWithDot(j) + '+';
            j += 10000; 
            setTimeout(animatePenduduk, 0.5);
        }
    }

    function animatePulau() {
        if (k <= 1192) {
            pulau.textContent = formatNumberWithDot(k);
            k += 8;
            setTimeout(animatePulau, 15); 
        }
    }

    animateKabupatenKota(); 
    animatePenduduk();
    animatePulau();
})