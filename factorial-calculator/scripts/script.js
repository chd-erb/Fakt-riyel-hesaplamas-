function faktoryelHesapla(n) {
    if (n < 0) {
        return "Lütfen pozitif bir tam sayı giriniz.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let faktoryel = 1;
    for (let i = 2; i <= n; i++) {
        faktoryel *= i;
    }
    return faktoryel;
}

document.getElementById("calculateButton").addEventListener("click", function() {
    const girdi = document.getElementById("numberInput").value;
    const sayi = parseInt(girdi);
    const sonuc = faktoryelHesapla(sayi);
    document.getElementById("result").innerText = `${sayi} sayısının faktöriyeli: ${sonuc}`;
});