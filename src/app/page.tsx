import { Box } from '@/Components/Box'
import { Hero } from '@/Components/Hero'
import { Highlight } from '@/Components/Highlight'
import { Job } from '@/Components/Job'
import { Skills } from '@/Components/Skills'

export default function Home() {
  return (
    <Box menu={1}>
      <Hero />
      <Job />
      <Skills />
      <Highlight />
    </Box>
  )
}
