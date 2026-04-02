import { test, expect } from '@playwright/test'

test.describe('Arts Foundation - Homepage', () => {
  test('shows hero title and subtitle', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Where Creativity Comes Alive')
    await expect(page.locator('body')).toContainText('Enriching Our Community Through Art')
  })

  test('shows statistics section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Exhibitions Annually')
    await expect(page.locator('body')).toContainText('Artists Supported')
  })

  test('shows CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Support the Arts')
    await expect(page.locator('body')).toContainText('Become a Member')
  })

  test('has header navigation', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header').first()
    await expect(header).toBeVisible()
  })
})

test.describe('Arts Foundation - Exhibitions', () => {
  test('listing page shows exhibitions', async ({ page }) => {
    await page.goto('/exhibitions')
    await expect(page.locator('body')).toContainText('Color & Memory')
    await expect(page.locator('body')).toContainText('New Perspectives')
    await expect(page.locator('body')).toContainText('Meridian Sculpture Garden')
  })

  test('detail page shows exhibition content', async ({ page }) => {
    await page.goto('/exhibitions/color-and-memory')
    await expect(page.locator('body')).toContainText('Color & Memory')
    await expect(page.locator('body')).toContainText('Elena Vasquez')
  })
})

test.describe('Arts Foundation - Artists', () => {
  test('listing page shows artists', async ({ page }) => {
    await page.goto('/artists')
    await expect(page.locator('body')).toContainText('Elena Vasquez')
    await expect(page.locator('body')).toContainText('Kenji Tanaka')
    await expect(page.locator('body')).toContainText('Adwoa Osei')
  })

  test('detail page shows artist content', async ({ page }) => {
    await page.goto('/artists/elena-vasquez')
    await expect(page.locator('body')).toContainText('Elena Vasquez')
    await expect(page.locator('body')).toContainText('Mexican-American painter')
  })
})

test.describe('Arts Foundation - Events', () => {
  test('listing page shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('body')).toContainText('Opening Reception')
    await expect(page.locator('body')).toContainText('Watercolor Workshop')
    await expect(page.locator('body')).toContainText('Kenji Tanaka on Art and Sustainability')
  })

  test('detail page shows event content', async ({ page }) => {
    await page.goto('/events/opening-color-memory')
    await expect(page.locator('body')).toContainText('Opening Reception')
    await expect(page.locator('body')).toContainText('Color & Memory')
  })
})

test.describe('Arts Foundation - News', () => {
  test('listing page shows news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('body')).toContainText('Grant Recipients')
    await expect(page.locator('body')).toContainText('Arts Center Expansion')
    await expect(page.locator('body')).toContainText('Youth Arts Program')
  })

  test('detail page shows news content', async ({ page }) => {
    await page.goto('/news/2026-artist-grant-recipients')
    await expect(page.locator('body')).toContainText('Grant Recipients')
    await expect(page.locator('body')).toContainText('$450,000')
  })
})

test.describe('Arts Foundation - Pages', () => {
  test('about page shows content', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('body')).toContainText('Meridian Arts Foundation')
    await expect(page.locator('body')).toContainText('Our Mission')
  })

  test('visit page shows content', async ({ page }) => {
    await page.goto('/visit')
    await expect(page.locator('body')).toContainText('Plan Your Visit')
    await expect(page.locator('body')).toContainText('Hours')
  })
})

test.describe('Arts Foundation - Navigation', () => {
  test('header is present on all main pages', async ({ page }) => {
    const pages = ['/', '/exhibitions', '/artists', '/events', '/news']
    for (const path of pages) {
      await page.goto(path)
      const header = page.locator('header').first()
      await expect(header).toBeVisible()
    }
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    // Click exhibitions link
    await page.click('a[href="/exhibitions"]')
    await expect(page).toHaveURL('/exhibitions')
    await expect(page.locator('body')).toContainText('Color & Memory')
  })
})
