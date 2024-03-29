// Class in JS
//--------------

// Object literal
// const mobil1 = {
//     transmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
// }

// const mobil2 = {
//     transmisi: "Automatic",
//     bahanBakar: "Solar",
//     mesin: 2000,
// }
// console.log(mobil1);
// console.log(mobil2);

class Mobil {
    constructor(transmisi, bahanBakar, mesin) {
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin() {
        console.log(`Mesin ${this.transmisi} dinyalakan`);
    }
}

// const mobil1 = new Mobil("Manual", "Bensin", 1500);
// mobil1.nyalakanMesin();
// const mobil2 = new Mobil("Automatic", "Solar", 2000);
// mobil2.nyalakanMesin();

class Toyota extends Mobil{
    constructor(merek, warna, transmisi, bahanBakar, mesin ){
        super(transmisi, bahanBakar, mesin);
        this.merek = merek;
        this.warna = warna;
    }

    //Overriding
    nyalakanMesin(){
        console.log(`Mobil merek ${this.merek} dinyalakan`);
    }
    
    matikanMesin(){
        console.log(`Mobil merek ${this.merek} dimatikan`);
    }
}

const agyaPutih = new Toyota("Agya", "Putih", "Automatic", "Bensin", 1000);
agyaPutih.nyalakanMesin();
agyaPutih.matikanMesin();
console.log(agyaPutih);