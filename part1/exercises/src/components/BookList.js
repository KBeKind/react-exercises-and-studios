import classes from "./BookList.module.css";

export default function BookList() {
  let pageTitle = "This is our awesome book list";
  let book1 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg";
  let book2 =
    "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop";
  let book3 =
    "https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img className={classes.book} src={book1} alt="Nothing here!" />
      <img className={classes.book} src={book2} alt="Nothing here!" />
      <img className={classes.book} src={book3} alt="Nothing here!" />
    </div>
  );
}
