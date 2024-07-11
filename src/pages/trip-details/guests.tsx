import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests(){

    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">         {/* flex-1*/ }
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100"> Joao Eduardo</span>
                    <span className="block text-sm text-zinc-400 truncate">joaoeduardo@email.com</span>

                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0"/>        {/*   shrink-0: not shrink the size / opção 2: option 2: put flex-1 in the previous div  */}

                </div>

                <div className="flex items-center justify-between gap-4">         {/* flex-1*/ }
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100"> Joao Eduardo</span>
                    <span className="block text-sm text-zinc-400 truncate">joaoeduardo@email.com</span>
                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0"/>        {/*   shrink-0: not shrink the size / opção 2: option 2: put flex-1 in the previous div  */}

                </div>
            </div>
            

            <Button variant="secondary" size="full">
                <UserCog className='size-5'/>
                Manage Guests 
            </Button>

            </div>
    )
}