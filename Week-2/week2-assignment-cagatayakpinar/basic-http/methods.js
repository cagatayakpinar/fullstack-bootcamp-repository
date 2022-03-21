const getValues = (callback) => {
    var durum = true;
    try {
        if (durum) {
            callback(undefined, "Method ok");
        }else{
            callback("Veri Getirilemedi" ,undefined);
        }
    } catch (error) {
        callback("Veri Getirilemedi" ,undefined);
    }
};

getValues(callback);

const callback = (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}