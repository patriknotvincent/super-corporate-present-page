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
      title: "Massage från BIG BALLS",
      description: "Just a ACDC song ",
      imageUrl: "/images/bigballs.png",
    },

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
      `;
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
