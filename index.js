var kullanicilar=[
    {email:"israfil@gmail.com",sifre:"12345"},
    {email:"özge@gmail.com",sifre:"123456"}
]

var tivitler=[
    {email:"israfil@gmail.com",tivit:"Bugün hava çok sıcak"},
    {email:"özge@gmail.com",tivit:"Bugün ben gezmeye gitti"},
    {email:"israfil@gmail.com",tivit:"Bugün ders çalıştım"}
]

var email=prompt("email?")
var sifre=prompt("sifre?")

function giris(){
if ((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre)|| 
     email==kullanicilar[1].email && sifre==kullanicilar[1].sifre) {
    console.log(tivitler)
     }else{
        console.log("Kullanici Adi veya Şifresi Hatalı")
    }
 }
 
giris(email,sifre)




