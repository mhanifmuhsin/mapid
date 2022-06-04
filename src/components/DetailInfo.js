export default function DetailInfo({popupInfo}){
    return(
        <div style={{ textAlign: "left", width: "100px" }}>
        <div>
          <p>Nama </p>
          <p style={{ fontWeight: "bold" }}>{popupInfo.properties.Nama}</p>
        </div>
        <div>
          <p>Status </p>
          <p style={{ fontWeight: "bold" }}>
            {popupInfo.properties.Status}
          </p>
        </div>
        <div>
          <p>Angka </p>
          <p style={{ fontWeight: "bold" }}>{popupInfo.properties.Angka}</p>
        </div>
      </div>
    )
}