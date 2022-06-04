export default function Label({text,value}) {
  return (
    <div style={{ margin: 0 }}>
      <span style={{ display: "block" }}>{text} </span>
      <span style={{ fontWeight: "bold", fontSize: "14px" }}>
        {value}
      </span>
    </div>
  );
}
