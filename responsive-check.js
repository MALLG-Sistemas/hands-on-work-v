// Script de automaçao para verificar a responsividade de um site em diferentes tamanhos de tela

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Media query breakpoints
  const viewports = [
    { width: 375, height: 667, name: "Mobile" },
    { width: 768, height: 1024, name: "Tablet" },
    { width: 1920, height: 1080, name: "Desktop" },
  ];

  for (const viewport of viewports) {
    await page.setViewport(viewport);
    await page.goto("URL_DO_SEU_SITE"); // Substituir pela URL do site quando for congiruado no github pages

    // Adicione aqui verificações adicionais, se necessário
    console.log(
      `Verificando responsividade em ${viewport.name} (${viewport.width}x${viewport.height})...`
    );

    // Tira um screenshot para cada viewport
    await page.screenshot({ path: `screenshot-${viewport.name}.png` });
  }

  await browser.close();
})();
