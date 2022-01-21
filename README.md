# use-input-debounce

Simple input debounce React Hook

### Usage:

```
const Component: NextPage = () => {
  const [username, input, setUsername] = useInputDebounce("", 1000);

  return (
    <div>
      <main>
        <h1>Debounced Input</h1>

        <input
          className={styles.input}
          type="text"
          value={input}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />

        <User username={username}></User>
      </main>
    </div>
  );
};
```
