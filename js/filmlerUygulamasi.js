const formDOM = document.querySelector("#form");
const inputDOM = document.querySelector("#arama");
const anasayfaDonusDOM = document.querySelector("#anasayfaButon");

const filmlerApi = new filmlerAPI();

runEventListeners();


function runEventListeners(){
    document.addEventListener("DOMContentLoaded",async() => {      
       await filmlerApi.getPopulerMovies()});
    formDOM.addEventListener("submit",filmleriGetir);
    anasayfaDonusDOM.addEventListener("click",async() => {       // fonksiyonu direkt filmlerApi.getPopulerMovies() seklinde yazmadik. Cunku bu sekilde fonksiyon tetiklenme olmadan hemen calisirdi !!!  Ancak Arrow fonksiyonu ile sarmalandığında, yalnızca olay gerçekleştiğinde çalışır.
       await filmlerApi.getPopulerMovies()})
}




function filmleriGetir(e){
    e.preventDefault()
    const filmAdi = inputDOM.value.trim()
    if(filmAdi != ""){                              // input a herhangi bir film adi girilmisse calisir
        console.log(filmAdi)
        filmlerApi.kullaniciFilmAramasi(filmAdi)
        inputDOM.value = ""                         // arama yapildiktan sonra input icerisine girilen deger sifirlandi
    }else{
        alert("Lutfen Film Adi Girin")
    }
}
