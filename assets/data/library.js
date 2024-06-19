const library = [
  {
    id: "1",
    url: "https://www.discogs.com/release/9012123-Jamie-Christopherson-Metal-Gear-Rising-Revengeance-Soundtrack",
    title: "Metal Gear Rising: Revengeance",
    artists: "Jamie Christopherson",
    genre: "Rock, Stage & Screen",
    rating: "",
    artwork:
      "https://i.discogs.com/OeajfrjChmvMXyZ5x2zK6kLBdqS_teclxlEC0CZZu7I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkwMTIx/MjMtMTQ3MzI2Njcy/NC02MDc5LmpwZWc.jpeg",
  },
  {
    id: "2",
    url: "https://www.discogs.com/master/1040356-Various-Furi-Original-Soundtrack",
    title: "Furi Original Soundtrack",
    folderTitle: "Furi",
    artists: "Carpenter Brut",
    genre: "Synthwave, Electro",
    rating: "",
    artwork:
      "https://i.discogs.com/WTTYUi9Cj5CX0OHHrADqDMo4GEGixVtNU13S_PiM2kc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3NDQy/MzItMTQ2NzgyNTk1/Ny0xMTgwLmpwZWc.jpeg",
    tracks: [
      {
        id: 0,
        name: "Danger - 06:24 (LP Edit)",
        uri: require("../files/furi/Danger-6_24.mp3"),
      },
      {
        id: 1,
        name: "Carpenter Brut - Enraged",
        uri: require("../files/furi/CarpenterBrut-Enraged.mp3"),
      },
      {
        id: 2,
        name: "Waveshaper - A Picture In Motion (LP Edit)",
        uri: require("../files/furi/Waveshaper-A-Picture-in-Motion.mp3"),
      },
      {
        id: 3,
        name: "Waveshaper - Wisdom Of Rage (LP Edit)",
        uri: require("../files/furi/Waveshaper-WisdomofRage.mp3"),
      },
      { id: 4, name: "Lorn - Unraveled", uri: "" },
      { id: 5, name: "Carpenter Brut - What We Fight For", uri: "" },
      {
        id: 6,
        name: "The Toxic Avenger - Make This Right (LP Edit)",
        uri: "",
      },
      { id: 7, name: "Scattle - Love And Madness", uri: "" },
      { id: 8, name: "Carpenter Brut - You're Mine", uri: "" },
      { id: 9, name: "Kn1ght - A Big Day (LP Edit)", uri: "" },
      { id: 10, name: "Kn1ght - Something Memorable", uri: "" },
      { id: 11, name: "Waveshaper - A Monster (LP Edit)", uri: "" },
      { id: 12, name: "Waveshaper - You Are The End (LP Edit)", uri: "" },
      {
        id: 13,
        name: "The Toxic Avenger - My Only Chance (LP Edit)",
        uri: "",
      },
      { id: 14, name: "Danger - Danger - 07:53", uri: "" },
      { id: 15, name: "Danger - Danger - 08:02", uri: "" },
    ],
  },
  {
    id: "3",
    url: "https://www.discogs.com/release/16609806-Bill-Kiley-LudoWic-Justin-Stander-Katana-Zero-Original-Soundtrack",
    title: "Katana Zero",
    folderTitle: "katanaZero",
    artists: "Bill Kiley, LudoWic, Danger, Kn1ght ",
    genre: "Electronic, Stage",
    rating: "",
    artwork: "https://i.redd.it/x9pz6rlaf8t21.png",
    tracks: [
      {
        id: 0,
        name: "Bill Kiley-Sneaky Driver",
        uri: require("../files/katanaZero/05_StageA.mp3"),
      },
      { id: 1, name: "LudoWic - Third District" },
      { id: 2, name: "LudoWic - Disturbed Lines" },
      { id: 3, name: "Bill Kiley - You Will Never Know" },
      { id: 4, name: "LudoWic - Overdose" },
      { id: 5, name: "Bill Kiley - Chinatown" },
      { id: 6, name: "Bill Kiley - Driving Force / Neon Fog" },
      { id: 7, name: "LudoWic - Breath Of A Serpent" },
      { id: 8, name: "LudoWic - Full Confession" },
      { id: 9, name: "Bill Kiley - Rain On Brick" },
      { id: 10, name: "Bill Kiley - Coming Down" },
      { id: 11, name: "Bill Kiley, Justin Stander - Noctune" },
      { id: 12, name: "DJ Electrohead - Hit The Floor" },
      { id: 13, name: "Bill Kiley - Snow" },
      { id: 14, name: "Bill Kiley - Volition" },
      { id: 15, name: "Bill Kiley - End Of The Road" },
      { id: 16, name: "LudoWic - Panoramic Feelings" },
      { id: 17, name: "LudoWic - Prison Air 2" },
      { id: 18, name: "LudoWic - Meat Grinder" },
      { id: 19, name: "LudoWic - All For Now" },
      { id: 20, name: "Bill Kiley - Psychotherapy" },
      { id: 21, name: "Bill Kiley - Boss Boss Boss" },
      { id: 22, name: "Tunç Çakır, LudoWic - Blue Room (KZ-version)" },
      { id: 23, name: "Justin Stander - Come And See" },
    ],
  },

  {
    id: "4",
    url: "https://www.discogs.com/release/20473615-Konami-Kukeiha-Club-Metal-Gear-2-Solid-Snake",
    title: "Metal Gear 2: Solid Snake",
    artists: "Konami Kukeiha Club ",
    genre: "Electronic, Stage",
    rating: "",
    artwork:
      "https://i.discogs.com/oQtkzhXPRqwkp1bkwpXi6nh90i9jzYef1y_SZ96J_zc/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNDcz/NjE1LTE2NDA5NTIw/NDMtNjczNS5qcGVn.jpeg",
  },
  {
    id: "5",
    url: "https://www.discogs.com/release/19830163-Hikaru-Utada-One-Last-Kiss",
    title: "One Last Kiss",
    artists: "Hikaru Utada",
    genre: "Pop, Stage & Screen",
    rating: "",
    artwork:
      "https://i.discogs.com/XBMSWxekekKPzpFPUm6GFx55AAmqkNIBy0TYf4D5Nz4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5ODMw/MTYzLTE2Mjg3ODg1/MzEtNjIwMi5qcGVn.jpeg",
  },
  {
    id: "6",
    url: "https://www.discogs.com/master/1575693-Various-Devil-May-Cry-5-Original-Soundtrack",
    title: "Devil May Cry 5",
    artists: "Casey Edwards",
    genre: "Electronic, Stage & Screen",
    rating: "",
    artwork:
      "https://i.discogs.com/ZhhMajoIUPcSIvz92XlyZnVtefdpHn-uFeJnY2u9Aiw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODUz/MjkxLTE1NjI1OTk5/MTYtMzQ0My5qcGVn.jpeg",
  },
  {
    id: "7",
    url: "https://www.discogs.com/master/1145484-Dance-With-The-Dead-The-Shape",
    title: "The Shape",
    artists: "Dance With The Dead",
    genre: "Synthwave",
    rating: "",
    artwork:
      "https://i.discogs.com/PQ1wb6AxttsUanR7ByK1s1oFpTSDYBLNLnW0Jik2ygY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwNzQ1/MzUtMTQ1NDY1MDY0/OS0xMDYxLmpwZWc.jpeg",
  },
  {
    id: "8",
    url: "https://www.discogs.com/master/1575693-Various-Devil-May-Cry-5-Original-Soundtrack",
    title: "Out Of Body",
    artists: "Dance With The Dead ",
    genre: "Electronic, Rock",
    rating: "",
    artwork:
      "https://i.discogs.com/uXRvnWEA_DdvgAO1UdK-MD7MIy_4Deis_9oShAoOKBA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxNzA3/NjgtMTM4NjQzNDAz/My04NDAyLmpwZWc.jpeg",
  },
];

export default library;
