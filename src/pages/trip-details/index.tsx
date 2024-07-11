import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage() {

    return (
      <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">

          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400"/>
            <span className="text-zinc-100"> Florianópolis, Brazil</span>            
          </div>

          <div className="flex items-center gap-5">

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <span className="text-zinc-100"> August 17th to 23th</span>            
            </div>

            <div className="w-px h-6 bg-zinc-800"/>

            <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
              Change Local/Date
              <Settings2 className='size-5'/>
            </button>


          </div>

        </div>

        <main className="flex gap16">

          <div className="flex-1 space-y-6 px-4">

            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold"> Activities</h2>
              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus className='size-5'/>
              Register Actvity              
              </button>
            </div>

            <div className="space-y-8">

              <div className="space-y-2.5">

                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">Day 17</span>
                  <span className="text-xs text-zinc-500">Saturday</span>
                </div>

                <p className="text-s text-zinc-500">No activity recorded on this date.</p>

              </div>

              <div className="space-y-2.5">

                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">Day 18</span>
                  <span className="text-xs text-zinc-500">Sunday</span>
                </div>

                <div className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className="text-zinc-100">Group Gym</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>         {/*   ml-auto: margin left */}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className="text-zinc-100">Group Gym</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>         {/*   ml-auto: margin left */}
                  </div>
                </div>

              </div>

            </div>

          </div>

          




          <div className="w-80 space-y-6">

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
              <button className="bg-zinc-800 text-zinc-200 w-full rounded-lg px-5 justify-center
                                 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">    {/*   w-full: occupies the entire width of the div */}
                <Plus className='size-5'/>
                Register new link                
              </button>

            </div>

            <div className="w-full h-px bg-zinc-800"/>

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
              <button className="bg-zinc-800 text-zinc-200 w-full rounded-lg px-5 justify-center
                                 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">    {/*   w-full: occupies the entire width of the div */}
                <UserCog className='size-5'/>
                Manage Guests                
              </button>

            </div>

          </div>

        </main>

      </div>
    )
  
  }