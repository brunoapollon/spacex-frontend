
export function LauncherView() {
  return <div className="h-full w-1/2 bg-white  rounded-2xl p-8 overflow-y-auto">
    <h1 className="text-xl mb-4">
      NAME
    </h1>

    <img
      className="object-fit w-full h-[400px] select-none rounded-2xl"
      src="https://images2.imgbox.com/33/2e/k6VE4iYl_o.png"
      alt="launcher-preview"
    />

    <section className="text-lg text-gray-700">
      <p>
        id: dasd123123
      </p>
      <p>
        launchpad: dasd123123
      </p>
      <div>
        <p>crew</p>
        <ul className="text-sm pl-3">
          <li>name - role</li>
          <li>name - role</li>
          <li>name - role</li>
          <li>name - role</li>
        </ul>
      </div>
      <p>date local: 15/01/55</p>
    </section>
  </div>
}
