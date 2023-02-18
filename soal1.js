// modul import
const rumus = require('./rumus');

//Persegi Sisi dan Keliling
const Sisi = 5;
const persegiSisi = rumus.persegiSisi(Sisi);
const persegiKililing = rumus.persegiKililing(Sisi);

console.log(`Persegi Sisi: ${persegiSisi}`);
console.log(`persegi Keliling: ${persegiKililing}`);

//Persegi Panjang Sisi dan Keliling
const panjang = 6;
const lebar = 8;
const persegiPanjangSisi = rumus.persegiPanjangSisi(panjang, lebar);
const persegiPanjangKeliling = rumus.persegiPanjangKeliling(panjang, lebar);

console.log(`Persegi Panjang Sisi: ${persegiPanjangSisi}`);
console.log(`Persegi Panjang Keliling: ${persegiPanjangKeliling}`);
