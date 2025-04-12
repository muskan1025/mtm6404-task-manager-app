import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useState } from "react";

export default function Home() {
  const { lists, addList, deleteList } = useTasks();
  const [listName, setListName] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold">Your Lists</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (listName.trim()) {
            addList(listName);
            setListName("");
          }
        }}
        className="my-4"
      >
        <input
          className="border p-2 mr-2"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          placeholder="New List Name"
        />
        <button className="bg-green-500 text-white px-4 py-2" type="submit">
          Add List
        </button>
      </form>
      <ul>
        {lists.map((list) => (
          <li key={list.id} className="my-2">
            <Link to={`/list/${list.id}`} className="text-blue-700 underline">
              {list.name}
            </Link>
            <button
              className="ml-2 text-red-500"
              onClick={() => deleteList(list.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
