import { ArrowRight, Calendar, MapPin, Plus, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";


interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput
}: DestinationAndDateStepProps){

  const [isDatePickerOpen, setIsDatePickOpen] = useState(false)
  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>()

  function openDatePicker(){
    return setIsDatePickOpen(true)
  }
  function closeDatePicker(){
    return setIsDatePickOpen(false)
  }

  const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to 
    ? format(eventStartAndEndDate.from, "MMM' 'd'th to '").concat(format(eventStartAndEndDate.to, "MMM' 'd'th"))
    : null


    return (
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <button onClick={openDatePicker} disabled={isGuestsInputOpen}  className="flex items-center gap-2 text-left w-[220px]">
              <Calendar className="size-5 text-zinc-400"/>
              <span className="text-lg text-zinc-400 w-40 flex-1"> {displayedDate || 'When?'}</span>
            </button>


            {isDatePickerOpen && (

              <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                <div className="rounded-xl py-5 px-6 shadow-shape bg bg-zinc-900 space-y-5 ">
                  <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Select the date. </h2>
                      <button>
                        <X onClick={closeDatePicker} className="size-5 text-zinc-400"/>
                      </button>
                    </div>
                  </div>

                  <DayPicker mode="range" selected={eventStartAndEndDate} onSelect={setEventStartAndEndDate}/>


                </div>
              </div>  

            )}
            
       





            <div className="w-px h-6 bg-zinc-800"/>

            {isGuestsInputOpen ? (
              
              <Button onClick={closeGuestsInput} variant="secondary">
                Change Local/Date
                <Settings2 className='size-5'/>
              </Button>

              
            ) : (
              


                <Button onClick={openGuestsInput} variant="primary">
                  Continue
                  <ArrowRight className='size-5'/>
                </Button>

            )}
            </div>
        </div>

    )

}