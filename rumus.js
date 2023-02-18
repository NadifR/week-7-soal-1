// Rumus Persegi Sisi
function persegiSisi(sisi) {
  return sisi * sisi;
}

// Rumus Persegi Keliling
function persegiKililing(sisi) {
  return 4 * sisi;
}

// Rumus PErsegi Panjang Sisi
function persegiPanjangSisi(panjang, lebar) {
  return panjang * lebar;
}

// Rumus Persegi Panjang Keliling
function persegiPanjangKeliling(panjang, lebar) {
  return 2 * (panjang + lebar);
}

// modul export
module.exports = {
  persegiSisi,
  persegiKililing,
  persegiPanjangSisi,
 persegiPanjangKeliling
};
