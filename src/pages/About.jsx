import Breadcrumbs from "../components/BreadCumbs"
function AboutMe() {


    return (

        <div className="container">
            <h1>About Me</h1>
            <Breadcrumbs/>
            <p className="parrafo">
                Hola mi nombre es Jorge me gusta construir cosas para darles uso. 

                Me encanta manejar el flujo de datos en los sistemas al igual a como se muestran, estoy en proceso 
                de especializarme por eso estoy desarrollando proyectos fullstack para saber cual camino es con el que me siento mejor 

                Por el momento he construido en tecnologias Como 
            </p>
            <ul className="lista">
                <li>Laravel con bases de datos RelacionalesMysql
                </li>
                <li>Desarrollado apis con Djgango y consumirlas con React, como en este proyecto</li>
                <li>Desarrollado apis con Djgango y construido un ambiente para facil despliegue con docker, nginx</li>
            </ul>
        </div>
    )
}

export default AboutMe