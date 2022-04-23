import { GoMarkGithub } from 'react-icons/go'

export const Footer = () => {
  return (
    <div className="border-t-8 border-sky-900 h-52 w-full bg-sky-300 flex items-center justify-end">
      <div className="m-3">
        <a href="#">
          <GoMarkGithub className="text-2xl text-white hover:text-black" />
        </a>
      </div>
      <div className="m-3">
        <a href="#">
          <GoMarkGithub className="text-2xl text-white hover:text-black" />
        </a>
      </div>
    </div>
  )
}
