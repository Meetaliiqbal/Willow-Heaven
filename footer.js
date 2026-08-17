document.addEventListener("DOMContentLoaded", function () {

  const currentYear = new Date().getFullYear();

  /* =========================================
     FOOTER CSS (Matches Willow & Heaven Atelier Theme)
  ========================================= */

  const footerCSS = `
    <style id="injected-footer-styles">

      .site-footer {
        width: 100%;
        max-width: none;
        margin: 60px 0 0;
        padding: 50px 24px;
        text-align: center;
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: #6b675e;
        background: #f1efe9;
        border-top: 1px solid #e4e0d5;
        box-sizing: border-box;
        display: block;
      }

      .site-footer,
      .site-footer * {
        box-sizing: border-box;
      }

      /* Footer Links */

      .site-footer .footer-links {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px 32px;
        margin: 0 auto 24px;
      }

      .site-footer .footer-links a {
        color: #6b675e;
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.5;
        transition: color 0.2s ease;
      }

      .site-footer .footer-links a:hover {
        color: #9c6644;
      }

      /* Copyright */

      .site-footer > p:not(.disclaimer) {
        width: 100%;
        margin: 0 auto 14px;
        font-size: 12.5px;
        line-height: 1.5;
        color: #6b675e;
        font-family: 'Instrument Serif', Georgia, serif;
        font-size: 19px;
        letter-spacing: 0.3px;
      }

      /* Disclaimer */

      .site-footer .disclaimer {
        width: 100%;
        max-width: 720px;
        margin: 14px auto 0;
        padding: 0;
        font-size: 11px;
        font-weight: 300;
        color: #858074;
        line-height: 1.7;
        text-align: center;
      }

      .site-footer .disclaimer a {
        color: inherit;
        text-decoration: underline;
      }

      .site-footer .disclaimer a:hover {
        color: #9c6644;
      }

      /* Mobile */

      @media (max-width: 650px) {

        .site-footer {
          margin-top: 40px;
          padding: 40px 20px;
        }

        .site-footer .footer-links {
          gap: 12px 20px;
          margin-bottom: 20px;
        }

        .site-footer .footer-links a {
          font-size: 12px;
        }

        .site-footer > p:not(.disclaimer) {
          font-size: 17px;
        }

        .site-footer .disclaimer {
          max-width: 100%;
          font-size: 10.5px;
          line-height: 1.6;
        }

      }

    </style>
  `;


  /* =========================================
     INJECT FOOTER CSS ONCE
  ========================================= */

  if (!document.getElementById("injected-footer-styles")) {
    document.head.insertAdjacentHTML("beforeend", footerCSS);
  }


  /* =========================================
     FOOTER HTML
  ========================================= */

  const footerHTML = `
    <footer class="site-footer">

      <div class="footer-links">

        <a href="index.html">
          Home
        </a>

        <a href="offer.html">
          Curated Archive
        </a>

        <a href="privacy.html">
          Privacy Policy
        </a>

        <a href="terms.html">
          Terms of Service
        </a>

        <a href="disclaimer.html">
          Disclaimer
        </a>

      </div>


      <p>
        &copy; ${currentYear} Willow &amp; Heaven. All rights reserved.
      </p>


      <p class="disclaimer">
        Willow &amp; Heaven is a contemporary atelier and curated digital lifestyle publication
        dedicated to slow living, spatial design, and intentional daily craftsmanship.
        For full details regarding partner links and third-party offers,
        please visit our
        <a href="disclaimer.html">
          Disclaimer
        </a>
        page.
      </p>

    </footer>
  `;


  /* =========================================
     INSERT FOOTER AT END OF BODY
  ========================================= */

  document.body.insertAdjacentHTML("beforeend", footerHTML);

});