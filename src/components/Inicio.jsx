import barberia from "../assets/barberia-interior.jpg"

function Inicio() {
  return (
    <div>
        <h2>Bienvenidos a nuestra tienda online, somos BarberiaCBA!</h2>
        <h3>En nuestra página vas a encontrar todo el equipamiento profesional necesario para tu negocio</h3>
        <div><img src={barberia} alt="Imagen ilustrativa, del interior del local" /></div>
    </div>
  )
}

export default Inicio