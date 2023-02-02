var data = [2, 6, 1, 0];
console.log(`data = ${data.join(' - ')}`);

var short = function() {
    // index looping
    for(var i = 0; i < data.length - 1; i++) {
        for(var j = 0; j < data.length - 1; j++) {
            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
        console.log('proses ke-${i + 1} = ${data.join(' - ')}');
    }
}