export function Footer() {
  return (
    <footer className="border-t py-12 border-neutral-900 bg-gradient-to-br from-stone-950 to-violet-950/10 text-white w-screen">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 justify-self-start">
            <h1 className="font-jakosta text-5xl">Samurai Conquest</h1>
            <div className="px-4 py-2 bg-gradient-to-r from-violet-500/50 w-max rounded font-poppins mt-2">
              NFT Game
            </div>
          </div>
          <div className="col-span-1 md:justify-self-end">
            <ul className="flex flex-col gap-2 text-[#777] font-poppins text-sm">
              <li className="text-2xl font-poppins uppercase tracking-[.8px] mb-2 font-black text-white">
                Reliability
              </li>
              <li><a href="https://testnet.bscscan.com/address/0x65EbD428f994FB019863676889090BB083212b43" target="_blank">BscScan</a></li>
           {/*<li>Contracts</li>*/}              
              <li><a href="https://drive.google.com/file/d/1bGhG1iwm43-XcNAl1Z7V5quyUv13jfkd/view" target="_blank">Whitepaper</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:justify-self-end">
            <ul className="flex flex-col gap-2 text-[#777] font-poppins text-sm">
              <li className="text-2xl font-poppins uppercase tracking-[.8px] mb-2 font-black text-white">
                Links
              </li>
              <li><a href="https://samuraiconquest.com" target="_blank">Home</a></li>
              <li><a href="https://play.samuraiconquest.com" target="_blank">Game</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:justify-self-end">
            <ul className="flex flex-col gap-2 text-[#777] font-poppins text-sm">
              <li className="text-2xl font-poppins uppercase tracking-[.8px] mb-2 font-black text-white">
                Social
              </li>
              <li><a href="https://twitter.com/ConquestSamurai" target="_blank">Twitter</a></li>
              <li><a href="https://discord.gg/UpcDwmURxE" target="_blank">Discord</a></li>
              <li><a href="https://t.me/samuraiconquestofficial" target="_blank">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
