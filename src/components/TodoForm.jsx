import Button from "./Button";

const TodoForm = ({ setTodos }) => {
  const addTodoHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    if (!title.trim() || !body.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      body,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    e.target.reset();
  };
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  return (
    <form onSubmit={addTodoHandler} className="todoForm" type="submit">
      <label>제목</label>
      <input type="text" placeholder="제목을 입력해주세요." name="title" />
      <label>내용</label>
      <input type="text" placeholder="내용을 입력해주세요." name="body" />
      <Button>추가하기</Button>
    </form>
  );
};

export default TodoForm;
