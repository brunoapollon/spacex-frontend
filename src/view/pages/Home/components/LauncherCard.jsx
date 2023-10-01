export default function LauncherCard() {
  return <div className="bg-white h-32 w-48 rounded-2xl p-2">
    <img className="object-cover w-full h-[60px] select-none rounded-2xl" src="https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png" alt="laucher" />
    <span className="font-medium">
      Name
      <small className="block text-sm text-gray-400">Date local</small>
    </span>
  </div>
}
