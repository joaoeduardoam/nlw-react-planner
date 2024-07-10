import { ArrowRight, UserRoundPlus } from "lucide-react"

interface InviteGuestsStepsProps{
    openGuestsModal: () => void
    emailsToInvite: string []
    openConfirmTripModal: () => void
}

export function InviteGuestsSteps({
    emailsToInvite,
    openConfirmTripModal,
    openGuestsModal
}: InviteGuestsStepsProps){

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <button type="button" onClick={openGuestsModal} className="flex items-left gap-2 flex-1">
          <UserRoundPlus className="size-5 text-zinc-400"/>
          {emailsToInvite.length > 0 ? (
            <span className='text-lg  text-zinc-100'>{emailsToInvite.length} people invited</span>
          ) : (
            <span className='text-lg  text-zinc-400'>Who will be on trip?</span>
          )}
        </button>


        <div className="w-px h-6 bg-zinc-800"/>

        <button onClick={openConfirmTripModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
          Confirm trip
          <ArrowRight className='size-5'/>
        </button>
        </div>
    )

}