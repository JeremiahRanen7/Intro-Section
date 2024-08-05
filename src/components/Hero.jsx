const Hero = () => {
  return (
    <main className="hero max-w-full my-0 mx-auto flex items-center h-[90vh] p-28">
      <div className="hero-content flex flex-col gap-8 font-epilogue w-3/5">
        <h1 className="font-bold text-8xl">Make <br /> remote work</h1>
        <p className="font-semibold text-midGray text-lg w-[450px]">Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.</p>
        <button className="px-4 py-2 rounded-xl bg-black text-white w-36 font-semibold">Learn more</button>
        <div className="brand-icons flex justify-start items-center gap-14 mt-14">
            <img src="/src/images/client-databiz.svg" alt="" />
            <img src="/src/images/client-audiophile.svg" alt="" />
            <img src="/src/images/client-meet.svg" alt="" />
            <img src="/src/images/client-maker.svg" alt="" />
        </div>
      </div>
      <div className="hero-image w-[32%] mt-[-40px] ml-20">
        <img src="/src/images/image-hero-desktop.png" alt=""/>
      </div>
    </main>
  )
}

export default Hero
