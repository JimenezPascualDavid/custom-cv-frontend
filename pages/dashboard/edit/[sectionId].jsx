import { useRouter } from 'next/router'

import { EditLayout } from '../../../layouts/EditLayout'

function SectionId() {
  const router = useRouter()

  console.log(router.query)

  return (
    <section>
      <p>{router.query.sectionId}</p>
    </section>
  )
}

SectionId.PageLayout = EditLayout
export default SectionId
