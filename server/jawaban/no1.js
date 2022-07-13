let firstMoney = 1000000000
let sisa = 650000000
let moneyToBank = firstMoney - sisa

function investToBankPerYear(){
    moneyToBank = 350000000
    let labaPerTahun = 35/1000
    let hasil1;
    return hasil1 = (moneyToBank * labaPerTahun * 2)
}
// console.log(investToBankPerYear());

// console.log(sisa);
function investToObligasiNegaraPerYear() {
    let hasilSisa = sisa * 30/100
    let labaPerTahun = 13/100
    let hasil2;
    return hasil2 = (hasilSisa * labaPerTahun * 2)
}

// console.log(investToObligasiNegaraPerYear());

function investToSahamAPerYear() {
    let hasilSisa = sisa * 35/100
    let labaPerTahun = 145/1000
    let hasil3;
    return hasil3 = (hasilSisa * labaPerTahun* 2)
}
// console.log(investToSahamAPerYear());

function investToSahamBPerYear(){
    let hasilSisa = sisa * 35/100
    let labaPerTahun = 125/1000
    let hasil4;

    return hasil4 = (hasilSisa * labaPerTahun * 2)
}

// console.log(investToSahamBPerYear());

const totalBenefitsInvestPer2Year = () => {
    return (investToBankPerYear() + investToObligasiNegaraPerYear() + investToSahamAPerYear() + investToSahamBPerYear())
}
console.log(totalBenefitsInvestPer2Year());
//hasil 198.050.000