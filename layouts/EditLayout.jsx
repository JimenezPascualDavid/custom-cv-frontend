import { useState } from 'react'

import { sectionsCV } from '../constants/sectionsCV'
import { SidebarEdit } from '../components/SidebarEdit'

export const EditLayout = ({ children }) => {
  const [sections, setSections] = useState(sectionsCV)

  return (
    <section className="grid grid-cols-3 min-h-screen">
      <aside className="h-full">
        <SidebarEdit items={sections} />
      </aside>
      <aside>{children}</aside>
      <aside className="hidden xl:block">
        <section>
          <p>preview pdf</p>
        </section>
      </aside>
    </section>
  )
}
