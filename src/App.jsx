import { useRef, useState, useEffect } from "react";
import "./App.css";
import ItemComponent from "./ItemComponent";
import { API_URL } from "./constants";

function App() {
  const inputRef = useRef();
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    let response = await fetch(API_URL, {
      method: "GET",
    });
    let responseJson = await response.json();
    setDataList(responseJson.list);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    let response = await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    getData();
  };

  return (
    <div className="main-content">
      <input ref={inputRef} type="text" />
      <button
        onClick={async () => {
          let text = inputRef.current.value;

          let response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              value: text,
            }),
          });
          let responseJson = await response.json();
          setDataList(responseJson.list);
        }}
      >
        Save
      </button>

      <div>
        {dataList.map((el) => (
          <ItemComponent
            deleteItem={deleteItem}
            text={el.content}
            id={el.id}
          ></ItemComponent>
        ))}
      </div>
    </div>
  );
}

export default App;
