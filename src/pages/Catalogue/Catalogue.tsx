import estate from "../../static/estate.json";


const Catalogue = () => {
    return (
        <>
            {estate.map((property) => {
                return (
                    <div key={property.id}>
                        <h2>{property.title}</h2>
                        <img src={property.url_img}/>
                        <h3>{property.address}</h3>
                        <p>{property.description}</p>
                        <p>${property.price}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Catalogue