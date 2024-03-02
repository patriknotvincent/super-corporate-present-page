document.addEventListener("DOMContentLoaded", function () {
  const itemsForSale = [
    {
      id: 1,
      title: "Kortregel 45X45 100m",
      description:
        "Regel för att regla upp saker. 100 meter borde räcka en bit.",
      imageUrl: "https://media.hornbach.se/hb/packshot/as.47234583.jpg?dvid=8",
    },
    {
      id: 2,
      title: "Fujifilm Instax Square SQ40 kamera",
      description:
        "Fånga dina sämsta/bästa stunder i livet och få dem utskrivna direkt med denna direktfilmskamera från Fujifilm.",
      imageUrl:
        "https://images.clasohlson.com/medias/sys_master/hb2/hd7/68352281247774.jpg",
    },
    {
      id: 3,
      title: "Genuine Leather Professional Carpenters Tool Belt",
      description:
        "Djupa fickor för mutter och bultar, spik och skruvar, måtthängare, penishållare, m.m",
      imageUrl:
        "https://m.media-amazon.com/images/I/71BkMJtItZL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      title: "2TB M.2 PCIe Gen4 NVMe SSD",
      description: "Schysst HÅRD /wink Disk, 5000mb/s",
      imageUrl:
        "https://m.media-amazon.com/images/I/51k5wAFZgFL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      title: "Tågstation Lego",
      description: "Ett najs lego set för sånna tågförare",
      imageUrl:
        "https://www.lego.com/cdn/cs/set/assets/blt7f68beef7eaa33a0/60335_alt5.png?format=webply&fit=bounds&quality=70&width=1200&height=1200&dpr=1.5",
    },
    {
      id: 6,
      title: "Konduktörshatt",
      description: "Essentiell hatt för alla vuxna konduktörer",
      imageUrl:
        "https://static.partyking.org/fit-in/1300x0/products/original/konduktor-hatt-1.jpg",
    },
    {
      id: 7,
      title: "Lär dig riktig programmering",
      description: "Med detta set kan du lära dig hård programmering",
      imageUrl:
        "https://www.kjell.com/globalassets/productimages/271949_87875.jpg?ref=2EB269696A&format=jpg&w=960&h=960&mode=pad",
    },
    {
      id: 8,
      title: "STOR isskulptur",
      description: "Med denna skulptur kan du shotta direkt från källan",
      imageUrl:
        "https://m.media-amazon.com/images/I/61U9AI9E3dL._AC_SL1500_.jpg",
    },
    {
      id: 9,
      title: "Luva för höst och vinter",
      description: "Hur ska du annars betala tillbaka CSN-lånet?",
      imageUrl:
        "https://m.media-amazon.com/images/I/71CiqKT77pL._AC_SX679_.jpg",
    },
    {
      id: 10,
      title: "Xiaman Mezcal",
      description: "En redig mescal (typ tequila) för en redig lokförare",
      imageUrl:
        "https://product-cdn.systembolaget.se/productimages/32869212/32869212_400.png?q=75&w=2000",
    },
    {
      id: 11,
      title: "Bask in the glory of the Holy Emperor",
      description: "A warrior of Holy Terra to safeguard your domicile! ",
      imageUrl: "https://i.ebayimg.com/images/g/vcAAAOSwLxxlbx1V/s-l1600.jpg",
    },
    {
      id: 12,
      title: "The Chocolate Block",
      description:
        "3 liter (Jeroboam) gött rödpang från Sydafrika! Mycket fruktig smak med fatkaraktär, inslag av björnbär, choklad, svarta vinbär, plommon, peppar och vanilj.",
      imageUrl:
        "https://product-cdn.systembolaget.se/productimages/11072727/11072727_600.png",
    },
    {
      id: 13,
      title: "Märklin Dumpvagnset",
      description: "Dump cars with ribbed side walls",
      imageUrl:
        "https://cdn.starwebserver.se/shops/tag1/files/cache/48459_grande.jpg?_=1642609884",
    },
    {
      id: 14,
      title: "Se öknen som den var tänkt!",
      description:
        "Biljetter i önskat antal till att se Dune 2 i naturtrogen återskapelse",
      imageUrl:
        "https://www.nfbio.se/sites/nfbio.se/files/styles/movie_poster_teaser/public/media-images/2024-01/gmnt-ea3f5c9e78-20614-vst-65ba13686ca62.jpeg?itok=Ct1s54AT",
    },
    {
      id: 15,
      title: "Fyra timmar massage från BIG BALLS",
      description: "Just a AC/DC song ",
      imageUrl: "bigballs.png",
    },
    {
      id: 16,
      title: "Stöd för din cykel",
      description:
        "20st cykelstöd så du aldrig behöver lägga din cykel ned igen.",
      imageUrl:
        "https://productimages.biltema.com/v1/image/imagebyfilename/27-6001_xl_1.jpg",
    },
    {
      id: 17,
      title: "Poggio al Vento",
      description:
        "En finfin brunello från producenten Col d'Orcia årgång 2001(!). Här har du en härlig ålder som ger komplexa smaker av läder och gammal fåtölj. Antagligen svingott",
      imageUrl:
        "https://product-cdn.systembolaget.se/productimages/34707315/34707315_400.png?q=75&w=2000",
    },
    {
      id: 18,
      title: "Avståndsmätare",
      description:
        "En avståndsmätare som mäter med hjälp av laser, typ som på film! High-tech och användbart",
      imageUrl:
        "https://proffsmagasinet-res.cloudinary.com/images/f_auto/1005004/Bosch%20GLM%2040%20Avst%C3%A5ndsm%C3%A4tare.jpg",
    },
    {
      id: 19,
      title: "Jarth-It Maya aluminiumram Trio Whiteboard",
      description:
        "Whiteboard för att skriva och visa information, men också för att dölja konfidentiellt material",
      imageUrl:
        "https://m.media-amazon.com/images/I/51j75I46MeL._AC_SL1500_.jpg",
    },
    {
      id: 20,
      title: "Drick som Bond",
      description: "Somalier somalier get me a Bollinger",
      imageUrl:
        "https://www.sparklingdirect.co.uk/cdn-cgi/image/width=200,quality=75/catimage/bollinger-champagne-magnum-150cl-in-wooden-gift-box-323.jpg",
    },
    {
      id: 21,
      title: "Din helt egna Aston Martin",
      description:
        "Glid mellan skrivbordsateraljer med din helt egna V12 Vantage!",
      imageUrl:
        "https://model-universe.com/wp-content/uploads/1-18-aston-martin-v12-vantage-roadster-01-1536x1024.jpg",
    },
    {
      id: 22,
      title: "Korslaser",
      description:
        "Bra när man ska sätta upp tavlor eller hyllor som gärna hänger rakt.",
      imageUrl:
        "https://proffsmagasinet-res.cloudinary.com/images/f_auto/ProductImage28840001/Bosch%20GCL%202-15%20Korslaser.jpg",
    },
    {
      id: 23,
      title: "Multimeter",
      description: "Mätning av strömfrekvens/AC-spänning, riktigt effektiv.",
      imageUrl: "https://m.media-amazon.com/images/I/61g5gMyQ08L._SL1500_.jpg",
    },
    {
      id: 24,
      title: "Chakrwalaigname",
      description: "Aligna ditt rot-chakra",
      imageUrl:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/08/7-chakras-header-1-800x700.png",
    },
    {
      id: 25,
      title: "BookBook macBook Pro case",
      description:
        "Perfekt att bära runt på för dig som vill låtsas att du är läskunning men egentligen bara har med dig en dator för att kunna porrsurfa med stor skärm på jobb-muggen",
      imageUrl:
        "https://www.iphonebutiken.se/files/2019/580x380/twelve-south-bookbook-macbook-pro-16-2021-1_x2.jpg",
    },
    {
      id: 26,
      title: "Dörrhandtag och / eller annat skoj",
      description: "Polymorfistiskt dörrhandtag för utvärtes och invärtes bruk",
      imageUrl:
        "https://i.etsystatic.com/27849328/r/il/be8082/3641170076/il_794xN.3641170076_tls0.jpg",
    },
    {
      id: 27,
      title: "BARBERIANS - RAKSET",
      description:
        "Gör din skäggvård till en pretentiös stund för dig själv. Lås ute omvärlden och din sambo och njut av att gegga ner din haka med vitt skum i stil",
      imageUrl:
        "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt952ae62cdcbfdd2f/655350e19d8002040acbb954/artikelnr._21423_shaving_set_box_-_pic1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=828",
    },
    {
      id: 28,
      title: "Presentkort på Grandpa",
      description:
        "Här finns kläder från Patagonia och annat skit som du gillar",
      imageUrl:
        "https://i0.wp.com/cartergood.com/wp-content/uploads/2016/11/Ripped-Grandpa.jpg?ssl=1",
    },
    {
      id: 29,
      title: "Le Creuset Signature gjutjärn",
      description:
        "Perfekt för alla värmekällor inklusive induktion och ugnen, Made in the land of love.",
      imageUrl:
        "https://m.media-amazon.com/images/I/61VE0vnDODL._AC_SL1500_.jpg",
    },
    {
      id: 30,
      title: "Rakapparat",
      description: "Gör som andra män och sluta vara så fruktansvärt feminin",
      imageUrl:
        "https://www.elgiganten.se/image/dv_web_D1800010021147930/524973/remington-limitless-roterande-rakapparat-xr1770-x7--pdp_zoom-3000.jpg",
    },
    {
      id: 31,
      title: "Lär dig Objektorienterad Programmering med Java",
      description:
        "Perfekt för dig som önskar lära dig Objektorienterad Programmering med Java",
      imageUrl:
        "https://ubiqum.com/wp-content/uploads/2021/12/learn-java-with-ubiqum-logo.png",
    },
    {
      id: 32,
      title: "VÄLJ INTE DENNA!!!",
      description: "Fatta ok",
      imageUrl:
        "https://play-lh.googleusercontent.com/U0semNERqZN8MlvzBgiXRoZHVcz4sBUu7YyEN2pQ5gxe8uXULG4Nos9sV5JD6TQNmA",
    },
    {
      id: 33,
      title: "NÄMEN ANTHUOON!",
      description:
        "En salongspilsk äldre kvinna som köper saker av dig som är större än vad hon förvantade sig ;). Kommer regelbundet att utbrista i ett ”Nämen Anthon!” som klingar med en kombination av tvivel, underhållning och en stänk av upphetsning",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/04/19/24/46/1000_F_419244664_nEHFaz4RkU4wOeuSepinU3ZW8wlNW4g9.jpg",
    },
    {
      id: 34,
      title: "Ray-Ban",
      description: "Solglasögon för Unisex",
      imageUrl: "https://m.media-amazon.com/images/I/51HX4wtZXcL._AC_SX679_.jpg",
    },
    {
      id: 35,
      title: "Instax Mini 9 Kamera, Flamingo Rosa",
      description: "Funktioner för olika fotograferingsmiljöer som landskap, porträtt och NATTfotografering",
      imageUrl: "https://m.media-amazon.com/images/I/71aIMj1B7WL._AC_SL1500_.jpg",
    },
    {
      id: 36,
      title: "Tom Sellecks mustasch",
      description: "En mustasch för män",
      imageUrl: "https://cdn1.cdnme.se/cdn/9-2/2575511/images/2011/mustasch-magnum_136685064.jpg",
    },
    {
      id: 37,
      title: "Resepåse",
      description: "Håll enkelt koll på alla dina ägodelar så du snabbt kan packa ihop när det är dags att gå för lunch",
      imageUrl: "https://www.carepa.se/globalassets/connect-media/bild/23/232886_1274189_2.jpg?format=webp&width=400&height=400",
    },
    {
      id: 38,
      title: "Enkel tågresa till Stockholm",
      description: "En enkel tågresa från Malmö till Stockholm. Du har även möjlighet att stanna innan slutdestination",
      imageUrl: "https://static.vecteezy.com/ti/gratis-vektor/p1/12013563-lyx-kunglig-vinge-brev-sj-vapen-guld-farg-logotyp-vektor-seger-logotyp-vapen-logotyp-vinge-logotyp-vektor-logotyp-mall-vector.jpg",
    },
    {
      id: 39,
      title: "GraviTrax XXL Startpaket med över 100 kulor",
      description: "Ålder: 8+ år",
      imageUrl: "https://m.media-amazon.com/images/I/71ZmzjeWiDL._AC_SL1348_.jpg",
    },
    {
      id: 40,
      title: "Pojkstaty",
      description: "En staty som kan påminna om hur det är att vara vattuman",
      imageUrl: "https://imagebank.rosendahl.com/cdn/xZcCP0/Kahler-Astro-Special-name-White-693510-xZcCP0.png?d=6836",
    }


    // Add more items as needed
  ];

  const itemsContainer = document.getElementById("items-for-sale");

  itemsForSale.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.title}">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <button class="item-button">Välj produkt</button>
          <a href="mailto:anthon_present@yahoo.com?Subject=Jag%20vill%20ha%20detta&body=Jag%20vill%20ha%20en%20${item.title}%20id:%20${item.id}" class="mail-button">Bekräfta order</a>
      `;
    if(item.id === 32) {
      card.querySelector(".item-button").addEventListener("click", fiboerror);
    } else {
      card.querySelector(".item-button").addEventListener("click", function () {
        const code = prompt(
          "Skriv in den superhemliga koden för att välja produkten:"
        );
        if (checkCode(code)) {
          document
            .querySelectorAll(".item-card")
            .forEach((c) => c.classList.remove("chosen-item"));
          card.classList.add("chosen-item");
          itemsContainer.prepend(card); // Move to the top
        } else {
          alert("Nej men Aaanthon nu blev det nog lite fel 🤪");
        }
      });
    }
    itemsContainer.appendChild(card);
  });
  const checkCode = (code) => {
    if (!code) return false;
    let sum = 0;
    for (let i = 0; i < code.length; i++) {
      sum += code.charCodeAt(i) * 1001003;
      sum %= 1874611;
    }
    return sum === 305709;
  };
});

function fiboerror() {
  if(confirm("Nu har du verkligen gjort det..")) {
    fiboerror();
  } else {
    fiboerror();
  }
}
