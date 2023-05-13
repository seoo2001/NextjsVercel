import Input from '../components/Input'

export default function Home() {
  let name = 'seodongjoon'
  let link = 'https://google.com'
  return (
    <div className="bg-gray-100 md:flex dark:bg-gray-100 h-full">
      <div className="p-3">
        <div className="text-xl font-medium text-black dark:text-rose-500 p-4">Blog</div>
        <p className="text-slate-500 bg-gray-200 rounded-md">글을 작성해주세요</p>
        <p>by dev {name}</p>
        <a href={link} className="
          hover: font-bold
        ">구글 링크</a>
        <div className="
          hover: font-bold
        ">안녕하세요</div>
        <label className="block text-sm text-gray-900">
          abc
        </label>
        <button className="bg-sky-500 hover:bg-sky-700 ... text-gray-100 rounded-full">
          <p className="p-1 px-3">Save changes</p>
        </button>
        <div className="py-3">
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Save changes
          </button>
        </div>
        <form>
          <label className="block py-5">
            <Input text="name"/>
            <Input text="email"/>
            <Input text="password"/>
          </label>
        </form>
      </div>
    </div>
  )
}
