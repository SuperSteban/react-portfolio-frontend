function ProjectItem({item, onDelete}) {
    return (

        <div>
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} />
            <p>{item.description}</p>
            <button className="delete-button" onClick={() => onDelete(item.id)}>
                    Delete
            </button>
        </div>
    )

}


export default ProjectItem