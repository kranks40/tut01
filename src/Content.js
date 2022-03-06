import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="content">
      {/* check if item.length is empty or has data. If there is data then */}
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p
          style={{
            color: "#2590D7",
            textTransform: "capitalize",
            background: "#D0F1FD",
            margin: "2rem",
            padding: " 0.5rem 1rem",
          }}
        >
          Your List is empty
        </p>
      )}
    </main>
  );
};

export default Content;
