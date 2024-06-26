# Programmer Test

## Deskripsi
Repository ini berisi berbagai solusi untuk soal-soal pemrograman dan SQL, termasuk fungsi untuk mengolah string, algoritma, dan query SQL. Berikut adalah penjelasan dari setiap bagian kode yang terdapat dalam repository ini.

## Soal 1
### Deskripsi

Soal nomor 1 menghasilkan sebuah string yang berisi angka dari 1 hingga n, tetapi dengan beberapa kondisi:

- Jika angka tersebut habis dibagi 3 dan 4, maka diganti dengan "OKYES".
- Jika angka tersebut hanya habis dibagi 3, maka diganti dengan "OK".
- Jika angka tersebut hanya habis dibagi 4, maka diganti dengan "YES".
- Selain itu, tetap menampilkan angka tersebut.

### Kode
```javascript
function skipThree(n){
    let container = ""
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 4 === 0){
            container += "OKYES"
        }else if(i % 3 === 0){
            container += "OK"
        }else if(i % 4 === 0){
            container += "YES"
        }else{
            container += i
        }
        container += " "
    }
    return container
}

console.log(skipTree(15))
```

### Output
```
1 2 OK YES 5 OK 7 YES OK 10 11 OKYES 13 14 OK
```

## Soal 2
### Deskripsi
Pada soal nomor 2 ada 4 algoritma:
#### Algoritma Bagian A
Mencetak angka dari 1 hingga n dengan pola berulang dan setiap angka harus memiliki baris sendiri.
#### Kode
```javascript
function algoritmaBagianA(n){
    let container = ""
    let flag = true
    for(let i = 1; i <= n;i++){
        container += i
        let cekking = i
        flag = true
        while(flag){
            if(cekking - 1 === 0){
                flag = false
                container += "\n"
            }else{
                container += i
                cekking--
            }
        }
    }
    return container
}

console.log(algoritmaBagianA(5))
```
#### Output
```
1
22
333
4444
55555
```
#### Algoritma Bagian B

Mencetak angka dari 1 hingga n dengan pola berulang, namun angka yang berulang menurun.

#### Kode
```javascript
function algoritmaBagianB(n){
    let container = ""
    let flag = true
    for(let i = 1; i <= n;i++){
        container += i
        let cekking = i
        flag = true
        while(flag){
            if(cekking - 1 === 0){
                flag = false
                container += "\n"
            }else{
                container += cekking -1
                cekking--
            }
        }
    }
    return container
}

console.log(algoritmaBagianB(5))

```
#### Output
```
1
21
321
4321
54321
```

#### Algoritma Bagian C

Mencetak angka dari 1 hingga n dan jika angka yang ingin di cetak sudah sampai n, maka cetak angkta dari n menuju 1 , begitu seterusnya hingga panjang perulangan yang sudah ditentukan

#### Kode
```javascript
function algoritmaBagianC(n){
    let container = ""
    let cekking = 1
    let flag = true
    for(let i = 1; i <= n;i++){
        for(let j = 1; j <= i;j++){
            container += cekking


            if(cekking === n){
                cekking--
                flag = false
            }else if(cekking === 1 && flag === false){
                cekking++
                flag = true
            }else if(!flag){
                cekking--
            }else if(flag){
                cekking++
            }

            if(j === i){
                
                container += "\n"
                break;
            }
        }
    }
    return container
}

console.log(algoritmaBagianC(5))

```
#### Output
```
1
23
454
3212
34543
```

#### Algoritma Bagian D

Mencetak matriks n x n dengan pola pengisian kolom mulai dari atas ke bawah lalu di mulai lagi dari bawah ke atas, hingga panjang yang sudah di tentukan.

#### Kode
```javascript
function algoritmaBagianD(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }

    let value = 1;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < n; j++) {
                matrix[j][i] = value++;
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                matrix[j][i] = value++;
            }
        }
    }


    let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += matrix[i][j] + " ";
        }
        result = result.trim() + "\n";
    }

    return result.trim();
}

console.log(algoritmaBagianD(5))

```
### Output
```
1 10 11 20 21
2 9  12 19 22
3 8  13 18 23
4 7  14 17 24
5 6  15 16 25
```

## Soal 3
### Deskripsi

Soal nomor 3 bertujuan untuk menghapus semua angka yang habis dibagi 3 dari array n dan mengembalikan array yang sudah diurutkan secara ascending.

### Kode
```javascript
function removeThree(n){
    let container = []
    for(let i = 0; i < n.length; i++){
        if(n[i]%3 !== 0){
            container.push(n[i])
        }
    }

    let result = container.sort((a,b)=>a-b)

    return result;
}

let arr = [12,9,13,6,10,4,7,2]

console.log("n = ", removeThree(arr))
```

### Output
```
n =  [2, 4, 7, 10, 13]
```

## Soal 4
### Deskripsi

Soal nomor 4 menampilkan data menggunanakn query dari beberapa kasus berikut:

#### Bagian A
Menampilkan data barang dengan harga lebih dari 10000 dan diurutkan berdasarkan Harga satuan (ascending)

#### Query
```sql
SELECT *
FROM barang
WHERE harga > 10000
ORDER BY harga ASC;
```
#### Bagian B
Menampilkan data pelanggan yang namanya mengandung huruf `g` dengan alamat `Bandung`

#### Query
```sql
SELECT *
FROM pelanggan
WHERE nama LIKE '%g%' AND alamat = 'Bandung';
```
#### Bagian C
Menampilkan data transaksi dengan detail pelangan dan barang serta total harga per transaksi. dan di urutkan berdasarkan kode transaksi dan nama pelanggan

#### Query
```sql
SELECT
    t.kode AS kode,
    t.tanggal AS tanggal,
    p.nama AS "nama pelanggan",
    b.nama AS "nama barang",
    t.jumlah_barang AS jumlah,
    b.harga AS "harga satuan",
    t.jumlah_barang * b.harga AS total
FROM
    transaksi t
        JOIN
    pelanggan p ON t.kode_pelanggan = p.kode
        JOIN
    barang b ON t.kode_barang = b.kode
ORDER BY
    p.nama ASC, t.kode ASC;
```
#### Bagian D
Menampilkan data rekap nama, jumlah data dan total harga pembelian.

#### Query
```sql
SELECT
    p.nama AS "nama pelanggan",
    SUM(t.jumlah_barang) AS jumlah,
    SUM(t.jumlah_barang * b.harga) AS "total harga"
FROM
    transaksi t
        JOIN
    pelanggan p ON t.kode_pelanggan = p.kode
        JOIN
    barang b ON t.kode_barang = b.kode
GROUP BY
    p.nama;
```