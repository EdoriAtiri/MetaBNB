import React from 'react'
import metamask from '../Assets/SVG/Icon/metamask_connect.svg'
import wallet from '../Assets/SVG/Icon/wallet_connect.svg'
import forward from '../Assets/SVG/Functional/forward_angle_bracket.svg'

function ConnectWallet() {
  //   document.body.style.overflow = 'hidden'

  return (
    <div className="absolute top-0 z-40 hidden h-screen w-full  bg-[#404040] bg-opacity-30">
      <div class="absolute top-1/2 left-1/2 z-50 h-[326px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white after:absolute after:top-[78px] after:h-[1px] after:w-full after:bg-[#CFD8DC] sm:w-[550px] md:w-[600px]">
        <div className="relative flex h-[78px] w-full items-center justify-between px-8 ">
          <p className="text-2xl font-bold">Connect Wallet</p>
          <button className="text-5xl">&times;</button>
        </div>

        <div className="flex w-full flex-col gap-4 px-8 pb-6 pt-8">
          <span className="text-base ">Choose your preferred wallet:</span>

          <button className="flex h-[68px] items-center justify-between rounded-xl border border-[#CFD8DC] px-5">
            <div className="flex h-11 w-fit items-center">
              <img className="mr-4 h-11 w-11" src={metamask} alt="metamask" />
              <span className="text-lg font-semibold">Metamask</span>
            </div>
            <img src={forward} alt="click metamask" />
          </button>

          <button className="flex h-[68px] items-center justify-between rounded-xl border border-[#CFD8DC] px-5">
            <div className="flex h-11 w-fit items-center">
              <img
                className="mr-4 h-11 w-11"
                src={wallet}
                alt="wallet connect"
              />
              <span className="text-lg font-semibold">WalletConnect</span>
            </div>
            <img src={forward} alt="click wallet connect" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet
