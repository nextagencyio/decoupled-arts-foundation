import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_ARTISTS } from '@/lib/queries'
import { ArtistsData } from '@/lib/types'
import Header from '../components/Header'
import ArtistCard from '../components/ArtistCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Artists | The Ashwood Arts Foundation',
  description: 'Meet our talented artists.',
}

async function getArtists() {
  try {
    const client = getClient()
    const data = await client.raw(GET_ARTISTS, { first: 50 })
    return data?.nodeArtists?.nodes || []
  } catch (error) {
    console.error('Error fetching artists:', error)
    return []
  }
}

export default async function ArtistsPage() {
  const items = await getArtists()

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-4">
              Artists
            </h1>
            <div className="w-24 h-0.5 bg-primary-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented artists who bring our foundation to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-600 mb-2">No Artists Yet</h2>
              <p className="text-gray-500">
                Artists will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <ArtistCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
