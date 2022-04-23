import { GoMarkGithub } from 'react-icons/go'

export const Footer = () => {
  return (
    <div className=" h-20 w-full bg-sky-600 flex items-center justify-end">
      <div className="m-5">
        <a href="#">
          <GoMarkGithub className="text-2xl text-white hover:text-black" />
        </a>
      </div>
      <div className="m-5">
        <a href="#">
          <GoMarkGithub className="text-2xl text-white hover:text-black" />
        </a>
      </div>
    </div>
  )
}
