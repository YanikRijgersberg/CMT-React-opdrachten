const Book = ({ title, beschrijving, img }) => {
    return ( 
    <section className="
    book">
    <img className="imgbooks" src={img} alt={title} />
    <h2>{title}</h2>
    <p>{beschrijving}</p>
    </section> 
    );
}
 
export default Book;