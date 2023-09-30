import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import MyCard from './Components/MyCard';
import Footer from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <><body>
            <Header tittle="Adopta un perrito" />
      <div className='cards-container row'>
        <MyCard 
          title='Wolfie, 4 meses.'
          img='https://source.unsplash.com/random?pug'
          message="Hola! Soy Wolfie, soy un pequeñín de 4 meses, busco un hogar amoroso que me ayude a gastar toda la energía que tengo. Soy juguetón con los gatos y los niños." 
          text='Labrador'
          color='bg-success'/>
          
        <MyCard 
          title='Gaspar, 2 años.'
          img='https://source.unsplash.com/random?shitzu'
          message="¡Hola, amigos humanos! Soy Gaspar, un perrito lleno de energía y amor en busca de un hogar para siempre. ¡Woof! Si estás buscando un compañero leal y juguetón, ¡soy tu chico! Mis colitas de felicidad nunca paran de moverse, y siempre estoy listo para la aventura." 
          text='Shitzu'
          color='bg-primary'/>

        <MyCard 
        title='Luna, 1 año.'
        img='https://source.unsplash.com/random?labrador'
        message=" ¡Hola, amigos humanos! Soy Luna, una perrita dulce y cariñosa que está lista para encontrar un hogar amoroso. Mi cola no para de moverse de felicidad cuando conozco a nuevas personas. Soy una gran compañía para cualquier persona que busque un amigo leal y afectuoso." 
        text='Labrador'
        color='bg-danger'/>

        <MyCard 
        title='Max, 5 años.'
        img='https://source.unsplash.com/random?corgi'
        message=" ¡Saludos! Soy Max, un perrito amigable y enérgico que busca un hogar lleno de diversión y aventuras. Si te gusta la actividad y disfrutas de la compañía de un compañero peludo, ¡soy tu chico! Siempre estoy listo para jugar y explorar el mundo contigo." 
        text='Corgi'
        color='bg-warning'/>
      </div>


    <footer>
            <Footer
      text='Explora nuestra galería de adopción de perros para encontar a tu compañero de vida.
      Tenemos varios perritos que esperan ansiosos un hogar para entregar todo el amor que tienen para entregar, 
      y ser parte de tu familia.
      Brinda una nueva oportunidad a uno de los peluditos que siguen esperando por ti.
      ¡No te arrepentirás! Contestaremos todas tus dudas y te acompañaremos en este hermoso proceso.' />

    </footer>

    </body>
    </>
  )
}

export default App
