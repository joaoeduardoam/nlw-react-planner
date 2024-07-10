import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User} from 'lucide-react'
import { FormEvent, useState } from 'react'


export function App() {

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'joao@email.com',
    'amanda@email.com'
  ])

  function openGuestsInput(){
    setIsGuestsInputOpen(true)
  }
  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }
  function openGuestsModal(){
    setIsGuestsModalOpen(true)
  }
  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }
  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true)
  }
  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    console.log(email)

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()

  }
  function removeElementFromInvites(emailToRemove:string){

    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)

  }




  return (
    
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua viagem!</p>  
        </div>
        

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 w-40  outline-none"/>
            </div>

            <div className="w-px h-6 bg-zinc-800"/>

            {isGuestsInputOpen ? (
              <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
              Change Local/Date
              <Settings2 className='size-5'/>
            </button>
            ) : (
              <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              Continue
              <ArrowRight className='size-5'/>
            </button>
            )}
          </div>

          {isGuestsInputOpen && (

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

          )}

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pelo plann.er você automaticamente concorda <br />
           com nossos <a className="text-zinc-300 underline" href=""> termos de uso</a> e 
          <a className="text-zinc-300 underline" href=""> políticas de privacidade</a>.
        </p>

      </div>

      {isGuestsModalOpen &&(

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg bg-zinc-900 space-y-5 ">
            <div className='space-y-2'>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select Users </h2>
                <button>
                  <X onClick={closeGuestsModal} className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className='text-sm text-zinc-400'> The guests will receive an e-mail to confirm their participation in the trip.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              
              {emailsToInvite.map(email => {
                return (
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className="text-zinc-300">{email}</span>
                    <button type="button" onClick={() => removeElementFromInvites(email)}>
                      <X className="size-4 text-zinc-400"/>
                    </button>
                  </div>
                )
              })}
              



            </div>

            <div className="w-full h-0.5 bg-zinc-800"/>

            <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">

              <AtSign className='size-5 text-zinc-400'/> 

              <input 
                type="email"
                name="email"
                placeholder="Type e-mail guest."
                className="bg-transparent text-lg text- placeholder-zinc-400 w-40  outline-none flex-1"
              />

              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ">
                Invite
                <Plus className='size-5'/>
              </button>

            </form>

          </div>
        </div>

      )}
      
      {isConfirmTripModalOpen &&(

        
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
        
            <form onSubmit={addNewEmailToInvite} className="space-y-3">

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

      )}

      

      </div>
      
  )
}

