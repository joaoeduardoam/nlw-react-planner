import { ArrowRight, UserRoundPlus } from "lucide-react"
import { Button } from "../../../components/button"

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

        

        <Button onClick={openConfirmTripModal} variant="primary">
          Confirm trip
          <ArrowRight className='size-5'/>
        </Button>
        </div>
    )

}