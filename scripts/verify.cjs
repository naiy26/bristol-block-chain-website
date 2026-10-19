const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const path = require("node:path");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_EXECUTABLE
      ? { executablePath: process.env.BROWSER_EXECUTABLE }
      : {}),
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  try {
    for (const route of [
      "/",
      "/about",
      "/events",
      "/learn",
      "/join",
      "/admin",
    ]) {
      const response = await page.goto(`http://127.0.0.1:3000${route}`);
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator("h1").count(), 1, route);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Desktop overflow: ${route}`,
      );
    }
    await page.setViewportSize({ width: 1703, height: 956 });
    for (const route of [
      "/",
      "/about",
      "/events",
      "/learn",
      "/join",
      "/admin",
    ]) {
      await page.goto(`http://127.0.0.1:3000${route}`);
      const edges = await page.locator(".site-wrap").evaluate((element) => {
        const rect = element.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: innerWidth };
      });
      assert.equal(edges.left, 0, `Left page gap: ${route}`);
      assert.equal(edges.right, edges.width, `Right page gap: ${route}`);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Wide desktop overflow: ${route}`,
      );
    }
    await page.goto("http://127.0.0.1:3000/");
    await page.screenshot({ path: path.resolve("artifacts/wide-preview.png") });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("http://127.0.0.1:3000/");
    assert.equal(await page.locator(".past-moment-card img").count(), 2);
    for (const photo of await page.locator(".past-moment-card img").all()) {
      await photo.scrollIntoViewIfNeeded();
      await photo.evaluate(
        (image) =>
          new Promise((resolve, reject) => {
            if (image.complete && image.naturalWidth > 0) return resolve();
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", reject, { once: true });
          }),
      );
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: path.resolve("artifacts/desktop-preview.png"),
      fullPage: true,
    });
    await page.goto("http://127.0.0.1:3000/events");
    assert.equal(await page.locator(".event-card").count(), 1);
    assert.equal(await page.locator(".event-poster").count(), 1);
    await page
      .getByRole("heading", {
        name: "Encode London Hackathon 2026",
        exact: true,
      })
      .waitFor();
    await page.getByText("23–25 October 2026", { exact: true }).waitFor();
    assert.equal(
      await page.getByText("SAMPLE EVENT", { exact: true }).count(),
      0,
    );
    await page
      .getByRole("button", { name: "Past events", exact: true })
      .click();
    assert.equal(await page.locator(".event-card").count(), 0);
    await page
      .getByRole("heading", { name: "No past events to show yet." })
      .waitFor();
    await page
      .getByRole("button", { name: "Upcoming events", exact: true })
      .click();
    await page.locator(".select-label select").selectOption("Hackathon");
    assert.equal(await page.locator(".event-card").count(), 1);
    assert.equal(await page.locator("header a.button").count(), 0);
    await page
      .getByRole("button", {
        name: "View Encode London Hackathon 2026",
        exact: true,
      })
      .click();
    await page.getByRole("dialog").waitFor({ state: "visible" });
    assert.equal(
      await page.getByRole("dialog").locator(".interest-form-qr").count(),
      1,
    );
    const formLink = page
      .getByRole("dialog")
      .getByRole("link", { name: "Open interest form", exact: true });
    assert(
      (await formLink.getAttribute("href")).startsWith(
        "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=MH_ksn3NTkql2rGM8aQVG_",
      ),
    );
    await page
      .getByRole("dialog")
      .locator(".interest-form-qr")
      .evaluate((image) => image.decode());
    await page
      .getByRole("dialog")
      .screenshot({
        path: path.resolve("artifacts/interest-form-desktop.png"),
      });
    await page.keyboard.press("Escape");
    assert.equal(await page.getByRole("dialog").count(), 0);
    await page.goto("http://127.0.0.1:3000/learn");
    await page.getByLabel("Search learning resources").fill("zombies");
    assert.equal(await page.locator(".resource-card").count(), 1);
    await page.getByLabel("Search learning resources").fill("no-such-resource");
    await page.getByText("No resources found.", { exact: true }).waitFor();
    await page.goto("http://127.0.0.1:3000/join");
    await page.waitForURL("**/about");
    assert.equal(
      await page
        .locator(
          'form, #committee, a[href="/join"], a[href="/about#committee"]',
        )
        .count(),
      0,
    );
    const instagram = page.locator(
      'footer a[href="https://www.instagram.com/bristolblockchain/"]',
    );
    assert.equal(await instagram.count(), 1);
    await instagram.getByText("@bristolblockchain", { exact: true }).waitFor();
    const qr = page.locator(".footer-qr img");
    assert.equal(
      await page
        .locator(
          'footer a[href="https://chat.whatsapp.com/CVpDhTkHlWZ7J2fERilzQC"]',
        )
        .count(),
      2,
    );
    assert.equal(
      await page
        .getByRole("link", { name: "Join WhatsApp group", exact: true })
        .count(),
      1,
    );
    assert.equal(await qr.count(), 1);
    assert(
      await qr.evaluate((image) => image.complete && image.naturalWidth > 0),
    );
    await page.screenshot({
      path: path.resolve("artifacts/about-desktop-preview.png"),
      fullPage: true,
    });
    await page.goto("http://127.0.0.1:3000/admin");
    await page.getByRole("button", { name: "Events", exact: true }).click();
    await page.getByRole("button", { name: "Edit preview" }).first().click();
    await page.getByLabel("Title", { exact: true }).fill("Edited sample event");
    await page.getByRole("button", { name: "Apply to preview" }).click();
    await page.getByText("Edited sample event", { exact: true }).waitFor();
    await page.reload();
    await page.getByRole("button", { name: "Events", exact: true }).click();
    assert.equal(
      await page.getByText("Edited sample event", { exact: true }).count(),
      0,
    );
    await page.setViewportSize({ width: 390, height: 844 });
    for (const route of [
      "/",
      "/about",
      "/events",
      "/learn",
      "/join",
      "/admin",
    ]) {
      await page.goto(`http://127.0.0.1:3000${route}`);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Mobile overflow: ${route}`,
      );
    }
    await page.goto("http://127.0.0.1:3000/");
    for (const photo of await page.locator(".past-moment-card img").all()) {
      await photo.scrollIntoViewIfNeeded();
      await photo.evaluate(
        (image) =>
          new Promise((resolve, reject) => {
            if (image.complete && image.naturalWidth > 0) return resolve();
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", reject, { once: true });
          }),
      );
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: path.resolve("artifacts/mobile-preview.png"),
      fullPage: true,
    });
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Learn", exact: true })
      .click();
    await page.waitForURL("**/learn");
    await page.goto("http://127.0.0.1:3000/events?event=encode-london-2026");
    await page.getByRole("dialog").waitFor({ state: "visible" });
    await page
      .getByRole("dialog")
      .locator(".interest-form-qr")
      .evaluate((image) => image.decode());
    assert(
      await page
        .getByRole("dialog")
        .evaluate((dialog) => dialog.scrollWidth <= dialog.clientWidth),
    );
    await page
      .getByRole("dialog")
      .screenshot({ path: path.resolve("artifacts/interest-form-mobile.png") });
    await page.keyboard.press("Escape");
    await page
      .locator("footer")
      .screenshot({ path: path.resolve("artifacts/footer-mobile.png") });
    assert.deepEqual(errors, []);
    console.log(
      "PASS: routes and /join redirect; committee and registration removed; official Instagram and WhatsApp QR; desktop/mobile overflow; mobile navigation; event filters and keyboard dialog; resource search; admin editing/reset; no browser errors.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
