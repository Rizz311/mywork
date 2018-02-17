



//what does user see
//their horosocope
//clear the inputs

document.getElementById("enter").onclick= getHoroscope;
// document.getElementById("month").value;
// document.getElementById("day").value;
// document.getElementById("horoscope").innerHTML= getHoroscope;
//what user can do
//user can enter month
// user can enter date
function getHoroscope() {


  var month =  parseFloat(document.getElementById("month").value)
  var day =  parseFloat(document.getElementById("day").value)




  //what user can expect
  //after entering month and day, rceieve horoscope
  //get 1 value (string) out of inputs
  //horosocope sign
  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    var capri = "Capricorn"
    var  future ="You will have a blessed day"
    document.getElementById("horoscope").innerHTML = capri;
    document.getElementById("future").innerHTML = future;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    var aqua = "Aquarius"
    var  future ="You will have a okay day"
    document.getElementById("horoscope").innerHTML = aqua;
    document.getElementById("future").innerHTML = future;
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    var pisces = "Pisces"
    var  future ="You will have a dramatic day"
    document.getElementById("horoscope").innerHTML = pisces;
    document.getElementById("future").innerHTML = future;
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    var aries = "Aries"
    var  future ="You will have a crazy day"
    document.getElementById("horoscope").innerHTML = aries;
    document.getElementById("future").innerHTML = future;
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    var taur = "Taurus"
    var  future ="You will have a tragic day"
    document.getElementById("horoscope").innerHTML = taur;
    document.getElementById("future").innerHTML = future;
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    var gem = "Gemini"
    var  future ="You will have a fake day"
    document.getElementById("horoscope").innerHTML = gem;
    document.getElementById("future").innerHTML = future;
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    var cancer = "Cancer"
    var  future ="You will have an emotional day"
    document.getElementById("horoscope").innerHTML = cancer;
    document.getElementById("future").innerHTML = future;
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    var leo = "Leo"
    var  future ="You will have a weird day"
    document.getElementById("horoscope").innerHTML = leo;
    document.getElementById("future").innerHTML = future;
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    var virgo = "Virgo"
    var  future ="You will have a beautiful day"
    document.getElementById("horoscope").innerHTML = virgo;
    document.getElementById("future").innerHTML = future;
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    var libra = "Libra"
    var  future ="You will have a buff day"
    document.getElementById("horoscope").innerHTML = libra;
    document.getElementById("future").innerHTML = future;
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    var scorp = "Scorpio"
    var  future ="You will have a slimy day"
    document.getElementById("horoscope").innerHTML = scorp;
    document.getElementById("future").innerHTML = future;
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    var sag = "Sagittarius"
    var  future ="You will have a moist day"
    document.getElementById("horoscope").innerHTML = sag;
    document.getElementById("future").innerHTML = future;
  }

}
