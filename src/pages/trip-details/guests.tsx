import { CheckCircle, CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Participant{

  id: string
  name: string | null
  email: string
  is_confirmed: boolean

}

export function Guests(){

  const {tripId} = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(()=> {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  },[tripId])


    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests</h2>
            <div className="space-y-5">
                {participants.map((participant,index) => {
                  return(
                    <div key={participant.id} className="flex items-center justify-between gap-4">         {/* flex-1*/ }
                      <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100"> {participant.name ?? `Guest ${index}`} </span>
                        <span className="block text-sm text-zinc-400 truncate">{participant.email}</span>

                      </div>                                               {/*   shrink-0: not shrink the size / opção 2: option 2: put flex-1 in the previous div  */}
                      {participant.is_confirmed ? (
                        <CheckCircle2 className="text-green-500 size-5 shrink-0"/>        
                      ) : (
                        <CircleDashed className="text-zinc-400 size-5 shrink-0"/>        
                      )}
                    </div>
                  )
                })}

                
            </div>
            

            <Button variant="secondary" size="full">
                <UserCog className='size-5'/>
                Manage Guests 
            </Button>

            </div>
    )
}