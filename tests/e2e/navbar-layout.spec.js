const { test, expect } = require('@playwright/test')

test.describe('Navbar layout', () => {
  test('centers nav links on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/')

    const links = page.getByTestId('navbar-links')
    const box = await links.boundingBox()
    expect(box).not.toBeNull()

    const center = box.x + box.width / 2
    expect(Math.abs(center - 640)).toBeLessThan(12)
    await expect(page.getByTestId('theme-toggle')).toBeVisible()
  })

  test('nav links stay within viewport on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 720 })
    await page.goto('/')

    const links = page.getByTestId('navbar-links')
    const box = await links.boundingBox()
    expect(box).not.toBeNull()
    expect(box.x).toBeGreaterThanOrEqual(0)
    expect(box.x + box.width).toBeLessThanOrEqual(768)
    await expect(page.getByTestId('theme-toggle')).toBeVisible()
  })

  test('theme toggle remains visible at 1024px', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 720 })
    await page.goto('/')

    const links = page.getByTestId('navbar-links')
    const box = await links.boundingBox()
    expect(box).not.toBeNull()
    expect(box.x).toBeGreaterThanOrEqual(0)
    expect(box.x + box.width).toBeLessThanOrEqual(1024)
    await expect(page.getByTestId('theme-toggle')).toBeVisible()
  })

  test('mobile menu spans full width', async ({ page }) => {
    const viewportWidth = 390
    await page.setViewportSize({ width: viewportWidth, height: 844 })
    await page.goto('/')

    await expect(page.getByTestId('navbar-links')).toBeHidden()
    await expect(page.getByTestId('menu-toggle')).toBeVisible()
    await expect(page.getByTestId('theme-toggle')).toBeHidden()

    await page.getByTestId('menu-toggle').click()

    const menu = page.getByTestId('mobile-menu')
    await expect(menu).toHaveClass(/NavBar-menu--open/)

    const firstItem = page.locator('.NavBar-menuItem').first()
    const itemBox = await firstItem.boundingBox()
    expect(itemBox).not.toBeNull()
    expect(itemBox.x).toBeLessThanOrEqual(1)
    expect(itemBox.x + itemBox.width).toBeGreaterThanOrEqual(viewportWidth - 1)
  })
})
