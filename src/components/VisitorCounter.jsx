import { useEffect, useState } from 'react'

const WORKER_URL =
  'https://melda-hasan-analytics.hsn33y2.workers.dev/'

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(null)

  useEffect(() => {
    const getVisitors = async () => {
      try {
        const response = await fetch(WORKER_URL)
        const data = await response.json()

        if (data.success) {
          setVisitors(data.visitors)
        }
      } catch (error) {
        console.error('Ziyaretçi sayısı alınamadı:', error)
      }
    }

    getVisitors()
  }, [])

  return (
    <section className="visitor-counter">
      <span className="visitor-counter__heart">♡</span>

      <p className="visitor-counter__text">
  {visitors !== null ? (
    <>
      Davetiyemiz <strong>{visitors}</strong> kez görüntülendi ♡
    </>
  ) : (
    'Ziyaretçi sayısı yükleniyor...'
  )}
</p>
    </section>
  )
}