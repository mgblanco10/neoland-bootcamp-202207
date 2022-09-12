import Loggito from '../utils/Loggito'
import Header from '../components/Header'
import withContext from '../utils/withContext'

function Workspaces({onLinkClick, onClick,  context: { handleFeedback } }) {
  const logger = new Loggito('workspaces')

  const handleLinkClick = event => {
    event.preventDefault()

    onLinkClick()
}
logger.info('return')

  return (  
    <div>
    <Header/>

    <button className="anchor" onClick={handleLinkClick} >Home</button>


  <div class="w-16 md:w-32 lg:w-48">
    <img class="rounded" src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"/>
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider"> Oficina super moderna </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a class="hover:underline"> CLICKEAR AQUI</a>
        </div>
        <div class="mt-2 text-sm text-slate-600"> 666E</div>
      </div>
    </div>
  </div>

  <div>
    <img class="rounded" src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"/>
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider"> Oficina super moderna </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a class="hover:underline"> Alquilar</a>
        </div>
        <div class="mt-2 text-sm text-slate-600"> 666E</div>
      </div>
    </div>
  </div>

  <div>
    <img class="rounded" src="https://ovacen.com/wp-content/uploads/2014/11/oficinas-con-arte.jpg"/>
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider"> Oficina super moderna </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a class="hover:underline"> Alquilar</a>
        </div>
        <div class="mt-2 text-sm text-slate-600"> 666E</div>
      </div>
    </div>
  </div>

  <div>
    <img class="rounded" src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"/>
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider"> Oficina super moderna </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a class="hover:underline"> Alquilar</a>
        </div>
        <div class="mt-2 text-sm text-slate-600"> 666E</div>
      </div>
    </div>
  </div>


  <div>
    <img class="rounded" src="https://i.pinimg.com/736x/e8/cc/9f/e8cc9f1cfd4528f96951586bb8bb6fa5--the-office-jam.jpg"/>
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider"> Oficina super moderna </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a class="hover:underline"> Alquilar</a>
        </div>
        <div class="mt-2 text-sm text-slate-600"> 666E</div>
      </div>

    </div>
  </div>

</div>

  )
}
export default withContext(Workspaces)
