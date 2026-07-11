window.onload = startHearts();
function startHearts() {
  const _0xfc3612 = document.getElementById("hearts");
  setInterval(() => {
    const _0x4c7945 = document.createElement('div');
    _0x4c7945.classList.add('heart');
    _0x4c7945.style.left = Math.random() * 0x64 + 'vw';
    _0x4c7945.style.animationDuration = Math.random() * 0x2 + 0x3 + 's';
    _0x4c7945.innerText = '❤️';
    _0xfc3612.appendChild(_0x4c7945);
    setTimeout(() => _0x4c7945.remove(), 0x1388);
  }, 0x12c);
}
document.addEventListener("contextmenu", _0x1ef253 => _0x1ef253.preventDefault());
document.onkeydown = function (_0x55ff35) {
  if (_0x55ff35.keyCode == 0x7b || _0x55ff35.ctrlKey && _0x55ff35.shiftKey && (_0x55ff35.keyCode == 'I'.charCodeAt(0x0) || _0x55ff35.keyCode == 'J'.charCodeAt(0x0)) || _0x55ff35.ctrlKey && _0x55ff35.keyCode == 'U'.charCodeAt(0x0)) {
    return false;
  }
};
function initengahan() {
  kadoIn.style = "display:none";
  ket.style = "display:none";
  Content.style = 'opacity:1;margin-top:0';
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1.5);";
}
async function mulainama() {
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1);";
  fotostiker.style = 'display:inline-flex;';
  setTimeout(ftmuncul, 0xc8);
  setTimeout(kethalo, 0x1f4);
}
function ftmuncul() {
  if (ftganti == 0x0) {
    fotostiker.src = deffotostiker;
  }
  if (ftganti == 0x1) {
    fotostiker.src = fotostiker1.src;
  }
  if (ftganti == 0x2) {
    fotostiker.src = fotostiker2.src;
  }
  if (ftganti == 0x3) {
    fotostiker.src = fotostiker3.src;
  }
  if (ftganti == 0x4) {
    fotostiker.src = fotostiker4.src;
  }
  if (ftganti == 0x5) {
    fotostiker.src = fotostiker5.src;
  }
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}
function fthilang() {
  fotostiker.style = "display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";
}
function jjfoto() {
  fotostiker.style.animation = "rto .8s infinite alternate";
}
function bqmuncul() {
  bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
  mulaiketik1();
}
function bqhilang() {
  wallpaper.style = "transform: scale(2);";
  bodyblur.style = "opacity:.3";
  bq.style = "position:relative;transition:all .7s ease;";
}
function kethalo() {
  new TypeIt("#halo", {
    'strings': ['' + vketikhalo],
    'startDelay': 0x32,
    'speed': 0x28,
    'waitUntilVisible': true,
    'afterComplete': function () {
      halo.innerHTML = vketikhalo;
      setTimeout(bqmuncul, 0xc8);
    }
  }).go();
}
function tombol() {
  wallpaper.style = "transform: scale(1);";
  Tombol.style = "opacity:1;transform: scale(1);";
  if (fungsi == 0x2) {
    By.innerHTML = "&#128140; I hope you like it.";
  }
}
document.getElementById('By').onclick = function () {
  if (fungsi == 0x1) {
    Tombol.style = '';
    fthilang();
    fungsi = 0x0;
    pertanyaan();
  }
  if (fungsi == 0x2) {
    Tombol.style = '';
    menuju();
  }
};
const waktuSekarang = new Date().getHours();
let ucapan;
if (waktuSekarang < 0xa) {
  ucapan = "Good Morning, ";
} else {
  if (waktuSekarang < 0x10) {
    ucapan = "Good Afternoon, ";
  } else if (waktuSekarang < 0x13) {
    ucapan = "Good evening, ";
  } else {
    ucapan = "Good night, ";
  }
}
vketik1 = kalimat.innerHTML;
kalimat.innerHTML = '';
function mulaiketik1() {
  new TypeIt('#kalimat', {
    'strings': ['' + vketik1],
    'startDelay': 0x190,
    'speed': 0x14,
    'cursor': false,
    'deleteSpeed': 0x14,
    'breakLines': false,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      aktiopsL();
    }
  }).go();
}
opsLclick = 0x0;
opsLcheck = 0x0;
defopsL = opsL.innerHTML;
document.getElementById('bq').onclick = function () {
  if (opsLclick == 0x1) {
    if (opsLcheck == 0x1) {
      setTimeout(aktipesan1, 0x190);
      fthilang();
      ftganti = 0x1;
      setTimeout(ftmuncul, 0x12c);
    }
    if (opsLcheck == 0x2) {
      mulaiketik3();
    }
    if (opsLcheck == 0x3) {
      mulaiketik4();
    }
    if (opsLcheck == 0x4) {
      mulaiketik5();
    }
    if (opsLcheck == 0x5) {
      kethalo2();
    }
    otomatis();
    opsL.style.opacity = '0';
    opsLclick = 0x0;
  }
};
function aktiopsL() {
  opsL.innerHTML = defopsL;
  opsL.style.opacity = '.8';
  opsLclick = 0x1;
  opsLcheck += 0x1;
}
function gantiopsL() {
  opsL.innerHTML = "[ Klik beberapa LOVE-nya ]";
  opsL.style.opacity = '.8';
}
function otomatis() {
  pesan3.style = "transition:none";
  pesan8.style = "display:none";
  kalimat.style = "opacity:0";
  if (otoaktipesan == 0x0) {
    setTimeout(otolanj, 0x190);
  }
}
function otolanj() {
  kalimat.style = 'opacity:1';
}
function aktipesan1() {
  kalimat.innerHTML = pesan1.innerHTML;
  kolombaru.style = 'position:relative;opacity:1;transform:scale(1);';
}
vketik2 = pesan2.innerHTML;
function aktipesan2() {
  wallpaper.style = "transform: scale(1.5);";
  kolombaru.style = '';
  kalimat.innerHTML = '';
  new TypeIt("#kalimat", {
    'strings': ['' + vketik2],
    'startDelay': 0x14,
    'speed': 0x28,
    'cursor': true,
    'deleteSpeed': 0x32,
    'breakLines': false,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      setTimeout(aktipesan3, 0x1f4);
    }
  }).go();
}
vketik3 = pesan3.innerHTML;
pesan3.innerHTML = '';
function aktipesan3() {
  kalimat.style = "display:none";
  pesan3.style = "position:relative;opacity:1;transform: scale(1)";
  wallpaper.style = "transform: scale(1)";
  fthilang();
  ftganti = 0x2;
  setTimeout(ftmuncul, 0x12c);
  new TypeIt("#pesan3", {
    'strings': ['' + vketik3],
    'startDelay': 0x1,
    'speed': 0x2d,
    'cursor': true,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      pesan3.innerHTML = vketik3;
      setTimeout(otomatis, 0x258);
      setTimeout(aktipesan4, 0x3f2);
    }
  }).go();
}
function aktipesan4() {
  wallpaper.style = "transform: scale(1.5);";
  kalimat.innerHTML = pesan4.innerHTML + nama + " 🥳";
  kalimat.style = "transform:scale(1.2)";
  setTimeout(aktipesan5, 0x3e8);
}
vketik5 = pesan5.innerHTML;
pesan5.innerHTML = '';
function aktipesan5() {
  fthilang();
  ftganti = 0x3;
  setTimeout(ftmuncul, 0x12c);
  wallpaper.style = "transform: scale(1);";
  new TypeIt("#pesan5", {
    'strings': ['' + vketik5],
    'startDelay': 0x1,
    'speed': 0x34,
    'cursor': true,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      pesan5.innerHTML = vketik5 + " ><";
      setTimeout(aktipesan6, 0x320);
    }
  }).go();
}
vketik6 = pesan6.innerHTML;
pesan6.innerHTML = '';
function aktipesan6() {
  wallpaper.style = "transform: scale(1.5);";
  new TypeIt("#pesan6", {
    'strings': ['' + vketik6],
    'startDelay': 0x1,
    'speed': 0x34,
    'cursor': true,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      pesan6.innerHTML = vketik6;
      setTimeout(aktipesan7, 0x320);
    }
  }).go();
}
vketik7 = pesan7.innerHTML;
pesan7.innerHTML = '';
function aktipesan7() {
  fthilang();
  ftganti = 0x1;
  setTimeout(ftmuncul, 0x12c);
  wallpaper.style = "transform: scale(1);";
  new TypeIt("#pesan7", {
    'strings': ['' + vketik7],
    'startDelay': 0x1,
    'speed': 0x34,
    'cursor': true,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      pesan7.innerHTML = vketik7;
      fungsi = 0x1;
      setTimeout(tombol, 0x190);
    }
  }).go();
}
vketik81 = pesan8.innerHTML;
pesan8.innerHTML = '';
vketik9 = pesan9.innerHTML;
pesan9.innerHTML = '';
vketik10 = pesan10.innerHTML;
pesan10.innerHTML = '';
function aktipesan8() {
  pesan5.style = 'display:none';
  pesan6.style = "display:none";
  pesan7.style = "display:none";
  pesan8.style = '';
  wallpaper.style = "transform: scale(1);";
  ftganti = 0x4;
  ftmuncul();
  new TypeIt("#pesan8", {
    'strings': ['' + vketik8, '' + vketik9],
    'startDelay': 0x14,
    'speed': 0x2d,
    'cursor': true,
    'deleteSpeed': 0x1e,
    'breakLines': false,
    'waitUntilVisible': true,
    'lifelike': true,
    'afterComplete': function () {
      pesan8.innerHTML = vketik9;
      setTimeout(otomatis, 0x514);
      setTimeout(aktipesan10, 0x6ae);
    }
  }).go();
}
function aktipesan10() {
  wallpaper.style = "transform: scale(1.5);";
  fthilang();
  ftganti = 0x5;
  setTimeout(ftmuncul, 0x12c);
  otoaktipesan = 0x1;
  otomatis();
  setTimeout(toaktipesan, 0x12c);
  setInterval(berjatuhan, 0x190);
  fungsi = 0x2;
  setTimeout(tombol, 0x7d0);
}
var otoaktipesan = 0x0;
function toaktipesan() {
  kalimat.innerHTML = vketik10;
  kalimat.style = "transform:scale(1);font-size:24px;font-family:var(--gaya-font2)";
}
document.getElementById("lv1").onclick = function () {
  lv1.style = 'opacity:0';
  slov += 0x1;
  this.onclick = null;
  checkslov();
};
document.getElementById("lv2").onclick = function () {
  lv2.style = "opacity:0";
  slov += 0x1;
  this.onclick = null;
  checkslov();
};
document.getElementById('lv3').onclick = function () {
  lv3.style = "opacity:0";
  slov += 0x1;
  this.onclick = null;
  checkslov();
};
document.getElementById("lv4").onclick = function () {
  lv4.style = "opacity:0";
  slov += 0x1;
  this.onclick = null;
  checkslov();
};
var slov = 0x0;
function checkslov() {

    if (slov == 4) {

        kolombaru.style="position:relative;transform:scale(1)";

        firework();

        setTimeout(firework,600);

        setTimeout(firework,1200);

        setInterval(confetti,120);

        setInterval(berjatuhan,250);

        setInterval(createPetal,400);

        otomatis();

        setTimeout(aktipesan2,400);

    }

}
async function pertanyaan() {
  var {
    isConfirmed: _0x29cfba
  } = await swals.fire({
    'title': nama + " " + tanya,
    'text': '' + opstanya,
    'imageUrl': '' + fotostiker6.src,
    'showCancelButton': true,
    'confirmButtonText': '' + tompositif,
    'cancelButtonText': '' + tomnegatif
  });
  if (_0x29cfba) {
    await swalst.fire({
      'title': '' + katatambahan.innerHTML,
      'timer': 0x7d0,
      'imageUrl': '' + stikerditolak.src
    });
    vketik8 = vketik81;
    aktipesan8();
  } else {
    await swalst.fire({
      'title': '' + kataditolak.innerHTML,
      'timer': 0x7d0,
      'imageUrl': '' + stikerditolak.src
    });
    vketik8 = '';
    aktipesan8();
  }
}
