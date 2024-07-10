import { User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}



export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip,
}: ConfirmTripModalProps){




    return(
        
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg bg-zinc-900 space-y-5 ">
            <div className='space-y-2'>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirm trip creation. </h2>
                <button>
                  <X onClick={closeConfirmTripModal} className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className='text-sm text-zinc-400'> To complete the trip to 
                <span className="font-semibold text-zinc-100"> Teresina, Brazil from August 12th to 16th</span>, fill in your details below:</p>
            </div>
        
            <form onSubmit={createTrip} className="space-y-3">

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className='size-5 text-zinc-400'/> 
                <input 
                  name="name"
                  placeholder="Your full name."
                  className="bg-transparent text-lg text- placeholder-zinc-400 w-40  outline-none flex-1"
                />
              </div>
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className='size-5 text-zinc-400'/> 
                <input 
                  type="email"
                  name="email"
                  placeholder="Your email."
                  className="bg-transparent text-lg text- placeholder-zinc-400 w-40  outline-none flex-1"
                />
              </div>

              <button type="submit" className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ">
                Confirm trip creation
                {/* <Plus className='size-5'/> */}
              </button>

            </form>

          </div>
        </div>  
    )

}