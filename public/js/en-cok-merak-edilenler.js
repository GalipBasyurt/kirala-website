let item1content = `<p>
Kiralamanı hizmet bölgesi içinde park yasağı olmayan, herkesin
erişimine açık olan yerlerde sonlandırmalısın. Hizmet bölgemizin
detaylarını mobil uygulamamız üzerinden her zaman
görüntüleyebilirsin.
</p>
<p>
Hatalı ve ücretli yerlere park etmen sebebiyle doğabilecek masraf
ve ücretlerin sana yansıtılabileceğini unutmamalısın. Oluşabilecek
masraflar için, mobil uygulamamızda yer alan “Ücret ve Masraf
Politikası”nı inceleyebilirsin.
</p>
<p>
Kirala arabalarını tüm İspark otoparklarına park edebilirsin.
Arabayı İspark’tan çıkarırken veya bırakırken ödediğin otopark
tutarının %10 fazlası Kirala Puan olarak hesabına yüklenir.
</p>
<p>
Eğer kiralama yapacağın araba İspark’taysa, arabayı İspark’tan
çıkarırken ödediğin otopark fişinin fotoğrafını, aktif sürüş
ekranında yer alan “İspark Fişi Yükle” alanından yüklemelisin.
</p>
<p>
Eğer kiralamanı İspark’ta sonlandırıyorsan, kiralaman devam
ederken İspark ödemesi yaparsan, otopark fişinin fotoğrafını aktif
sürüş ekranında yer alan “İspark Fişi Yükle” alanından
yüklemelisin. Kiralamanı bitirip arabayı kilitledikten sonra
İspark ödemesi yaparsan, otopark fişinin fotoğrafını web
sitemizdeki Bize Ulaş formunda yer alan “Kirala Adına Yaptığın
Harcama Talepleri” başlığından yüklemelisin.
</p>
<p>
Kiralamanı İspark otoparkında sonlandırıyorsan ve otopark ödemesi
senden alınmadıysa, senden sonraki kullanıcının ödeme yapabilmesi
için İspark fişini arabanın içerisinde, camdan görünecek şekilde
gösterge panelinin üzerine bırakmalısın.
</p>`;

let item2content = `<p>Kiralama süresince yapacağın köprü geçiş ücretleri, geçiş yaptığın köprü ve otoyola göre hesaplanır. Bu ücret, kiralama ücretiyle birlikte ya da tarafına ayrıca yansıtılıp kredi kartından tahsil edilir.</p>`;

let item3content = `<p>Kirala arabaları ile şehir dışına çıkabilirsin, ancak kiralamanı hizmet bölgesine geri dönmeden sonlandıramayacağını unutmamalısın.</p>
<p>Hizmet bölgemizin detaylarını mobil uygulamamız üzerinden her zaman görüntüleyebilirsin.
</p>
`;

let item4content = `<ul>
<li>
  <span
    ><i class="fa-solid fa-arrow-right"></i>En az bir yıllık
    Türkiye Cumhuriyeti B tipi sürücü ehliyetine sahipsen,
  </span>
</li>
<li>
  <span
    ><i class="fa-solid fa-arrow-right"></i>Son bir yıl içinde
    ilgili makamlarca ehliyetine el konulmamışsa,
  </span>
</li>
<li>
  <span
    ><i class="fa-solid fa-arrow-right"></i>Son bir yıl içinde
    ikiden fazla kusurlu durumda kaza yapmamışsan,
  </span>
</li>
<li>
  <span
    ><i class="fa-solid fa-arrow-right"></i>Türkiye’de ikamet
    ediyorsan,
  </span>
</li>
<li>
  <span
    ><i class="fa-solid fa-arrow-right"></i>Son kullanma tarihi
    geçmemiş, internet alışverişine açık olan ve yeterli limite
    sahip bir kredi kartına sahipsen,
  </span>
</li>
<li>
  <span
    ><i class="fa-solid fa-arrow-right"></i>iOS veya Android
    işletim sistemine sahip akıllı cep telefonu sahibiysen,
  </span>
</li>
<p>Kirala'ya üye olabilirsin.</p>
</ul>`;

const cardItems = document.querySelectorAll(".card-item");
const content = document.querySelector(".content");

cardItems.forEach((card, index) => {
  card.addEventListener("click", function () {
    cardItems.forEach((item, index) => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    let newContent = getContentByIndex(index);

    setTimeout(() => {
      content.innerHTML = newContent;
    }, 200);
  });
});

const contents = [item1content, item2content, item3content, item4content];

function getContentByIndex(index) {
  return contents[index];
}
