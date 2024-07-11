import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks(){

    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Importants Links</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">         {/* flex-1*/ }
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100"> AirBnB Reserve</span>
                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/45172871asdasdasdasdasdasdasdasdasdda</a>
                  </div>
                  <Link2 className="text-zinc-400 size-5 shrink-0"/>        {/*   shrink-0: not shrink the size / opção 2: option 2: put flex-1 in the previous div  */}

                </div>

                <div className="flex items-center justify-between gap-4">         {/* flex-1*/ }
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100"> AirBnB Reserve</span>
                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/45172871asdasdasdasdasdasdasdasdasdda</a>
                  </div>
                  <Link2 className="text-zinc-400 size-5 shrink-0"/>        {/*   shrink-0: not shrink the size / opção 2: option 2: put flex-1 in the previous div  */}

                </div>
            </div>
           

            <Button variant="secondary" size="full">
                <Plus className='size-5'/>
                Register new link
            </Button>

            </div>
    )
}