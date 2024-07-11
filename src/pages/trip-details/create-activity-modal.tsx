import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../lib/axios"

interface CreateActivityModalProps{
    closeCreateActiveModal: () => void
    

}

export function CreateActivityModal({
    closeCreateActiveModal
}: CreateActivityModalProps){

  const {tripId} = useParams()
  const navigate = useNavigate()

  async function createActivity (event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.valueOf()

    await api.post(`/trips/${tripId}/activities`), {
      title,
      occurs_at
    }

    window.document.location.reload()
  }

    return(
        
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg bg-zinc-900 space-y-5 ">
          <div className='space-y-2'>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Register Activity </h2>
              <button type="button" onClick={closeCreateActiveModal}>
                <X className="size-5 text-zinc-400"/>
              </button>
            </div>
            <p className='text-sm text-zinc-400'> All the guests can see the activiies.</p>
          </div>
      
          <form onSubmit={createActivity} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className='size-5 text-zinc-400'/> 
              <input 
                name="title"
                placeholder="What is the activity?"
                className="bg-transparent text-lg text- placeholder-zinc-400 w-40  outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-14 px-4 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className='size-5 text-zinc-400'/> 
                <input 
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Date and Time of the Activity."
                  className="bg-transparent text-lg text- placeholder-zinc-400 w-40  outline-none flex-1 [color-scheme:dark]"
                />
              </div>
            </div>

            
            <Button variant="primary" size="full">
                Register Activity
            </Button>

          </form>

        </div>
      </div> 
    )

}