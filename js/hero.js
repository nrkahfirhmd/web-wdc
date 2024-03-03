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
            setTimeout(animateKabupatenKota, 35); 
        }
    }

    function animatePenduduk() {
        if (j <= 5466000) {
            penduduk.textContent = formatNumberWithDot(j) + '+';
            j += 30000; 
            setTimeout(animatePenduduk, 1);
        }
    }

    function animatePulau() {
        if (k <= 1192) {
            pulau.textContent = formatNumberWithDot(k);
            k += 8;
            setTimeout(animatePulau, 1); 
        }
    }

    animateKabupatenKota(); 
    animatePenduduk();
    animatePulau();
})