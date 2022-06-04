import Label from "./Label";

export default function DetailInfo({ popupInfo }) {
  return (
    <div style={{ textAlign: "left", height: "100px", overflowY: "scroll" }}>
      <Label text="Nama" value={popupInfo.properties.Nama} />
      <Label text="Status" value={popupInfo.properties.Status} />
      <Label text="Angka" value={popupInfo.properties.Angka} />
    </div>
  );
}
