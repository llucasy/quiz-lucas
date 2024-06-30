import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center pt-12">
      <h1 className="text-3xl font-bold underline mb-8">Quiz Lucas</h1>
      <Welcome />
    </main>
  )
}
