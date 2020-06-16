Essay Tests

1. What is JavaScript?
2. What are the data types supported by JavaScript?
3. Is JavaScript a case-sensitive language?
4. How can you create an object in JavaScript?
5. How can you create an Array in JavaScript?
6. What are the ways to define a variable in JavaScript?
7. What are the scopes of a variable in JavaScript?
8. What is the difference between "let and "var"?
9. What is Callback function?
10. What is Promise?
11. What is Async Await?
12. What is npm?
13. What is the difference between null & undefined?
14. What is ES6 Javascript?
15. What is React.js?
16. What is Redux?
17. Editor favorite ?
18. What is unit testing ?
19. What is Linter?

Can you explain about these GIT commands and use cases:
20. Git branch
21. Git remote
22. Git push and Git pull
23. Git stash
24. Git cherry-pick

ANSWER: 
1. JavaScript adalah bahasa pemrograman web yang digunakan untuk memanipulasi element HTML dan membuat interaksi serta berbasis client (client side programming language). Artinya, JavaScript di proses di dalam web browser.

2. di dalam javascript yang mendukung tipe data nya di bagi menjadi 2 kelompok yaitu tipe data primitif (primitive type), dan tipe data object.
    - Tipe data primitif disebut demikian karena tipe data ini “sederhana” dan hanya terdiri dari 1
      nilai. Di dalam JavaScript terdapat 6 tipe data primitif:
      1. Number 
      2. String 
      3. Boolean
      4. Null
      5. Undefinied
      6. Symbol
    
    - Tipe data Object. Object bisa disebut sebagai tipe data “khusus” yang prilaku dan isinya bermacam-macam.Adapun tipe data object bawaan JavaScript adalah:
      1. Array
      2. Date
      3. RegExp
      4. Map dan WeakMap
      5. Set dan WeakSet

3. JavaScript termasuk bahasa pemrograman yang bersifat case sensitif, artinya huruf besar
dan huruf kecil dianggap berbeda. Salah menulis huruf sangat sering terjadi, apalagi fungsi-
fungsi bawaan JavaScript lumayan panjang, misalnya: document.getElementById() dan doc-
ument.getElementsByClassName() . Penulisan fungsi seperti ini harus sama persis, tidak boleh
ada salah ketik huruf besar atau kecil.

4. Di dalam JavaScript, object sangat mirip seperti array, yakni sebuah tipe data bentukan yang
terdiri dari kumpulan tipe data lain. Object bisa diisi data string, number, boolean, atau bahkan
object lain. Berbeda dengan array, object bisa memiliki function sendiri.
Object juga bisa disebut sebagai container, yakni wadah yang digunakan untuk menampung
berbagai data.
    contoh:
    let profile = {
      name: "ariyanto",
      mobile: 081341557945,
      hobies: ["futsal", "learning new language program", "traveling"],
      favorite: {
        favorite1: "eating seafod",
        favorite2: "eating fruits"
      }
    }

5. adalah tipe data yang berisi kumpulan tipe data lain. Jika anda ingin membuat banyak data yang masuk dalam satu kelompok. contoh:
 - let foods = ["nasi goreng", "bakso", "sop buah"]
 - array multideminsi:
   let foods = [
     ['nasi goreng', 15000],
     ['bakso', 17000],
     ['sop buah', 10000],
   ]

6. Secara sederhana, variabel adalah “penampung” dari sebuah data. Disebut variabel karena data
yang kita simpan bisa berubah-ubah sepanjang kode program (isinya tidak tetap). Agar bisa
diakses, setiap variabel harus memiliki “nama”.


7. Variable scope adalah istilah tentang sejauh mana sebuah variabel masih dapat diakses. Di
dalam JavaScipt terdapat global variable, yakni variabel yang bisa diakses darimana saja. Selain
itu ada local variable, yakni variabel yang hanya bisa diakses di dalam ruang lingkup terbatas,
seperti di dalam sebuah function.

8. Perbedaan antara var dan let ada di variable scope. Jika kita membuat variabel dengan var,
   - variabel tersebut dibatasi di ruang function. Dengan kata lain, yang bisa membatasi scope
variabel yang di defenisikan dengan keyword var hanyalah sebuah function.

   - Dilain pihak, variabel yang dibuat menggunakan let memiliki scope yang lebih kecil, yakni
     dibatasi oleh tanda kurung kurawal yang biasanya digunakan untuk block kode program. Selain
     itu juga dibatasi oleh function seperti layaknya variabel yang dibuat dengan var.

Berikut contoh perbedaannya:

{
var a = "Belajar JavaScript";
console.log(a);
// Belajar JavaScript
}
console.log(a);
//output
// Belajar JavaScript

{
let b = "Belajar Web Programming";
console.log(b);
// Belajar Web Programming
}
console.log(b);
//output
// ReferenceError: b is not defined

9. Callback yaitu fungsi di panggil setelah sebuah fungsi di eksekusi biasanya terdapat parameter yang dikirimkan pada fungsi seperti:
- Callback adalah function sedangkan promise adalah object.
- Callback di kirim melalui parameter, sedangkan promise mengembalikan object
- Callback digunakan untuk menghandle succes dan failure,sedangkan promise tidak
- Callback dapat digunakan untuk beberapa event sekaligus, sedangkan promise hanya untuk satu event

