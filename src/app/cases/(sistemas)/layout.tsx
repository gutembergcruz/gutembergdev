import { Box } from "@/Components/Box"

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box menu={3}>
      
      {children}

    </Box>
  )
}
