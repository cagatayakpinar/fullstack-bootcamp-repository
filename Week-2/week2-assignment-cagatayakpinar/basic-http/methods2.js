const getValue = () => {
    return new Promise((resolve, reject) => {
        var durum = true;
        if (durum) {
            resolve("Veriler Getirildi.")
        } else {
            reject("Verilerde hata oluştu.")
        }
    });
};

getValue().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
}).finally(fin=>{
    console.log("Her türlü Çalışırım.");
})