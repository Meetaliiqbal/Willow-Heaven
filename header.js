document.addEventListener("DOMContentLoaded", function () {

  const headerHTML = `
    <header class="site-header">

      <div class="header-inner">

        <a href="index.html" class="brand-logo">
          Willow <span>&amp; Heaven</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="header-nav desktop-nav">
          <a href="quotes.html">Quotes</a>
          <a href="decor.html">Home Decor</a>
          <a href="fashion.html">Fashion</a>
          <a href="travel.html">Travel</a>
          <a href="culinary.html">Food</a>
          <a href="nature.html">Nature</a>
          <a href="offer.html" class="highlight-btn">
            Curated Archive
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <!-- Mobile Side Drawer -->
      <nav class="mobile-nav">

        <div class="mobile-nav-title">
          Explore Editions
        </div>

        <a href="quotes.html">Quotes</a>
        <a href="decor.html">Home Decor</a>
        <a href="fashion.html">Fashion</a>
        <a href="travel.html">Travel</a>
        <a href="culinary.html">Food</a>
        <a href="nature.html">Nature</a>

        <a href="offer.html" class="mobile-vault-btn">
          Curated Archive
        </a>

      </nav>

    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);


  /* =========================
     HEADER CSS (Matches Willow & Heaven Atelier Theme)
  ========================= */

  const headerCSS = document.createElement("style");

  headerCSS.textContent = `

    /* =========================
       HEADER
    ========================= */

    .site-header{
      position:sticky;
      top:0;
      z-index:9999;
      width:100%;
      background:rgba(248, 247, 244, 0.90);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid #e4e0d5;
    }

    .header-inner{
      width:100%;
      max-width:1240px;
      height:84px;
      margin:0 auto;
      padding:0 36px;

      display:flex;
      align-items:center;
      justify-content:space-between;
    }


    /* =========================
       LOGO
    ========================= */

    .brand-logo{
      font-family:'Instrument Serif',Georgia,serif;
      font-size:30px;
      font-weight:400;
      font-style:italic;
      letter-spacing:0.5px;
      color:#1a1916;
      white-space:nowrap;
      text-decoration:none;
      display:flex;
      align-items:center;
      gap:8px;
    }

    .brand-logo span{
      color:#9c6644;
      font-style:normal;
      font-family:'Plus Jakarta Sans',sans-serif;
      font-weight:600;
      font-size:20px;
    }


    /* =========================
       DESKTOP NAV
    ========================= */

    .header-nav{
      display:flex;
      align-items:center;
      gap:28px;

      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:13.5px;
      font-weight:500;
    }

    .header-nav a{
      color:#6b675e;
      text-decoration:none;
      white-space:nowrap;
      transition:color .2s ease;
    }

    .header-nav a:hover{
      color:#9c6644;
    }

    .header-nav .highlight-btn{
      background:#1a1916;
      color:#ffffff;
      padding:11px 22px;
      border-radius:50px;
      font-weight:500;
      transition:background .2s ease, transform .2s ease;
    }

    .header-nav .highlight-btn:hover{
      background:#9c6644;
      color:#fff;
      transform:translateY(-1px);
    }


    /* =========================
       MOBILE BUTTON
    ========================= */

    .mobile-menu-btn{
      display:none;

      width:44px;
      height:44px;

      padding:0;

      border:1px solid #e4e0d5;
      border-radius:50%;

      background:#ffffff;

      cursor:pointer;

      align-items:center;
      justify-content:center;
      flex-direction:column;
      gap:5px;

      position:relative;
      z-index:10002;
      box-shadow:0 4px 12px rgba(0,0,0,0.03);
    }

    .mobile-menu-btn span{
      display:block;
      width:18px;
      height:1.5px;

      background:#1a1916;

      transition:
        transform .25s ease,
        opacity .2s ease;
    }


    /* =========================
       MOBILE DRAWER
    ========================= */

    .mobile-nav{

      display:block;

      position:fixed;

      top:0;
      right:0;

      width:60vw;
      max-width:340px;
      min-width:260px;

      height:100vh;
      height:100dvh;

      padding:96px 32px 40px;

      background:#f8f7f4;

      border-left:1px solid #e4e0d5;

      box-shadow:-16px 0 40px rgba(0,0,0,.06);

      overflow-y:auto;

      transform:translateX(100%);

      transition:
        transform .3s cubic-bezier(0.16, 1, 0.3, 1);

      z-index:10000;
    }


    /* Drawer visible */

    .site-header.menu-open .mobile-nav{
      transform:translateX(0);
    }


    /* =========================
       DRAWER TITLE
    ========================= */

    .mobile-nav-title{
      margin-bottom:20px;

      color:#9c6644;

      font-family:'Instrument Serif',Georgia,serif;
      font-size:26px;
      font-weight:400;

      border-bottom:1px solid #e4e0d5;
      padding-bottom:14px;
    }


    /* =========================
       DRAWER LINKS
    ========================= */

    .mobile-nav a{
      display:block;

      padding:14px 0;

      border-bottom:1px solid #f1efe9;

      color:#6b675e;

      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:14px;
      font-weight:500;

      text-decoration:none;

      transition:
        color .2s ease,
        padding-left .2s ease;
    }

    .mobile-nav a:hover{
      color:#9c6644;
      padding-left:6px;
    }


    /* =========================
       MEMBER VAULT
    ========================= */

    .mobile-nav .mobile-vault-btn{

      margin-top:28px;

      padding:14px 20px;

      border:0;
      border-radius:50px;

      background:#1a1916;
      color:#fff;

      text-align:center;
    }

    .mobile-nav .mobile-vault-btn:hover{
      background:#9c6644;
      color:#fff;
      padding-left:20px;
    }


    /* =========================
       OPEN BUTTON → X
    ========================= */

    .site-header.menu-open .mobile-menu-btn span:nth-child(1){
      transform:translateY(6.5px) rotate(45deg);
    }

    .site-header.menu-open .mobile-menu-btn span:nth-child(2){
      opacity:0;
    }

    .site-header.menu-open .mobile-menu-btn span:nth-child(3){
      transform:translateY(-6.5px) rotate(-45deg);
    }


    /* =========================
       MOBILE
    ========================= */

    @media(max-width:950px){

      .header-inner{
        padding:0 24px;
      }

      .desktop-nav{
        display:none;
      }

      .mobile-menu-btn{
        display:flex;
      }

    }


    /* =========================
       DESKTOP
    ========================= */

    @media(min-width:951px){

      .mobile-nav{
        display:none;
      }

    }


    /* =========================
       SMALL PHONES
    ========================= */

    @media(max-width:480px){

      .header-inner{
        padding:0 20px;
        height:76px;
      }

      .brand-logo{
        font-size:26px;
      }

      .mobile-nav{
        width:78vw;
        min-width:0;
        padding:84px 24px 30px;
      }

    }

  `;

  document.head.appendChild(headerCSS);


  /* =========================
     MENU TOGGLE
  ========================= */

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".mobile-menu-btn");

  menuButton.addEventListener("click", function (event) {

    event.stopPropagation();

    const isOpen = header.classList.toggle("menu-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });


  /* =========================
     OUTSIDE CLICK → CLOSE
  ========================= */

  document.addEventListener("click", function (event) {

    if (!header.classList.contains("menu-open")) {
      return;
    }

    const clickedInsideDrawer =
      event.target.closest(".mobile-nav");

    const clickedMenuButton =
      event.target.closest(".mobile-menu-btn");

    if (!clickedInsideDrawer && !clickedMenuButton) {

      header.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

  });


  /* =========================
     LINK CLICK → CLOSE
  ========================= */

  document.querySelectorAll(".mobile-nav a").forEach(function(link){

    link.addEventListener("click", function(){

      header.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    });

  });


  /* =========================
     ESC KEY → CLOSE
  ========================= */

  document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

      header.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

  });


  /* =========================
     ADSTERRA SOCIAL BAR
  ========================= */

  if (!document.querySelector('script[data-adsterra-social-bar]')) {

    const adsterraSocialBar = document.createElement("script");

    adsterraSocialBar.src =
      "https://pl31595914.profitableratecpmnetwork.com/a3/6c/32/a36c326dea721065bee7af7dacf2459d.js";

    adsterraSocialBar.setAttribute(
      "data-adsterra-social-bar",
      "true"
    );

    document.body.appendChild(adsterraSocialBar);

  }

});


// =========================
// WILLOW & HEAVEN FAVICON
// =========================

if (!document.querySelector('link[data-willow-favicon]')) {

  const favicon = document.createElement('link');

  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.setAttribute('data-willow-favicon', 'true');

  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">

      <rect
        width="64"
        height="64"
        rx="15"
        fill="#f8f7f4"
      />

      <text
        x="32"
        y="43"
        text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="33"
        font-weight="400"
        fill="#9c6644"
        letter-spacing="1"
      >WH</text>

    </svg>
  `);

  document.head.appendChild(favicon);
}