10. Promise umumnya digunakan sebagai alternative callback. Salah satu tantangan di callback adalah callback hell. Disebut neraka ketika ada callback didalam callback didalam callback lagi dan di dalam callback lagi. Problemnya adalah kode sulit dibaca dan penanganan error nya juga menjadi sulit. Disaat seperti ini maka promise menjadi solusi. Sebelum mendalami promise sebaiknya pahamilah terlebih dahulu konsep callback. Promise bukan untuk menggantikan callback, karena promise akan selalu berjalan asynchronous sedangkan callback bisa digunakan untuk synchronous maupun asynchronous. Benefit utama dari promise adalah membuat code lebih readable dan manajemen error yang lebih baik. 

11. Async/await adalah fitur yang hadir sejak ES2017. Fitur ini mempermudah kita dalam menangani proses asynchronous. Untuk memahami async/await harus memahami promise terlebih dahulu.
 - contoh:
 async function hello(){
   result = await  doAsync()
   console.log(result)
 }

 Keterangan :
async → mengubah function menjadi asynchronous
await → menunda eksekusi hingga proses asynchronous selesai, dari kode di atas berarti console.log(result) tidak akan di eksekusi sebelum prose doAsync( ) selesai. await juga bisa digunakan berkali-kali di dalam function

12. npm adalah Node Package install berbagai modul dan mengelola dependensi mereka. Karena itu, mengetahui npm sangatlah penting untuk orang yang bekerja dengan Node.js.

13. Null dan undefinied
- null adalah keadaan dimana data itu “kosong”. Umumnya nilai null diinput dengan sengaja oleh
kita, programmer yang membuat kode program. Berikut contoh cara memberikan tipe data null
kedalam sebuah variabel:
contoh:
 var foo = null;
 console.log(foo);
 // null

- Disisi lain, undefined menyatakan data yang tidak terdefinisi. Tapi berbeda dengan null,
biasanya nilai undefined dihasilkan dari JavaScript itu sendiri, dan sebagian besar karena
kesalahan program.
Contohnya, ketika kita mendefenisikan sebuah variabel tapi tidak memberikan nilai apapun.
Variabel ini akan berisi data undefined:

var foo;
console.log(foo);
// undefined
Sama seperti null, kita juga bisa menginput manual nilai null ke dalam sebuah variabel:

var foo = "Belajar JavaScript";
console.log(foo); // Belajar JavaScript
foo = undefined;
console.log(foo);
// undefined
Dalam kode program diatas, menginput

14. ES6 adalah sebagian besar merupakan fitur lanjutan untuk membuat ap-
likasi yang memiliki kompleksitas tinggi, seperti penggunaan JavaScript di server menggunakan 
node.js.
Diantara fitur tersebut adalah: iterator baru, python-style generator, arrow function, binary data,
typed arrays, collections (maps, sets and weak maps), promises untuk membuat asynchronous.

15. React JS dapat mendesain tampilan sederhana untuk setiap level dalam aplikasi, sehingga dapat digunakan untuk membuat dan mengembangkan pembuatan aplikasi berbasis web. Popularitasnya dapat diukur oleh aplikasi – aplikasi yang menggunakannya seperti Facebook, WhatsApp, Netflix, Instagram, Airbnb, American Express, Dropbox, Ebay, dan ratusan penyedia jasa pembuatan aplikasi berbasis web memanfaatkan kemampuan React JS.

Ada pula fitur yang diunggulkan oleh React JS yaitu :

Declarative
Yang dimaksud disini yaitu React dapat membuat UI(User Interfaces) yang interaktif, sehingga dapat dengan mudah membuat desain yang simple untuk di setiap state di dalam aplikasi. Declarative views dapat membuat kode lebih mudah untuk di prediksi dan lebih mudah untuk di debug.

Component – Based
Dapat membuat Encapsulated Component yang dapat mengatur setiap tahapannya, lalu dapat membuat complex UIs berdasarkan kemampuan itu.
Learn Once, Write Anywhere
Developer dapat men-develop fitur baru menggunakan react tanpa mengubah kode sebelumnya, react juga dapat bekerja menggunakan Node JS dan mobile apps menggunakan React Native. 

16. Redux dikenal sebagai library untuk mengelola state.Redux itu ibarat database di frontend
Redux itu ibarat database di sisi frontend. Sepertinya layaknya database kita bisa melakukan operasi database seperti query,filter,insert,delete. Jika anda dari background MVC ( Model View Controller ) redux mirip seperti Model dan Controller. Redux tidak menyebutnya database tapi store dan hanya ada satu store dalam satu aplikasi yang disebut Single Source of Truth Redux sebagai tempat businness logic
Businnes logic seperti validasi, verifikasi, authorisasi, proses asynchronous dan lain-lain, pada implementasi banyak di tempatkan di dalam redux. Memang tidak wajib tergantung dari jenis aplikasinya.

17. editor favorite saya adalah visual studio code dan sublime code . alasan nya menggunakan itu adalah penggunaan yang ringan .

18. unit testing yang sering digunakan adalah : mocha , chai , sinon

19. linter adalah sebuah aplikasi untuk pengecekan kode program.

20. git branch adalah perintah untuk melihat cabang setiap di repositori di dalam satu project 

21. git remote adalah perintah untuk menghubungkan repository project yang sedang kita kerjakan .

22. git pull dan git push
 - Perintah git pull akan mengambil commit terbaru lalu otomatis menggabungkan (merge) dengan branch yang aktif.
 - Perintah Git push untuk mengirimkan perubahan file setelah di commit ke remote repository

 23. git stash adalah stash atau di command line ditulis dengan git stash . Fitur stash ini berperan untuk menyimpan semua progress yang sudah kamu lakukan sejak commit terakhir tanpa membuat sebuah commit untuk state itu sendiri

 24. git cherry pick adalah untuk melakukan merge by commit atau merge-nya tidak sepenuhnya terhadap semua commit yang ada

